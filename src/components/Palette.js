import React from 'react'
import 'css/Palette.css'
import Swatch from 'components/Swatch'

const Palette = ({colourPalette, onUpdateSwatch}) => {

  const swatches = colourPalette.map(({ id, rgb }) => <Swatch key={id} swatchId={id} red={rgb.r} green={rgb.g} blue={rgb.b} onUpdateSwatch={onUpdateSwatch} />)

  return (
    <ul className="palette">
      {swatches}
    </ul>
  )
}

export default Palette