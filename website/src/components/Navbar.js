import { useState } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';

const NAV_LINKS = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#certifications', label: 'Certifications', id: 'certifications' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

const SECTION_IDS = ['about', 'experience', 'skills', 'certifications', 'projects', 'contact'];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo" onClick={handleNavClick}>
          <span className="navbar__logo-bracket">&lt;</span>
          RB
          <span className="navbar__logo-bracket"> /&gt;</span>
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={activeSection === link.id ? 'active' : ''}
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={activeSection === link.id ? 'active' : ''}
                onClick={handleNavClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
