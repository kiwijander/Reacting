// Home page
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <p className="eyebrow">Frontend developer in training</p>
        <h1 className="hero__title">
          Hi, My name is <span className="accent">Denis</span>.<br/>
          I build things for the web.
        </h1>
        <p className="hero__text">
          I’m learning to turn ideas into clean, responsive and accessible
          websites. Check out my portfolio to see what I’ve built so far.
        </p>
        <div className="hero__actions">
          <Link className="btn" to="/portfolio">See my work</Link>
          <a className="btn btn--ghost" href="#contact">Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default Home