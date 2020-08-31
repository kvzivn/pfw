/** @jsx jsx */
import { useState } from 'react'
import { jsx, Link, Flex } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import Logo from '../assets/svg/logo.svg'
import Globe from '../assets/svg/globe.svg'
import MobileMenu from './MobileMenu'
import Burger from './Burger'
import { useLangDispatch, useLangState } from '../context/language-context'

const LangToggle = () => {
  const dispatch = useLangDispatch()
  const { lang } = useLangState()

  return (
    <Flex
      as="button"
      onClick={() => dispatch({ type: lang === 'en' ? 'french' : 'english' })}
      sx={{
        position: 'absolute',
        left: [2, 4, 4, '100%'],
        transform: [null, null, null, 'translateX(-150%)'],
        width: '80px',
        padding: 3,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'primary',
        fontWeight: 'heading',
        letterSpacing: 'heading',
        fontSize: 1,
        '&:focus': {
          outline: 'none',
        }
      }}
    >
      <img src={Globe} alt="globe" sx= {{ mr: 2 }}/>
      {lang === 'en' ? 'FR' : 'EN'}
    </Flex>
  )
}

export default () => {
  const [showMenu, setShowMenu] = useState(false)
  const { lang } = useLangState()

  return (
    <Flex
      as="nav"
      aria-label="Horizontal"
      role="navigation"
      sx={{
        display: 'flex',
        positive: 'relative',
        alignItems: 'center',
        justifyContent: 'space-around',
        maxWidth: '1000px',
        height: ['20px', '80px', '80px'],
        marginTop: [1, 4, 4],
        marginLeft: 'auto',
        marginRight: 'auto',
        'a': {
          minWidth: '160px',
          textAlign: 'center',
          display: ['none', 'none', 'none', 'inline-block'],
        },
        '.logo': {
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }
      }}
  >
      <Link as={GatsbyLink} to="/" variant="nav">
        {lang === 'en' ? 'Our Story' : 'Notre Histoire'}
      </Link>
      <Link sx={{ mr: '120px' }} as={GatsbyLink} to="/producers" variant="nav">
        {lang === 'en' ? 'Portfolio' : 'Portefeuille'}
      </Link>
      <Link className="logo" as={GatsbyLink} to="/">
        <img
          src={Logo}
          alt="logo"
          sx={{
            width: ['120px', '160px', '160px']
          }}
        />
      </Link>
      <Link sx={{ ml: '120px' }} as={GatsbyLink} to="/team" variant="nav">
        {lang === 'en' ? 'Our Team' : 'Notre Équipe'}
      </Link>
      <Link as={GatsbyLink} to="/contact" variant="nav">
        {lang === 'en' ? 'Connect' : 'Relier'}
      </Link>

      <LangToggle />

      <Burger showMenu={showMenu} setShowMenu={setShowMenu} />

      <MobileMenu showMenu={showMenu} />
    </Flex>
  )
}

