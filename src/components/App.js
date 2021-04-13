import React, {useEffect, useState} from 'react'
import 'css/App.css'
import {ColourContext} from 'components/Context'
import Palette from 'components/Palette'

const App = () => {

	const [palette, setPalette] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getPaletteData()
	}, [])

	const getPaletteData = async () => {
		let response = await fetch('src/data/palettes.json')
		let data = await response.json()
		setPalette(data)
		setLoading(false)
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


	return (
		<>
			{
				(loading)
				?
					<h1>Loading...</h1>
				:
					<ColourContext.Provider value={{ palette: palette, onUpdateSwatch: updatePaletteData}}>
						<main id="app" className="app">
							<Palette />
						</main>
					</ColourContext.Provider>
			}
		</>
	)
}

export default App


