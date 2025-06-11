import { Cat, Weight } from '@/payload-types'
import { CatWeightRow } from './CatWeightRow'

export async function CatWeightTable({ cat }: { cat: Cat }) {
  const sortedWeights = cat.weights
    ?.map((weight: any) => weight as Weight)
    .sort((a, b) => Date.parse(b.date || '0') - Date.parse(a.date || '0')) || []
  
  return (
    <table className="mt-2 w-full border-0 border-spacing-x-4">
      <thead className='w-full'>
        <tr className="w-full text-left">
          <th className="w-1/4">Date</th>
          <th className="w-1/4">Weight (g)</th>
          <th className="w-1/4">Delta Weight (g)</th>
          <th className="w-1/4"></th>
        </tr>
      </thead>
      <tbody>
        { sortedWeights.map((weight: Weight) => {
            const currentIndex = sortedWeights.findIndex(item => weight.id === item.id)
            const previousWeight = currentIndex < sortedWeights.length - 1 ? sortedWeights[currentIndex + 1] : undefined
            
            return <CatWeightRow key={weight.id} weight={weight} cat={cat} previousWeight={previousWeight}></CatWeightRow>
          })}
      </tbody>
    </table>
  )
}
