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
        paddingTop: `1rem`,          
      }}>    
      <Header />  
      { children }
      <Footer />  
    </Box>       
  )
}