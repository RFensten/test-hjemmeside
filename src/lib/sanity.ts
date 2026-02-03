import { createClient } from '@sanity/client'

export const sanityClient = createClient({
    projectId: 'jpgm97rd',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-01-01',
})

// Fetch all projects
export async function getProjects() {
    return await sanityClient.fetch(`*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    shortDescription,
    link,
    year,
    tags,
    highlight,
    content
  }`)
}

// Fetch homepage content
export async function getHomepage() {
    return await sanityClient.fetch(`*[_type == "homepage"][0] {
    _id,
    welcomeTag,
    heroTitle,
    heroSubtitle,
    heroButtonText,
    "heroImage": heroImage.asset->url,
    content
  }`)
}
