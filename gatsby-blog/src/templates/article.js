// /** @jsx jsx */

import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import { jsx, Box } from 'theme-ui'
import Reactmarkdown from 'react-markdown'
import CodeBlock from '../components/CodeBlock'



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
      	<h1>{data.strapiBlog.title}</h1>
        <small sx={{ fontWeight: 'bold' }}>{data.strapiBlog.date}</small>
  			<Reactmarkdown 
          source={data.strapiBlog.content}
          renderers={{ code: CodeBlock }}            
          sx={{ paddingTop: 2 }}
        />                
      </Box>  
		</Layout>
	)
}


export const query = graphql`
  query ArticleTemplate($slug: String!) {
    strapiBlog(slug: {eq: $slug}) {
      id
      title
      content
      date
      slug
    }
  }
`