import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">Streaming is no Longer a Luxury,<br />it's a Lifestyle</h1>
        <p className="hero__subtitle">Discover the best movies and TV shows, all in one place.</p>
        <button className="hero__cta" type="button">Get Started</button>
      </div>
    </section>
  );
}

export default Hero;
