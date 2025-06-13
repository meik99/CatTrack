'use server'

import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getUser() {  
  const payload = await buildPayload()
  const headers = await getHeaders()
  const { user } = await payload.auth({ headers })
  
  return user
}
export async function buildPayload() {  
  const payloadConfig = await config
  return await getPayload({ config: payloadConfig })
}