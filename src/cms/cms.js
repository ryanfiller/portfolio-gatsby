import React from 'react'
import CMS from 'netlify-cms-app'
import cloudinary from 'netlify-cms-media-library-cloudinary';

import { blog } from './blog-fields'
import { portfolio } from './portfolio-fields'

import { TestControl, TestPreview } from './widget/test.js'

import youtube from './editor/youtube.js'

// CMS.registerWidget('test', TestControl, TestPreview);

CMS.registerEditorComponent(youtube);
CMS.registerMediaLibrary(cloudinary);

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'github',
      repo: 'ryanfiller/portfolio-gatsby',
      branch: 'master',
      publish_mode: 'editorial_workflow',
    },
    // media_library: {
    //   name: 'cloudinary',
    //   config: {
    //     cloud_name: 'your_name',
    //     api_key: 'YOUR_API_KEY_HERE',
    //     default_transformations: [
    //       [
    //         {
    //           width: 2000,
    //           quality: 80,
    //           crop: 'limit',
    //         },
    //       ],
    //     ],
    //   },
    // },
    media_folder: 'static/images/uploads',
    public_folder: 'images/uploads',
    collections: [
      // blog,
      portfolio
    ]
  },
});