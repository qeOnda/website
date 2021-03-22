// /** @jsx jsx */

import * as React from "react"
import { Link } from "gatsby"
import { jsx, Box } from 'theme-ui'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'
import { Helmet } from "react-helmet"

  
// markup
const NotFoundPage = () => {
  return (
  <div className="application">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Sean May | 404</title>
          <link rel="canonical" href="http://seanmay.dev/404" />
        </Helmet>  
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
  </div>  
  )
}
export default NotFoundPage