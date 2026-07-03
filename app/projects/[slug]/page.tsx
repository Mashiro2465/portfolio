import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/projects'
import { getCaseBySlug } from '@/lib/mdx'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const {
    title,
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
          className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mb-6 inline-block"
        >
          ← 홈
        </Link>
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl">{longDesc}</p>
        <p className="text-sm text-gray-400 mt-3">
          {team} · {period}
          {githubLink && (
            <>
              {' · '}
              <a
                href={githubLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </>
          )}
        </p>
      </div>

      {/* Key Numbers */}
      <section>
        <h2 className="text-xl font-semibold mb-4">프로젝트 개요</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: '소속', value: team },
            { label: '진행 기간', value: period },
            { label: '담당 역할', value: role },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-5"
            >
              <div className="font-bold text-lg">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* My Role */}
      <section>
        <h2 className="text-xl font-semibold mb-4">담당 업무</h2>
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
        <h2 className="text-xl font-semibold mb-4">기술 스택</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {detailedStack.map(({ category, items }) => (
            <div
              key={category}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-5"
            >
              <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                {category}
              </div>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Diagram */}
      {architectureImage && (
        <section>
          <h2 className="text-xl font-semibold mb-4">아키텍처</h2>
          <img
            src={architectureImage}
            alt={`${title} 아키텍처 다이어그램`}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700"
          />
        </section>
      )}

      {/* User Flow */}
      {userFlowImage && (
        <section>
          <h2 className="text-xl font-semibold mb-4">유저 플로우</h2>
          <img
            src={userFlowImage}
            alt={`${title} 유저 플로우`}
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700"
          />
        </section>
      )}

      {/* Related Troubleshooting Cases */}
      {relatedCaseItems.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">관련 트러블슈팅</h2>
          <div className="space-y-2">
            {relatedCaseItems.map(({ slug: caseSlug, title: caseTitle }) => (
              <Link
                key={caseSlug}
                href={`/cases/${caseSlug}`}
                className="flex items-center gap-2 text-sm py-2 hover:underline"
              >
                <span className="text-gray-400">→</span>
                {caseTitle}
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
