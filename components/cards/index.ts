import type { Product } from 'lib/interfaces'
import Default from './default'
import Horizontal from './horizontal'
import CardOne from './card-one'
import CardTwo from './card-two'
import CardThree from './card-three'
export { Default, Horizontal, CardOne, CardTwo, CardThree }

export type CardType = Product & {
  name: string
  height?: string
  img?: number
  fontSize?: string
  categories?: string[]
  description: string
  image_url: string
  price_per_litre: string
  clickOnImage?: () => void
  clickBtnPrimary?: () => void
  clickBtnSecondary?: () => void
}
