'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    const $ = (s) => document.querySelector(s);
    const pre = $('#pre');
    const off = [];
    const on = (el, ev, fn) => { el.addEventListener(ev, fn); off.push(() => el.removeEventListener(ev, fn)); };

    if (matchMedia('(prefers-reduced-motion:reduce)').matches) {
      pre.style.display = 'none';
      document.querySelectorAll('[data-n]').forEach((e) => (e.textContent = e.dataset.n));
      $('#cr').setAttribute('height', 640);
      return;
    }

    const ctx = gsap.context(() => {
      // Кириш анимацияси
      const c = { v: 0 };
      gsap.timeline({ onComplete: () => (pre.style.display = 'none') })
        .to(c, { v: 100, duration: 1.1, ease: 'power2.inOut', onUpdate: () => ($('#pn').textContent = Math.round(c.v)) })
        .to('#pb', { scaleX: 1, duration: 1.1, ease: 'power2.inOut' }, 0)
        .to(pre, { yPercent: -100, duration: 0.8, ease: 'power4.inOut' })
        .from('.ln>span', { yPercent: 110, duration: 1, stagger: 0.12, ease: 'power4.out' }, '-=.3')
        .from('.sub,.cta,.hint', { y: 24, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=.6')
        .from('.sk svg', { opacity: 0, scale: 0.94, duration: 1.2, ease: 'power2.out' }, '-=1');

      // Бош экран: рентген-скан ва тизза букилиши (скролл билан)
      const a = { v: 0 };
      gsap.timeline({ scrollTrigger: { trigger: '#hero', start: 'top top', end: () => (innerWidth < 900 ? '+=110%' : '+=150%'), scrub: 0.8, pin: true, invalidateOnRefresh: true, anticipatePin: 1 } })
        .to('#cr', { attr: { height: 640 }, duration: 1, ease: 'none' }, 0)
        .set('#sl', { opacity: 1 }, 0)
        .fromTo('#sl', { attr: { y: 0 } }, { attr: { y: 638 }, duration: 1, ease: 'none' }, 0)
        .set('#sl', { opacity: 0 }, 1)
        .to('#lb', { opacity: 1, duration: 0.3 }, 0.6)
        .to('#low', { rotation: 38, svgOrigin: '200 268', duration: 1.2, ease: 'power1.inOut' }, 1)
        .to(a, { v: 135, duration: 1.2, ease: 'power1.inOut', onUpdate: () => ($('#ang').textContent = Math.round(a.v) + '°') }, 1)
        .to('#pn2', { opacity: 1, duration: 0.3 }, 2)
        .to('.hi>div:first-child', { y: -30, duration: 2.2, ease: 'none' }, 0);

      // Хизматлар: компьютерда горизонтал скролл
      const trk = $('#trk');
      const mm = gsap.matchMedia();
      mm.add('(min-width:901px)', () => {
        gsap.to(trk, {
          x: () => -(trk.scrollWidth - innerWidth), ease: 'none',
          scrollTrigger: { trigger: '#xizmat', start: 'top top', end: () => '+=' + (trk.scrollWidth - innerWidth), pin: true, scrub: 0.8, invalidateOnRefresh: true },
        });
      });

      // Телефонда: кўрсатмалар устма-уст тушади, ҳар бири скролл билан очилади
      mm.add('(max-width:900px)', () => {
        gsap.utils.toArray('.sc').forEach((c) => gsap.from(c, { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: c, start: 'top 90%' } }));
      });

      // Рақамлар санаши
      document.querySelectorAll('[data-n]').forEach((e) => {
        const o = { v: 0 }, n = +e.dataset.n;
        ScrollTrigger.create({ trigger: e, start: 'top 85%', once: true, onEnter: () =>
          gsap.to(o, { v: n, duration: 1.8, ease: 'power2.out', onUpdate: () => (e.textContent = Math.round(o.v).toLocaleString('ru') + (n >= 900 ? '+' : '')) }) });
      });

      gsap.to('.ph span', { yPercent: -30, ease: 'none', scrollTrigger: { trigger: '.ph', scrub: true } });
      gsap.to('#tlf', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '#tl', start: 'top 70%', end: 'bottom 70%', scrub: true } });
      gsap.utils.toArray('.tl li').forEach((li) => gsap.from(li, { x: 30, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: li, start: 'top 82%' } }));
      gsap.utils.toArray('h2').forEach((t) => gsap.from(t, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: t, start: 'top 88%' } }));

      const mq = $('.mq div');
      ScrollTrigger.create({ onUpdate: (s) => (mq.style.animationDuration = Math.max(8, 30 - Math.abs(s.getVelocity()) / 120) + 's') });

      // Магнит тугмалар ва курсор (фақат сичқончада)
      if (matchMedia('(pointer:fine)').matches) {
        document.querySelectorAll('.mag').forEach((b) => {
          on(b, 'mousemove', (e) => { const r = b.getBoundingClientRect(); gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.4, duration: 0.4 }); });
          on(b, 'mouseleave', () => gsap.to(b, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1,.4)' }));
        });
        const cx = gsap.quickTo('#cur', 'x', { duration: 0.35, ease: 'power3' });
        const cy = gsap.quickTo('#cur', 'y', { duration: 0.35, ease: 'power3' });
        on(window, 'mousemove', (e) => { cx(e.clientX); cy(e.clientY); });
        document.querySelectorAll('a,button,.sc,select').forEach((t) => {
          on(t, 'mouseenter', () => gsap.to('#cur', { scale: 1.9, duration: 0.3 }));
          on(t, 'mouseleave', () => gsap.to('#cur', { scale: 1, duration: 0.3 }));
        });
      }
      off.push(() => mm.revert());
    });

    return () => { off.forEach((f) => f()); ctx.revert(); pre.style.display = ''; };
  }, []);
  return null;
}
