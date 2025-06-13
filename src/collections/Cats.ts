import { CollectionConfig } from "payload";

export const Cats: CollectionConfig = {
  slug: "cats",
  admin: {
    useAsTitle: "name"    
  },
  access: {
    read: () => true
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
      name: "avatar",
      hasMany: false,
      relationTo: "media"
    },
    {
      type: "relationship",
      name: "weights",
      hasMany: true,
      relationTo: "weights"
    },
    {
      type: "textarea",
      name: "notes"
    }
  ]
}