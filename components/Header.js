'use client';
import { useEffect, useState } from 'react';

const links = [['#xizmat', 'Хизматлар'], ['#haqida', 'Шифокор'], ['#qabul', 'Қабул'], ['#savol', 'Саволлар']];

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(false);
    addEventListener('keydown', k);
    return () => removeEventListener('keydown', k);
  }, []);
  return (
    <header>
      <div className="w nav">
        <a className="logo" href="#top" onClick={() => setOpen(false)}>Др. А. Каримов</a>
        <nav className={'menu' + (open ? ' on' : '')} aria-label="Меню">
          {links.map(([h, t]) => <a key={h} href={h} onClick={() => setOpen(false)}>{t}</a>)}
        </nav>
        <div className="hr">
          <a className="btn mag" href="#aloqa" onClick={() => setOpen(false)}>Ёзилиш</a>
          <button className="bg" aria-label="Меню" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
        </div>
      </div>
    </header>
  );
}
