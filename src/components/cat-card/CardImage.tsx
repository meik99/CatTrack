import { Cat } from '@/payload-types'
import Image from 'next/image'
import { getAvatar } from '@/utils/image-url'

export async function CardImage({
  cat,
  size,
}: {
  cat: Cat
  size?: number
}) {

  if (!size) {
    size = 300
  }

  return (
    <a href={`/cat/${cat.id}`}>
      <Image
        src={getAvatar(cat, "card")}
        alt="cat image"
        width={size}
        height={size}
        className={`max-h-[${size}px] max-w-[${size}px] rounded-t-xl`}        
      ></Image>
    </a>    
  )
}
