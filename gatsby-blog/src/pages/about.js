/** @jsx jsx */

import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Styled from '@emotion/styled'

import { jsx, Box } from 'theme-ui'

export default function About({ data })  {
  return (
    <Layout>
	    <Box	    	
	    	sx={{	    	
	    		maxWidth: ['60rem'],
	    		mx: 'auto',
	    		p:2,	    			    	
	    	}}
	    >	
		    <div
		    	sx={{
		    		width: ['100%', '50%',],
		    	}}
		    >
		    	<h1>Hi I'm Sean!</h1>
		    	<p>{data.strapiAbout.bio}</p>
		    </div>	
	   	</Box>	
    </Layout>
  )
}


export const pageQuery = graphql`  
  query AboutQuery {
    strapiAbout(strapiId: { eq: 1 }) {
      bio
    }
  }
`

