import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const CERTIFICATIONS = [
  {
    name: 'AWS Developer Associate',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/badges/ee55b2b9-d80b-49ea-809b-0f612dad2b85/public_url',
  },
  {
    name: 'AWS Solutions Architect Associate',
    issuer: 'Amazon Web Services',
    url: 'https://www.credly.com/badges/ae53b17f-758a-4bb0-a6d7-b0b27e83d3d4/public_url',
  },
];

function Certifications() {
  return (
    <section id="certifications" className="section section--alt">
      <Reveal>
        <SectionHeader label="Verified Credentials" title="Certifications" />
      </Reveal>

      <div className="cert-grid">
        {CERTIFICATIONS.map((cert, index) => (
          <Reveal key={cert.name} delay={index * 100}>
            <a
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="cert-card"
            >
              <div className="cert-card__badge">AWS</div>
              <div>
                <h3>{cert.name}</h3>
                <p>{cert.issuer}</p>
              </div>
              <span className="cert-card__arrow">→</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
