/** @jsx jsx */

import React from "react"
import { css } from "@emotion/react"
import Header from './header'
import Footer from './footer'
import { rhythm } from "../utils/typography"
import { jsx, Box } from 'theme-ui'




export default function Layout({ children }) {
  return (
    <Box 
      sx={{ 
        maxWidth: `40rem`, 
        mx: `auto`,
        paddingTop: `1rem`, 
        p: 2
      }}>

      <Header 
        sx={{ 
          paddingBottom: 10
        }} 
      />  
      { children }  
    </Box>       
  )
}