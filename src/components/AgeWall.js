/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useState, useEffect, useRef } from 'react'
import { Container, Flex, Box, Label, Input, Button } from 'theme-ui'
import { ageContext } from '../context/age-context'
import { Fade } from 'react-reveal'
import Logo from '../assets/svg/logo.svg'

export default () => {
  const { allWpPage } = useStaticQuery(graphql`
    {
      allWpPage {
        nodes {
          siteContent {
            ageWall {
              backgroundImage {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1440, quality: 95) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const { backgroundImage } = allWpPage.nodes[0].siteContent.ageWall

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [error, setError] = useState(false)
  const verifyRef = useRef(null)
  const re = /^[0-9\b]+$/

  const validateAge = (context, e) => {
    e.preventDefault()

    const yearsAgo = new Date().getFullYear() - 19
    const monthsAgo = new Date().getMonth() + 1
    const daysAgo = new Date().getDate()

    const date = new Date(`${year}-${month}-${day}`)
    const nineTeenYearsAgo = new Date(`${yearsAgo}-${monthsAgo}-${daysAgo}`)

    if (date <= nineTeenYearsAgo) {
      if (date.getFullYear() < 1900) {
        setError('Please enter a valid date.')
      } else {
        context.setAge()
      }
    } else {
      setError('You need to be over the age of 19 to access this website.')
    }
  }

  const monthChange = ({ target: { value }}) => {
    if (value === '' || re.test(value)) {
      setMonth(value > 12 ? 12 : value)
    }
  }

  const dayChange = ({ target: { value }}) => {
    if (value === '' || re.test(value)) {
      setDay(value > 31 ? 31 : value)
    }
  }

  const yearChange = ({ target: { value }}) => {
    const year = new Date().getFullYear()

    if (value === '' || re.test(value)) {
      setYear(value > year ? year : value)
    }
  }

  useEffect(() => {
    const dayNumbers = day.toString().length
    const monthNumbers = month.toString().length
    const yearNumbers = year.toString().length
    const filledOut = dayNumbers >= 1 && monthNumbers >= 1 && yearNumbers === 4

    verifyRef.current.disabled = !filledOut

  }, [day, month, year])

  const inputStyles = {
    textAlign: 'center',
    '&:focus': {
      borderColor: 'secondary'
    }
  }

  return (
    <Container sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100vh'
    }}>
      <div sx={{
        position: 'absolute',
        width: '100%',
        top: '0',
        zIndex: '-1'
      }}>
        <Img fluid={backgroundImage.localFile.childImageSharp.fluid} alt="hero" sx={{ height: '100vh' }} />
      </div>
      <Fade duration={2750} delay={1000}>
        <Box sx={{
          px: [2, 4, 6],
          py: [2, 4],
          textAlign: 'center',
          background: 'rgba(0,0,0,.5)',
          borderRadius: '35px'
        }}>
          <img src={Logo} alt="logo" sx={{ width: ['200px', '180px', '310px'], mx: 'auto'}}/>
          <p sx={{
            mt: '20px',
            mb: '10px',
            color: '#f94847',
            transition: 'opacity .5s ease-in-out',
            opacity: error ? 1 : 0
          }}>
            {error ? error : <span>&nbsp;</span>}
          </p>
          <p sx={{ mb: '30px', color: 'white'}}>
            Please enter your date of birth to confirm you are at least 19 years of age.
          </p>
          <ageContext.Consumer>
            {context => (
              <Flex as="form" onSubmit={e => validateAge(context, e)} sx={{
                flexWrap: 'wrap',
                maxWidth: '540px',
                justifyContent: ['center', 'space-between'],
                'label': {
                  display: 'block',
                  mt: 2,
                  mb: [2, 0],
                  textAlign: 'center'
                }
              }}>
                <Box>
                  <Input
                    type="text"
                    id="dob-month"
                    name="dob-month"
                    pattern="\d*"
                    data-min="1"
                    maxLength="2"
                    placeholder="MM"
                    inputMode="numeric"
                    value={month}
                    onChange={e => monthChange(e)}
                    sx={inputStyles}
                  />
                  <Label htmlFor="dob-month">Month</Label>
                </Box>
                <Box>
                  <Input
                    type="text"
                    id="dob-day"
                    name="dob-day"
                    pattern="\d*"
                    data-min="1"
                    maxLength="2"
                    placeholder="DD"
                    inputMode="numeric"
                    value={day}
                    onChange={e => dayChange(e)}
                    sx={inputStyles}
                  />
                  <Label htmlFor="dob-day">Day</Label>
                </Box>
                <Box>
                  <Input
                    type="text"
                    id="dob-year"
                    name="dob-year"
                    pattern="\d*"
                    maxLength="4"
                    data-min="1900"
                    data-max="2020"
                    placeholder="YYYY"
                    inputMode="numeric"
                    value={year}
                    onChange={e => yearChange(e)}
                    sx={inputStyles}
                  />
                  <Label htmlFor="dob-year">Year</Label>
                </Box>
                <Button type="submit" ref={verifyRef} disabled sx={{
                  flexBasis: '100%',
                  mx: [0, '200px'],
                  mt: ['20px', '40px'],
                  background: 'none',
                  border: '2px solid',
                  borderColor: 'primary',
                  borderRadius: '35px',
                  letterSpacing: 'body',
                  color: 'primary',
                  fontSize: '22px',
                  cursor: 'pointer',
                  transition: 'opacity .5s ease-in-out, border-color .25s ease-in-out',
                  '&:hover': {
                    borderColor: 'primary'
                  },
                  '&:focus': {
                    outline: 'none',
                    borderColor: 'primary'
                  },
                  ':disabled': {
                    cursor: 'default',
                    opacity: .35,
                    border: '2px solid transparent',
                  }
                }}>
                  Verify
                </Button>
              </Flex>
            )}
          </ageContext.Consumer>
        </Box>
      </Fade>
    </Container>
  )
}