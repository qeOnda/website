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
})

const typography = new Typography(sutroTheme)

export default typography
export const rhythm = typography.rhythm