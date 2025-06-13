'use server'

import { Cat, Media, Weight } from '@/payload-types'
import DeleteCatButton from './DeleteCatButton'
import { CardImage } from './CardImage'
import moment from 'moment'
import { getUser } from '@/app/(frontend)/actions'

export default async function CatCard({ cat }: { cat: Cat }) {
  const user = await getUser()
  
  return (
    <div className="card">
      <CardImage cat={cat}></CardImage>

      <div className="card-body">
        <div className="card-title">
          { cat.name ? cat.name : 'Unknown'}
        </div>
        <div className="mt-5">
          Born: {cat.birthday ? moment(cat.birthday).format('DD.MM.YYYY') : 'unknown'}
        </div>
        <div className="mt-5">Weight: {getCurrentWeight(cat)} g</div>
        <div className="mt-6 flex flex-row justify-between gap-4">
          <a className="button button-primary w-full" href={`/cat/${cat.id}`}>
            Profile
          </a>
          {
            user ? <DeleteCatButton cat={cat}></DeleteCatButton> : null
          }
        </div>
      </div>
    </div>
  )
}

function getCurrentWeight(cat: Cat): number {
  const sortedWeights =
    cat.weights
      ?.map((weight: any) => weight as Weight)
      .sort((a, b) => Date.parse(b.date || '0') - Date.parse(a.date || '0')) || []

  if (!sortedWeights || sortedWeights.length <= 0) {
    return 0
  }

  return sortedWeights[0]['weight (g)'] || 0
}
