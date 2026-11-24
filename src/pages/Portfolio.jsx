// Portfolio page
import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Popup from '../components/Popup'
import projects from '../data/projects'

function Portfolio() {
  const [showProjects, setShowProjects] = useState(false)

  // Which project was clicked
  const [selectedProject, setSelectedProject] = useState(null)

  // What the user typed in the search bar
  const [searchTerm, setSearchTerm] = useState('')

  // Runs every time the user types
  function handleSearch(event) {
    setSearchTerm(event.target.value)
    setShowProjects(true)
  }

  // Only keep the projects that match the search
  const search = searchTerm.trim().toLowerCase()
  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(search) ||
      project.tech.some((item) => item.toLowerCase().includes(search))
  )

  return (
    <section className="section">
      <div className="container">
        <h1 className="section__title">Portfolio</h1>
        <p className="section__lead">
          A selection of things I’ve made and what I took away from them.
        </p>

        <div className="portfolio-toolbar">
          {/* Click to show or hide the projects */}
          <button
            type="button"
            className="btn"
            onClick={() => setShowProjects(!showProjects)}
          >
            {showProjects ? 'Hide projects' : 'Preview projects'}
          </button>

          {/* Search bar */}
          <input
            type="search"
            className="search__input"
            placeholder="Search projects"
            aria-label="Search projects"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        {/* No results */}
        {showProjects && filteredProjects.length === 0 && (
          <p className="no-results">No projects found.</p>
        )}

        {/* Only show the cards when showProjects is true */}
        {showProjects && (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
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