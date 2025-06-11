import { uploadImageForCat } from '@/components/cat-form/action'
import CatForm from '@/components/cat-form/CatForm'
import { CatImage } from '@/components/cat-form/CatImage'
import { CatGallery } from '@/components/cat-gallery/CatGallery'
import { GalleryUploadButton } from '@/components/cat-gallery/GallerUploadButton'
import { CatWeightDialogButton } from '@/components/cat-weight/CatWeightDialog'
import { CatWeightTable } from '@/components/cat-weight/CatWeightTable'
import { WeightGraph } from '@/components/cat-weight/WeightGraph'
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
    <div className="flex flex-col w-full p-8">
      <div className="flex flex-row flex-wrap md:flex-nowrap shadow">
        <CatImage cat={cat} className="rounded max-h-[256px]"></CatImage>

        <div className="flex flex-col px-4 py-2 w-full">
          <h2>
            {cat.name ? cat.name : "'Unnamed'"}{' '}
            {cat.birthday
              ? `- ${new Date(Date.parse(cat.birthday || '')).toLocaleDateString('de')}`
              : ''}
          </h2>

          <CatForm cat={cat}></CatForm>
        </div>
      </div>

      <div className="mx-8 mt-8">
        <h3>Weights</h3>
        <CatWeightDialogButton cat={cat}></CatWeightDialogButton>
        <CatWeightTable cat={cat}></CatWeightTable>
      </div>

      <div className="mx-6 mt-6 shadow p-2">
        <h3>Development</h3>
        <WeightGraph cat={cat}></WeightGraph>
      </div>
      
      <div className="mx-8 mt-8">
        <div className='flex flex-row gap-4 align-baseline items-baseline mb-2'>
          <h3>Gallery</h3>
          <GalleryUploadButton cat={cat}></GalleryUploadButton>
        </div>
        <CatGallery cat={cat}></CatGallery>
      </div>
    </div>
  )
}
