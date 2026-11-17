// Portfolio page
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects'

function Portfolio() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="section__title">Portfolio</h1>
        <p className="section__lead">
          A selection of things I’ve made and what I took away from them.
        </p>

        {/* One card for each project */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio