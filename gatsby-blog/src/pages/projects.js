// /** @jsx jsx */

import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Styled from '@emotion/styled'
import Img from 'gatsby-image'
import { jsx, Grid } from 'theme-ui'
import { rhythm } from '../utils/typography'
import { Helmet } from "react-helmet"




export default function Projects({ data })  {
  return (
	<div className="application">
	    <Helmet>
          <meta charSet="utf-8" />
          <title>Sean May | Projects</title>
          <link rel="canonical" href="http://seanmay.dev/projects" />
        </Helmet>	
	    <Layout>
		    <Grid	    	
		    	sx={{	    	
		    		maxWidth: [rhythm(27)],
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
				   	  {post.node.image.childImageSharp
				        ? <Img fluid={post.node.image.childImageSharp.fluid} />			        
				        : <video width="100%" autoPlay loop muted={true}><source src={post.node.image.publicURL} /></video>			        
				      }				      
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


export const pageQuery = graphql`  
	query ProjQuery {
		allStrapiProject (
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
					content
					description
					slug 
					categoricals {
						name
						id
					}
					image {
						extension
        				publicURL

						childImageSharp {
							fluid(maxWidth: 800) {
								...GatsbyImageSharpFluid
				            }
		    			}
					}	            
	        	}
	      	}
	    }
	}
`

//<small sx={{ fontWeight: 'bold' }}>{post.node.date}</small>
