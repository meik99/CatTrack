import { Cat, Media } from "@/payload-types"

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
  
  const url = image.sizes?.card?.url

  if (!url) {
    return placeholderImage
  }
  
  return url
}

export function getAvatar(cat: Cat, size = "icon") {
  const avatar = cat.avatar as Media
    
  if (!avatar) {
    return "/placeholder.png"
  }
  
  const url = size == "icon" ? avatar.sizes?.icon?.url :
    avatar.sizes?.card?.url
    
  if (!url) {
    return "/placeholder.png"
  }
  
  return url
}

export function getCardUrl(images: (number | Media)[] | null | undefined) {
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
  
  const url = image.sizes?.original?.url

  if (!url) {
    return placeholderImage
  }
  
  return url
}