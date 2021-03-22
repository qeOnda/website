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
	        <title>Sean May | Blog</title>
	        <link rel="canonical" href="http://seanmay.dev/posts" />
        </Helmet>     
	    <Layout>
		    <Grid	    	
		    	sx={{	    	
		    		maxWidth: [rhythm(27)],
		    		mx: 'auto',
		    		p:rhythm(1)       	
		    	}}
		    >	
		    	<h1>Blog</h1>
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
				      <small sx={{ fontWeight: 'bold' }}>{post.node.date}</small>
				      <p
				        sx={{
				          m: 0,
				        }}>
				        {post.node.description}
				      </p>
				      {post.node.categoricals.map(tag => (
	                    <Link to={`/${tag.name.toLowerCase()}`}>
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
	    </Layout>
	</div>    
  )
}


export const pageQ = graphql`  
  query PostsQuery {
    allStrapiBlog (
	    sort: {
				fields: [date]
	      order: DESC
	  	}
	  ) {
		  edges {
		    node {
		      id
	          title
	          date
	          slug
	          content
	          description 
	          categoricals {
				name
				id
			}
		    }
		  }
	} 
  }
`

