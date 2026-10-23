
function Home({ onStart }) {
  return (
    <section className="home-screen">
      <div className="hero-card">
        <p className="eyebrow">
          <span></span>
          WELCOME TO
          <span></span>
        </p>

        <h1>
          THE <span>FRONTEND</span>
        </h1>

        <p className="hero-description">
          Ready to test your skills?
          <br />
          Explore the world of web development and challenge
          your knowledge of modern frontend technologies.
        </p>

        <button
          type="button"
          className="primary-btn"
          onClick={onStart}
        >
          Start Quiz <span className="arrow">→</span>
        </button>
      </div>
    </section>
  )
}

export default Home
