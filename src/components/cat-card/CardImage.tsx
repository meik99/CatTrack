/* eslint-disable @next/next/no-img-element */
'use client'

import { Cat, Media } from '@/payload-types'
import Image from 'next/image'
import { getAvatar, getCardUrl, getImageUrl } from '@/utils/image-url'
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
    size = 300
  }

  return (
    <div className={`relative group max-h-[${size}px] max-w-[${size}px] rounded`}>
      <Image
        src={getAvatar(cat, "card")}
        alt="cat image"
        width={size}
        height={size}
        className={`max-h-[${size}px] max-w-[${size}px] rounded-t-xl`}
        onClick={() => setFullscreen(true)}
      ></Image>

      {isFullscreen ? <ImagePopup cat={cat} onClose={() => setFullscreen(false)}></ImagePopup> : null}
    </div>
  )
}

function ImagePopup({ cat, onClose }: { cat: Cat, onClose: () => void }) {
  const size = 600;
  
  return (
    <div
      id="popup"
      className="gallery-popup"
      onClick={onClose}
    >
      <Image
        src={getCardUrl(cat.images)}
        alt="Fullscreen"
        width={size}
        height={size}
        className="rounded-xl shadow-xl"
      />
    </div>
  )
}
