'use server'

import { Cat } from '@/payload-types'
import config from '@/payload.config'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'

export async function updateCat({
  cat,
  name,
  birthday,
  notes,
}: {
  cat: Cat,
  name: string,
  birthday: string,
  notes: string
}) {
  const payloadConfig = await config
  const payload = await getPayload({config: payloadConfig})
  
  await payload.update({
    collection: "cats",
    id: cat.id,
    data: {
      name: name,
      birthday: birthday,
      notes: notes
    }
  })
  
  redirect(`/cat/${cat.id}`)
}
