// /** @jsx jsx */

import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Styled from '@emotion/styled'
import Img from 'gatsby-image'
import { jsx, Grid } from 'theme-ui'
import { rhythm } from '../utils/typography'

export default function Projects({ data })  {
  return (
    <Layout>
	    <Grid	    	
	    	sx={{	    	
	    		maxWidth: [rhythm(30)],
	    		mx: 'auto',
	    		p:rhythm(1), 	          	
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
                    <Link to={`/${tag.name}`}>
                      <small
                        sx={{ 
                          marginRight: 2,                          
                          fontStyle: 'italic', 
                          borderRadius: "25px",
                          border: "2px solid icon",
                          color: 'white', 
                          display: 'inline-block', 
                          bg:'icon',                         
                          px: rhythm(1/4),
                          textTransform: 'capitalize',
                          ':hover,:focus': {
                            color: 'background',
                            textDecoration: 'underline', 
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
  )
}


export const pageQuery = graphql`  
	query ProjQuery {
		allStrapiProject {
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
