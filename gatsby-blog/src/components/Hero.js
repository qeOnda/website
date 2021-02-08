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

export default function Hero() {
	return (
		<div
			sx={{ 		
				paddingTop: `1rem`, 
				width: ['100%', '60%',],				
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
					margin: 0,
					padding: 0
					
				}}
			>
				<li sx={{paddingRight: `1rem`}}><a href="" target="_blank" rel="noopener noreferrer" style={linkStyle}>Email</a></li>
				<li sx={{paddingRight: `1rem`}}><a href="" target="_blank" rel="noopener noreferrer" style={linkStyle}>Github</a></li>				
				<li sx={{paddingRight: `1rem`}}><a href="" target="_blank" rel="noopener noreferrer" style={linkStyle}>Medium</a></li>
			</ul>
		</div>
	)
}