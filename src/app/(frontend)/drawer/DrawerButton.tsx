'use client'

import { useDrawer } from './DrawerProvider'

export function DrawerButton() {
  const { isOpen, openDrawer, closeDrawer } = useDrawer()

  return (
    <button onClick={isOpen ? closeDrawer : openDrawer}>
      <i className="bi bi-list ms-4"></i>
    </button>
  )
}
