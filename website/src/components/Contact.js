import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <Reveal>
        <SectionHeader label="Get In Touch" title="Contact Me" />
      </Reveal>

      <Reveal delay={100}>
        <p className="contact-intro">
          Based in Toronto, ON. Open to opportunities in AI engineering, LLM applications,
          and cloud-native systems. Reach out, I&apos;d love to connect.
        </p>
      </Reveal>

      <div className="contact-grid">
        <Reveal delay={150}>
          <a href="mailto:resche26@live.com" className="contact-card">
            <div className="contact-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <span className="contact-card__label">Email</span>
              <span className="contact-card__value">resche26@live.com</span>
            </div>
          </a>
        </Reveal>

        <Reveal delay={200}>
          <a href="tel:+16475187389" className="contact-card">
            <div className="contact-card__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <span className="contact-card__label">Phone</span>
              <span className="contact-card__value">+1 (647) 518-7389</span>
            </div>
          </a>
        </Reveal>

        <Reveal delay={250}>
          <a
            href="https://www.linkedin.com/in/resche-balaganesh-21ba85202"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <div className="contact-card__icon">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <span className="contact-card__label">LinkedIn</span>
              <span className="contact-card__value">resche-balaganesh</span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
