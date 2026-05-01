import { google } from 'googleapis';

const spreadsheetId = process.env.GOOGLE_SHEET_ID;
const sheetName = process.env.GOOGLE_SHEET_NAME;

function getServiceAccountKey() {
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64) {
    throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 environment variable.');
  }

  return JSON.parse(Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64, 'base64').toString('utf8'));
}

export function sanitize(value) {
  return String(value || '').trim();
}

async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: getServiceAccountKey(),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

async function ensureLeadSheet(sheets) {
  const spreadsheet = await sheets.spreadsheets.get({
    spreadsheetId,
    fields: 'sheets.properties.title',
  });
  const exists = spreadsheet.data.sheets?.some((sheet) => sheet.properties?.title === sheetName);

  if (exists) {
    return;
  }

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId,
    requestBody: {
      requests: [
        {
          addSheet: {
            properties: {
              title: sheetName,
              gridProperties: {
                frozenRowCount: 1,
              },
            },
          },
        },
      ],
    },
  });
}

async function ensureHeader(sheets) {
  await ensureLeadSheet(sheets);

  const headerRange = `${sheetName}!A1:D1`;
  const current = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: headerRange,
  });

  if (current.data.values?.length) {
    return;
  }

  await sheets.spreadsheets.values.update({
    spreadsheetId,
    range: headerRange,
    valueInputOption: 'RAW',
    requestBody: {
      values: [['Thời gian', 'Họ và tên', 'Số điện thoại', 'Nhu cầu']],
    },
  });
}

export async function appendLead({ name, phone, message }) {
  const sheets = await getSheetsClient();
  await ensureHeader(sheets);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:D`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [
        [
          new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Bangkok' }),
          name,
          phone,
          message,
        ],
      ],
    },
  });
}

