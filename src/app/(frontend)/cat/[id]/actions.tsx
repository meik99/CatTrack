'use server'

import { Cat, Media } from "@/payload-types"
import config from "@/payload.config"
import { redirect } from "next/navigation"
import { getPayload } from "payload"

export async function uploadAvatarForCat({
  cat,
  images
}: {
  cat: Cat
  images: FileList | null
}) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  if (!images || images.length <= 0) {
    redirect(`/cat/${cat.id}`)
  }

  const image = images[0]

  const uploadedImage = await payload.create({
    collection: 'media',
    data: {
      alt: 'cat',
    },
    file: {
      data: Buffer.from(await image.arrayBuffer()),
      mimetype: image.type,
      name: image.name,
      size: image.size,
    },
  })

  await payload.update({
    collection: 'cats',
    id: cat.id,
    data: {
      avatar: uploadedImage.id,
    },
  })

  redirect(`/cat/${cat.id}`)
}
