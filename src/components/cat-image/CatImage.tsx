import { Cat, Media } from "@/payload-types"
import Image from "next/image"

export const CatImage = async({cat, size, className} : {cat: Cat, size?: number, className?: string}) => {
  if (!size) {
    size = 256
  }
  
  return (
    <Image src={getImageUrl(cat.images)} alt="cat image" width={size} height={size} className={className}></Image>
  )
}

function getImageUrl(images: (number | Media)[] | null | undefined) {
  const placeholderImage = '/placeholder.png'

  if (!images) {
    return placeholderImage
  }

  if (images.length <= 0) {
    return placeholderImage
  }

  const image = images[0] as Media

  if (!image) {
    return placeholderImage
  }

  return image.url ? image.url : placeholderImage
}
