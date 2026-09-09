import './Projects.css'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  sourceUrl: string
}

const projects: Project[] = [
  {
    title: 'AI Tools Sentiment Analysis',
    description: 'Pipeline complet d\'analyse de sentiments comparant les réponses de plusieurs outils d \'IA à l\'aide de techniques de web scraping, de traitement de données et de visualisation des résultats.',
    image: '/project1.jpg',
    tags: ['NLP', 'Python', 'Sentiment Analysis','Web Scraping'],
    sourceUrl: 'https://github.com/ayouub17/ai-tools-sentiment-analysis',
  },
  {
    title: 'QCM Test Platform',
    description: 'Plateforme web de gestion de QCM permettant de créer, administrer et passer des examens interactifs avec un suivi automatisé des résultats.',
    image: '/project2.jpg',
    tags: ['Next.js', 'TypeScript', 'React', 'Node.js', 'MongoDB'],
    sourceUrl: 'https://github.com/ayouub17/QCM-Test-Platform',
  },
  {
    title: 'RETEX-Based Crisis Management Recommendation System',

    description: 'Système intelligent de recommandation basé sur les retours d’expérience (RETEX) permettant d’analyser une nouvelle crise, d’identifier les cas similaires grâce aux embeddings et à FAISS, puis de proposer des actions et recommandations pertinentes.',

    image: '/project5.jpg',

    tags: ['Python', 'NLP', 'Embeddings', 'FAISS', 'PostgreSQL', 'FastAPI'],

    sourceUrl: 'https://github.com/ayouub17/RETEX-based-crisis-management-recommendation-system',
  },
  {
  title: 'Smart Recruitment Platform',

  description: 'Plateforme de recrutement intelligent permettant d’analyser les CV des candidats, d’identifier leurs compétences, expériences et formations, puis de leur recommander les offres d’emploi les plus pertinentes.',

  image: '/project6.jpg',

  tags: ['Spring Boot','React', 'TypeScript', 'PostgreSQL', 'Python', 'NLP', 'Recommendation System'],

  sourceUrl: 'https://github.com/ayouub17/smart-recruitment-platform',

},
  {
    title: 'Shell Scripting Projects',
    description: 'Collection de scripts Shell automatisant des tâches système telles que la gestion de fichiers, l\'administration Linux et l\'exécution de processus.',
    image: '/project3.png',
    tags: ['Shell', 'Linux', 'Automation','Bash Scripting'],
    sourceUrl: 'https://github.com/ayouub17/Shell_Scripting_Projects',
  },
  {
    title: 'Mini Shell in C Building a Command Line Interpreter',
    description: 'Développement d\'un mini interpréteur de commandes en langage C capable d\'exécuter des commandes Unix, gérer les processus et manipuler les entrées/sorties.',
    image: '/project4.jpg',
    tags: ['Shell', 'Linux', 'Automation','Bash Scripting'],
    sourceUrl: 'https://github.com/ayouub17/Mini-Shell-in-C-Building-a-Command-Line-Interpreter',
  },
]

const Projects = () => {
  return (
    <section id="projets" className="section projects">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Mes Projets</h2>
            <p>Découvrez mes projets et réalisations récentes</p>
          </div>
          <a href="#" className="section-link">
            Voir tout <span>→</span>
          </a>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="projects__card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="projects__card-image">
                <img src={project.image} alt={project.title} />
                <div className="projects__card-overlay">
                  <a href={project.sourceUrl} className="btn-primary projects__card-btn">
                    Voir le projet
                  </a>
                </div>
              </div>
              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>
                <div className="projects__card-tags">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="skills__more">+{project.tags.length - 3}</span>
                  )}
                </div>
                <a href={project.sourceUrl} className="projects__source-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Code source
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__cta">
          <a href="#" className="btn-primary">
            Voir tous les projets <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
