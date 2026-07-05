import './Skills.css'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  
  {
    title: 'Développement Backend',
    skills: ['Java', 'Spring Boot', 'Hibernate', 'Node.js', 'Express', 'Python'],
  },
  {
    title: 'Développement Frontend',
    skills: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'HTML5/CSS3', 'Bootstrap'],
  },
  {
    title: 'Base de données',
    skills: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'],
  },
  {
    title: 'Data & IA',
    skills: ['Python', 'Pandas', 'Scikit-learn', 'NumPy','Streamlit'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Git', 'GitHub Actions', 'AWS', 'Linux'],
  },
]

const Skills = () => {
  return (
    <section id="competences" className="section section-alt skills">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Mes Compétences</h2>
            <p>Mes compétences techniques et mon niveau d'expertise</p>
          </div>
          <a href="#" className="section-link">
            Voir tout <span>→</span>
          </a>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="skills__card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="skills__card-title">{category.title}</h3>
              <div className="skills__tags">
                {category.skills.slice(0, 5).map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
                {category.skills.length > 5 && (
                  <span className="skills__more">+{category.skills.length - 5}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
