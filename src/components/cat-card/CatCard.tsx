'use server'

import { Cat, Media, Weight } from '@/payload-types'
import { ReactElement } from 'react'
import Image from 'next/image'
import DeleteCatButton from './DeleteCatButton'
import { CardImage } from './CardImage'

export default async function CatCard({ cat }: { cat: Cat }) {  
  return (
    <div className="shadow">
      <CardImage cat={cat}></CardImage>
      <div className="p-2 text-xl font-bold">{cat.name ? cat.name : "'Unnamed'"}</div>
      <div className="p-2">
        Born:{' '}
        {cat.birthday
          ? new Date(Date.parse(cat.birthday || '')).toLocaleDateString('de')
          : 'No data'}
      </div>
      <div className="p-2">Current weight: {getCurrentWeight(cat.weights || [])}</div>
      <div className="p-2 mb-2 flex flex-row flex-wrap gap-2">
        <a href={'/cat/' + cat.id} className="button button-primary">
          Edit
        </a>
        <DeleteCatButton cat={cat}></DeleteCatButton>
      </div>
    </div>
  )
}

function getCurrentWeight(weights: any[]): ReactElement {  
  const sortedWeights = weights
    .map((weight: any) => weight as Weight)
    .sort((a, b) => Date.parse(b.date || '0') - Date.parse(a.date || '0')) || []
  
  if (!weights || weights.length <= 0) {
    return <div>Not weight yet</div>
  }

  return <div>{sortedWeights[0]['weight (g)']} g</div>
}
