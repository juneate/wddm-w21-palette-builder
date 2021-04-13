import React, {useState, useContext, useEffect, useRef} from 'react'
import 'css/Swatch.css'
import { ColourContext } from 'components/Context'
import Channel from 'components/Channel'

const Swatch = ({swatchId, red = 0, green = 0, blue = 0}) => {

  // Create local "state" variables (r, g, b) and set them with values, either passed (first time called) or the current value (all other times called)
  const [r, setR] = useState(red)
  const [g, setG] = useState(green)
  const [b, setB] = useState(blue)

  // Load the updater function from the ColourContext to get access to the `updatePaletteData()` function defined in App
  const onUpdateSwatch = useContext(ColourContext).onUpdateSwatch

  console.log(`🔃 Swatch: rgb(${r}, ${g}, ${b})`)

  // let isThisAnUpdate = false
  let isThisAnUpdate = useRef(false)

  useEffect(() => {
    console.log(`Swatch has now been mounted`)
    isThisAnUpdate.current = true
  }, [])

  // Update the `palette` variables for the `App` component
  if (isThisAnUpdate.current) {
    onUpdateSwatch(swatchId, { r: r, g: g, b: b })
    isThisAnUpdate.current = true
  }



  // Build the style for every refresh
  const bgColor = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }

  return (
    <li className="swatch" style={bgColor}>
      <Channel rgbVal={r} updateChannel={setR} min={0} />
      <Channel rgbVal={g} updateChannel={setG} />
      <Channel rgbVal={b} updateChannel={setB} />
    </li>
  )
}

export default Swatch