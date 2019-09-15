import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import {Posts} from './posts'

CMS.registerMediaLibrary(cloudinary);

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'github',
      repo: 'ctoogood/johndory',
      branch: 'master',
      squash_merges: true, // @NOTE Beta feature
    },
    media_library: {
      name: 'cloudinary',
      config: {
        cloud_name: 'johndory',
        api_key: '636291184897723',
        default_transformations: [
          [
            {
              width: 2000,
              quality: 80,
              crop: 'limit',
            },
          ],
        ],
      },
    },
    media_folder: '/static/uploads',
    public_folder: '/uploads',
    collections: [Posts]
  },
});