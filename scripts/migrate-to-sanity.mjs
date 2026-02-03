import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const client = createClient({
    projectId: 'jpgm97rd',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_TOKEN, // You'll need to set this
})

// Parse frontmatter from .mdoc files
function parseMdoc(content) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
    const match = content.match(frontmatterRegex)

    if (!match) {
        throw new Error('Invalid .mdoc format')
    }

    const frontmatter = {}
    const lines = match[1].split('\n')
    let currentKey = null
    let currentArray = []

    for (const line of lines) {
        if (line.startsWith('  - ')) {
            // Array item
            currentArray.push(line.substring(4))
        } else if (line.includes(':')) {
            // Save previous array if exists
            if (currentKey && currentArray.length > 0) {
                frontmatter[currentKey] = currentArray
                currentArray = []
            }

            // New key-value pair
            const [key, ...valueParts] = line.split(':')
            const value = valueParts.join(':').trim()
            currentKey = key.trim()

            if (value === 'true') {
                frontmatter[currentKey] = true
            } else if (value === 'false') {
                frontmatter[currentKey] = false
            } else if (value.startsWith("'") && value.endsWith("'")) {
                frontmatter[currentKey] = value.slice(1, -1)
            } else if (value) {
                frontmatter[currentKey] = value
            }
        }
    }

    // Save last array if exists
    if (currentKey && currentArray.length > 0) {
        frontmatter[currentKey] = currentArray
    }

    const body = match[2].trim()
    return { frontmatter, body }
}

// Migrate projects
async function migrateProjects() {
    const projectsDir = path.join(__dirname, '../src/content/projects')
    const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.mdoc'))

    console.log(`Found ${files.length} projects to migrate...`)

    for (const file of files) {
        const filePath = path.join(projectsDir, file)
        const content = fs.readFileSync(filePath, 'utf-8')
        const { frontmatter, body } = parseMdoc(content)
        const slug = file.replace('.mdoc', '')

        const doc = {
            _type: 'project',
            title: frontmatter.title,
            slug: {
                _type: 'slug',
                current: slug,
            },
            shortDescription: frontmatter.shortDescription,
            link: frontmatter.link,
            year: frontmatter.year,
            tags: frontmatter.tags || [],
            highlight: frontmatter.highlight || false,
            content: body,
        }

        try {
            const result = await client.create(doc)
            console.log(`✓ Migrated project: ${frontmatter.title}`)
        } catch (error) {
            console.error(`✗ Failed to migrate ${frontmatter.title}:`, error.message)
        }
    }
}

// Migrate homepage
async function migrateHomepage() {
    const homepagePath = path.join(__dirname, '../src/content/homepage/homepage.mdoc')
    const content = fs.readFileSync(homepagePath, 'utf-8')
    const { frontmatter, body } = parseMdoc(content)

    const doc = {
        _type: 'homepage',
        welcomeTag: frontmatter.welcomeTag,
        heroTitle: frontmatter.heroTitle,
        heroSubtitle: frontmatter.heroSubtitle,
        heroButtonText: frontmatter.heroButtonText,
        content: body,
    }

    try {
        const result = await client.create(doc)
        console.log(`✓ Migrated homepage`)
    } catch (error) {
        console.error(`✗ Failed to migrate homepage:`, error.message)
    }
}

// Run migration
async function migrate() {
    console.log('Starting migration to Sanity...\n')

    await migrateProjects()
    await migrateHomepage()

    console.log('\n✅ Migration complete!')
}

migrate().catch(console.error)
