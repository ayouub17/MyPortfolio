import './Certifications.css'

interface Certification {
  title: string
  issuer: string
  year: string
  description: string
  tags: string[]
  url: string
}

const certifications: Certification[] = [
  {
    title: 'Learn React Course',
    issuer: 'Codecademy',
    year: '2025',
    description: 'Formation pratique sur React couvrant la création de composants, les Hooks et le développement des interfaces utilisateur modernes et interactives.',
    tags: ['React', 'JavaScript', 'Frontend'],
    url: 'https://www.codecademy.com/profiles/java5461537199/certificates/af00e5032d0a68cc84879983f5d8333b',
  },
  {
    title: 'JavaScript And PHP Programming Complete Course',
    issuer: 'Coursera',
    year: '2025',
    description: 'Formation complète en JavaScript et PHP permettant de développer des applications web dynamiques côté client et côté serveur.',
    tags: ['JavaScript', 'PHP', 'Web Development'],
    url: 'https://www.udemy.com/certificate/UC-4350742e-e6c7-4a54-bd83-949f30199ff0/',
  },
  {
    title: 'Fundamentals of Deep Learning',
    issuer: ' Nvidia Deep Learning Institute',
    year: '2026',
    description: 'Certification portant sur les bases du Deep Learning, les réseaux de neurones et les principales techniques d\'entraînement des modèles d\'intelligence artificielle.',
    tags: ['Deep Learning', 'Neural Networks', 'AI'],
    url: 'https://learn.nvidia.com/certificates?id=7fFz8tNuT2Kce74MEkc2ig',
  }
]

const Certifications = () => {
  return (
    <section id="certifications" className="section section-alt certifications">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Mes Certifications</h2>
            <p>Mes certifications professionnelles et formations validées</p>
          </div>
          <a href="#" className="section-link">
            Voir tout <span>→</span>
          </a>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title} 
              className="certifications__card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="certifications__card-header">
                <div className="certifications__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="var(--primary)"/>
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="certifications__card-title">{cert.title}</h3>
                  <span className="certifications__card-issuer">
                    {cert.issuer} • {cert.year}
                  </span>
                </div>
              </div>
              <p className="certifications__card-description">{cert.description}</p>
              <div className="certifications__card-tags">
                {cert.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <a href={cert.url} className="certifications__card-link" target="_blank" rel="noopener noreferrer">
                Voir le certificat
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="certifications__cta">
          <a href="#" className="btn-primary">
            Voir toutes les certifications <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Certifications
