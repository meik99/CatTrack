'use server'

import { Cat, Weight } from '@/payload-types'
import config from '@/payload.config'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'

export async function updateWeight({
  cat,
  weight,
  date,
  newWeight,
}: {
  cat: Cat
  weight: Weight
  date: string
  newWeight: number
}) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  await payload.update({
    collection: 'weights',
    id: weight.id,
    data: {
      'weight (g)': newWeight,
      date: date,
    },
  })

  redirect(`/cat/${cat.id}`)
}

export async function deleteWeight({ cat, weight }: { cat: Cat; weight: Weight }) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  await payload.delete({
    collection: 'weights',
    id: weight.id,
  })

  redirect(`/cat/${cat.id}`)
}

export async function addWeightForCat({
  cat,
  date,
  newWeight,
}: {
  cat: Cat
  date: string
  newWeight: number
}) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const weight = await payload.create({
    collection: 'weights',
    data: {
      date: date,
      'weight (g)': newWeight,
    },
  })

  await payload.update({
    collection: 'cats',
    id: cat.id,
    data: {
      weights: [
        ...(cat.weights?.map(weight => weight as Weight).map(weight => weight.id) || []),
        weight.id
      ],
    },
  })

  redirect(`/cat/${cat.id}`)
}
