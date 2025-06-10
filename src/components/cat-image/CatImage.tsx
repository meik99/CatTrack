'use client'

import { Cat, Media } from '@/payload-types'
import Image from 'next/image'
import { uploadImageForCat } from './action'

export function CatImage({
  cat,
  size,
  className,
}: {
  cat: Cat
  size?: number
  className?: string
}) {
  if (!size) {
    size = 256
  }

  return (
    <div className={`${className} relative group`}>
      <Image
        src={getImageUrl(cat.images)}
        alt="cat image"
        width={size}
        height={size}
        className={className}
      ></Image>

      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
        <label htmlFor="files" className="button">
          Select Image
        </label>
        <input
          id="files"
          type="file"
          onChange={(event) => uploadImageForCat({ cat, images: event.target.files })}
        ></input>
      </div>
    </div>
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
