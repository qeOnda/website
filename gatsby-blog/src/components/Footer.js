/** @jsx jsx */

import React from "react"
import { jsx } from 'theme-ui'


const footerStyle = {
	fontFamily: "Open Sans",
	fontWeight: 400,
}

export default function Footer() {
	return (
		<div
			sx={{
				maxWidth: [ '40rem'],
				mx: 'auto', 
				textAlign: 'center', 
				p: 4,
				fontSize: ["0.8rem",'1rem' ]
				
			}}
			style={footerStyle}
		>
			Built with <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer" sx={{color:'text1'}}>Gatsby</a> and <a href="https://strapi.io/" target="_blank" rel="noopener noreferrer" sx={{color:'text1'}}>Strapi</a>. Check out the code on <a href="https://github.com/qeOnda/website" target="_blank" rel="noopener noreferrer" sx={{color:'text1'}}>Github</a>.
		</div>
	)
}