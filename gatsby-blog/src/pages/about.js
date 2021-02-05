/** @jsx jsx */

import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import Styled from '@emotion/styled'

import { jsx, Grid } from 'theme-ui'

export default function About({ data })  {
  return (
    <Layout>
	    <Grid	    	
	    	sx={{	    	
	    		maxWidth: '40rem',
	    		mx: 'auto',
	    		p:2 	          	
	    	}}
	    >	
	    	<h1>Hi I'm Sean1</h1>
	   	</Grid>	
    </Layout>
  )
}


export const pag = graphql`  
  query In {
    allStrapiTest {
      edges {
        node {
          id
          title
          date
          content
          description
        }
      }
    }
  }
`

