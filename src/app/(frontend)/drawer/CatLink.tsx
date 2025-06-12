import { Cat, Media } from "@/payload-types";
import { getAvatar } from "@/utils/image-url";
import Image from "next/image";

export function CatLink({cat}: {cat: Cat}) {
  return (
    <a href={ `/cat/${cat.id}` } className="py-2 px-8 flex flex-row items-center">
      <Image
        src={getAvatar(cat)}
        width={48}
        height={48}
        alt={`Avatar image of ${cat.name}`}
        className="rounded-4xl me-6">        
      </Image>
      
      { cat.name }
    </a>
  )
}
