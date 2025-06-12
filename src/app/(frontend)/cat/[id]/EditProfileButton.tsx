'use client'

import { Cat } from '@/payload-types'
import { useState } from 'react'
import EditProfileDialog from './EditProfileDialog'

export function EditProfileButton({ cat }: { cat: Cat }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <button className="button button-primary" onClick={() => setOpen(true)}>
        Edit profile
      </button>
      <EditProfileDialog
        cat={cat}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        onSave={() => setOpen(false)}
      ></EditProfileDialog>
    </>
  )
}
