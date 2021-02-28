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
          maxWidth: [rhythm(27)],
          mx: 'auto', 
          p: rhythm(1),                  
        }}
      >
      	<h1>{data.strapiProject.title}</h1>        
        <Img fluid={data.strapiProject.image.childImageSharp.fluid}/>                
        <Reactmarkdown 
          source={data.strapiProject.content}
          renderers={{ code: CodeBlock }}            
          sx={{
            paddingTop: 2,                        
            'a': {
                color: "black",    
                textDecoration: 'underline',
                textDecorationColor: "#f9b339",     
                textDecorationThickness: '20%',
                },
               'a:hover': {
                 backgroundColor: "#f9b339",
                 textDecoration: 'none',     
                 color: "white",    
             },           
          }}
        />  
        {data.strapiProject.categoricals.map(tag => (
          <Link to={`/${tag.name}`}>
            <small
              sx={{ 
                marginRight: 2,                          
                fontSize: 1,
                fontWeight: 'bold', 
                fontFamily: "Open Sans",
                borderRadius: "25px",
                border: "2px solid icon",
                color: 'white', 
                display: 'inline-block', 
                fontFamily: "Open Sans",
                bg:'icon',                         
                px: rhythm(1/4),
                textTransform: 'capitalize',
                ':hover,:focus': {
                  color: 'background',                  
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