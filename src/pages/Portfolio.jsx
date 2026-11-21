// Portfolio page
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Popup from '../components/Popup'
import projects from '../data/projects'

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section className="section">
      <div className="container">
        <h1 className="section__title">Portfolio</h1>
        <p className="section__lead">
          A selection of things I’ve made and what I took away from them.
        </p>

        {/* Click to show or hide the projects */}
        <button
          type="button"
          className="btn"
          onClick={() => setShowProjects(!showProjects)}
        >
          {showProjects ? 'Hide projects' : 'Preview projects'}
        </button>

        {/* Only show the cards when showProjects is true */}
        {showProjects && (
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                {...project}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Popup */}
      {selectedProject && (
        <Popup
          {...selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default Portfolio