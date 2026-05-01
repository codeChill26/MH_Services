import { appendLead, sanitize } from './_sheets.js';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ message: 'Method not allowed.' });
  }

  const name = sanitize(request.body?.name);
  const phone = sanitize(request.body?.phone);
  const message = sanitize(request.body?.message);

  if (!name || !phone || !message) {
    return response.status(400).json({
      message: 'Vui lòng nhập đầy đủ họ tên, số điện thoại và nhu cầu.',
    });
  }

  try {
    await appendLead({ name, phone, message });
    return response.status(201).json({ message: 'Đã lưu thông tin tư vấn vào Google Sheet.' });
  } catch (error) {
    console.error('Google Sheets write failed:', error);
    return response.status(500).json({
      message:
        'Không thể ghi vào Google Sheet. Hãy kiểm tra biến môi trường GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 và quyền Editor cho service account.',
    });
  }
}

