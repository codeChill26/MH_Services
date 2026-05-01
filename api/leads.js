import { appendLead, sanitize } from './_sheets.js';

const RATE_LIMIT_WINDOW_MS = 3 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const TOO_MANY_REQUESTS_MESSAGE = 'Bạn đã gửi quá nhiều yêu cầu vui lòng đợi sau 3p';
const requestLog = new Map();

function normalizePhone(value) {
  return value.replace(/\D/g, '');
}

function getClientIp(request) {
  const forwardedFor = request.headers['x-forwarded-for'];

  if (typeof forwardedFor === 'string' && forwardedFor.trim()) {
    return forwardedFor.split(',')[0].trim();
  }

  return request.socket?.remoteAddress || 'unknown';
}

function checkRateLimit(clientIp) {
  const now = Date.now();
  const recentRequests = (requestLog.get(clientIp) || []).filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterMs = RATE_LIMIT_WINDOW_MS - (now - recentRequests[0]);
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil(retryAfterMs / 1000)),
    };
  }

  recentRequests.push(now);
  requestLog.set(clientIp, recentRequests);

  return { allowed: true };
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ message: 'Method not allowed.' });
  }

  const name = sanitize(request.body?.name);
  const phone = normalizePhone(sanitize(request.body?.phone));
  const message = sanitize(request.body?.message);

  if (!name || !phone || !message) {
    return response.status(400).json({
      message: 'Vui lòng nhập đầy đủ họ tên, số điện thoại và nhu cầu.',
    });
  }

  if (phone.length !== 10) {
    return response.status(400).json({
      message: 'Số điện thoại phải đủ 10 số.',
    });
  }

  const rateLimit = checkRateLimit(getClientIp(request));

  if (!rateLimit.allowed) {
    response.setHeader('Retry-After', String(rateLimit.retryAfterSeconds));
    return response.status(429).json({ message: TOO_MANY_REQUESTS_MESSAGE });
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

