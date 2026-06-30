import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getCaseSlugs, getCaseBySlug, type CaseFrontmatter } from '@/lib/mdx'

export function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params

  let frontmatter: CaseFrontmatter
  let content: string

  try {
    const data = getCaseBySlug(slug)
    frontmatter = data.frontmatter
    content = data.content
  } catch {
    notFound()
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/#cases"
        className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mb-8 inline-block"
      >
        ← 케이스 목록
      </Link>

      <h1 className="text-3xl font-bold mb-2">{frontmatter.title}</h1>
      <p className="text-sm text-gray-400 mb-3">{frontmatter.date}</p>

      {frontmatter.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          {frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {frontmatter.summary && (
        <p className="text-gray-500 dark:text-gray-400 text-sm border-l-2 border-gray-300 dark:border-gray-600 pl-4 mb-10">
          {frontmatter.summary}
        </p>
      )}

      <article className="prose prose-gray dark:prose-invert max-w-none">
        <MDXRemote source={content} />
      </article>
    </main>
  )
}
