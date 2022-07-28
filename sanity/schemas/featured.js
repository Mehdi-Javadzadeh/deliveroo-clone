export default {
  name: "featured",
  type: "document",
  title: "Featured Menu categories",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Featured Categories name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.required(200),
    },
    {
      name: "restaurants",
      type: "array",
      title: "Restaurants",
      of: [{ type: "reference", to: [{ type: "restaurant" }] }],
    },
  ],
};
