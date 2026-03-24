import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

function About() {
  return (
    <div>
      <Navbar />
      <main className="about-page">
        <div className="about-page__inner">

          <section className="about-section about-section--intro">
            <h1 className="about-title">SeeFlix</h1>
            <p className="about-description">
              Seeflix est une plateforme de streaming dédiée aux passionnés de cinéma et de séries télévisées.
              Notre catalogue regroupe des milliers de titres soigneusement sélectionnés pour vous offrir
              une expérience de divertissement unique, accessible depuis n'importe quel appareil, à tout moment.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-section__title">Notre Mission</h2>
            <p className="about-section__text">
              Chez Seeflix, notre mission est de rendre le streaming accessible à tous. Nous croyons que le
              cinéma et les séries sont bien plus qu'un simple divertissement — ils connectent les cultures,
              éveillent les émotions et ouvrent des fenêtres sur d'autres mondes. C'est pourquoi nous
              travaillons chaque jour à enrichir notre catalogue avec des contenus diversifiés et de qualité.
            </p>
          </section>

          <section className="about-section">
            <h2 className="about-section__title">Notre Vision</h2>
            <p className="about-section__text">
              Nous visons à devenir la référence du streaming pour les cinéphiles exigeants. Notre vision :
              une plateforme intuitive, rapide et sans publicité, où chaque utilisateur trouve exactement
              ce qu'il cherche. Grâce à des recommandations intelligentes et une interface soignée, Seeflix
              place l'expérience utilisateur au cœur de tout ce que nous construisons.
            </p>
          </section>

          <section className="about-values">
            <h2 className="about-section__title">Nos Valeurs</h2>
            <div className="about-values__grid">
              <div className="about-value-card">
                <span className="about-value-card__icon">🎬</span>
                <h3>Qualité</h3>
                <p>Un catalogue de contenus triés sur le volet, disponibles en haute définition.</p>
              </div>
              <div className="about-value-card">
                <span className="about-value-card__icon">🌍</span>
                <h3>Diversité</h3>
                <p>Des films et séries de toutes origines, langues et genres cinématographiques.</p>
              </div>
              <div className="about-value-card">
                <span className="about-value-card__icon">⚡</span>
                <h3>Simplicité</h3>
                <p>Une interface épurée pour trouver et regarder vos contenus préférés en un instant.</p>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
