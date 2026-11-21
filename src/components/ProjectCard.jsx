// Reusable card
function ProjectCard({
  name,
  screenshot,
  github,
  tech = [],
  whatItDoes,
  learned,
  role,
  challenges,
  onOpen,
}) {
  return (
    <article className="project-card" onClick={onOpen}>
      <div className="project-card__media">
        <img src={screenshot} alt={`Screenshot of ${name}`} loading="lazy" />
      </div>

      <div className="project-card__body">
        <header className="project-card__header">
          <h3 className="project-card__title">{name}</h3>
          <a
            className="btn btn--small"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on GitHub`}
            onClick={(event) => event.stopPropagation()}
          >
            GitHub ↗
          </a>
        </header>

        <ul className="tags" aria-label="Technologies used">
          {tech.map((item) => (
            <li className="tag" key={item}>
              {item}
            </li>
          ))}
        </ul>

        <dl className="project-card__details">
          <div>
            <dt>What it does</dt>
            <dd>{whatItDoes}</dd>
          </div>
          <div>
            <dt>What I learned</dt>
            <dd>{learned}</dd>
          </div>
          <div>
            <dt>My role</dt>
            <dd>{role}</dd>
          </div>
          <div>
            <dt>Challenges I solved</dt>
            <dd>{challenges}</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}

export default ProjectCard