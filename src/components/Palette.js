import React, {useContext} from 'react'
import 'css/Palette.css'
import { ColourContext } from 'components/Context'
import Swatch from 'components/Swatch'

const Palette = () => {

  const colourPalette = useContext(ColourContext).palette // Consumer

  const swatches = colourPalette.map(({ id, rgb }) => <Swatch key={id} swatchId={id} red={rgb.r} green={rgb.g} blue={rgb.b} />)

  return (
    <ul className="palette">
      {swatches}
    </ul>
  )
}

export default Palette