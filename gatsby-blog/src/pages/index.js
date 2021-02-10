/** @jsx jsx */

import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FeaturedPosts from '../components/FeaturedPosts'
import styled from "@emotion/styled"
import { jsx, Box, Grid } from 'theme-ui'

const HeroHead = styled.header`  
`;


export default function Home({ data })  {
  return (
    <Layout>	
      <Box
        sx={{          
          maxWidth: ['60rem'],
          mx: 'auto', 
          p: 2,
          height: '100vh',  
          paddingTop: '10%',
          position: 'relative',                    
        }}
      >      
        <Hero                 
          hero={data.strapiAbout.hero}
        />                
      </Box>    
      <Box
        sx={{
          bg:'primary',
          p:2,
          width: '100%',   

        }}
      >
        <div
          sx={{
            maxWidth: ['60rem'],
            mx: 'auto', 
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
                gridGap: 3,        
              }}>
              {data.allStrapiBlog.edges.map(post => (
                <li key={post.node.id}
                  sx={{

                  }}>
                  <h3
                    sx={{
                      m: 0,
                    }}>
                    <Link to={`/posts/${post.node.slug}`}
                      sx={{
                        color: 'inherit',
                        textDecoration: 'none',
                        ':hover,:focus': {
                          color: 'text1',
                          textDecoration: 'underline',                        
                        }
                      }}>
                      {post.node.title}
                    </Link>
                  </h3>     
                  <small sx={{ fontWeight: 'bold', fontStyle: 'italic',  }}>Blog</small>                                       
                  <p
                    sx={{
                      m: 0,
                      textAlign: 'justify',
                      textJustify: 'inter-word'
                    }}>
                    {post.node.description}
                  </p>   
                  {post.node.categoricals.map(secondary => (
                    <small 
                      sx={{ 
                        marginRight: 2,                        
                        fontStyle: 'italic', 
                        color: 'white', 
                        display: 'inline-block', 
                        bg:'text1', 
                        px:1 
                      }}
                    >
                      {secondary.name}                    
                    </small>                  
                  ))}               
                </li>
              ))}
              {data.allStrapiProject.edges.map(post => (
                <li key={post.node.id}
                  sx={{
                  }}>
                  <h3
                    sx={{
                      m: 0,
                    }}>
                    <Link to={`/projects/${post.node.slug}`}
                      sx={{
                        color: 'inherit',
                        textDecoration: 'none',
                        ':hover,:focus': {
                          color: 'text1',
                          textDecoration: 'underline',                        
                        }
                      }}>
                      {post.node.title}
                    </Link>
                  </h3>  
                  <small sx={{ fontWeight: 'bold', fontStyle: 'italic',  }}>Project</small>                                                                                         
                  <p
                    sx={{
                      m: 0,
                      textAlign: 'justify',
                      textJustify: 'inter-word'
                    }}>
                    {post.node.description}
                  </p>
                  {post.node.categoricals.map(secondary => (
                    <small 
                      sx={{ 
                        marginRight: 2,                          
                        fontStyle: 'italic', 
                        color: 'white', 
                        display: 'inline-block', 
                        bg:'text1', 
                        px:1 
                      }}
                    >
                      {secondary.name}                    
                    </small>                  
                  ))}                       
                </li>
              ))}            
            </ul>
          </Grid> 
        </div>  
      </Box>
    </Layout>
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
