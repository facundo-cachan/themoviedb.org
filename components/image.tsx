/**
 * `Image Responsive & Optimiced`.
 * @param {string} src url path.
 * @param {Array<number>} sizes [height, width].
 * @param {string} alt image description.
 * @return {JSX.Element} Image Component.
 */

import Image from 'next/image'

export type ImageProps = {
  src: string
  sizes?: number[]
  alt?: string
  blur?: string
  layout?: 'fixed' | 'responsive' | 'fill' | 'fixed'
}
const Img = ({
  alt,
  sizes,
  src,
  layout,
  blur = 'https://via.placeholder.com/150',
}: ImageProps): JSX.Element => (
  <Image
    priority
    placeholder="blur"
    blurDataURL={blur}
    src={src || blur}
    alt={alt}
    width={sizes ? sizes[0] : '100%'}
    height={sizes ? sizes[1] : '100%'}
    quality={100}
    layout={!sizes && layout ? layout : 'responsive'}
  />
)
export default Img
