import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

const processor = remark()
  .use(remarkGfm)
  .use(remarkHtml, { sanitize: false })
  .use(rehypeHighlight)

export interface MarkdownFile {
  slug: string
  name: string
  content: string
  frontmatter: Record<string, any>
}

export function getMarkdownFiles(directory: string): MarkdownFile[] {
  const files = readdirSync(directory)
  const markdownFiles: MarkdownFile[] = []

  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = join(directory, file)
      const fileContent = readFileSync(filePath, 'utf8')
      const { data: frontmatter, content } = matter(fileContent)
      
      // Process markdown content to HTML
      const processedContent = processor.processSync(content).toString()
      
      markdownFiles.push({
        slug: file.replace('.md', ''),
        name: file,
        content: processedContent,
        frontmatter
      })
    }
  }

  return markdownFiles
}

export function getMarkdownFile(directory: string, slug: string): MarkdownFile | null {
  const filePath = join(directory, `${slug}.md`)
  try {
    const fileContent = readFileSync(filePath, 'utf8')
    const { data: frontmatter, content } = matter(fileContent)
    
    // Process markdown content to HTML
    const processedContent = processor.processSync(content).toString()
    
    return {
      slug,
      name: `${slug}.md`,
      content: processedContent,
      frontmatter
    }
  } catch (error) {
    return null
  }
}
