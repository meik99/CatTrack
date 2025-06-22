// components/DrawerContext.jsx
'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import useCheckMobileScreen from './hooks'

const DrawerContext = createContext({
  isOpen: false,
  openDrawer: () => {},
  closeDrawer: () => {},
})

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const isMobile = useCheckMobileScreen()  
  const [isOpen, setIsOpen] = useState(!isMobile)  

  const openDrawer = () => {
    setIsOpen(true)
  }
  const closeDrawer = () => {
    setIsOpen(false)
  }

  return (
    <DrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer }}>
      {children}
    </DrawerContext.Provider>
  )
}

export const useDrawer = () => useContext(DrawerContext)
