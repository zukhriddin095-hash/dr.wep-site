// Беморнинг аризасини Telegram'га юборади. Токен фақат серверда туради.
const hits = new Map(); // оддий тезлик чегараси: IP бўйича 1 дақиқада 3 та
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const json = (body, status = 200) => Response.json(body, { status });

export async function POST(req) {
  let b;
  try { b = await req.json(); } catch { return json({ ok: false }, 400); }

  if (b.website) return json({ ok: true }); // спам-бот тузоғи: одам бу майдонни кўрмайди

  const name = String(b.name || '').trim().slice(0, 80);
  const phone = String(b.phone || '').trim().slice(0, 30);
  const topic = String(b.topic || '').trim().slice(0, 60);
  if (!name || phone.replace(/\D/g, '').length < 9) return json({ ok: false, error: 'invalid' }, 400);

  const ip = (req.headers.get('x-forwarded-for') || 'local').split(',')[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < 60000);
  if (recent.length >= 3) return json({ ok: false, error: 'rate' }, 429);
  hits.set(ip, [...recent, now]);

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chats = (process.env.TELEGRAM_CHAT_ID || '').split(',').map((s) => s.trim()).filter(Boolean);
  if (!token || !chats.length) return json({ ok: false, error: 'not_configured' }, 500);

  const text = `🦴 <b>Янги ариза</b>\n\n👤 ${esc(name)}\n📞 ${esc(phone)}\n🩺 ${esc(topic || '—')}`;
  try {
    const results = await Promise.all(chats.map((chat_id) =>
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id, text, parse_mode: 'HTML' }),
      })
    ));
    if (!results.some((r) => r.ok)) return json({ ok: false, error: 'telegram' }, 502);
    return json({ ok: true });
  } catch {
    return json({ ok: false, error: 'network' }, 502);
  }
}
