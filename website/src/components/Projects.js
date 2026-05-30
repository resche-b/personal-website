import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const PROJECTS = [
  {
    title: 'Hive: Autonomous Incident Diagnosis',
    description:
      'LangGraph ReAct agent that autonomously traverses live call graphs to diagnose distributed failures, backed by a serverless AWS control plane and a low-config Python tracing SDK.',
    image: '/assets/hive-project.png',
    tags: ['LangGraph', 'OpenAI', 'AWS Lambda', 'DynamoDB'],
    github: null,
    demo: null,
  },
  {
    title: 'Smart Trader: AI Stock Screening',
    description:
      'Production RAG pipeline on AWS ECS using LangChain and Pinecone, delivering grounded BUY, WAIT, and PASS recommendations across 10,000+ stocks with dual-retrieval architecture.',
    image: '/assets/smart-trader-project.png',
    imageLight: true,
    tags: ['RAG', 'LangChain', 'Pinecone', 'ECS'],
    github: null,
    demo: null,
  },
  {
    title: 'Automated EKS Deployment',
    description:
      'End-to-end Kubernetes deployment pipeline on AWS EKS orchestrated entirely through GitHub Actions.',
    image: '/assets/eksProject.png',
    tags: ['EKS', 'GitHub Actions', 'Kubernetes', 'AWS'],
    github: 'https://github.com/resche-b/eks-github-actions-pipeline',
    demo: null,
  },
  {
    title: 'MLOps Retraining Pipeline',
    description:
      'Automated model training and deployment pipeline using ECS Fargate, triggered via GitHub Actions.',
    image: '/assets/project-3.png',
    tags: ['Python', 'ECS Fargate', 'MLOps', 'CI/CD'],
    github: 'https://github.com/resche-b/mlops-retrain-pipeline',
    demo: 'https://d3bnlqzkqhdpm2.cloudfront.net/',
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <SectionHeader label="Browse My Recent" title="Projects" />
      </Reveal>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.title} className="project-card" delay={index * 100}>
            <div className={`project-card__image-wrap${project.imageLight ? ' project-card__image-wrap--light' : ''}`}>
              <img src={project.image} alt={project.title} loading="lazy" />
              {!project.imageLight && <div className="project-card__overlay" />}
            </div>
            <div className="project-card__body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag skill-tag--sm">
                    {tag}
                  </span>
                ))}
              </div>
              {(project.github || project.demo) && (
                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn--sm btn--outline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn--sm btn--primary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
