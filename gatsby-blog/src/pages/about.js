/** @jsx jsx */

import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Styled from '@emotion/styled'
import Img from 'gatsby-image'
import { rhythm } from '../utils/typography'
import Reactmarkdown from 'react-markdown'
import CodeBlock from '../components/CodeBlock'

import { jsx, Box, Grid } from 'theme-ui'

export default function About({ data })  {
  return (
    <Layout>
	    <Box	    	
	    	sx={{	    	
	    		maxWidth: [rhythm(27)],
	    		mx: 'auto',
	    		p:rhythm(1),	    		
	    		display: 'flex',
	    		flexDirection: ['column','row', 'row',],
	    		paddingTop: ["", rhythm(2), rhythm(2)],	    		
	    	}}
	    >	
		    <div
		    	sx={{
		    		width: ['100%', '100%', '15%'],
		    		order: 1,
		    		display: ["inline-block" ,"none", "inline-block"],
		    		textAlign: ["left"]		    		
		    	}}
		    >
		    	<h1>Hi I'm Sean!</h1>
		    	
			    
		    </div>
		    
		    <div
		    	sx={{
		    		width: ['100%', '60%', '52.5%',],
		    		m: 2,
		    		order: [3, 3, 2], 
		    		marginLeft: [0, rhythm(1)]
		    	}}
		    >
		    	<Reactmarkdown 
		          source={data.strapiAbout.bio}
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
		             }, 
		          }}
		        />		    	
		    </div>
		   	<div
		   		sx={{
		   			width: ['60%', '40%', '32.5%',],
		   			m:[0, 0, 2],
		   			order: [2, 2, 3],		   				                
		   		}}
		   	>	
		   		<h1
		   			sx={{
		   				display: ["none", "inline-block" , "none"]	
		   			}}
		   		>
		   			Hi I'm Sean!
		   		</h1>
		   		<Img fluid={data.strapiAbout.profile.childImageSharp.fluid}/>		   	
			</div>
	   	</Box>	
    </Layout>
  )
}


export const pageQuery = graphql`  
  query AboutQuery {
    strapiAbout(strapiId: { eq: 1 }) {
      bio
      profile {
      	childImageSharp {
	            fluid(maxWidth: 200, maxHeight: 200) {
	              ...GatsbyImageSharpFluid
	            }
	        }    
      }
    }
  }
`

