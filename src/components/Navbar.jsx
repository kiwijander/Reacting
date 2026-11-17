// Top navbar
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="logo" to="/">
          <span className="logo__dot" aria-hidden="true" />
          Denis
        </Link>
        <nav aria-label="Main navigation">
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar