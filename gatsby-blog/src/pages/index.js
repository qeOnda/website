/** @jsx jsx */

import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import styled from "@emotion/styled"
import { jsx, Box, Grid } from 'theme-ui'
import { rhythm } from '../utils/typography'
import { Helmet } from "react-helmet"


export default function Home({ data })  {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sean May</title>
        <link rel="canonical" href="http://seanmay.dev" />
      </Helmet>  
      <Layout>	
        <Box
          sx={{          
            maxWidth: [rhythm(27)],
            mx: 'auto', 
            p: rhythm(1),                 
          }}
        >      
          <Hero                 
            hero={data.strapiAbout.hero}
          />                
        </Box>    
        <Box
          sx={{
            bg: 'secondary',          
            width: "100vw",
            position: "relative",
            left: "calc(-50vw + 50%)", 

          }}
        >
          <div
            sx={{
              maxWidth: [rhythm(27)],            
              mx: 'auto', 
              p: rhythm(1),
            }}
          >
            <Grid> 
              <h2 sx={{ }}>Featured Posts</h2>
              <ul
                sx={{                      
                  listStyle: 'none',
                  display: 'grid',              
                  gridTemplateColumns: [                                    
                    'repeat(1, minmax(2fr))',
                    'repeat(2, minmax(100px, 1fr))',
                  ],                
                  m: 0,
                  px: 3,
                  py: 4,          
                  gridGap: rhythm(1),        
                }}>
                {data.allStrapiProject.edges.map(post => (
                  <li key={post.node.id}
                    sx={{
                    }}>
                    <h2
                      sx={{
                        m: 0,
                      }}>
                      <Link to={`/projects/${post.node.slug}`}
                        sx={{
                          color: 'inherit',
                          textDecoration: 'none',
                          ':hover,:focus': {
                            color: 'accent',
                            textDecoration: 'underline',                        
                          }
                        }}>
                        {post.node.title}
                      </Link>
                    </h2>  
                    <small sx={{ fontWeight: 'bold', fontStyle: 'italic', fontFamily: "Open Sans"  }}>Project</small>                                                                                         
                    <p
                      sx={{
                        m: 0,
                        textAlign: 'justify',
                        textJustify: 'inter-word'
                      }}>
                      {post.node.description}
                    </p>
                    {post.node.categoricals.map(tag => (
                      <Link to={`${tag.slug}`}>
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
                  </li>
                ))}            
                {data.allStrapiBlog.edges.map(post => (
                  <li key={post.node.id}
                    sx={{

                    }}>
                    <h2
                      sx={{
                        m: 0,
                      }}>
                      <Link to={`/posts/${post.node.slug}`}
                        sx={{
                          color: 'inherit',
                          textDecoration: 'none',
                          ':hover,:focus': {
                            color: 'accent',
                            textDecoration: 'underline',                        
                          }
                        }}>
                        {post.node.title}
                      </Link>
                    </h2>     
                    <small sx={{ fontWeight: 'bold', fontStyle: 'italic', fontFamily: "Open Sans",  }}>Blog</small>                                       
                    <p
                      sx={{
                        m: 0,
                        textAlign: 'justify',
                        textJustify: 'inter-word'
                      }}>
                      {post.node.description}
                    </p>   
                    {post.node.categoricals.map(tag => (
                      <Link to={`${tag.slug}`}>
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
                  </li>
                ))}
              </ul>
            </Grid> 
          </div>  
        </Box>
      </Layout>
    </div>  
  )
}


export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiBlog(filter: { featured: { eq: true }}) {
      edges {
        node {
          id        
          title
          date
          content
          description
          slug        
          categoricals {
            name
            slug
            id
          }
        }
      }
    }
    allStrapiProject(filter: { featured: { eq: true }}) {
      edges {
        node {
          id        
          title
          date
          content
          description
          slug
          categoricals {
            name
            slug
            id
          }
        }
      }
    }
    strapiAbout(strapiId: { eq: 1 }) {
      hero
    }
  }
`
