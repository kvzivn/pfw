/** @jsx jsx */
import { jsx, Button } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Slider from 'react-slick'
import Next from '../assets/svg/next.svg'
import Prev from '../assets/svg/prev.svg'

export default () => {
  const { allWpCarouselWine } = useStaticQuery(graphql`
    {
      allWpCarouselWine {
        edges {
          node {
            id
            title
            carouselFields {
              description
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 95) {
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

  const arrowStyles = {
    fontSize: 0,
    lineHeight: 0,
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    width: '100px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 11,
    '&:focus': {
      outline: 'none'
    },
    '&:before': {
      content: 'none'
    }
  }

  const PrevArrow = ({ onClick, className }) => (
    <button
      onClick={onClick}
      aria-label="previous"
      sx={arrowStyles}
      className={className}
      style={{ left: '25%' }}
    >
      <img src={Prev} alt="previous" />
    </button>
  )

  const NextArrow = ({ onClick, className }) => (
    <button
      onClick={onClick}
      aria-label="next"
      sx={arrowStyles}
      className={className}
      style={{ right: '25%' }}
    >
      <img src={Next} alt="next" />
    </button>
  )

  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          centerMode: false,
          slidesToShow: 2
        }
      }
    ]
  }

  return (
    <div sx={{
      width: '100%',
      my: 6,

      '.slick-track': {
        height: ['260px', '700px']
      }
    }}>
      <Slider {...settings}>
        {allWpCarouselWine.edges.map(wine => {
          const { id, title } = wine.node
          const desc = wine.node.carouselFields.description
          const image = wine.node.carouselFields.image.localFile

          return (
            <div key={id} sx={{
              position: 'relative',
              marginTop: ['40px', '110px'],
              opacity: [1, 1, .5],
              transition: 'opacity, transform',
              transitionDuration: '.5s',
              transitionTimingFunction: 'ease-in-out',
              zIndex: 1,
              '&:focus': {
                outline: 'none'
              },
              '.slick-current &': {
                opacity: 1,
                transform: ['scale(1.25)', 'scale(1.35)'],

                '.wine-info': { opacity: 1 }
              }
            }}>
              <div className="wine-info" sx={{
                position: 'absolute',
                top: 4,
                right: -5,
                minWidth: '150px',
                width: '200px',
                opacity: 0,
                transition: 'opacity, .5s ease-in-out',
                transitionDelay: '.5s',
                zIndex: '2',
              }}>
                <h3 sx={{ mb: 2 }}>{title}</h3>
                <p sx={{ fontSize: '14px' }}>{desc}</p>
                <Button sx={{ mt: 3 }}>Contact a Rep</Button>
              </div>
              <Img
                fluid={image.childImageSharp.fluid}
                className="wine-image"
                alt={title}
                sx={{
                  height: '500px'
              }}/>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}