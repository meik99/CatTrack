import { CollectionConfig } from "payload";
import { relationship } from "payload/shared";

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