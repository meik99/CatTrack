'use server'

import { Media } from "@/payload-types"
import config from '@/payload.config'
import { redirect } from "next/navigation"
import { getPayload } from "payload"

export async function deleteImage(image: Media, url: string) {
  const payloadConfig = await config
  const payload = await getPayload({config: payloadConfig})
  
  await payload.delete({
    collection: 'media',
    id: image.id
  })
  
  redirect(url)
}