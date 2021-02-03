/** @jsx jsx */

import React from "react"
import { Link } from "gatsby"
import { jsx } from 'theme-ui'

const linkStyle = {
	fontFamily: "Open Sans",
	fontWeight: 400,
	fontSize: "1rem",
	color: '#9AC5C4'
}

export default function hero() {
	return (
		<div
			sx={{ 		
				paddingTop: `1rem`, 				
			}}
		>
			<h1>Sean May</h1>
			<p
				sx={{
					fontSize: 24
				}}
			>
				Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
			</p>
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