import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './styles.scss'
import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'
import { Drawer } from './drawer/Drawer'
import { DrawerProvider } from './drawer/DrawerProvider'
import { buildPayload, getUser } from './actions'

export const metadata = {
  description: 'A management application to weigh newborn cats and check their health',
  title: 'CatTrack',
}

export default async function RootLayout(props: any) {
  const payload = await buildPayload()
  const user = await getUser()
  const { children } = props

  const cats = await payload.find({
    collection: 'cats',
    limit: 1000,
  })

  return (
    <html lang="en">
      <body>
        <DrawerProvider>
          <div className="flex flex-col md:flex-row h-full">
            <Drawer cats={cats.docs} user={user}></Drawer>
            <main className="w-full">{children}</main>
          </div>
        </DrawerProvider>
      </body>
    </html>
  )
}
