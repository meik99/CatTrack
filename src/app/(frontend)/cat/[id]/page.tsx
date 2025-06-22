import { uploadImageForCat } from '@/components/cat-form/action'
import CatForm from '@/components/cat-form/CatForm'
import { CatImage } from '@/components/cat-form/CatImage'
import { CatGallery } from '@/components/cat-gallery/CatGallery'
import { GalleryUploadButton } from '@/components/cat-gallery/GallerUploadButton'
import { CatWeightDialogButton } from '@/components/cat-weight/CatWeightDialog'
import { CatWeightTable } from '@/components/cat-weight/CatWeightTable'
import { WeightGraph } from '@/components/cat-weight/WeightGraph'
import { redirect } from 'next/navigation'
import { HeroImage } from './HeroImage'
import moment from 'moment'
import { EditProfileButton } from './EditProfileButton'
import { DisplayNotesField } from './EditNotesField'
import { buildPayload, getUser } from '../../actions'
import CatWeightColumn from '@/components/cat-weight/CatWeightColumn'

export default async function CatPage({ params }: { params: Promise<{ id: string }> }) {
  const payload = await buildPayload()
  const user = await getUser()
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
    <div className="flex flex-col w-full p-8">
      <div className="text-center">
        <HeroImage cat={cat}></HeroImage>
        <h2 className="mt-6">{cat.name ? cat.name : 'Unknown'}</h2>
        Born: {cat.birthday ? `${moment(cat.birthday).format('DD.MM.YYYY')}` : 'Unknown'}
        {user ? (
          <div className="mt-6">
            <EditProfileButton cat={cat}></EditProfileButton>
          </div>
        ) : null}
        <DisplayNotesField cat={cat} user={user}></DisplayNotesField>
      </div>

      <div className="card mt-8 hidden md:block">
        <div className="card-body">
          <h2 className="card-title flex flex-row justify-between">
            Log
            {user ? <CatWeightDialogButton cat={cat}></CatWeightDialogButton> : null}
          </h2>

          <CatWeightTable cat={cat}></CatWeightTable>
        </div>
      </div>

      <div className="card mt-8">
        <div className="card-body">
          <h2 className="card-title">Development</h2>
          <WeightGraph cat={cat}></WeightGraph>
        </div>
      </div>

      <div className="card mt-8">
        <div className="card-body">
          <h2 className="card-title flex flex-row justify-between">
            Gallery
            {user ? <GalleryUploadButton cat={cat}></GalleryUploadButton> : null}
          </h2>
          <CatGallery cat={cat}></CatGallery>
        </div>
      </div>

      <div className="card mt-8 block md:hidden">
        <div className="card-body">
          <h2 className="card-title flex flex-row justify-between">
            Log
            {user ? <CatWeightDialogButton cat={cat}></CatWeightDialogButton> : null}
          </h2>

          <CatWeightColumn cat={cat}></CatWeightColumn>
        </div>
      </div>
    </div>
  )
}
