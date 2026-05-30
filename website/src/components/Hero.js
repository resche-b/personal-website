function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__greeting animate-fade-up">Hello, I&apos;m</p>
        <h1 className="hero__name animate-fade-up animate-delay-1">
          Resche Balaganesh
        </h1>
        <p className="hero__tagline animate-fade-up animate-delay-2">
          AI Engineer &nbsp;·&nbsp; LLM Applications &nbsp;·&nbsp; Multi-Agent Systems
        </p>

        <div className="hero__actions animate-fade-up animate-delay-3">
          <a
            className="btn btn--primary"
            href="/assets/Resche_Balaganesh_Agentic_AI_Engineer_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download CV
          </a>
          <a className="btn btn--outline" href="#projects">
            View Projects
          </a>
        </div>

        <div className="hero__socials animate-fade-up animate-delay-4">
          <a
            href="https://github.com/resche-b"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.289 0 .319.216.694.825.576C20.565 21.796 24 17.299 24 12 24 5.373 18.626 0 12 0z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/resche-balaganesh-21ba85202"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <span />
      </a>
    </section>
  );
}

export default Hero;
