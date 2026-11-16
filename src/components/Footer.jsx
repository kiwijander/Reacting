function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container site-footer__inner">
        <div>
          <h2 className="site-footer__title">Let’s work together</h2>
          <p>Have a project in mind or just want to say hi?</p>
        </div>
        <ul className="site-footer__links">
          <li><a href="mailto:denisbajrami567@gmail.com">Email</a></li>
          <li><a href="https://github.com/kiwijander" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/denis-bajrami/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
      <p className="site-footer__copy">© {new Date().getFullYear()} Denis</p>
    </footer>
  )
}

export default Footer