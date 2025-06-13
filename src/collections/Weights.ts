import { CollectionConfig } from "payload";

export const Weights: CollectionConfig = {
  slug: "weights",
  access: {
    read: () => true
  },
  fields: [
    {
      type: "date",
      name: "date",
      defaultValue: new Date(),
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
          displayFormat: "yyyy-mm-dd HH:MM"
        }
      }
    },
    {
      type: "number",
      name: "weight (g)",      
    },
    {
      type: "text",
      name: "comment"
    }
  ]
}