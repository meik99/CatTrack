import CatForm from '@/components/cat-form/CatForm'
import { CatImage } from '@/components/cat-image/CatImage'
import { CatWeightDialogButton } from '@/components/cat-weight/CatWeightDialog'
import { CatWeightTable } from '@/components/cat-weight/CatWeightTable'
import config from '@/payload.config'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'

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
    return null
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
        <CatWeightTable cat={cat}></CatWeightTable>        
        <CatWeightDialogButton cat={cat}></CatWeightDialogButton>
      </div>
    </>
  )
}
