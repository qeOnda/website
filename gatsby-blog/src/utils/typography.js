import Typography from "typography"
import sutroTheme from "typography-theme-sutro"


sutroTheme.googleFonts = [
	{
		name: "Open Sans",
		styles: ["400", "700"],
	},
	{
		name: "Merriweather",
		styles: ["400", "400i", "900", "900i"],
    },
]
sutroTheme.overrideThemeStyles = () => ({
  'a': {
    	color: "#f9b339",    
    },
   'ul,ol': {
    	marginLeft: rhythm(1.2),
    },
})

const typography = new Typography(sutroTheme)

export default typography
export const rhythm = typography.rhythm


// 'a': {
//     color: "black",    
//     textDecoration: 'underline',
//     textDecorationColor: "#f9b339",	   
//     textDecorationThickness: '20%',
//     },
//    'a:hover': {
// 	    backgroundColor: "#f9b339",
// 	    textDecoration: 'none',	    
// 	    color: "white",    
// 	}, 