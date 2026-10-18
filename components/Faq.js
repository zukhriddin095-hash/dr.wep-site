'use client';
import { useState } from 'react';

const items = [
  ['Қабулга нима олиб бориш керак?', 'Аввалги рентген, МРТ, эпикризлар ва ичаётган доригингиз рўйхати. Қулай кийим кийинг.'],
  ['Операция албатта керакми?', 'Йўқ. Кўп ҳолатда даво машқ, дори ва физиотерапиядан бошланади.'],
  ['Биринчи қабул қанча давом этади?', 'Тахминан 45 дақиқа. Такрорий қабул 20–30 дақиқа.'],
  ['Болаларни қабул қиласизми?', 'Ҳа, 3 ёшдан. Ота-онадан бири бола билан бирга бўлади.'],
];

export default function Faq() {
  const [open, setOpen] = useState(-1);
  return (
    <div className="fl">
      {items.map(([q, a], i) => (
        <div key={q} className={'q' + (open === i ? ' o' : '')}>
          <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>{q}</button>
          <div className="a"><div><p>{a}</p></div></div>
        </div>
      ))}
    </div>
  );
}
