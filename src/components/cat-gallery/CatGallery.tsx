import { Cat, Media } from '@/payload-types'
import { getImageUrl } from '@/utils/image-url'
import Image from 'next/image'
import { GalleryImage } from './GalleryImage'
import { getUser } from '@/app/(frontend)/actions'

export async function CatGallery({ cat }: { cat: Cat }) {
  const user = await getUser()
  
  return (
    <div className='flex flex-row flex-wrap gap-4'>
      {
        cat.images?.
          map(image => image as Media).
          map(image => <GalleryImage key={image.id} image={image} cat={cat} user={user}></GalleryImage>)
      }
    </div>
  )
}
