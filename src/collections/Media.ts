import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: 'media',
    imageSizes: [
      {
        name: 'icon',
        width: 64,
        height: 64,
        position: 'centre',
        withoutEnlargement: false
      },
      {
        name: 'thumbnail',
        width: 256,
        height: 256,
        position: 'centre',
        withoutEnlargement: false
      },
      {
        name: 'card',
        width: 512,
        height: 512,
        position: 'centre',
        withoutEnlargement: false
      },
      {
        name: 'original',
        width: undefined,
        height: undefined,
        position: 'centre',
        withoutEnlargement: false
      }
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
}
