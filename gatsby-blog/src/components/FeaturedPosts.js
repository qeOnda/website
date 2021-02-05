/** @jsx jsx */

import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import { jsx } from 'theme-ui'

const linkStyle = {
	fontFamily: "Open Sans",
	fontWeight: 400,
	fontSize: "1rem",
	color: '#9AC5C4'
}

export default function FeaturedPosts() {
	return (
		<div
			sx={{ 		
				paddingBottom: `10rem`, 				
			}}
		>
			<h1>Sean May</h1>
			<ul 
				sx={{
					listStyleType: 'none',
					display: 'flex',
					flexDirection: 'row',	
					paddingTop: '2.5rem'									
				}}
			>
				<li sx={{paddingRight: `1rem`}}><Link to="" style={linkStyle}>Email</Link></li>
				<li sx={{paddingRight: `1rem`}}><Link to="" style={linkStyle}>Github</Link></li>				
				<li sx={{paddingRight: `1rem`}}><Link to="" style={linkStyle}>Medium</Link></li>
			</ul>
		</div>
	)
}
