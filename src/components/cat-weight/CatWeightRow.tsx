'use client'

import { Cat, Weight } from '@/payload-types'
import { formatBirthday } from '@/utils/format-date'
import { useState } from 'react'
import { deleteWeight, updateWeight } from './actions'

export function CatWeightRow({
  weight,
  cat,
  previousWeight,
}: {
  weight: Weight
  cat: Cat
  previousWeight?: Weight
}) {
  const [isEditing, setEditing] = useState(false)
  const [isDeleting, setDeleting] = useState(false)

  if (!weight) {
    return null
  }

  if (isEditing) {
    return (
      <EditRow
        weight={weight}
        previousWeight={previousWeight}
        onCancel={() => setEditing(false)}
        cat={cat}
      ></EditRow>
    )
  } else if (isDeleting) {
    return (
      <DeleteRow
        cat={cat}
        weight={weight}
        previousWeight={previousWeight}
        onCancel={() => setDeleting(false)}
      ></DeleteRow>
    )
  } else {
    return (
      <DisplayRow
        weight={weight}
        previousWeight={previousWeight}
        onEdit={() => setEditing(true)}
        onDelete={() => setDeleting(true)}
      ></DisplayRow>
    )
  }
}

function DisplayRow({
  weight,
  previousWeight,
  onEdit,
  onDelete,
}: {
  weight: Weight
  previousWeight?: Weight
  onEdit?: () => void
  onDelete?: () => void
}) {
  return (
    <tr>
      <td>{formatBirthday(weight.date)}</td>
      <td>{weight['weight (g)']} g</td>
      <td>
        {previousWeight && previousWeight['weight (g)'] && weight['weight (g)']
          ? weight['weight (g)'] - previousWeight['weight (g)']
          : 0}
      </td>
      <td className="text-right">
        <button className="cursor-pointer p-2" onClick={onEdit}>
          <i className="bi bi-pen"></i>
        </button>
        <button className="cursor-pointer p-2" onClick={onDelete}>
          <i className="bi bi-trash"></i>
        </button>
      </td>
    </tr>
  )
}

function DeleteRow({
  cat,
  weight,
  previousWeight,
  onCancel,
}: {
  cat: Cat
  weight: Weight
  previousWeight?: Weight
  onCancel: () => void
}) {
  return (
    <tr>
      <td>{formatBirthday(weight.date)}</td>
      <td>{weight['weight (g)']} g</td>
      <td>
        {previousWeight && previousWeight['weight (g)'] && weight['weight (g)']
          ? weight['weight (g)'] - previousWeight['weight (g)']
          : 0}
      </td>
      <td className="text-right">
        <button
          className="cursor-pointer p-2"
          onClick={() => {
            async function handleDelete() {
              await deleteWeight({ cat, weight })
              onCancel()
            }

            handleDelete()
          }}
        >
          <i className="bi bi-trash"></i>
        </button>

        <button className="cursor-pointer p-2" onClick={onCancel}>
          <i className="bi bi-x"></i>
        </button>
      </td>
    </tr>
  )
}

function EditRow({
  weight,
  previousWeight,
  cat,
  onCancel,
}: {
  weight: Weight
  previousWeight?: Weight
  cat: Cat
  onCancel: () => void
}) {
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
          className="border border-slate-200 rounded w-[75%]"
        />{' '}
        g
      </td>
      <td>
        {previousWeight && previousWeight['weight (g)'] && weight['weight (g)']
          ? weight['weight (g)'] - previousWeight['weight (g)']
          : 0}
      </td>
      <td className="text-right">
        <button
          className="cursor-pointer p-2"
          onClick={() => {
            updateWeight({ cat, weight, date, newWeight: currentWeight })
            onCancel()
          }}
        >
          <i className="bi bi-floppy"></i>
        </button>
        <button className="cursor-pointer p-2" onClick={onCancel}>
          <i className="bi bi-x"></i>
        </button>
      </td>
    </tr>
  )
}
