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
				maxWidth: [ '40rem'],
				mx: 'auto', 
				textAlign: 'center', 
				p: 4,
				
			}}
		>
			<div				
				style={footerStyle}
				sx={{
					fontSize: ["0.8rem",'1rem' ]
				}}
			>
				Built with <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer" sx={{color:'accent'}}>Gatsby</a> and <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer" sx={{color:'accent'}}>Strapi</a>. Check out the code on <a href="https://github.com/qeOnda/website" target="_blank" rel="noopener noreferrer" sx={{color:'accent'}}>Github</a>.
			</div>
			<div
				sx={{
					paddingTop: 1,
					display: "flex",
					justifyContent: "center",
					color: "icon",
					fontSize: ["1.2rem",'1.5rem' ]					
				}}				
			>
				<FontAwesomeIcon icon={faGithub} size="" sx={{"marginLeft":1, ":hover": {color: 'accent'}}} />		
				<FontAwesomeIcon icon={faMedium} size="" sx={{"marginLeft":1}} sx={{marginLeft: rhythm(1), ":hover": {color: 'accent'}}}/>			    
				<FontAwesomeIcon icon={faEnvelopeSquare} size="" sx={{"marginLeft":1}} sx={{marginLeft: rhythm(1), ":hover": {color: 'accent'}}}/>		    	
			</div>	
		</Box>	
	)
}


