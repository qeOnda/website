/** @jsx jsx */

import React from "react"
import { Link } from "gatsby"
import { jsx } from 'theme-ui'
import { rhythm } from '../utils/typography'


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
					// fontSize: ['2.3rem', '2.5rem', '2.5rem', '2.7rem', ]					
					fontSize: ['2.2rem', '2.5rem', '2.5rem', '2.7rem', ]							
				}}
			>
				Sean May
			</h1>
			<p
				sx={{
					fontSize: ['1.1rem', '1.3rem', '1.3rem','1.4rem']						
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
				<li sx={{paddingRight: rhythm(1),  }}><a href="https://github.com/qeOnda" target="_blank" rel="noopener noreferrer" style={linkStyle}>GitHub</a></li>				
				<li sx={{paddingRight: rhythm(1),  }}><a href="https://medium.com/" target="_blank" rel="noopener noreferrer" style={linkStyle}>Medium</a></li>
				<li sx={{ }}><a href="" target="_blank" rel="noopener noreferrer" style={linkStyle}>Email</a></li>
			</ul>
		</div>
	)
}


// fontSize: ['0.9rem', '1.2rem'],
// paddingRight: `1rem`,
