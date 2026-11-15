function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="logo" href="#top">
          <span className="logo__dot" aria-hidden="true" />Denis</a>
        <nav aria-label="Main navigation">
          <ul className="nav">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header