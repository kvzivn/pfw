/** @jsx jsx */
import { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Flex, Box, Heading, Text } from 'theme-ui'
import { useLangState } from '../context/language-context'

const FILTER_MAP = {
  Canadian: brand => brand.node.brandFields.location === 'canadian',
  International: brand => brand.node.brandFields.location === 'international'
}

export default () => {
  const { lang } = useLangState()
  const { allWpBrand } = useStaticQuery(graphql`
    {
      allWpBrand {
        edges {
          node {
            id
            title
            brandFields {
              englishText
              frenchText
              location
            }
          }
        }
      }
    }
  `)

  const brands = allWpBrand.edges
  const [brand, setBrand] = useState(brands[0])
  const [filter, setFilter] = useState('Canadian')

  const text = lang === 'en'
    ? brand.node.brandFields.englishText
    : brand.node.brandFields.frenchText

  const brandList = brands.filter(FILTER_MAP[filter]).map(wineBrand => (
    <Heading
      key={wineBrand.node.id}
      onClick={() => setBrand(wineBrand)}
      sx={{
        width: wineBrand.node.id === brand.node.id ? '280px' : '250px',
        marginTop: 3,
        padding: '1.25rem 1.5rem',
        background: '#131415',
        transition: 'width .2s ease-in-out',
        cursor: 'pointer',
        '&:first-of-type': {
          marginTop: 0
        }
      }}
    >
      {wineBrand.node.title}
    </Heading>
  ))

  const buttonStyles = {
    minWidth: '200px',
    px: 4,
    py: 3,
    textTransform: 'uppercase',
    letterSpacing: '.1em',
    fontWeight: 400,
    border: '1px solid #b48e59',
    cursor: 'pointer',
    '&:focus': {
      border: '1px solid #b48e59',
      outline: 'none'
    }
  }

  return (
    <section sx={{ minHeight: [0, '600px'], my: 6, mx: 6 }}>
      <Flex>
        <button
          onClick={() => setFilter('Canadian')}
          sx={{
            background: filter === 'Canadian' ? '#b48e59' : 'black',
            color: filter === 'Canadian' ? 'white' : 'primary',
            ...buttonStyles
          }}
        >
          Canadian
        </button>
        <button
          onClick={() => setFilter('International')}
          sx={{
            background: filter === 'Canadian' ? 'black' : '#b48e59',
            color: filter === 'Canadian' ? 'primary' : 'white',
            ...buttonStyles
          }}
        >
          International
        </button>
      </Flex>
      <Flex sx={{ justifyContent: 'space-between', marginTop: '60px' }}>
        <Box sx={{ width: '280px' }}>
          {brandList}
        </Box>

        <Box sx={{ flex: 1, marginLeft: 6, fontSize: 48 }}>
          <Heading sx={{ color: 'white' }}>{brand.node.title}</Heading>
          <Text>{text}</Text>
        </Box>
      </Flex>
    </section>
  )
}