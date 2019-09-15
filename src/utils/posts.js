export const Posts = {
    label: 'Posts',
    name: 'posts',
    folder: 'src/content/posts',
    create: true,
    slug: '{{slug}}',
    fields: [
      {
        label: 'Title',
        name: 'title',
        widget: 'string',
      },
      {
        label: 'Location',
        name: 'location',
        widget: 'string',
      },
      {
        label: 'Category',
        name: 'category',
        widget: 'string',
      },
      {
        label: 'Featured Image',
        name: 'featuredImage',
        widget: 'file',
      },
      {
        label: 'Date',
        name: 'date',
        widget: 'date',
        format: 'YYYY-MM-DD',
      },
      {
        label: 'Body',
        name: 'body',
        widget: 'markdown',
      },
    ],
  };