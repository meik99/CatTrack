import { Cat, Media } from '@/payload-types'
import { getImageUrl } from '@/utils/image-url'
import Image from 'next/image'
import { GalleryImage } from './GalleryImage'

export async function CatGallery({ cat }: { cat: Cat }) {
  return (
    <div className='flex flex-row flex-wrap gap-4'>
      {
        cat.images?.
          map(image => image as Media).
          map(image => <GalleryImage key={image.id} image={image}></GalleryImage>)
      }
    </div>
  )
}
