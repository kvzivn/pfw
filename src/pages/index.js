/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { Fade } from 'react-reveal'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Carousel from '../components/Carousel'
import { useLangState } from '../context/language-context'

export default ({ data }) => {
  const { lang } = useLangState()
  const { allWpPage } = useStaticQuery(graphql`
    {
      allWpPage {
        nodes {
          siteContent {
            home {
              englishHeroText
              frenchHeroText
              heroimage {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1440, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                  }
                }
              }
              storyheading
              storytext
              storyimage {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1440, quality: 100) {
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

  const {
    englishHeroText,
    frenchHeroText,
    heroimage,
    storyheading,
    storytext,
    storyimage
  } = allWpPage.nodes[0].siteContent.home

  return (
    <Layout>
      <Seo title="Home" description="Wine is awesome." />

      <section sx={{
        position: 'relative',
      }}>
        <div sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: '-1'
        }}>
          <Img fluid={heroimage.localFile.childImageSharp.fluid} alt="hero" sx={{
            position: 'absolute',
            top: '-112px',
          }}/>
        </div>
        <span sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <Fade delay={1000}>
            {lang === 'en' ? englishHeroText : frenchHeroText}
          </Fade>
        </span>
      </section>

      <Flex sx={{ mt: '-112px' }}>
        <Box sx={{ flex: 1, minWidth: '50%' }}>
          <Img fluid={storyimage.localFile.childImageSharp.fluid} alt="story" />
        </Box>
        <Box sx={{ flex: 1, py: '100px', px: 6 }}>
          <Heading sx={{ mb: 2 }}>{storyheading}</Heading>
          <Text sx={{ maxWidth: '480px' }}>{storytext}</Text>
        </Box>
      </Flex>

      <Carousel />
    </Layout>
  )
}
