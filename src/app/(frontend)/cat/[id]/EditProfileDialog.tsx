'use client'

import { updateCat } from '@/components/cat-form/action'
import { Cat } from '@/payload-types'
import moment from 'moment'
import { useState } from 'react'

export default function EditProfileDialog({
  isOpen,
  onClose,
  onSave,
  cat,
}: {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
  cat: Cat
}) {
  const [name, setName] = useState(cat.name || '')
  const [birthday, setBirthday] = useState(cat.birthday || '')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs backdrop-grayscale">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 !text-2xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-start">
          Edit {cat.name ? cat.name : 'Unknown'}
        </h2>
        <div className="mb-4 input-group text-start">
          <label>Name</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input>
        </div>
        <div className="mb-4 input-group text-start">
          <label>Birthday</label>
          <input
            type="date"
            value={moment(birthday).format('YYYY-MM-DD')}
            onChange={(event) => setBirthday(event.target.value)}
          ></input>
        </div>
        <div>
          <button
            className="button button-primary me-2"
            onClick={() => {
              updateCat({ cat, name: name, birthday: birthday, notes: cat.notes || '' })
              onSave()
            }}
          >
            Save
          </button>
          <button className="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
