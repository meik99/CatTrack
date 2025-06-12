'use client'

import { Cat } from "@/payload-types"
import { uploadImageForCat } from "../cat-form/action"

export function GalleryUploadButton({ cat }: {cat: Cat}) {
  return (
    <>
      <label htmlFor="files" className="button button-primary !rounded-[50%]">
        +
      </label>
      <input
        id="files"
        type="file"
        className="hidden"
        onChange={(event) => uploadImageForCat({ cat, images: event.target.files})}
      ></input>
    </>
  )
}
