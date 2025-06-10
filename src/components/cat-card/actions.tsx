'use server'

import { Cat } from "@/payload-types"
import { redirect } from "next/navigation"
import { getPayload } from "payload"
import config from '@/payload.config'


export async function deleteCat(cat: Cat) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  await payload.delete({
    collection: 'cats',
    id: cat.id,
  })
  
  redirect("/cats")  
}