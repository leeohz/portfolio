import { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)

  const handleNavClick = (e) => {
    e.preventDefault()
    const targetId = e.target.getAttribute('href').slice(1)
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setShowNavList(false)
    }
  }

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        <li className='nav__list-item'>
          <a
            href='#timeline'
            onClick={handleNavClick}
            className='link link--nav'
          >
            Parcours
          </a>
        </li>

        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={handleNavClick}
              className='link link--nav'
            >
              Réalisations
            </a>
          </li>
        ) : null}

        {skills.technical.length ? (
          <li className='nav__list-item'>
            <a
              href='#technical-skills'
              onClick={handleNavClick}
              className='link link--nav'
            >
              Compétences Techniques
            </a>
          </li>
        ) : null}

        {skills.soft.length ? (
          <li className='nav__list-item'>
            <a
              href='#soft-skills'
              onClick={handleNavClick}
              className='link link--nav'
            >
              Compétences Transverses
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={handleNavClick}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type='button'
        onClick={() => setShowNavList(!showNavList)}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
