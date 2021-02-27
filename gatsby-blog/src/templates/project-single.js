// /** @jsx jsx */

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { jsx, Box } from 'theme-ui'
import Img from 'gatsby-image'
import Reactmarkdown from 'react-markdown'
import CodeBlock from '../components/CodeBlock'
import { rhythm } from '../utils/typography'

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
        {data.strapiProject.categoricals.map(tag => (
          <Link to={`/${tag.name}`}>
            <small
              sx={{ 
                marginRight: 2,                          
                fontStyle: 'italic', 
                borderRadius: "25px",
                border: "2px solid icon",
                color: 'white', 
                display: 'inline-block', 
                bg:'icon',                         
                px: rhythm(1/4),
                textTransform: 'capitalize',
                ':hover,:focus': {
                  color: 'background',
                  textDecoration: 'underline', 
                  textTransform: 'capitalize'                      
                }
              }}
            >
              {tag.name}
            </small>                     
          </Link>                  
        ))}
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
      categoricals {
        name
      }
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