import { getPayload } from 'payload'
import config from '@/payload.config'
import CatCard from '@/components/cat-card/CatCard'
import { redirect } from 'next/navigation'
import { buildPayload, getUser } from '../actions'

async function addCat() {
  'use server'
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const newCat = await payload.create({
    collection: 'cats',
    data: {},
  })

  redirect(`/cat/${newCat.id}`)
}

export default async function CatsPage() {
  const user = await getUser()
  const payload = await buildPayload()
  const cats = await payload.find({
    collection: 'cats',
    limit: 100,
    page: 1,
  })

  return (
    <div className="px-8 mt-6">
      <h2>Your Cats </h2>
      <div className="flex flex-row flex-wrap gap-6 mt-6">
        {cats.docs.map((cat) => (
          <CatCard key={cat.id} cat={cat}></CatCard>
        ))}
      </div>

      { user ? <button className="button button-primary button-fab" onClick={addCat}>
        +
      </button> : null}
    </div>
  )
}
