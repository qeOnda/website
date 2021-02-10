/** @jsx jsx */

import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Styled from '@emotion/styled'
import Img from 'gatsby-image'
import { rhythm } from '../utils/typography'

import { jsx, Box } from 'theme-ui'

export default function About({ data })  {
  return (
    <Layout>
	    <Box	    	
	    	sx={{	    	
	    		maxWidth: ['60rem'],
	    		mx: 'auto',
	    		p:2,	    		
	    		display: 'flex',
	    		flexDirection: ['column','column', 'row',],
	    		paddingTop: ["", "", rhythm(2)],	    		
	    	}}
	    >	
		    <div
		    	sx={{
		    		width: ['100%', '100%', '15%'],
		    		order: 1
		    	}}
		    >
		    	<h1>Hi I'm Sean!</h1>
		    </div>		    	
		    <div
		    	sx={{
		    		width: ['100%', '100%', '42.5%',],
		    		m: 2,
		    		order: [3, 3, 2] 
		    	}}
		    >
		    	<p>{data.strapiAbout.bio}</p>
		    </div>
		   	<div
		   		sx={{
		   			width: ['100%', '100%', '42.5%',],
		   			m:2,
		   			order: [2, 2, 3]
		   		}}
		   	>	
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
	            fluid(maxWidth: 200, maxHeight: 400) {
	              ...GatsbyImageSharpFluid
	            }
	        }    
      }
    }
  }
`

