import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs'
import { join } from 'path'
import { getMarkdownFiles } from '../lib/markdown'
import matter from 'gray-matter'

// Ensure data directory exists
const dataDir = join(process.cwd(), 'data')
const contentDir = join(process.cwd(), 'content')
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true })
}

// Build blog data
function buildBlogData() {
  const blogDir = join(process.cwd(), 'content', 'blog')
  const markdownFiles = getMarkdownFiles(blogDir)
  
  const blogPosts = markdownFiles.map((file, index) => ({
    id: index + 1,
    title: file.frontmatter.title,
    excerpt: file.frontmatter.excerpt,
    date: file.frontmatter.date,
    readTime: file.frontmatter.readTime,
    image: file.frontmatter.image || null,
    slug: file.slug,
    tags: file.frontmatter.tags || [],
    content: file.content
  }))

  const blogDataContent = `// This file is auto-generated. Do not edit manually.
// Run 'pnpm run build:content' to regenerate.

export type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  tags: string[]
  image?: string | null
  content?: string
}

export const allBlogPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)}

// Get featured blog posts (top 3)
export const featuredBlogPosts = allBlogPosts.slice(0, 3)

export default {
  allBlogPosts,
  featuredBlogPosts,
}
`

  writeFileSync(join(dataDir, 'blog-data.ts'), blogDataContent)
  console.log('✅ Blog data built successfully')
}

// Build projects data
function buildProjectsData() {
  const projectsDir = join(process.cwd(), 'content', 'projects')
  const markdownFiles = getMarkdownFiles(projectsDir)
  
  // Filter out template files
  const validProjectFiles = markdownFiles.filter(file => 
    file.name && !file.name.includes('template') && 
    file.name.startsWith('project-') &&
    // Skip language-suffixed variants like *.zh.md
    !file.name.endsWith('.zh')
  )
  
  const projects = validProjectFiles.map((file, index) => ({
    id: index + 1,
    title: file.frontmatter.title,
    description: file.frontmatter.description,
    image: file.frontmatter.image || null,
    tags: file.frontmatter.tags || [],
    github: file.frontmatter.github,
    demo: file.frontmatter.demo || null,
    content: file.content
  }))

  const projectsDataContent = `// This file is auto-generated. Do not edit manually.
// Run 'pnpm run build:content' to regenerate.

export type Project = {
  id: number
  title: string
  description: string
  image?: string | null
  tags: string[]
  github: string
  demo: string | null
  content?: string
}

const projects: Project[] = ${JSON.stringify(projects, null, 2)}

export const featuredProjects = [projects[0], projects[1], projects[2]]

export default {
  projects,
  featuredProjects,
}
`

  writeFileSync(join(dataDir, 'projects-data.ts'), projectsDataContent)
  console.log('✅ Projects data built successfully')
}

