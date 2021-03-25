import React, {useState, useContext} from 'react'
import 'css/Swatch.css'
import { ColourContext } from 'components/Context'
import Channel from 'components/Channel'

const Swatch = ({swatchId, red = 0, green = 0, blue = 0}) => {

  const onUpdateSwatch = useContext(ColourContext).onUpdateSwatch

  const [r, setR] = useState(red)
  const [g, setG] = useState(green)
  const [b, setB] = useState(blue)

  const bgColor = { 
    backgroundColor: `rgb(${r}, ${g}, ${b})`
  }

  console.log(`🔃 Swatch: rgb(${r}, ${g}, ${b})`)
  onUpdateSwatch(swatchId, { r: r, g: g, b: b })

  return (
    <li className="swatch" style={bgColor}>
      <Channel rgbVal={r} updateChannel={setR} min={0} />
      <Channel rgbVal={g} updateChannel={setG} />
      <Channel rgbVal={b} updateChannel={setB} />
    </li>
  )
}

export default Swatch