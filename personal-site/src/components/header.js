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
		    display: 'flex',
		    alignItems: 'center',
		    variant: 'styles.header',
		    paddingTop: '1.5rem'		    
		  }}>
		  <Link to='/'
		    sx={{
		      variant: 'styles.navlink',
		      color: 'text1'
		    }}
		    style={headerStyle}
		  >  
		    Hello
		  </Link>
		  <div sx={{ mx: 'auto' }} />
		  <Link to='/blog'
		    sx={{
		      variant: 'styles.navlink',
		      p: 2,
		      color: 'text1'
		    }}
		    style={headerStyle}
		   >
		    Blog
		  </Link>
		  <Link to='/about'
		    sx={{
		      variant: 'styles.navlink',
		      color: 'text1',
		      marginLeft: '1rem'
		    }}
		    style={headerStyle}
		   >
		    About
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