// Build bilingual projects data (expects optional *.zh.md counterparts)
function buildProjectsI18nData() {
  const projectsDir = join(process.cwd(), 'content', 'projects')
  const markdownFiles = getMarkdownFiles(projectsDir)

  const byBase: Record<string, any> = {}
  for (const file of markdownFiles) {
    const isTemplate = file.name && (file.name.includes('template') || !file.name.startsWith('project-'))
    if (isTemplate) continue
    // Prefer single-file bilingual frontmatter: *_zh
    const isZhVariant = file.name.endsWith('.zh')
    const baseName = isZhVariant ? file.name.replace(/\.zh$/, '') : file.name
    if (!byBase[baseName]) byBase[baseName] = {}

    const fm: any = file.frontmatter || {}
    const enEntry = {
      title: fm.title_en ?? fm.title,
      description: fm.description_en ?? fm.description,
      image: fm.image || null,
      tags: fm.tags_en ?? fm.tags ?? [],
      github: fm.github,
      demo: fm.demo || null,
      content: file.content,
    }
    const zhEntryFromSame = (fm.title_zh || fm.description_zh || fm.tags_zh)
      ? {
          title: fm.title_zh ?? fm.title,
          description: fm.description_zh ?? fm.description,
          image: fm.image || null,
          tags: fm.tags_zh ?? fm.tags ?? [],
          github: fm.github,
          demo: fm.demo || null,
          content: file.content,
        }
      : undefined

    if (zhEntryFromSame) {
      byBase[baseName].en = enEntry
      byBase[baseName].zh = zhEntryFromSame
      continue
    }

    // Fallback to separate zh file variant
    byBase[baseName][isZhVariant ? 'zh' : 'en'] = enEntry
  }

  const bases = Object.keys(byBase)
  const projectsEn = bases.map((base, idx) => ({ id: idx + 1, ...(byBase[base].en || byBase[base].zh) }))
  const projectsZh = bases.map((base, idx) => ({ id: idx + 1, ...(byBase[base].zh || byBase[base].en) }))

  const content = `// This file is auto-generated. Do not edit manually.
// Run 'pnpm run build:content' to regenerate.

import type { Project } from './projects-data'

export const projectsEn: Project[] = ${JSON.stringify(projectsEn, null, 2)}
export const projectsZh: Project[] = ${JSON.stringify(projectsZh, null, 2)}

export function getProjectsData(lang: 'en' | 'zh') {
  const projects = lang === 'zh' ? projectsZh : projectsEn
  const featuredProjects = [projects[0], projects[1], projects[2]]
  return { projects, featuredProjects }
}
`

  writeFileSync(join(dataDir, 'projects-i18n.ts'), content)
  console.log('✅ Projects i18n data built successfully')
}


// Build home data from home.md
function buildHomeData() {
  console.log('📄 Building home data...')
  
  const homeFile = join(contentDir, 'home.md')
  if (!existsSync(homeFile)) {
    console.error('❌ home.md file not found!')
    process.exit(1)
  }
  
  const fileContent = readFileSync(homeFile, 'utf-8')
  const { data: rawData } = matter(fileContent)
  
  // Process education data
  const processEducation = (educationData: any[]) => {
    if (!educationData || !Array.isArray(educationData)) return []
    
    return educationData.map((edu: any) => ({
      degree: edu.degree_en ?? edu.degree_zh ?? edu.degree,
      school: edu.school_en ?? edu.school_zh ?? edu.school,
      period: edu.period,
      gpa: edu.gpa_en ?? edu.gpa_zh ?? edu.gpa,
      description: edu.description_en ?? edu.description_zh ?? edu.description,
      courses: edu.courses_en ?? edu.courses_zh ?? edu.courses,
    }))
  }
  
  const homeData = {
    name: rawData.name_en ?? rawData.name_zh ?? rawData.name,
    title: rawData.title_en ?? rawData.title_zh ?? rawData.title,
    location: rawData.location_en ?? rawData.location_zh ?? rawData.location,
    email: rawData.email,
    github: rawData.github,
    linkedin: rawData.linkedin,
    education: processEducation(rawData.education),
    about: rawData.about_en ?? rawData.about_zh ?? rawData.about,
    contact: rawData.contact ? {
      title: rawData.contact.title_en ?? rawData.contact.title_zh ?? rawData.contact.title,
      description: rawData.contact.description_en ?? rawData.contact.description_zh ?? rawData.contact.description,
      email: rawData.contact.email,
      location: rawData.contact.location_en ?? rawData.contact.location_zh ?? rawData.contact.location,
      github: rawData.contact.github,
      linkedin: rawData.contact.linkedin,
    } : rawData.contact,
  }
  
  const homeDataContent = `// This file is auto-generated. Do not edit manually.
// Run 'pnpm run build:content' to regenerate.

export type HomeData = {
  name: string
  title: string
  location: string
  email: string
  github: string
  linkedin: string
  education: Array<{
    degree: string
    school: string
    period: string
    gpa: string
    description: string
    courses: string[]
  }>
  about: string
  contact: {
    title: string
    description: string
    email: string
    location: string
    github: string
    linkedin: string
  }
}

export const homeData: HomeData = ${JSON.stringify(homeData, null, 2)}
`
  
  writeFileSync(join(dataDir, 'home-data.ts'), homeDataContent)
  console.log('✅ Home data built successfully!')
}

