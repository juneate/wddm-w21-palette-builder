import React, {useEffect, useState} from 'react'
import firebase from 'util/firebase'
import 'css/App.css'
import {ColourContext} from 'components/Context'
import Palette from 'components/Palette'

const App = () => {

	const [palette, setPalette] = useState([])
	const [loading, setLoading] = useState(true)
	const db = firebase.firestore()

	useEffect(() => {
		db.collection(`palettes`).get().then(
			(snapshot) => {

				// const paletteData = [] // An empty array
				// snapshot.docs.forEach(doc => {
				// 	const record = doc.data() // Object
				// 	paletteData.push(record) // Push the object onto the end of the Array
				// })
				// setPalette(paletteData)

				// Update the state (re-render)
				setPalette(snapshot.docs.reduce((palettes, doc) => [...palettes, {id: doc.id, ...doc.data()}], []))
				setLoading(false)
			}
		)
	}, [])

	/* To use async/await, try this instead...
	useEffect(async () => {
		const paletteData = await getCollectionData(`palettes`)
		
		setPalette(paletteData.docs.reduce((palettes, doc) => [...palettes, doc.data()], []))
		setLoading(false)

	}, [])
	const getCollectionData = async (collection) => {
		return await firebase.firestore().collection(collection).get()
	}
	*/

	const updatePaletteData = (whichSwatch, whatColor) => {
		// Update the data in the database (faking it for now)

		// Send this update to the database (fake)
		let theUpdatedData = [...palette]  // Duplicate the data (don't mutate data!)

		let recordToUpdate = theUpdatedData.find((s) => s.id === whichSwatch)
		recordToUpdate.rgb = { ...whatColor }

		db.collection(`palettes`).doc(whichSwatch.toString()).set({rgb:recordToUpdate.rgb})

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


