/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container } from 'theme-ui'
import Menu from './Menu'
import Footer from './Footer'
import AgeWall from './AgeWall'
import { useAgeState } from '../context/age-context'
import '../assets/fonts/FuturaPT.css'

export default ({ children }) => {
  const { validAge } = useAgeState()

  return validAge ? (
    <Container sx={{ position: 'relative' }}>
      <Menu />

      <main id="site-content" role="main">
        {children}
      </main>

      <Footer />
    </Container>
  ) : (
    <AgeWall />
  )
}

