/* eslint-disable @next/next/no-img-element */
'use client'

import { Cat, Media, User } from '@/payload-types'
import Image from 'next/image'
import { getCardUrl, getImageUrl } from '@/utils/image-url'
import { useState } from 'react'
import { deleteImage } from './action'

export function GalleryImage({
  image,
  size,
  cat,
  user,
}: {
  image: Media
  size?: number
  cat: Cat
  user?: User | null
}) {
  const [isFullscreen, setFullscreen] = useState(false)

  if (!size) {
    size = 300
  }

  return (
    <div className={`relative group max-h-[${size}px] max-w-[${size}px] rounded`}>
      <Image
        src={getImageUrl([image])}
        alt="cat image"
        width={size}
        height={size}
        className={`max-h-[${size}px] max-w-[${size}px] rounded-t-xl`}
        onClick={() => setFullscreen(true)}
      ></Image>
      {user ? (
        <button
          className="absolute top-[12px] right-[12px] bg-[var(--color-background)] backdrop-blur-3xl py-1 px-2 rounded-lg cursor-pointer"
          onClick={() => deleteImage(image, `/cat/${cat.id}`)}
        >
          <i className="bi bi-trash"></i>
        </button>
      ) : null}

      {isFullscreen ? (
        <ImagePopup image={image} onClose={() => setFullscreen(false)}></ImagePopup>
      ) : null}
    </div>
  )
}

function ImagePopup({ image, onClose }: { image: Media; onClose: () => void }) {
  const size = 600

  return (
    <div id="popup" className="gallery-popup" onClick={onClose}>
      <Image
        src={getCardUrl([image])}
        alt="Fullscreen"
        width={size}
        height={size}
        className="rounded-xl shadow-xl"
      />
    </div>
  )
}
