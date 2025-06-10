import { CollectionConfig } from "payload";

export const Cats: CollectionConfig = {
  slug: "cats",
  admin: {
    useAsTitle: "name"
  },
  fields: [
    {
      type: "text",
      name: "name"
    },
    {
      type: "date",
      name: "birthday",
      admin: {
        date: {
          displayFormat: "yyyy-MM-dd",
          pickerAppearance: "default"
        }
      }
    },
    {
      type: "relationship",
      name: "images",
      hasMany: true,
      relationTo: "media"
    },
    {
      type: "relationship",
      name: "weights",
      hasMany: true,
      relationTo: "weights"
    }
  ]
}