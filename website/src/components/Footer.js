function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#hero" className="footer__logo">
          <span>&lt;</span>RB<span> /&gt;</span>
        </a>
        <p className="footer__copy">© {new Date().getFullYear()} Resche Balaganesh. Built with React & AWS.</p>
        <div className="footer__links">
          <a href="https://github.com/resche-b" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/resche-balaganesh-21ba85202" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
