import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const FOCUS_AREAS = [
  'Multi-Agent Systems',
  'RAG Pipelines',
  'LLM Applications',
  'AWS Serverless',
  'Infrastructure as Code',
];

const INFO_CARDS = [
  {
    label: 'Currently',
    title: 'Software Developer · Tech Lead',
    detail: 'Bank of Montreal',
  },
  {
    label: 'Education',
    title: 'B.Eng. Software Engineering',
    detail: 'Western University · 2025',
  },
  {
    label: 'Location',
    title: 'Toronto, ON',
  },
];

function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <SectionHeader label="Get To Know More" title="About Me" />
      </Reveal>

      <div className="about-layout">
        <div className="about-main">
          <Reveal delay={80}>
            <p className="about-lead">
              I build systems where AI agents, LLMs, and cloud infrastructure work together
              to solve real engineering problems at scale.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="about-text">
              Based in Toronto, I&apos;m an AI engineer with a foundation in cloud and DevOps
              from 16 months at BMO, where I engineered 80+ reusable AWS CDK modules and CI/CD
              pipelines used by over 20,000 developers. Today, I architect LangGraph multi-agent
              systems on AWS Bedrock and lead enterprise initiatives across 30+ distributed systems.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="about-text">
              My capstone at RBC, a patent-pending serverless investment evaluation platform,
              combined LLM-powered scoring, SQS-driven parallelism, and a React heatmap that cut
              stakeholder analysis time by 96%. I&apos;m drawn to agentic workflows, RAG pipelines,
              and the craft of making complex systems reliable and observable.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="about-focus">
              <h3 className="about-focus__title">What I focus on</h3>
              <div className="about-focus__tags">
                {FOCUS_AREAS.map((area) => (
                  <span key={area} className="about-focus__tag">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <aside className="about-sidebar">
          <div className="about-info-cards">
            {INFO_CARDS.map((card, index) => (
              <Reveal key={card.label} className="about-info-card" delay={200 + index * 80}>
                <span className="about-info-card__label">{card.label}</span>
                <h3>{card.title}</h3>
                {card.detail && <p>{card.detail}</p>}
              </Reveal>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default About;
