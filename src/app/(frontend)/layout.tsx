import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles.css'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'
import HomePage from './page'

export const metadata = {
  description: 'A management application to weigh newborn cats and check their health',
  title: 'CatTrack',
}

export default async function RootLayout(props: any) {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
  const { children } = props

  if (!user) {
    return (
      <html lang="en">
        <body>
          <div className="text-4xl px-8 p-4 mb-4 shadow">
            Cat Track            
          </div>
          <main>
            <HomePage></HomePage>
          </main>
        </body>
      </html>
    )
  }

  return (
    <html lang="en">
      <body>
        <div className='flex flex-row w-full px-8 p-4 mb-4 shadow justify-between items-center'>
          <div className="text-4xl ">
            Cat Track
            <i className="bi bi-list ms-4"></i>
          </div>
          <div>
            Logged in as {user.email}
          </div>
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}
