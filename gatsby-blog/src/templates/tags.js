// /** @jsx jsx */

import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Styled from '@emotion/styled'
import Img from 'gatsby-image'
import { jsx, Grid } from 'theme-ui'
import { rhythm } from '../utils/typography'

export default function Posts({ data })  {
  return (
    <Layout>
      <Grid       
        sx={{       
          maxWidth: [rhythm(30)],
          mx: 'auto',
          p:rhythm(1)         
        }}
      >
        <h1
          sx={{
            textTransform: 'capitalize'
          }}
        >
          Category: {data.strapiCategorical.name}
        </h1>
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
                  gridGap: 3                      
          }}>
          {data.allStrapiProject.edges.map(post => (
            <li key={post.node.id}>          
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
              <small sx={{ fontWeight: 'bold', fontStyle: 'italic',  }}>Project</small>                                       
              <p
                sx={{
                  m: 0,
                }}>
                {post.node.description}
              </p>
            </li>
          ))}
          {data.allStrapiBlog.edges.map(post => (
            <li key={post.node.id}>          
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
              <small sx={{ fontWeight: 'bold', fontStyle: 'italic',  }}>Blog</small>                                       
              <p
                sx={{
                  m: 0,
                }}>
                {post.node.description}
              </p>
            </li>
          ))}
        </ul>
      </Grid>

    </Layout>
  )
}


export const query = graphql`
  query TagList($name: String!) {
      allStrapiBlog (filter: {categoricals: {elemMatch: {name: {eq: $name}}}}) {
    edges {
      node {
        title
        description
        slug       
      }
    }
  } allStrapiProject(filter: {categoricals: {elemMatch: {name: {eq: $name}}}}) {
    edges {
      node {
        title
        description        
        slug
      }
    }
  } strapiCategorical(name: {eq: $name}) {
    name
  }
} 
`



 // {data.allStrapiBlog.edges.map(post => (
 //        <li key={post.node.id}>          
 //              <h2
 //                sx={{
 //                  m: 0,
 //                }}>
                
 //                <Link to={`/posts/${post.node.slug}`}
 //                  sx={{
 //                    color: 'inherit',
 //                    textDecoration: 'none',
 //                    ':hover,:focus': {
 //                      color: 'accent',
 //                      textDecoration: 'underline',
 //                    }
 //                  }}>
 //                  {post.node.title}
 //                </Link>
 //              </h2>              
 //              <p
 //                sx={{
 //                  m: 0,
 //                }}>
 //                {post.node.description}
 //              </p>
 //            </li>
 //          ))}
 //      {data.allStrapiProject.edges.map(post => (
 //        <li key={post.node.id}>          
 //              <h2
 //                sx={{
 //                  m: 0,
 //                }}>
                
 //                <Link to={`/posts/${post.node.slug}`}
 //                  sx={{
 //                    color: 'inherit',
 //                    textDecoration: 'none',
 //                    ':hover,:focus': {
 //                      color: 'accent',
 //                      textDecoration: 'underline',
 //                    }
 //                  }}>
 //                  {post.node.title}
 //                </Link>
 //              </h2>              
 //              <p
 //                sx={{
 //                  m: 0,
 //                }}>
 //                {post.node.description}
 //              </p>
 //            </li>
 //          ))}

