'use client'

import { Cat } from "@/payload-types"
import { uploadImageForCat } from "../cat-form/action"

export function GalleryUploadButton({ cat }: {cat: Cat}) {
  return (
    <>
      <label htmlFor="input-gallery" className="button button-primary !rounded-[50%]">
        +
      </label>
      <input
        id="input-gallery"
        type="file"
        className="hidden"
        onChange={(event) => uploadImageForCat({ cat, images: event.target.files})}
      ></input>
    </>
  )
}
