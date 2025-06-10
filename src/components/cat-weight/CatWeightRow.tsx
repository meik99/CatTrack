'use client'

import { Cat, Weight } from '@/payload-types'
import { formatBirthday } from '@/utils/format-date'
import { useState } from 'react'
import { deleteWeight, updateWeight } from './actions'

export function CatWeightRow({ weight, cat }: { weight?: Weight; cat: Cat }) {
  const [isEditing, setEditing] = useState(false)
  const [isDeleting, setDeleting] = useState(false)

  if (!weight) {
    return null
  }

  if (isEditing) {
    return <EditRow weight={weight} onCancel={() => setEditing(false)} cat={cat}></EditRow>
  } else if (isDeleting) {
    return <DeleteRow cat={cat} weight={weight} onCancel={() => setDeleting(false)}></DeleteRow>
  } else {
    return (
      <DisplayRow
        weight={weight}
        onEdit={() => setEditing(true)}
        onDelete={() => setDeleting(true)}
      ></DisplayRow>
    )
  }
}

function DisplayRow({
  weight,
  onEdit,
  onDelete,
}: {
  weight: Weight
  onEdit?: () => void
  onDelete?: () => void
}) {
  return (
    <tr>
      <td>{formatBirthday(weight.date)}</td>
      <td>{weight['weight (g)']} g</td>
      <td>
        <button className="button" onClick={onEdit}>
          <i className="bi bi-pen"></i>
        </button>
        <button className="button" onClick={onDelete}>
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  )
}

function DeleteRow({ cat, weight, onCancel }: { cat: Cat; weight: Weight; onCancel: () => void }) {
  return (
    <tr>
      <td>{formatBirthday(weight.date)}</td>
      <td>{weight['weight (g)']} g</td>
      <td>
        <button
          className="button button-primary"
          onClick={() => {
            async function handleDelete() {              
              await deleteWeight({ cat, weight })
              onCancel()
            }
            
            handleDelete()
          }}
        >
          <i className="bi bi-trash-fill"></i>
        </button>
        <button className="button" onClick={onCancel}>
          <i className="bi bi-x-lg"></i>
        </button>
      </td>
    </tr>
  )
}

function EditRow({ weight, cat, onCancel }: { weight: Weight; cat: Cat; onCancel: () => void }) {
  const [date, setDate] = useState(formatBirthday(weight.date))
  const [currentWeight, setWeight] = useState(weight['weight (g)'] || 0)

  return (
    <tr>
      <td>
        <input type="date" defaultValue={date} onChange={(event) => setDate(event.target.value)} />
      </td>
      <td>
        <input
          type="number"
          defaultValue={currentWeight}
          onChange={(event) => setWeight(parseInt(event.target.value))}
          className="border border-slate-200 rounded"
        />{' '}
        g
      </td>
      <td>
        <button
          className="button button-primary"
          onClick={() => {
            updateWeight({ cat, weight, date, newWeight: currentWeight })
            onCancel()
          }}
        >
          <i className="bi bi-floppy"></i>
        </button>
        <button className="button" onClick={onCancel}>
          <i className="bi bi-x-lg"></i>
        </button>
      </td>
    </tr>
  )
}
