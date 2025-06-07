import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles.css'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  const { children } = props

  return (
    <html lang="en">
      <body>
        <div className="text-4xl p-8">
          Cat Track
          { user ? (
            <i className="bi bi-list ms-4"></i>
          ) : null }
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}
