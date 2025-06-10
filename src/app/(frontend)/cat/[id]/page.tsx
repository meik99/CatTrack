import { getPayload } from 'payload'
import config from '@/payload.config'
import { redirect } from 'next/navigation'
import { CatImage } from '@/components/cat-image/CatImage'
import CatForm from '@/components/cat-form/CatForm'

export default async function CatPage({ params }: { params: Promise<{ id: string }> }) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const param = await params
  const cat = await payload.findByID({
    collection: 'cats',
    id: param.id,
    disableErrors: true,
  })

  if (!cat) {
    redirect('/cats')
  }

  return (
    <>
      <div className="mx-8 mt-8 flex flex-row flex-wrap shadow">
        <CatImage cat={cat} className="rounded"></CatImage>

        <div className="flex flex-col ms-4">
          <h2 className="mb-4">
            {cat.name ? cat.name : "'Unnamed'"}{' '}
            {cat.birthday
              ? `- ${new Date(Date.parse(cat.birthday || '')).toLocaleDateString('de')}`
              : ''}
          </h2>

          <CatForm cat={cat}></CatForm>
        </div>
      </div>

      <div className="mx-8 mt-4">
        <h3>Weights</h3>
        <table className="mt-2 w-full md:w-1/3">
          <thead>
            <tr className='text-left'>
              <th>Date</th>
              <th>Weight</th>
            </tr>            
          </thead>
        </table>
      </div>
    </>
  )
}
