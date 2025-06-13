'use client'

import { Cat, User } from '@/payload-types'
import { useDrawer } from './DrawerProvider'
import { CatLink } from './CatLink'
import { handleLogout } from './actions';

export function Drawer({ cats, user }: { cats: Cat[]; user?: User | null }) {
  const { isOpen, closeDrawer, openDrawer } = useDrawer()

  if (!isOpen) {
    return (
      <div className="ms-4 mt-2 w-fit">
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

      {user ? (
        <>
          <div className="px-8 py-4 mt-auto">
            <div className="drawer-greeting">Welcome</div>
            {user?.email}
          </div>
          <div className="px-8 pb-4 pt-0 flex">
            <button className="button button-primary w-full" onClick={() => handleLogout()}>
              Logout
            </button>
          </div>
        </>
      ) : (
        <div className="px-8 py-4 mt-auto flex">
          <a className="button button-primary w-full" href="/login">
            Login
          </a>
        </div>
      )}
    </div>
  )
}
