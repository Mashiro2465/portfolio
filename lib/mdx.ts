import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const casesDir = path.join(process.cwd(), 'content/cases')

export interface CaseFrontmatter {
  title: string
  date: string
  tags: string[]
  summary: string
}

export function getCaseSlugs(): string[] {
  return fs
    .readdirSync(casesDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getCaseBySlug(slug: string): {
  frontmatter: CaseFrontmatter
  content: string
} {
  const filePath = path.join(casesDir, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  return { frontmatter: data as CaseFrontmatter, content }
}
