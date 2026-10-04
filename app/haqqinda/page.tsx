export default function Haqqinda() {
  return (
    <main className="inner-page">
      <section className="inner-hero">
        <span>HAQQINDA</span>

        <h1>
          Kod yazmağı,
          <br />
          <strong>öyrənməyi sevirəm.</strong>
        </h1>

        <p>
          Bu sayt Next.js-in əsaslarını praktika etmək və
          müasir web development dünyasını daha dərindən
          öyrənmək üçün hazırlanıb.
        </p>
      </section>

      <section className="about-grid">
        <div className="about-card about-main">
          <span>01</span>

          <h2>Kiməm?</h2>

          <p>
            Mən frontend development sahəsində özümü inkişaf
            etdirən və yeni texnologiyalar öyrənən biriyəm.
            React və Next.js əsas diqqət etdiyim
            texnologiyalardandır.
          </p>
        </div>

        <div className="about-card">
          <span>02</span>
          <h2>Məqsədim</h2>

          <p>
            Real layihələr hazırlamaq, yaxşı kod yazmaq və
            professional frontend developer olmaq.
          </p>
        </div>

        <div className="about-card">
          <span>03</span>
          <h2>Texnologiyalar</h2>

          <div className="about-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
          </div>
        </div>
      </section>
    </main>
  );
}

