import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// TypeScript types for our Strain schema
export interface Strain {
  _id: string
  _createdAt: string
  name: string
  slug: {
    current: string
  }
  image: SanityImageSource
  type: 'sativa' | 'indica' | 'hybrid'
  profile: string
  flavorNotes?: string[]
  thcContent?: string
  harvestDate?: string
  featured?: boolean
}
