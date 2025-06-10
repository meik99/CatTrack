'use server'

import { Cat, Media, Weight } from '@/payload-types'
import { ReactElement } from 'react'
import Image from 'next/image'
import DeleteCatButton from './DeleteCatButton'

export default async function CatCard({ cat }: { cat: Cat }) {  
  
  
  return (
    <div className="shadow">
      <Image src={getImageUrl(cat.images)} alt="cat image" width={256} height={256}></Image>

      <div className="p-2 text-xl font-bold">{cat.name}</div>
      <div className="p-2">
        Born:{' '}
        {cat.birthday
          ? new Date(Date.parse(cat.birthday || '')).toLocaleDateString('de')
          : 'No data'}
      </div>
      <div className="p-2">Current weight: {getCurrentWeight(cat.weights)}</div>
      <div className="p-2 mb-2 flex flex-row flex-wrap gap-2">
        <a href={'/cat/' + cat.id} className="button button-primary">
          Edit
        </a>
        <DeleteCatButton cat={cat}></DeleteCatButton>
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

function getCurrentWeight(weights: any): ReactElement {
  const objs = weights as Weight[]

  if (!weights || weights.length <= 0) {
    return <div>Not weight yet</div>
  }

  return <div>{objs[0]['weight (g)']} g</div>
}
