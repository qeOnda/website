/** @jsx jsx */

import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import FeaturedPosts from '../components/FeaturedPosts'
import styled from "@emotion/styled"
import { jsx, Box, Grid } from 'theme-ui'

const HeroHead = styled.header`
  height: 100vh;
  padding-top: 2.5rem;  
`;


export default function Home({ data })  {
  return (
    <Layout>
    	<Box
        sx={{
          maxWidth: '40rem',
          mx: 'auto', 
          p: 2          
        }}
      >
        <HeroHead>
      		<Hero />
      	</HeroHead>	
      </Box>    
      <Box
        sx={{
          bg:'primary'
        }}
      >
        <div
          sx={{
            maxWidth: '40rem',
            mx: 'auto', 
            paddingTop: 4
          }}
        >
          <Grid> 
            <h2 sx={{ p:2 }}>Featured Posts</h2>
            <ul
              sx={{         
                listStyle: 'none',
                display: 'grid',
                gridGap: 4,
                gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
                paddingBottom: 4,                  
              }}>
              {data.allStrapiTest.edges.map(post => (
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
                  <small sx={{ fontWeight: 'bold' }}>{post.node.date}</small>
                  <p
                    sx={{
                      m: 0,
                      textAlign: 'justify',
                      textJustify: 'inter-word'
                    }}>
                    {post.node.description}
                  </p>
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
    allStrapiTest(filter: { Featured: { eq: true }}) {
    edges {
      node {
        id        
        title
        date
        content
        description
        slug
      }
    }
  }
  }
`



