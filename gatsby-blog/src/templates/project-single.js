// /** @jsx jsx */

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { jsx, Box } from 'theme-ui'
import Img from 'gatsby-image'
import Reactmarkdown from 'react-markdown'
import CodeBlock from '../components/CodeBlock'

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
        <Reactmarkdown 
          source={data.strapiProject.content}
          renderers={{ code: CodeBlock }}            
          sx={{ paddingTop: 2 }}
        />  
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