'use client'

import { Cat } from '@/payload-types'
import { useState } from 'react'
import DeleteCatDialog from './DeleteCatDialog'
import { deleteCat } from './actions'

export default function DeleteCatButton({ cat }: { cat: Cat }) {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      <button className="button w-full" onClick={() => setModalOpen(true)}>
        Delete
      </button>
      <DeleteCatDialog
        cat={cat}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onDelete={() => deleteCat(cat)}
      ></DeleteCatDialog>
    </>
  )
}
