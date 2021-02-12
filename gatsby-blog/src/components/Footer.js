/** @jsx jsx */

import React from "react"
import { jsx, Box } from 'theme-ui'
import { faMedium, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { rhythm } from '../utils/typography'

const footerStyle = {
	fontFamily: "Open Sans",
	fontWeight: 400,
}


export default function Footer() {
	return (
		<Box
			sx={{
				maxWidth: [rhythm(30)],
				mx: 'auto', 
				textAlign: 'center', 
				p: rhythm(1)
				
			}}
		>
			<div				
				style={footerStyle}
				sx={{
					// fontSize: ["0.8rem",'1rem' ]
				}}
			>
				Built with <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer" sx={{color:'accent'}}>Gatsby</a> and <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer" sx={{color:'accent'}}>Strapi</a>. Check out the code on <a href="https://github.com/qeOnda/website" target="_blank" rel="noopener noreferrer" sx={{color:'accent'}}>Github</a>.
			</div>
			<div
				sx={{
					
					display: "flex",
					justifyContent: "center",					
					fontSize: ['1.5rem' ]					
				}}				
			>
				<a href="https://github.com/qeOnda" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faGithub} size="" sx={{color: "icon", ":hover": {color: 'accent'}}} />		
				</a>
				<a href="https://medium.com/" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faMedium} size="" sx={{marginLeft: rhythm(1), color: "icon", ":hover": {color: 'accent'}}}/>			    
				</a>
				<a href="" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faEnvelopeSquare} size="" sx={{marginLeft: rhythm(1), color: "icon", ":hover": {color: 'accent'}}}/>		    	
				</a>
			</div>	
		</Box>	
	)
}


