// /** @jsx jsx */

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { jsx, Box } from 'theme-ui'
import Img from 'gatsby-image'

export default function projectSingle({ data }) {
	return (
		<Layout>
  		<Box
        sx={{       
          maxWidth: '40rem',
          mx: 'auto', 
          p:2,
          paddingTop: 4            
        }}
      >
      	<Img fluid={data.strapiProject.image.childImageSharp.fluid}/>
        <h1>{data.strapiProject.title}</h1>
        <small sx={{ fontWeight: 'bold' }}>{data.strapiProject.date}</small>
  			<p sx={{ paddingTop: 2 }} >{data.strapiProject.content}</p>        
      </Box>  
		</Layout>
	)
}


export const query = graphql`
  query ProjectTemplate($slug: String!) {
    strapiProject(slug: {eq: $slug}) {
      id
      title
      content
      date
      slug
      image {
            childImageSharp {
              fluid(maxWidth: 40) {
                ...GatsbyImageSharpFluid
              }
            }
        }
    }
  }
`