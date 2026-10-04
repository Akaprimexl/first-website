export default function Elaqe() {
  return (
    <main className="inner-page">
      <section className="contact-hero">
        <span>ƏLAQƏ</span>

        <h1>
          Bir fikrin var?
          <br />
          <strong>Danışaq.</strong>
        </h1>

        <p>
          Layihə, əməkdaşlıq və ya sadəcə salam demək
          istəyirsənsə, mənimlə əlaqə saxlaya bilərsən.
        </p>
      </section>

      <section className="contact-grid">
        <a
          href="mailto:example@gmail.com"
          className="contact-card"
        >
          <span className="contact-icon">✉</span>

          <div>
            <small>EMAIL</small>
            <h3>akifaliyev@gmail.com</h3>
          </div>

          <span className="arrow">↗</span>
        </a>

        <a
          href="tel:+994500000000"
          className="contact-card"
        >
          <span className="contact-icon">☎</span>

          <div>
            <small>TELEFON</small>
            <h3>+994 70 874 74 83</h3>
          </div>

          <span className="arrow">↗</span>
        </a>

        <div className="contact-card">
          <span className="contact-icon">⌖</span>

          <div>
            <small>LOCATION</small>
            <h3>Bakı, Azərbaycan</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
