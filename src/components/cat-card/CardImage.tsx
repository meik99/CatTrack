/* eslint-disable @next/next/no-img-element */
'use client'

import { Cat, Media } from '@/payload-types'
import Image from 'next/image'
import { uploadImageForCat } from '../cat-form/action'
import { getImageUrl } from '@/utils/image-url'
import { useState } from 'react'

export function CardImage({
  cat,
  size,
  className,
}: {
  cat: Cat
  size?: number
  className?: string
}) {
  const [isFullscreen, setFullscreen] = useState(false)

  if (!size) {
    size = 256
  }

  return (
    <div className={`${className} relative group max-h-[${size}px] max-w-[${size}px] rounded`}>
      <Image
        src={getImageUrl(cat.images)}
        alt="cat image"
        width={size}
        height={size}
        className={`${className} max-h-[${size}px] max-w-[${size}px] rounded`}
        onClick={() => setFullscreen(true)}
      ></Image>

      {isFullscreen ? <ImagePopup cat={cat} onClose={() => setFullscreen(false)}></ImagePopup> : null}
    </div>
  )
}

function ImagePopup({ cat, onClose }: { cat: Cat, onClose: () => void }) {
  return (
    <div
      id="popup"
      className="fixed inset-0 backdrop-blur-xs backdrop-grayscale-100 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img
        src={getImageUrl(cat.images)}
        alt="Fullscreen"
        className="max-w-full max-h-full object-contain rounded"
      />
    </div>
  )
}
