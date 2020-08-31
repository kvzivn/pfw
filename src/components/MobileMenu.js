/** @jsx jsx */
import { jsx, Link } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import { useLangState } from '../context/language-context'

export default ({ showMenu }) => {
  const { lang } = useLangState()
  const tabIndex = showMenu ? 0 : -1

  return (
    <nav aria-hidden={!showMenu} sx={{
      position: 'absolute',
      display: showMenu ? 'flex' : 'none',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      top: '0',
      left: '0',
      right: '0',
      height: '100vh',
      background: 'black',
      zIndex: 10,
      'a': {
        display: 'inline-block',
        paddingTop: '1rem',
        paddingbottom: '1rem',
        fontSize: '1.1rem',
        fontWeight: '900',
        letterSpacing: '.15em',
        textTransform: 'uppercase',
        color: 'primary',
        textDecoration: 'none',
        '&:focus': {
          outline: 'none',
          color: 'primary'
        }
      }
    }}>
      <Link as={GatsbyLink} to="/" variant="nav" tabIndex={tabIndex}>
        {lang === 'en' ? 'Our Story' : 'Notre Histoire'}
      </Link>
      <Link as={GatsbyLink} to="/producers" variant="nav" tabIndex={tabIndex}>
        {lang === 'en' ? 'Portfolio' : 'Portefeuille'}
      </Link>
      <Link as={GatsbyLink} to="/team" variant="nav" tabIndex={tabIndex}>
        {lang === 'en' ? 'Our Team' : 'Notre Équipe'}
      </Link>
      <Link as={GatsbyLink} to="/contact" variant="nav" tabIndex={tabIndex}>
        {lang === 'en' ? 'Connect' : 'Relier'}
      </Link>
    </nav>
  )
}