/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ showMenu, setShowMenu }) => (
  <button
    aria-label="Toggle menu"
    aria-expanded={showMenu}
    onClick={() => setShowMenu(!showMenu)}
    sx={{
      display: ['flex', 'flex', 'flex', 'none'],
      position: 'absolute',
      flexDirection: 'column',
      justifyContent: 'space-around',
      right: ['25px', 5, 5, 5],
      width: '2rem',
      minHeight: '2rem',
      padding: 0,
      background: 'transparent',
      border: 'none',
      zIndex: 11,
      cursor: 'pointer',
      '&:focus': {
        outline: 'none'
      },
      'span': {
        display: 'block',
        position: 'relative',
        width: '2rem',
        height: '.25rem',
        borderRadius: '10px',
        transition: 'all .3s linear',
        backgroundColor: 'primary',
        transformOrigin: '1px',
        '&:first-of-type': {
          transform: showMenu ? 'rotate(45deg)' : 'rotate(0)'
        },
        '&:nth-of-type(2)': {
          opacity: showMenu ? 0 : 1,
          transform: showMenu ? 'translateX(20px)' : 'translateX(0)'
        },
        '&:nth-of-type(3)': {
          transform: showMenu ? 'rotate(-45deg)' : 'rotate(0)'
        }
      }
    }}
  >
    <span />
    <span />
    <span />
  </button>
)