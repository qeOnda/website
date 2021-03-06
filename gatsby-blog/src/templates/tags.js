// /** @jsx jsx */

import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Styled from '@emotion/styled'
import Img from 'gatsby-image'
import { jsx, Grid } from 'theme-ui'
import { rhythm } from '../utils/typography'
import { Helmet } from "react-helmet"




export default function Posts({ data })  {
  return (
    <div className="application">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Sean May | {data.strapiCategorical.name}</title>
          <link rel="canonical" href="http://seanmay.dev/{data.strapiCategorical.slug}"  />
        </Helmet>  
      <Layout>
        <Grid       
          sx={{       
            maxWidth: [rhythm(27)],
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
                    gridGap: rhythm(1),                      
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
    </div>  
  )
}


export const query = graphql`
  query TagList($slug: String!) {
    allStrapiProject(filter: {categoricals: {elemMatch: {slug: {eq: $slug}}}}) {
    edges {
      node {
        title
        description        
        slug
      }
    }
  } strapiCategorical(slug: {eq: $slug}) {
    name
    slug
  }
  allStrapiBlog (
    filter: {categoricals: {elemMatch: {slug: {eq: $slug}}}}
    sort: {fields: [date] order: DESC}
  ) 
  {         
    edges {
      node {
        title              
        slug              
        description               
      }
    }
  }
} 
`