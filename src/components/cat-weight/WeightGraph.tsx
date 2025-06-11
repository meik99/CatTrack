'use client'

import { Cat, Weight } from '@/payload-types'
import { formatBirthday } from '@/utils/format-date'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

export function WeightGraph({ cat }: { cat: Cat }) {
  const sortedWeights =
    cat.weights
      ?.map((weight: any) => weight as Weight)
      .sort((a, b) => Date.parse(a.date || '0') - Date.parse(b.date || '0')) || []
  const data = sortedWeights.map((item) => {
    return { name: formatBirthday(item.date), weight: item['weight (g)'] }
  })

  return (
    <LineChart width={600} height={300} data={data} margin={{ top: 20, right: 0, bottom: 20, left: 0 }}>
      <Line type="monotone" dataKey="weight" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" tick={{ dy: 10 }} />
      <YAxis dataKey="weight" domain={["auto"]} tick={{ dx: -8 }}/>
      <Tooltip />
    </LineChart>
  )
}
