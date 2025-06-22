import { getUser } from '@/app/(frontend)/actions'
import { Cat, Weight } from '@/payload-types'
import { formatBirthday } from '@/utils/format-date'

export default async function CatWeightColumn({ cat }: { cat: Cat }) {
  const sortedWeights =
    cat.weights
      ?.map((weight: any) => weight as Weight)
      .sort((a, b) => Date.parse(b.date || '0') - Date.parse(a.date || '0')) || []
  const user = await getUser()

  return (
    <div className="flex flex-col">
      {sortedWeights.map((weight) => {
        const currentIndex = sortedWeights.findIndex((item) => weight.id === item.id)
        const previousWeight =
          currentIndex < sortedWeights.length - 1 ? sortedWeights[currentIndex + 1] : undefined

        return (
          <div key={weight.id}>
            <div className="flex flex-row flex-wrap">
              <div className="input-group w-full">
                <label>Date</label>
                {formatBirthday(weight.date)}
              </div>

              <div className="input-group w-1/2">
                <label>Weight (g)</label>
                {weight['weight (g)']}
              </div>

              <div className="input-group w-1/2 text-end">
                <label>Delta (g)</label>
                {previousWeight && previousWeight['weight (g)'] && weight['weight (g)']
                  ? weight['weight (g)'] - previousWeight['weight (g)']
                  : 0}
              </div>

              {weight.comment ? (
                <div className="input-group w-full">
                  <label>Comment</label>
                  {weight.comment}
                </div>
              ) : null}
            </div>

            <hr className="my-4"></hr>
          </div>
        )
      })}
    </div>
  )
}
