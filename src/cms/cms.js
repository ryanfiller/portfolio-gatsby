import CMS from 'netlify-cms-app'

// previews
// import PortfolioPreview from './preview/portfolio'

// cms partials
import { blog } from './blog-fields'
import { portfolio } from './portfolio-fields'

import cloudinary from 'netlify-cms-media-library-cloudinary';

import youtube from './editor/youtube.js'
import image from './editor/image.js'

// import styles from './cms.css'
// CMS.registerPreviewStyle(styles.toString(), { raw: true })

CMS.registerMediaLibrary(cloudinary);

CMS.registerEditorComponent(youtube);
CMS.registerEditorComponent(image);

// CMS.registerPreviewTemplate('portfolio', PortfolioPreview);

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'github',
      repo: 'ryanfiller/portfolio-gatsby',
      branch: 'master',
      publish_mode: 'editorial_workflow',
    },
    media_library:{
      name: 'cloudinary',
      config: {
        cloud_name: 'ryanfiller',
        api_key: '244836398385633'
      }
    },
    collections: [
      blog,
      portfolio
    ]
  },
});