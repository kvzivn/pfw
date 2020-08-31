const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  letterSpacing: 'heading'
}

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ['600px', '900px', '1200px', '1800px'],
  layout: {
    container: {
      padding: [4, 0],
      maxWidth: '1440px'
    }
  },
  fonts: {
    body: 'FuturaPT, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
  },
  fontSizes: [12, 14, 16, 18, 22, 32],
  fontWeights: {
    body: 300,
    heading: 400
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: '.025em',
    heading: '.135em'
  },
  colors: {
    primary: 'white',
    secondary: '#b48d59',
    background: '#000',
    muted: '#f6f6f6'
  },
  links: {
    nav: {
      display: 'inline-block',
      fontSize: 1,
      textTransform: 'uppercase',
      letterSpacing: 'heading',
      textDecoration: 'none',
      fontWeight: 'heading',
      color: 'primary'
    },
    text: {
      textDecoration: 'underline'
    }
  },
  buttons: {
    primary: {
      padding: '4px 16px',
      fontSize: '14px',
      background: 'none',
      border: '1px solid',
      borderColor: 'primary',
      letterSpacing: '1px',
      borderRadius: '35px',
      cursor: 'pointer',
      '&:focus': {
        outline: 'none'
      }
    }
  },
  forms: {
    input: {
      outline: 'none',
      border: '2px solid',
      borderColor: 'white',
      transition: 'border-color .25s ease-in-out',
      '&:focus': {
        outline: 'none',
        borderColor: 'primary'
      }
    }
  },
  styles: {
    root: {
      fontSize: 3,
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      letterSpacing: 'body',
      color: 'primary'
    },
    h1: {
      ...heading,
      fontSize: 5
    },
    h2: {
      ...heading,
      fontSize: 4
    },
    h3: {
      ...heading,
      fontSize: 3
    },
    h4: {
      ...heading,
      fontSize: 2
    },
    h5: {
      ...heading,
      fontSize: 1
    },
    h6: {
      ...heading,
      fontSize: 0
    },
    a: {
      color: 'primary',
      ':visited': {
        color: 'primary'
      }
    }
  }
}