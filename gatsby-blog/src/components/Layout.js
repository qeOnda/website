/** @jsx jsx */

import React from "react"
import { css } from "@emotion/react"
import Header from './Header'
import Footer from './Footer'
import { rhythm } from "../utils/typography"
import { jsx, Box } from 'theme-ui'
import "./layout.css"



export default function Layout({ children }) {
  return (
    <Box 
      sx={{ 
        mx: "auto",
        maxWidth: [rhythm(27)],
        paddingTop: rhythm(1),
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",      
      }}>    
      <Header />  
      <Box
        sx={{
          flex: 1
        }}
      >
        { children }
      </Box>
      <Footer />  
    </Box>       
  )
}