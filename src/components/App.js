import React from 'react'
import 'css/App.css'
import Palette from 'components/Palette'

const App = () => {

	//const reactLogo = require(`img/react.png`).default
	const palette = [
		{
			id: 1,
			rgb: { r: 255, g: 0, b: 255 }
		}, {
			id: 2,
			rgb: { r: 0, g: 255, b: 0 }
		}, {
			id: 3,
			rgb: { r: 0, g: 255, b: 255 }
		}
		// , {
		// 	id: 4,
		// 	rgb: { r: 255, g: 255, b: 0 }
		// }
	]

	return (
		<main id="app" className="app">
			<Palette colourPalette={palette} />
		</main>
	)
}

export default App


