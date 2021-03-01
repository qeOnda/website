// /** @jsx jsx */

import * as React from "react"
import { Link } from "gatsby"
import { jsx, Box } from 'theme-ui'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

  
// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Box
        sx={{       
          maxWidth: [rhythm(27)],
          mx: 'auto', 
          p: rhythm(1),          
        }}
      >
        <h1>Page not found</h1>
        <p>Hmmm something went wrong. <Link to="/">Go home</Link>.</p>
        
      </Box>
    </Layout>  
  )
}
export default NotFoundPage