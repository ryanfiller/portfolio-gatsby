export const blog = {
  label: 'Blog',
  name: 'blog',
  folder: 'src/content/blog',
  create: true,
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
    },
    
    { 
      label: 'Published',
      name: 'published',
      widget: 'boolean',
      default: false
    },
    { 
      widget: 'hidden',
      name: 'template',
      default: 'blog-item'
    },
    
    { 
      label: 'Title',
      name: 'title',
      widget: 'string' 
    },
    { 
      label: 'excerpt',
      name: 'excerpt',
      widget: 'text' 
    },
    { 
      label: 'Banner',
      name: 'banner',
      widget: 'image' 
    },
    { 
      label: 'Url',
      name: 'path',
      widget: 'string' 
    },
    { 
      label: 'Date',
      name: 'date',
      widget: 'date' 
    },
    
    { 
      label: 'Category',
      name: 'category',
      widget: 'string',
      required: false 
    },
    { 
      label: 'Tags',
      name: 'tags',
      widget: 'list',
      required: false
    },
    
    { 
      label: 'Body',
      name: 'body',
      widget: 'markdown' 
    },
  ],
};