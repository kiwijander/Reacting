// Popup for project
function Popup({
  name,
  screenshot,
  github,
  tech = [],
  whatItDoes,
  learned,
  role,
  challenges,
  onClose,
}) {
  return (
    <div className="popup-backdrop" onClick={onClose}>
      <div
        className="popup"
        role="dialog"
        aria-modal="true"
        aria-label={name}
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
          aria-label="Close popup"
        >
          ×
        </button>

        <img
          className="popup__image"
          src={screenshot}
          alt={`Screenshot of ${name}`}
        />

        <div className="popup__body">
          <h2 className="popup__title">{name}</h2>

          {/* Tech used */}
          <ul className="tags" aria-label="Technologies used">
            {tech.map((item) => (
              <li className="tag" key={item}>
                {item}
              </li>
            ))}
          </ul>

          {/* Write-up */}
          <dl className="popup__details">
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

          {/* GitHub link */}
          <a
            className="btn"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub ↗
          </a>
        </div>
      </div>
    </div>
  )
}

export default Popup