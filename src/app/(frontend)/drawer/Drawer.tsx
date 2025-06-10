'use client'

import { Cat, User } from '@/payload-types'
import { ReactNode, useState } from 'react'
import { useDrawer } from './DrawerProvider';
import { CatLink } from './CatLink';

export function Drawer({cats} : {cats: Cat[]}) {
  const { isOpen } = useDrawer();
    
  if (!isOpen) {
    return ""
  }
  
  return (
    <div className="min-w-[258px] border-r-1 border-slate-200 flex flex-col h-full">
      <a href="/cats" className="py-4 px-8 border-b-1 border-slate-200">
        Your cats
      </a>
      {
        cats.map(cat => <CatLink key={cat.id} cat={cat}></CatLink>)
      }
    </div>
  )
}
