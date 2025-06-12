import { uploadImageForCat } from '@/components/cat-form/action'
import { Cat } from '@/payload-types'
import { getAvatar } from '@/utils/image-url'
import Image from 'next/image'
import { AvatarUploadButton } from './AvatarUploadButton'

export async function HeroImage({ cat }: { cat: Cat }) {
  return (
    <div className='relative m-auto w-fit'>
      <Image
        src={getAvatar(cat, 'card')}
        width={300}
        height={300}
        alt="Hero image of cat"
        className="rounded-[50%]"
      >        
      </Image>
      <AvatarUploadButton cat={cat}></AvatarUploadButton>
    </div>
  )
}
