'use client'

import { Cat } from '@/payload-types'
import { useState } from 'react'
import { updateCat } from './action'
import { formatBirthday } from '@/utils/format-date'

export default function CatForm({ cat }: { cat: Cat }) {
  const [name, setName] = useState(cat.name || '')
  const [birthday, setBirthday] = useState(formatBirthday(cat.birthday))
  const [notes, setNotes] = useState(cat.notes)

  return (
    <div className="flex flex-row gap-4 w-full">
      <div className="flex flex-col gap-4 h-full">
        <div>
          <label className="font-bold text-sm">Name</label>
          <div className="flex flex-row">
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="px-4 py-2 border border-slate-200 rounded  w-full"
            ></input>
          </div>
        </div>

        <div>
          <label className="font-bold text-sm">Birthday</label>
          <div className="flex flex-row">
            <input
              type="date"
              value={birthday}
              onChange={(event) => setBirthday(event.target.value)}
              className="px-4 py-2 border border-slate-200 rounded w-full"
            ></input>
          </div>
        </div>

        <button className="button mt-auto" onClick={() => updateCat({ cat, name, birthday, notes })}>
          Save
        </button>
      </div>
      
      <div className='flex flex-col w-full'>
        <label className="font-bold text-sm">Notes</label>
        <textarea rows={5} className='border border-slate-200 rounded p-2 w-full' 
          onChange={(event) => setNotes(event.target.value)} value={notes || ''}></textarea>
      </div>
    </div>
  )
}
