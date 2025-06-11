import { Cat, Media } from '@/payload-types'
import { getImageUrl } from '@/utils/image-url'
import Image from 'next/image'

export async function CatGallery({ cat }: { cat: Cat }) {
  return (
    <div className='flex flex-row flex-wrap gap-4'>
      {
        cat.images?.
          map(image => image as Media).
          map(image => <Image key={image.id} src={getImageUrl([image])} alt='Cat image' width={256} height={256}></Image>)
      }
    </div>
  )
}
