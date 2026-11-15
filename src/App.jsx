import Header from './components/Header'

function App() {
  return (
    <div id="top">
      <Header />

      <main>
        <section className="hero">
          <div className="container hero__inner">
            <p className="eyebrow">Frontend developer in training</p>
            <h1 className="hero__title">
              Hi, My name is <span className="accent">Denis</span>.<br/>
              I build things for the web.
            </h1>
            <p className="hero__text">
              I’m learning to turn ideas into clean, responsive and accessible
              websites. Below are a few of the projects I’ve built so far.
            </p>
            <div className="hero__actions">
              <a className="btn" href="#projects">See my work</a>
              <a className="btn btn--ghost" href="#contact">Get in touch</a>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="container">
            <h2 className="section__title">Projects</h2>
            <p className="section__lead">
              A selection of things I’ve made and what I took away from them.
            </p>
            {}
          </div>
        </section>

        <section className="section section--alt" id="about">
          <div className="container about">
            <h2 className="section__title">About me</h2>
            
              <p>
                I'm Denis, and I'm studying Front End Development at Sundsgården. I enjoy
                building websites and small apps. Right now I'm learning React 
                and next I want to learn Typescript.
              </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App