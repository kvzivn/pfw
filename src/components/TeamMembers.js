/** @jsx jsx */
import { useStaticQuery, graphql } from 'gatsby'
import { jsx, Grid, Card, Heading, Text } from 'theme-ui'
import Img from 'gatsby-image'

export default () => {
  const { allWpTeamMember } = useStaticQuery(graphql`
    {
      allWpTeamMember {
        edges {
          node {
            id
            title
            profileFields {
              bio
              order
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 95) {
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

  const teamMembers = allWpTeamMember.edges.sort((a, b) => (
    a.node.profileFields.order - b.node.profileFields.order
  ))

  return (
    <section sx={{ my: 6 }}>
      <Grid gap={2} columns={'1fr 1fr 1fr 1fr'} width={100}>
        {teamMembers.map(teamMember => {
          const { id, title: name } = teamMember.node
          const bio = teamMember.node.profileFields.bio
          const image = teamMember.node.profileFields.image.localFile

          return (
            <Card key={id} sx={{
              maxWidth: '200px',
              color: 'primary',
              p: 4,
              m: 2,
              textAlign: 'center',
              fontFamily: 'body',
              boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)',
            }}>
              <Heading>{name}</Heading>
              <Text>{bio}</Text>
              <Img fluid={image.childImageSharp.fluid} alt={name} />
            </Card>
          )
        })}
      </Grid>
    </section>
  )
}
