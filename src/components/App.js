import React, {useState} from 'react'
import 'css/App.css'
import {ColourContext} from 'components/Context'
import Palette from 'components/Palette'

const App = () => {

	console.log(`🔃 App`)


	const getPaletteData = () => {
		// Go to the database and grab a dataset and return it

		// Pretend this data was returned async
		return [
			{
				id: 1,
				rgb: { r: 255, g: 0, b: 255 }
			}, {
				id: 2,
				rgb: { r: 0, g: 255, b: 0 }
			}, {
				id: 3,
				rgb: { r: 0, g: 255, b: 255 }
			}, {
				id: 4,
				rgb: { r: 255, g: 255, b: 0 }
			}
		]
	}

	const updatePaletteData = (whichSwatch, whatColor) => {
		// Update the data in the database (faking it for now)

		// Send this update to the database (fake)
		let theUpdatedData = [...palette]  // Duplicate the data (don't mutate data!)
		theUpdatedData.find((s) => s.id === whichSwatch).rgb = {...whatColor}

		// Recall the entire dataset from the database and update "palette" (fake)
		palette = [...theUpdatedData]
		// setPalette([...theUpdatedData])

		console.log(`updatePaletteData(${JSON.stringify(palette)})`)
		return true
	}

	// Go get some data from the database
	let palette = getPaletteData()
	// let [palette, setPalette] = useState(getPaletteData())
	

	return (
		<ColourContext.Provider value={{ palette: palette, onUpdateSwatch: updatePaletteData}}>
			<main id="app" className="app">
				<Palette />
			</main>
		</ColourContext.Provider>
	)
}

export default App


