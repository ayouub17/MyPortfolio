import './Hero.css'

const Hero = () => {
  return (
    <section id="accueil" className="hero">
      <div className="container hero__container">
        <div className="hero__content animate-slide-left">
          <h1 className="hero__name">Ayoub ELHANAFI</h1>
          <p className="hero__description">
            Ingénieur Data & Software spécialisé dans la conception de pipelines de données scalables et fiables.
            Je combine Data Engineering, systèmes distribués et développement logiciel pour construire des solutions data performantes.
          </p>
          <div className="hero__actions">
            <a href="#projets" className="btn-primary">
              Voir mes projets
            </a>
            <a
              href="/CV_Ayoub_ELHANAFI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
          >
                  Voir mon CV
            </a>
          </div>
        </div>
        <div className="hero__image-wrapper animate-slide-right">
          <div className="hero__image-frame">
            <img src="/profile.jpeg" alt="Ayoub ELHANAFI" className="hero__image" />
          </div>
          <div className="hero__badge">
            <span className="hero__badge-title">Disponible pour</span>
            <span className="hero__badge-text">PFE / Freelance</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
