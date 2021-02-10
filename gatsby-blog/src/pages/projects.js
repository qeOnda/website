// /** @jsx jsx */

import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Styled from '@emotion/styled'
import Img from 'gatsby-image'
import { jsx, Grid } from 'theme-ui'

export default function Projects({ data })  {
  return (
    <Layout>
	    <Grid	    	
	    	sx={{	    	
	    		maxWidth: ['60rem'],
	    		mx: 'auto',
	    		p:2 	          	
	    	}}
	    >	
	    	<h1>Projects</h1>	    	
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
			    <li key={post.node.id}
			      sx={{
			      }}>
			   
			      <Img fluid={post.node.image.childImageSharp.fluid}/>
			      <h2
			        sx={{
			          m: 0,
			          paddingTop: 3
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
			      </h2>
			      <small sx={{ fontWeight: 'bold' }}>{post.node.date}</small>
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


export const pageQuery = graphql`  
  query Inde {
    allStrapiProject {
      edges {
        node {
          id
          title
          date
          content
          description
          slug 
          image {
	          childImageSharp {
	            fluid(maxWidth: 200) {
	              ...GatsbyImageSharpFluid
	            }
	          }
	        }
	              
        }
      }
    }
  }
`
