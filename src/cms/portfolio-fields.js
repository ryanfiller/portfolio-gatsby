export const portfolio = {
  label: 'Portfolio',
  name: 'portfolio',
  folder: 'src/content/portfolio',
  extension: 'mdx',
  format: 'frontmatter',
  create: true,
  delete: true,
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string' 
    },
    {
      name: 'options',
      label: 'Options',
      widget: 'object',
      fields: [
        {
          name: 'published',
          abel: 'Published',
          widget: 'boolean', 
          default: false
        },
        {
          name: 'custompath',
          label: 'Custom Path',
          widget: 'string', 
          default: '',
          required: false
        },
        {
          name: 'customtemplate',
          label: 'Custom Template',
          widget: 'string',
          default: '', 
          required: false
        },
      ]
    },
    {
      name: 'meta',
      label: 'Meta',
      widget: 'object',
      fields: [
        {
          name: 'date',
          label: 'Date',
          widget: 'date' 
        },
        {
          name: 'category',
          label: 'Category',
          widget: 'select',
          multiple: 'true',
          options: [
            'design',
            'dev',
            'draw'
          ]
        },
        {
          name: 'tags',
          label: 'Tags',
          widget: 'list',
          required: false
        },
      ]
    },
    {
      name: 'client',
      label: 'Client Info',
      widget: 'object',
      fields: [
        {
          name: 'color',
          label: 'Brand Color', 
          widget: 'string'
        },
        {
          name: 'name',
          label: 'Client',
          widget: 'string',
          required: false 
        },
        {
          name: 'website',
          label: 'Client Website', 
          widget: 'string', 
          required: false 
        },
        {
          name: 'logo',
          label: 'Logo',
          widget: 'object',
          fields: [
            {
              name: 'color',
              label: 'Color Logo',
              widget: 'image',
            },
            {
              name: 'white',
              label: 'White Logo',
              widget: 'image',
              required: false 
            },
          ]
        },
      ]
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      widget: 'object',
      fields: [
        {
          name: 'url',
          label: 'Image',
          widget: 'image',
        },
        {
          name: 'alt',
          label: 'Alt',
          widget: 'string',
          required: false,
        }
      ]
    },
    {
      label: 'Slides',
      name: 'slides',
      widget: 'list',
      required: false,
      hint: 'only for old portfolio',
      field: {
        label: 'Slide',
        name: 'slide',
        widget: 'object',
        fields: [
          {
            label: 'Image',
            name: 'image',
            widget: 'image'
          },
          {
            label: 'Alt',
            name: 'alt',
            widget: 'string',
            required: false,
          },
          // {
          //   label: 'Slide Type',
          //   name: 'slidetype',
          //   widget: 'select',
          //   options: [desktop, tablet, phone]
          // }
        ]
      },
    },
    // {
    //   name: 'body',
    //   label: 'Body',
    //   widget: 'markdown' 
    // },
    {
      name: 'body',
      label: 'Body',
      widget: 'mdx' 
    },
  ]
}