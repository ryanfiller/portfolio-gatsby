// TODO fix title
import React from 'react'
import Image from '../../components/mdx/image'

const image = {
  id: 'image', // this overwrites the default netlifycms image
  label: "Image",
  fields: [
    {
      name: 'url',
      label: 'Image',
      widget: 'image'
    },
    {
      name: 'alt',
      label: 'Alt Text',
      widget: 'string'
    },
    {
      name: 'title',
      label: 'Title Text',
      widget: 'string',
      required: false,
      hint: 'will show as caption'
    },
    {
      name: 'align',
      label: 'Alignment',
      widget: 'select',
      options: [
        'left',
        'center',
        'right',
        'full'
      ],
      default: 'center'
    },
    {
      name: 'small',
      label: 'Small',
      widget: 'boolean',
      default: 'false'
    },
  ],
  pattern: /<Image(.*)/,
  fromBlock: function(match) {
    const string = match[0]
    const obj = {
      url: string.match(/src="(.*?)"/)[1],
      alt: string.match(/alt="(.*?)"/)[1],
      // TODO abstract this function to guard against unrequired fields
      title: string.includes('title') ? string.match(/title="(.*?)"/)[1] : '',
      align: string.match(/align="(.*?)"/)[1],
      small: string.match(/small="(.*?)"/)[1],
    };
    return obj;
  },
  // Function to create a text block from an instance of this component
  // what is actually written in the markdownfile
  toBlock: function(obj) {
    return `<Image src="${obj.url}" alt="${obj.alt}" title="${obj.title}" align="${obj.align}" small="${obj.small}" />`;
  },

  // What is rendered in the netlify editor
  toPreview: function(obj) {
    return (
      <Image src={obj.url} alt={obj.alt} title={obj.title} align={obj.align} small={obj.small} />
    )  
  }
}

export default image