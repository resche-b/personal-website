import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const EXPERIENCE = [
  {
    id: 'bmo-software-developer',
    company: 'Bank of Montreal',
    role: 'Software Developer · Assigned Tech Lead',
    period: 'June 2025 – Present',
    highlights: [
      'Architected a stateful multi-agent QA automation system using LangGraph and AWS Bedrock, eliminating manual test authoring across the application codebase.',
      'Designed least-privilege agent tooling with scoped S3 read access, minimizing context consumption during test generation.',
      'Selected as technical lead for a critical enterprise initiative, owning environment stability across 30+ distributed systems ahead of production releases.',
      'Drove cross-team incident resolution across 3–5 engineering teams, analyzing dependencies and tracking issues to prevent environment blockers.',
    ],
  },
  {
    id: 'rbc-capstone',
    company: 'Royal Bank of Canada',
    role: 'Patent-Pending AI Evaluation Platform · Capstone',
    period: 'September 2024 – April 2025',
    highlights: [
      'Architected a serverless AWS investment evaluation platform using API Gateway, Lambda, SQS, DynamoDB, S3, and AWS CDK for parallel AI-driven scoring at scale.',
      'Built an LLM-powered decision engine using OpenAI that converts natural-language input into structured weighted scoring factors distributed via SQS.',
      'Engineered context-aware scoring with calibration references across 1,000+ investment opportunities per pipeline run.',
      'Delivered a conversational AI assistant and React heatmap that cut stakeholder analysis time by 96%; system selected by RBC to pursue a patent.',
    ],
  },
  {
    id: 'bmo-cloud-analyst',
    company: 'Bank of Montreal',
    role: 'Junior Cloud Analyst, DevOps Automation Team',
    period: 'May 2023 – August 2024',
    highlights: [
      'Engineered custom IaC modules using TypeScript, Terraform, and AWS CDK, delivering $275K in annual cost savings.',
      'Designed GitHub Actions CI/CD workflows for AWS and Azure using AWS CDK and CDKTF, supporting 20,000+ developers.',
      'Led the enterprise Artifactory SaaS migration, improving operational efficiency by 50% with no disruption to developer workflows.',
      'Delivered a new major version of BMO\'s bank-wide shared IaC modules with unit and integration testing across 80+ cloud resource modules.',
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <Reveal>
        <SectionHeader label="Explore My" title="Experience" />
      </Reveal>

      <div className="timeline">
        {EXPERIENCE.map((job, index) => (
          <Reveal key={job.id} className="timeline__item" delay={index * 100}>
            <div className="timeline__marker" />
            <div className="timeline__card">
              <div className="timeline__header">
                <div>
                  <h3>{job.role}</h3>
                  <p className="timeline__company">{job.company}</p>
                </div>
                <span className="timeline__period">{job.period}</span>
              </div>
              <ul className="timeline__list">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Experience;
