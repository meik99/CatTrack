'use client'

import { Cat } from '@/payload-types'
import { uploadAvatarForCat } from './actions'

export function AvatarUploadButton({ cat }: { cat: Cat }) {
  return (
    <>
      <label
        htmlFor="files"
        className="button button-primary !py-2 !px-3 !rounded-[50%] absolute top-[14px] right-[14px]"
      >
        <i className="bi bi-upload !text-white"></i>
      </label>
      <input
        id="files"
        type="file"
        hidden={true}
        onChange={(event) => uploadAvatarForCat({ cat, images: event.target.files })}
      ></input>
    </>
  )
}
