import { Cat } from "@/payload-types";

export function CatLink({cat}: {cat: Cat}) {
  return (
    <a href={ `/cat/${cat.id}` } className="py-4 px-12 border-b-1 border-slate-200">
      - { cat.name }
    </a>
  )
}