/** @jsx jsx */


import React from "react"
import { css } from '@emotion/react'
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

import { Box, jsx } from 'theme-ui'

const headerStyle = {
	fontFamily: "Open Sans",
	fontWeight: 400,
	fontSize: "1rem"
}

export default function Header() {
	return (
		<header		  
		  sx={{
		    maxWidth: [rhythm(27)],
          	mx: 'auto',           
		    display: 'flex',
		    alignItems: 'center',
		    variant: 'styles.header',		    
		    p: rhythm(1),		
		  }}>
		  <Link to='/'
		    sx={{
		      variant: 'styles.navlink',
		      color: 'accent',
		      // display: ["none", "inline-block" , "inline-block"],
		    }}
		    style={headerStyle}
		  >  
		    Hello
		  </Link>
		  <div sx={{ mx: 'auto' }} />		  
		  <Link to='/about'
		    sx={{
		      variant: 'styles.navlink',
		      color: 'accent',
		      	      
		    }}
		    style={headerStyle}
		   >
		    About
		  </Link>
		  <Link to='/projects'
		    sx={{
		      variant: 'styles.navlink',		      
		      color: 'accent',
		      marginLeft: '1rem'
		      // marginLeft: '1rem'
		    }}
		    style={headerStyle}
		   >
		    Projects
		  </Link>
		  <Link to='/posts'
		    sx={{
		      variant: 'styles.navlink',		      
		      color: 'accent',
		      marginLeft: '1rem'
		      // marginLeft: rhythm(1)
		    }}
		    style={headerStyle}
		   >
		    Blog
		  </Link>
		</header>

	)
}	




// <Link
// 	to="/about"
// 	sx={{color: 'secondary'}}

// >
// 	<h1>Hello</h1>
// </Link>	
// <Link
// 	to="/"
// 	sx={{color: 'text1'}}
	
// >
// 	<h1>Home</h1>
// </Link>	
// <h1>Hello</h1>
// <h1
// 	sx={{color: 'text'}}
// >
// 	Hello
// </h1>