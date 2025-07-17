import './Header.css'
import navLinks from '../data/navLinks.json'

function Header() {
  return (
    <>
      <header>
        <a href="./">
            <h1>Georolyn Ngo</h1>
            <p>Software Engineer</p>
        </a>
        <nav>
            <ul>
                {navLinks.map(
                    ({label, href}) =>
                    (
                        <li key={href}>
                            <a href={href}>{label}</a>
                        </li>
                    )
                )}
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
