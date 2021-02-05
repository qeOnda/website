// /** @jsx jsx */

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { jsx, Box } from 'theme-ui'

export default function Article({ data }) {
	return (
		<Layout>
  		<Box
        sx={{       
          maxWidth: '40rem',
          mx: 'auto', 
          p:2             
        }}
      >
      	<h1>{data.strapiTest.title}</h1>
        <small sx={{ fontWeight: 'bold' }}>{data.strapiTest.date}</small>
  			<p sx={{ paddingTop: 2 }} >{data.strapiTest.content}</p>        
      </Box>  
		</Layout>
	)
}


export const query = graphql`
  query ArticleTemplate($title: String!) {
    strapiTest(title: {eq: $title}) {
      id
      title
      content
      date
    }
  }
`