'use client'

import { Cat } from '@/payload-types'
import { formatBirthday } from '@/utils/format-date'
import { useState } from 'react'
import { addWeightForCat } from './actions'

export function CatWeightDialogButton({ cat }: { cat: Cat }) {
  const [isOpen, setOpen] = useState(false)
  
  return (
    <>
      <button className='button button-primary !rounded-[50%]' onClick={() => setOpen(true)}>+</button>
      <CatWeightDialog
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        cat={cat}
      ></CatWeightDialog>
    </>
  )
}

export function CatWeightDialog({
  isOpen,
  onClose,
  cat,
}: {
  isOpen: boolean
  onClose: () => void
  cat: Cat
}) {
  const [date, setDate] = useState(formatBirthday(new Date().toISOString()))
  const [weight, setWeight] = useState(0)
  
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
          Add weight for {cat.name ? cat.name : "'No name'"}
        </h2>
        
        <div className="mb-4 flex flex-col">
          <label>Date</label>
          <input type="date" className='px-4 py-2 border border-slate-200 rounded'
            onChange={(event) => setDate(event.target.value)}></input>
        </div>
        
        <div className="mb-4 flex flex-col">
          <label>Weight (g)</label>
          <input type="number" className='px-4 py-2 border border-slate-200 rounded'
            onChange={(event) => setWeight(parseInt(event.target.value))}></input>
        </div>
        
        <div>
          <button className="button button-primary me-2"
            onClick={() => {
              addWeightForCat({cat, date, newWeight: weight})
              onClose()
            }}>Add</button>
          <button className="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
