export const portfolio = {
  label: 'Portfolio',
  name: 'portfolio',
  folder: 'src/content/portfolio',
  create: true,
  fields: [
    {
      name: 'published',
      abel: 'Published',
      widget: 'boolean', 
      default: false
    },
    {
      name: 'template',
      widget: 'hidden',
      default: 'portfolio-item'
    },

    {
      name: 'title',
      label: 'Title',
      widget: 'string' 
    },
    {
      name: 'path',
      label: 'Url',
      widget: 'string' 
    },
    {
      name: 'date',
      label: 'Date',
      widget: 'date' 
    },

    {
      name: 'category',
      label: 'Category',
      widget: 'list' 
    },
    {
      name: 'tags',
      label: 'Tags',
      widget: 'list',
      required: false
    },
    {
      name: 'client',
      label: 'Client',
      widget: 'string',
      required: false 
    },
    {
      name: 'clienturl',
      label: 'Client Url', 
      widget: 'string', 
      required: false 
    },
    {
      name: 'color',
      label: 'Brand Color', 
      widget: 'string'
    },
    {
      name: 'backgroundgif',
      label: 'Background Gif',
      widget: 'image'
    },
    {
      name: 'gifattribution',
      label: 'Gif Attribution',
      widget: 'string',
      required: false
    },
    {
      name: 'logocolor',
      label: 'Color Logo',
      widget: 'image',
      required: false 
    },
    {
      name: 'logowhite',
      label: 'White Logo',
      widget: 'image'
    },
    // {
    //   label: 'Images',
    //   name: 'images',
    //   widget: 'list',
    //   fields: [
    //     {
    //       label: 'Image',
    //       name: 'image',
    //       widget: 'image'
    //     },
    //     {
    //       label: 'Slide Type',
    //       name: 'slidetype',
    //       widget: 'select',
    //       options: [desktop, tablet, phone]
    //     }
    //   ]
    // },
    {
      name: 'body',
      label: 'Body',
      widget: 'markdown' 
    },
  ]
}