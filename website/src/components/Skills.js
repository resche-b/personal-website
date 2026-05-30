import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const SKILL_GROUPS = [
  {
    category: 'AI / LLM Engineering',
    skills: [
      'LangChain',
      'LangGraph',
      'LangSmith',
      'AWS Bedrock',
      'RAG',
      'Pinecone',
      'OpenAI API',
      'Multi-Agent Systems',
      'Prompt Engineering',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS',
      'Lambda',
      'DynamoDB',
      'API Gateway',
      'SQS',
      'ECS',
      'Azure',
      'Terraform',
      'AWS CDK',
      'GitHub Actions',
      'CI/CD',
      'Docker',
      'Kubernetes',
      'Dynatrace',
    ],
  },
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'Bash'],
  },
  {
    category: 'Other',
    skills: ['JIRA', 'Agile'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <SectionHeader label="What I Work With" title="Skills" />
      </Reveal>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group, groupIndex) => (
          <Reveal key={group.category} className="skills-group" delay={groupIndex * 80}>
            <h3 className="skills-group__title">{group.category}</h3>
            <div className="skills-tags">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