// Build bilingual home data (home.md + optional home.zh.md)
function buildHomeI18nData() {
  const enFile = join(contentDir, 'home.md')
  const zhFile = join(contentDir, 'home.zh.md')
  if (!existsSync(enFile)) {
    console.error('❌ home.md file not found!')
    process.exit(1)
  }
  const raw = matter(readFileSync(enFile, 'utf-8')).data as any
  
  // Process education data with _en and _zh suffixes
  const processEducation = (educationData: any[], useZh: boolean) => {
    if (!educationData || !Array.isArray(educationData)) return []
    
    return educationData.map((edu: any) => ({
      degree: useZh ? (edu.degree_zh ?? edu.degree_en ?? edu.degree) : (edu.degree_en ?? edu.degree_zh ?? edu.degree),
      school: useZh ? (edu.school_zh ?? edu.school_en ?? edu.school) : (edu.school_en ?? edu.school_zh ?? edu.school),
      period: edu.period,
      gpa: useZh ? (edu.gpa_zh ?? edu.gpa_en ?? edu.gpa) : (edu.gpa_en ?? edu.gpa_zh ?? edu.gpa),
      description: useZh ? (edu.description_zh ?? edu.description_en ?? edu.description) : (edu.description_en ?? edu.description_zh ?? edu.description),
      courses: useZh ? (edu.courses_zh ?? edu.courses_en ?? edu.courses) : (edu.courses_en ?? edu.courses_zh ?? edu.courses),
    }))
  }
  
  // Build EN preferring *_en
  const en = {
    ...raw,
    name: raw.name_en ?? raw.name,
    title: raw.title_en ?? raw.title,
    location: raw.location_en ?? raw.location,
    about: raw.about_en ?? raw.about,
    education: processEducation(raw.education, false),
    contact: raw.contact
      ? {
          ...raw.contact,
          title: raw.contact.title_en ?? raw.contact.title,
          description: raw.contact.description_en ?? raw.contact.description,
          location: raw.contact.location_en ?? raw.contact.location,
        }
      : raw.contact,
  }
  
  // Build ZH from raw overrides (about_zh/location_zh/contact.title_zh/contact.description_zh)
  const zhFromSame = {
    ...raw,
    name: raw.name_zh ?? (raw.name_en ?? raw.name),
    title: raw.title_zh ?? (raw.title_en ?? raw.title),
    about: raw.about_zh ?? (raw.about_en ?? raw.about),
    location: raw.location_zh ?? (raw.location_en ?? raw.location),
    education: processEducation(raw.education, true),
    contact: raw.contact
      ? {
          ...raw.contact,
          title: raw.contact.title_zh ?? (raw.contact.title_en ?? raw.contact.title),
          description: raw.contact.description_zh ?? (raw.contact.description_en ?? raw.contact.description),
          location: raw.contact.location_zh ?? (raw.contact.location_en ?? raw.contact.location),
        }
      : raw.contact,
  }
  const zh = existsSync(zhFile) ? matter(readFileSync(zhFile, 'utf-8')).data : zhFromSame

  const out = `// This file is auto-generated. Do not edit manually.
// Run 'pnpm run build:content' to regenerate.

import type { HomeData } from './home-data'

export const homeEn: HomeData = ${JSON.stringify(en, null, 2)}
export const homeZh: HomeData = ${JSON.stringify(zh, null, 2)}

export function getHomeData(lang: 'en' | 'zh') {
  return lang === 'zh' ? homeZh : homeEn
}
`
  writeFileSync(join(dataDir, 'home-i18n.ts'), out)
  console.log('✅ Home i18n data built successfully!')
}

// Main build function
function buildContent() {
  console.log('🚀 Building content from Markdown files...')
  
  try {
    buildHomeData()
    buildHomeI18nData()
    buildBlogData()
    buildProjectsData()
    buildProjectsI18nData()
    console.log('🎉 All content built successfully!')
  } catch (error) {
    console.error('❌ Error building content:', error)
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  buildContent()
}

export { buildContent }
