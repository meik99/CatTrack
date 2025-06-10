'use client'

import { Cat } from '@/payload-types'
import { useState } from 'react'
import { updateCat } from './action'
import { formatBirthday } from '@/utils/format-date'

export default function CatForm({ cat }: { cat: Cat }) {
  const [name, setName] = useState(cat.name || '')
  const [birthday, setBirthday] = useState(formatBirthday(cat.birthday))
  
  return (
    <div>
      <label className="font-bold text-sm">Name</label>
      <div className="flex flex-row mb-2">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="px-4 py-2 border border-slate-200 rounded"
        ></input>
      </div>

      <label className="font-bold text-sm">Birthday</label>
      <div className="flex flex-row mb-4">
        <input
          type="date"
          value={birthday}
          onChange={(event) => setBirthday(event.target.value)}
          className="px-4 py-2 border border-slate-200 rounded"
        ></input>
      </div>
      
      <button className="button" onClick={() => updateCat({cat, name, birthday})}>Save</button>
    </div>
  )
}

