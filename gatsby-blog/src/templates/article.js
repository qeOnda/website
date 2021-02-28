// /** @jsx jsx */

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { jsx, Box } from 'theme-ui'
import Reactmarkdown from 'react-markdown'
import CodeBlock from '../components/CodeBlock'
import { rhythm } from '../utils/typography'



export default function Article({ data }) {
	return (
		<Layout>
  		<Box
        sx={{       
          maxWidth: [rhythm(27)],
          mx: 'auto', 
          p: rhythm(1),        
        }}
      >
      	<h1>{data.strapiBlog.title}</h1>
        <small sx={{ fontWeight: 'bold' }}>{data.strapiBlog.date}</small>
  			<Reactmarkdown 
          source={data.strapiBlog.content}
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
        {data.strapiBlog.categoricals.map(tag => (
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
  query ArticleTemplate($slug: String!) {
    strapiBlog(slug: {eq: $slug}) {
      id
      title
      content
      date
      slug
      categoricals {
        name
      }
    }
  }
`