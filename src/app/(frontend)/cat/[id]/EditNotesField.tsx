'use client'

import { updateCat } from "@/components/cat-form/action";
import { Cat } from "@/payload-types";
import { isEditing } from "@payloadcms/ui/shared";
import { useState } from "react";

export function DisplayNotesField({cat}: {cat: Cat}) {
  const [editing, setEditing] = useState(false)
  
  if (editing) {
    return <EditNotesField cat={cat} setEditing={(isEditing) => setEditing(isEditing)}></EditNotesField>
  }
  
  return (
    <div className="m-auto text-left mt-8 p-2 border border-[var(--color-border)] rounded-xl w-[700px] max-w-[700px] text-wrap relative">
      <button className="absolute top-[12px] right-[12px] cursor-pointer" onClick={() => setEditing(true)}>
        <i className="bi bi-pen !text-gray-500"></i>
      </button>

      {cat.notes}
    </div>
  )
}

function EditNotesField({cat, setEditing }: {cat: Cat, setEditing: (isEditing: boolean) => void}) {
  const [notes, setNotes] = useState(cat.notes || '')
  
  return (
    <div className="m-auto text-left mt-8 p-2 border border-[var(--color-border)] rounded-xl w-[700px] max-w-[700px] text-wrap relative bg-[var(--color-surface)]">
      <button className="absolute top-[12px] right-[12px] cursor-pointer" onClick={() => {        
        updateCat({ cat, name: cat.name || '', birthday: cat.birthday || '', notes: notes })
        setEditing(false)
      }}>
        <i className="bi bi-floppy !text-gray-500"></i>
      </button>

      <textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={0} cols={0} className="w-full h-full outline-none focus:outline-none overflow-hidden resize-none"
        onInput={(event) => { 
          const area = (event.target as HTMLTextAreaElement)
          area.style.height = "auto"
          area.style.height = area.scrollHeight + "px"
        }}></textarea>
    </div>
  )
}