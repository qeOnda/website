// /** @jsx jsx */

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { jsx, Box } from 'theme-ui'
import Reactmarkdown from 'react-markdown'
import CodeBlock from '../components/CodeBlock'
import { rhythm } from '../utils/typography'
import { Helmet } from "react-helmet"


export default function Article({ data }) {
	return (
  	<div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sean May | {data.strapiBlog.title}</title>
        <link rel="canonical" href="http://seanmay.dev/{data.strapiBlog.title}"  />
      </Helmet>  
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
                   borderRadius: "4px"
               }, 
            }}
          />   
          {data.strapiBlog.categoricals.map(tag => (
            <Link to={`/${tag.slug}`}>
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
    </div>  
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
        slug
      }
    }
  }
`