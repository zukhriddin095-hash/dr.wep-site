import Motion from "../components/Motion";
import Header from "../components/Header";
import Faq from "../components/Faq";
import ContactForm from "../components/ContactForm";

export default function Page() {
  return (
    <>
      <div className="pre" id="pre" aria-hidden="true">
        <div>
          <b id="pn">0</b>
          <i id="pb"></i>
        </div>
      </div>
      <div className="cur" id="cur"></div>
      <Header />
      <main id="top">
        <section className="hero" id="hero">
          <div className="w hi">
            <div>
              <h1>
                <span className="ln">
                  <span>Ҳаракат —</span>
                </span>
                <span className="ln">
                  <span>оғриқсиз</span>
                </span>
                <span className="ln">
                  <span>бўлиши керак</span>
                </span>
              </h1>
              <p className="sub">
                Травматолог-ортопед. Бўғим, умуртқа ва суяк шикастлари. Аввал
                аниқ ташхис, кейин энг мулойим даво.
              </p>
              <div className="cta">
                <a className="btn mag" href="#aloqa">
                  Қабулга ёзилиш
                </a>
                <a className="btn o mag" href="tel:+998901234567">
                  +998 90 123 45 67
                </a>
              </div>
            </div>
            <div className="sk">
              <svg
                viewBox="0 0 400 640"
                role="img"
                aria-label="Скролл билан букиладиган тизза бўғими рентгени"
              >
                <defs>
                  <g
                    id="bones"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  >
                    <path d="M168 0C160 110 164 190 152 252C150 272 168 286 200 286C232 286 254 272 250 252C242 190 246 110 238 0" />
                    <path
                      d="M176 40c4 90 2 150 -4 205M230 40c-4 90 -2 150 6 205"
                      opacity=".35"
                    />
                    <g id="low">
                      <circle cx="204" cy="262" r="17" />
                      <path d="M156 296C150 308 152 322 166 328C190 336 224 336 246 328C258 322 258 308 250 296C226 304 178 304 156 296Z" />
                      <path d="M170 336C166 410 172 520 164 640M236 336C240 410 234 520 242 640" />
                      <path
                        d="M268 318C274 420 270 540 276 640M268 318c-8 4 -14 10 -14 18"
                        opacity=".7"
                      />
                      <path
                        d="M186 360c2 90 0 190 -4 280M222 360c-2 90 0 190 4 280"
                        opacity=".3"
                      />
                    </g>
                  </g>
                  <clipPath id="cp">
                    <rect id="cr" x="-40" y="0" width="480" height="0" />
                  </clipPath>
                </defs>
                <use href="#bones" stroke="#8fe3e8" opacity=".22" />
                <g clipPath="url(#cp)">
                  <use
                    href="#bones"
                    stroke="#8fe3e8"
                    style={{ filter: "drop-shadow(0 0 6px #8fe3e8)" }}
                  />
                </g>
                <rect
                  id="sl"
                  x="-40"
                  y="0"
                  width="480"
                  height="2"
                  fill="#8fe3e8"
                  opacity="0"
                />
                <g id="lb" fill="#8fe3e8" fontSize="13" opacity="0">
                  <text x="20" y="120">
                    сон суяги
                  </text>
                  <text x="262" y="200">
                    тизза бўғими
                  </text>
                  <text x="14" y="470">
                    катта болдир суяги
                  </text>
                </g>
                <g id="pn2" opacity="0">
                  <circle
                    className="pulse"
                    cx="200"
                    cy="268"
                    r="14"
                    fill="#ff6b5a"
                  />
                  <circle cx="200" cy="268" r="5" fill="#ff6b5a" />
                </g>
              </svg>
              <div className="rd">
                ҳаракат ҳажми<b id="ang">0°</b>
              </div>
            </div>
            <span className="hint">Пастга скролл қилинг</span>
          </div>
        </section>

        <div className="mq" aria-hidden="true">
          <div>
            <span>Артроз</span>
            <span>Менискус</span>
            <span>Грыжа</span>
            <span>Синиш</span>
            <span>Скалиоз</span>
            <span>Пай шикасти</span>
            <span>Яссиоёқлик</span>
            <span>Артроз</span>
            <span>Менискус</span>
            <span>Грыжа</span>
            <span>Синиш</span>
            <span>Скалиоз</span>
            <span>Пай шикасти</span>
            <span>Яссиоёқлик</span>
          </div>
        </div>

        <section className="sv" id="xizmat">
          <div className="hd">
            <h2>Нима безовта қилмоқда?</h2>
          </div>
          <div className="svs">
            <div className="track" id="trk">
              <article className="sc">
                <svg viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="10" />
                  <path d="M32 4v14M32 46v14M4 32h14M46 32h14" />
                </svg>
                <div>
                  <h3>Бўғим оғриғи</h3>
                  <p>
                    Тизза, елка, тос-сон артрози, менискус ва пай шикасти.
                    Артроскопия керак ёки йўқлигини аниқлаймиз.
                  </p>
                </div>
              </article>
              <article className="sc">
                <svg viewBox="0 0 64 64">
                  <path d="M26 4c8 8-8 14 0 22s-8 14 0 22 0 12 0 12M38 4c8 8-8 14 0 22s-8 14 0 22" />
                </svg>
                <div>
                  <h3>Умуртқа ва бел</h3>
                  <p>
                    Бел, бўйин оғриғи, грыжа, сколиоз ва қад-қомат бузилиши.
                    Машқ ва даво режаси.
                  </p>
                </div>
              </article>
              <article className="sc">
                <svg viewBox="0 0 64 64">
                  <path d="M12 52L52 12M8 44l12 12M44 8l12 12M30 30l4 4" />
                </svg>
                <div>
                  <h3>Синиш ва жароҳат</h3>
                  <p>
                    Гипс, шина, остеосинтез. Операциядан кейин тикланиш ва
                    кузатув.
                  </p>
                </div>
              </article>
              <article className="sc">
                <svg viewBox="0 0 64 64">
                  <path d="M8 40c10-24 24-28 48-24-4 24-18 36-40 34" />
                  <path d="M20 36l12-12" />
                </svg>
                <div>
                  <h3>Спорт шикастлари</h3>
                  <p>
                    Чиқиш, чўзилиш, пай узилиши. Спортга хавфсиз қайтиш графиги.
                  </p>
                </div>
              </article>
              <article className="sc">
                <svg viewBox="0 0 64 64">
                  <circle cx="32" cy="14" r="8" />
                  <path d="M32 24v16M20 32l12 8 12-8M24 56l8-16 8 16" />
                </svg>
                <div>
                  <h3>Болалар ортопедияси</h3>
                  <p>
                    Яссиоёқлик, оёқ шакли ва чаноқ-сон бўғими. 3 ёшдан қабул.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="w ab" id="haqida">
          <div className="ph">
            <img
              alt="shifokor-surati"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRltfIBHOb8drqWepm7uNt3Dd7zkt7TVW0-YFhnFusOEg&s=10"
            />
          </div>
          <div>
            <h2>Тушунтириб даволайман</h2>
            <p className="lead">
              Ташхис, режа ва хавфларни тушунарли тилда айтаман. Операция фақат
              аниқ кўрсатма бўлганда таклиф қилинади.
            </p>
            <div className="st">
              <div>
                <b data-n="12">0</b>йил тажриба
              </div>
              <div>
                <b data-n="3500">0</b>бемор
              </div>
              <div>
                <b data-n="900">0</b>артроскопия
              </div>
            </div>
            <ul className="cv" style={{ margin: 0, padding: 0 }}>
              <li>
                <time>2014</time>
                <span>Тошкент тиббиёт академияси</span>
              </li>
              <li>
                <time>2016</time>
                <span>Травматология ва ортопедия ординатураси</span>
              </li>
              <li>
                <time>2019</time>
                <span>Артроскопия бўйича хорижий курс</span>
              </li>
              <li>
                <time>Ҳозир</time>
                <span>Шаҳар клиник шифохонаси ва хусусий қабул</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="stp" id="qabul">
          <div className="w">
            <h2>Қабул босқичлари</h2>
            <ol
              className="tl"
              style={{ marginLeft: 0, listStyle: "none" }}
              id="tl"
            >
              <i id="tlf"></i>
              <li>
                <h3>Суҳбат</h3>
                <p>Шикоят, жароҳат тарихи, аввалги даво ҳақида сўраймиз.</p>
              </li>
              <li>
                <h3>Кўрик</h3>
                <p>Ҳаракат ҳажми, куч ва оғриқ нуқталарини текширамиз.</p>
              </li>
              <li>
                <h3>Текширув</h3>
                <p>Керак бўлса рентген, УТТ ёки МРТга йўлланма берамиз.</p>
              </li>
              <li>
                <h3>Ёзма режа</h3>
                <p>Даволаш босқичлари, муддат ва нархини қўлингизга берамиз.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="w fq" id="savol">
          <h2>Саволлар</h2>
          <Faq />
        </section>

        <section className="ct" id="aloqa">
          <div className="w">
            <div className="cg">
              <div>
                <h2>Оғриқни кутманг</h2>
                <dl>
                  <div>
                    <dt>Манзил</dt>
                    <dd>Тошкент, Юнусобод, Амир Темур кўчаси, 12</dd>
                  </div>
                  <div>
                    <dt>Иш вақти</dt>
                    <dd>Дш–Ша, 09:00–18:00</dd>
                  </div>
                  <div>
                    <dt>Телефон</dt>
                    <dd>
                      <a href="tel:+998901234567">+998 90 123 45 67</a>
                    </dd>
                  </div>
                </dl>
              </div>
              <ContactForm />
            </div>
            <footer>
              <span>© 2026 Др. Азиз Каримов</span>
              <span>Сайт маълумоти шифокор қабулини алмаштирмайди.</span>
            </footer>
          </div>
        </section>
      </main>
      <Motion />
    </>
  );
}
