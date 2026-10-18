'use client';
import { useRef, useState } from 'react';

export default function ContactForm() {
  const [state, setState] = useState('idle'); // idle | sending | sent | error
  const name = useRef(null);
  const phone = useRef(null);
  const topic = useRef(null);
  const trap = useRef(null);

  async function onSubmit(e) {
    e.preventDefault();
    const n = name.current.value.trim();
    const p = phone.current.value.replace(/\D/g, '');
    if (!n) return name.current.focus();
    if (p.length < 9) return phone.current.focus();
    setState('sending');
    try {
      const r = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: n, phone: phone.current.value, topic: topic.current.value, website: trap.current.value }),
      });
      setState(r.ok ? 'sent' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'sent') return <p className="ok" role="status" style={{ display: 'block' }}>Қабул қилинди. 30 дақиқа ичида қўнғироқ қиламиз.</p>;

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="f"><input id="n" ref={name} placeholder=" " autoComplete="name" required /><label htmlFor="n">Исмингиз</label></div>
      <div className="f"><input id="p" ref={phone} type="tel" inputMode="tel" placeholder=" " autoComplete="tel" required /><label htmlFor="p">Телефон рақамингиз</label></div>
      <div className="f">
        <select id="s" ref={topic} defaultValue="Бўғим оғриғи">
          <option>Бўғим оғриғи</option><option>Умуртқа оғриғи</option><option>Жароҳат ёки синиш</option><option>Бола ортопедияси</option>
        </select>
        <label htmlFor="s">Муаммо тури</label>
      </div>
      <input ref={trap} name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="trap" />
      <button className="btn mag" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Юборилмоқда…' : 'Қабулга ёзилиш'}</button>
      {state === 'error' && <p className="err" role="alert">Юборилмади. Илтимос, +998 90 123 45 67 рақамига қўнғироқ қилинг.</p>}
    </form>
  );
}
