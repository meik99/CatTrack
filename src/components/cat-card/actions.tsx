'use server'

import { Cat } from "@/payload-types"
import { redirect } from "next/navigation"
import { getPayload } from "payload"
import config from '@/payload.config'
import { getUser } from "@/app/(frontend)/actions"


export async function deleteCat(cat: Cat) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const user = await getUser()
  
  if (!user) {
    return
  }

  await payload.delete({
    collection: 'cats',
    id: cat.id,
  })
  
  redirect("/cats")  
}