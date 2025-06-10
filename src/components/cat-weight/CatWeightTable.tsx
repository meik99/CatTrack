import { Cat, Weight } from '@/payload-types'
import { CatWeightRow } from './CatWeightRow'

export async function CatWeightTable({ cat }: { cat: Cat }) {
  return (
    <table className="mt-2 w-full md:w-1/2 border-0 border-spacing-x-4">
      <thead>
        <tr className="text-left">
          <th className="w-1/3">Date</th>
          <th className="w-1/3">Weight (g)</th>
          <th className="w-1/3"></th>
        </tr>
      </thead>
      <tbody>
        {cat.weights
          ?.map((weight: any) => weight as Weight)
          .sort((a, b) => Date.parse(b.date || '0') - Date.parse(a.date || '0'))
          .map((weight: Weight) => (
            <CatWeightRow key={weight.id} weight={weight} cat={cat}></CatWeightRow>
          ))}
      </tbody>
    </table>
  )
}
