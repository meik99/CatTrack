'use client'

import { Cat, User } from '@/payload-types'
import { ReactNode, useState } from 'react'
import { useDrawer } from './DrawerProvider'
import { CatLink } from './CatLink'

export function Drawer({ cats, user }: { cats: Cat[]; user: User }) {
  const { isOpen, closeDrawer, openDrawer } = useDrawer()

  if (!isOpen) {
    return (
      <div className='ms-4 mt-2 w-fit'>
        <button className="drawer-button !me-0 !sticky !top-2" onClick={() => openDrawer()}>
          <i className="bi bi-list"></i>
        </button>
      </div>
    )
  }

  return (
    <div className="drawer flex flex-col sticky top-0 !h-screen">
      <div className="flex flex-row">
        <a href="/cats">
          <h1 className="m-6 me-8 text-nowrap">Cat Track</h1>
        </a>
        <button className="drawer-button" onClick={() => closeDrawer()}>
          <i className="bi bi-list"></i>
        </button>
      </div>

      <hr></hr>

      <a href="/cats" className="pt-8 pb-4 px-8">
        Your cats
      </a>
      {cats.map((cat) => (
        <CatLink key={cat.id} cat={cat}></CatLink>
      ))}

      <div className="px-8 py-4 mt-auto">
        <div className="drawer-greeting">Welcome</div>
        {user?.email}
      </div>
    </div>
  )
}
