import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata, ResolvingMetadata } from 'next'
import { getCaseSlugs, getCaseBySlug, type CaseFrontmatter } from '@/lib/mdx'
import { Badge } from '@/components/Badge'

export function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params

  let frontmatter: CaseFrontmatter
  try {
    frontmatter = getCaseBySlug(slug).frontmatter
  } catch {
    return {}
  }

  const title = `${frontmatter.title} | 김민석`
  const description = frontmatter.summary
  const previousImages = (await parent).openGraph?.images ?? []

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/cases/${slug}`,
      images: previousImages,
    },
  }
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
        className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mb-8 block"
      >
        ← 케이스 목록
      </Link>

      <span className="text-xs uppercase tracking-widest text-gray-400 block">
        CASE
      </span>
      <h1 className="text-3xl font-bold mt-2 mb-2">{frontmatter.title}</h1>
      <p className="text-sm text-gray-400 mb-3">{frontmatter.date}</p>

      {frontmatter.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          {frontmatter.tags.map((tag) => (
            <Badge key={tag} variant="gray" className="px-2 py-1">
              {tag}
            </Badge>
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
