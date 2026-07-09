import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'
import { projects } from '@/lib/projects'
import { getCaseBySlug } from '@/lib/mdx'
import { SectionHeader } from '@/components/SectionHeader'
import { Badge } from '@/components/Badge'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {}
  }

  const title = `${project.title} | 김민석`
  const description = project.desc
  const previousImages = (await parent).openGraph?.images ?? []

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/projects/${slug}`,
      images: previousImages,
    },
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const {
    title,
    category,
    longDesc,
    team,
    period,
    role,
    links,
    responsibilities,
    detailedStack,
    architectureImage,
    userFlowImage,
    relatedCases,
  } = project

  const githubLink = links.find((link) => link.label === 'GitHub')

  const relatedCaseItems = (relatedCases ?? []).map((caseSlug) => {
    const { frontmatter } = getCaseBySlug(caseSlug)
    return { slug: caseSlug, title: frontmatter.title }
  })

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-16">
      {/* Header */}
      <div>
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mb-6 block"
        >
          ← 홈
        </Link>
        <span className="text-xs uppercase tracking-widest text-gray-400 block">
          {category ?? 'PROJECT'}
        </span>
        <h1 className="text-3xl font-bold mt-2 mb-3">{title}</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl">{longDesc}</p>
        <div className="flex flex-wrap items-center gap-3 mt-5">
          <span className="text-sm text-gray-400">
            {team} · {period}
          </span>
          {githubLink && (
            <a
              href={githubLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Key Numbers */}
      <section>
        <SectionHeader
          label="OVERVIEW"
          title="프로젝트 개요"
          description="프로젝트의 기본 정보를 정리했습니다."
        />
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: '소속', value: team },
            { label: '진행 기간', value: period },
            { label: '담당 역할', value: role },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="font-bold text-lg">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* My Role */}
      <section>
        <SectionHeader label="RESPONSIBILITIES" title="담당 업무" />
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          {responsibilities.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-gray-400 mt-0.5">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tech Stack */}
      <section>
        <SectionHeader label="TECH STACK" title="기술 스택" />
        <div className="grid sm:grid-cols-2 gap-4">
          {detailedStack.map(({ category: stackCategory, items }) => (
            <div
              key={stackCategory}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                {stackCategory}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item} variant="gray" className="px-2 py-1">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Diagram */}
      {architectureImage && (
        <section>
          <SectionHeader label="ARCHITECTURE" title="아키텍처" />
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <img
              src={architectureImage}
              alt={`${title} 아키텍처 다이어그램`}
              className="w-full"
            />
          </div>
        </section>
      )}

      {/* User Flow */}
      {userFlowImage && (
        <section>
          <SectionHeader label="USER FLOW" title="유저 플로우" />
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <img
              src={userFlowImage}
              alt={`${title} 유저 플로우`}
              className="w-full"
            />
          </div>
        </section>
      )}

      {/* Related Troubleshooting Cases */}
      {relatedCaseItems.length > 0 && (
        <section>
          <SectionHeader label="RELATED CASES" title="관련 트러블슈팅" />
          <div className="space-y-2">
            {relatedCaseItems.map(({ slug: caseSlug, title: caseTitle }) => (
              <Link
                key={caseSlug}
                href={`/cases/${caseSlug}`}
                className="group flex items-center gap-2 text-sm py-2 hover:underline"
              >
                <span className="text-gray-400 transition-transform group-hover:translate-x-1">
                  →
                </span>
                {caseTitle}
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
