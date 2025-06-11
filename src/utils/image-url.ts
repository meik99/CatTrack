import { Media } from "@/payload-types"

export function getImageUrl(images: (number | Media)[] | null | undefined) {
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
