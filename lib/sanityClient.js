import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'gd0gc8xx',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skVvyFHX56i2KPMuN1uOozjoJTQsxm9ue3TEohI8ogh0w1cOHnbKVf0x2P9VnZLrE7fJeqXo7ywb9XqYb1PEg0LdNNCub5WTmS4uZxKtQatFkU0sA7GkXGD4UnOmZTVC96vmiF1C3n9maSKh9EUXTGANRAWLK0Pd4DWh237JNEmg5qJqpFfx',
  useCdn: false,
})
