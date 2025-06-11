'use client'

import { Cat, Media } from '@/payload-types'
import Image from 'next/image'
import { uploadImageForCat } from '../cat-form/action'
import { getImageUrl } from '@/utils/image-url'

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

      <div className={`absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        
      </div>

      <div className={`absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer`}>
        <label htmlFor="files" className="button">
          Upload image
        </label>
        <input
          id="files"
          type="file"
          className='hidden'
          onChange={(event) => uploadImageForCat({ cat, images: event.target.files })}
        ></input>
      </div>
    </div>
  )
}
