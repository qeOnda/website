/** @jsx jsx */

import React from "react"
import { Link } from "gatsby"
import { jsx } from 'theme-ui'



const linkStyle = {
	fontFamily: "Open Sans",
	fontWeight: 400,	
	color: '#F8AB28'
}

export default function Hero( prop ) {
	return (
		<div
			sx={{ 						 
				width: ['100%', '60%',],								
			}}
		>
			<h1
				sx={{
					fontSize: ['2rem', '3rem', '3rem', '4rem', ]						
				}}
			>
				Sean May
			</h1>
			<p
				sx={{
					fontSize: ['1rem', '1.3rem', '1.3rem','1.6rem']						
				}}
			>
				{prop.hero}
			</p>
			<ul 
				sx={{
					listStyleType: 'none',
					display: 'flex',
					flexDirection: 'row',	
					margin: 0,
					padding: 0,					
					
				}}
			>				
				<li sx={{paddingRight: `1rem`, fontSize: ['0.9rem', '1.2rem'], }}><a href="https://github.com/qeOnda" target="_blank" rel="noopener noreferrer" style={linkStyle}>Github</a></li>				
				<li sx={{paddingRight: `1rem`, fontSize: ['0.9rem', '1.2rem'], }}><a href="" target="_blank" rel="noopener noreferrer" style={linkStyle}>Medium</a></li>
				<li sx={{paddingRight: `1rem`, fontSize: ['0.9rem', '1.2rem'], }}><a href="" target="_blank" rel="noopener noreferrer" style={linkStyle}>Email</a></li>
			</ul>
		</div>
	)
}

