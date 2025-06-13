import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './styles.scss'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'
import HomePage from './page'
import { Drawer } from './drawer/Drawer'
import { DrawerProvider } from './drawer/DrawerProvider'
import { DrawerButton } from './drawer/DrawerButton'

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
      <html lang="en" className='h-full'>
        <body className='flex flex-col h-full justify-evenly'>
          <HomePage></HomePage>
        </body>
      </html>
    )
  }

  const cats = await payload.find({
    collection: 'cats',
    limit: 1000,
  })

  return (
    <html lang="en">
      <body>
        <DrawerProvider>
          <div className="flex flex-row h-full">
            <Drawer cats={cats.docs} user={user}></Drawer>
            <main className="w-full">{children}</main>
          </div>
        </DrawerProvider>
      </body>
    </html>
  )
}
