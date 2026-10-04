import Link from "next/link";
import Sayac from "./components/Sayac";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="availability">
              <span></span>
              Hazırda öyrənirəm və inkişaf edirəm
            </div>

            <h1>
              Müasir web
              <br />
              <span>təcrübələri</span> yaradıram.
            </h1>

            <p className="hero-description">
              Mən React və Next.js öyrənən frontend developerəm.
              Müasir, sürətli və istifadəçi dostu web layihələri
              hazırlamağı sevirəm.
            </p>

            <div className="hero-buttons">
              <Link href="/bloglar" className="primary-button">
                Layihəni araşdır
                <span>→</span>
              </Link>

              <Link href="/elaqe" className="secondary-button">
                Mənimlə əlaqə
              </Link>
            </div>

            <div className="hero-tech">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="code-window">
              <div className="window-top">
                <div className="window-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <span>portfolio.tsx</span>
              </div>

              <div className="code-content">
                <p>
                  <span className="purple">const</span>{" "}
                  <span className="blue">developer</span> = {"{"}
                </p>

                <p className="indent">
                  name: <span className="green">&quot;Akif&quot;</span>,
                </p>

                <p className="indent">
                  role:{" "}
                  <span className="green">
                    &quot;Frontend Developer&quot;
                  </span>
                  ,
                </p>

                <p className="indent">
                  stack: [
                  <span className="orange">&quot;React&quot;</span>,
                  <span className="orange">&quot;Next.js&quot;</span>
                  ],
                </p>

                <p className="indent">
                  passion:{" "}
                  <span className="green">
                    &quot;Building cool things&quot;
                  </span>
                </p>

                <p>{"};"}</p>

                <div className="code-cursor">▋</div>
              </div>
            </div>

            <div className="floating-card card-one">
              <strong>⚡</strong>
              <div>
                <small>Framework</small>
                <b>Next.js</b>
              </div>
            </div>

            <div className="floating-card card-two">
              <strong>✓</strong>
              <div>
                <small>Status</small>
                <b>Learning</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section">
        <div className="section-container">
          <div className="section-heading">
            <span>01 — BACARIQLAR</span>
            <h2>Öyrəndiyim texnologiyalar.</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon react-icon">⚛</div>
              <h3>React</h3>
              <p>Komponent əsaslı istifadəçi interfeysləri.</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon next-icon">N</div>
              <h3>Next.js</h3>
              <p>Modern və sürətli React framework.</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon ts-icon">TS</div>
              <h3>TypeScript</h3>
              <p>Daha təhlükəsiz və strukturlaşdırılmış kod.</p>
            </div>

            <div className="skill-card">
              <div className="skill-icon css-icon">✦</div>
              <h3>CSS</h3>
              <p>Responsive və müasir dizaynlar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTER */}
      <section className="counter-section">
        <div className="section-container">
          <div className="counter-intro">
            <span>02 — PRAKTİKA</span>
            <h2>Kiçik bir interaktivlik.</h2>
            <p>
              Bu hissə Next.js-də Client Component məntiqini
              göstərmək üçün hazırlanıb.
            </p>
          </div>

          <Sayac />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-box">
          <span>GƏLƏCƏK LAYİHƏ</span>

          <h2>
            Gəlin birlikdə
            <br />
            nəsə yaradaq.
          </h2>

          <Link href="/elaqe" className="primary-button">
            Əlaqə saxla →
          </Link>
        </div>
      </section>
    </main>
  );
}
