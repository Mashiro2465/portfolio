import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { SectionHeader } from '@/components/SectionHeader'
import { Badge } from '@/components/Badge'
import { ProjectCard } from '@/components/ProjectCard'
import { PrintOnLoad } from '@/components/PrintOnLoad'
import { projects, inProgressProjects, type Project } from '@/lib/projects'
import { getCaseBySlug } from '@/lib/mdx'
import {
  heroName,
  heroTitle,
  heroIntro,
  contact,
  metrics,
  skills,
  timeline,
  caseSlugOrder,
} from '@/lib/profile'

export const metadata = {
  title: `이력서 | ${heroName}`,
  robots: { index: false, follow: false },
}

const allProjects: Project[] = [...projects, ...inProgressProjects]

const cases = caseSlugOrder.map((slug) => ({ slug, ...getCaseBySlug(slug) }))

function ProjectDetail({ project }: { project: Project }) {
  const { title, team, period, role, responsibilities, detailedStack, architectureImage, userFlowImage } =
    project

  return (
    <div className="space-y-8 print:space-y-4">
      <ProjectCard {...project} />

      <div className="break-inside-avoid">
        <SectionHeader label="OVERVIEW" title={`${title} — 프로젝트 개요`} />
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: '소속', value: team },
            { label: '진행 기간', value: period },
            { label: '담당 역할', value: role },
          ].map(({ label, value }) => (
            <div key={label} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
              <div className="font-bold text-lg">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="break-inside-avoid">
        <SectionHeader label="RESPONSIBILITIES" title="담당 업무" />
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          {responsibilities.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-gray-400 mt-0.5">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="break-inside-avoid">
        <SectionHeader label="TECH STACK" title="기술 스택" />
        <div className="grid sm:grid-cols-2 gap-4">
          {detailedStack.map(({ category: stackCategory, items }) => (
            <div key={stackCategory} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
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
      </div>

      {architectureImage && (
        <div className="break-inside-avoid">
          <SectionHeader label="ARCHITECTURE" title="아키텍처" />
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <img src={architectureImage} alt={`${title} 아키텍처 다이어그램`} className="w-full" />
          </div>
        </div>
      )}

      {userFlowImage && (
        <div className="break-inside-avoid">
          <SectionHeader label="USER FLOW" title="유저 플로우" />
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <img src={userFlowImage} alt={`${title} 유저 플로우`} className="w-full" />
          </div>
        </div>
      )}
    </div>
  )
}

export default function ResumePage() {
  return (
    <>
      <PrintOnLoad />
      <main className="max-w-4xl mx-auto px-4 py-16 space-y-16 print:space-y-8">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 block print:hidden"
        >
          ← 홈으로 돌아가기
        </Link>

        {/* Hero */}
        <section className="break-inside-avoid">
          <span className="text-xs uppercase tracking-widest text-gray-400">{heroTitle}</span>
          <h1 className="text-4xl font-bold tracking-tight mt-2 mb-4">{heroName}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            {heroIntro}
          </p>
          <div className="flex gap-4 mt-4 text-sm text-gray-500">
            <span>{contact.email}</span>
            <span>{contact.github}</span>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="break-inside-avoid">
          <SectionHeader
            label="Core Metrics"
            title="핵심 지표"
            description="짧은 기간 동안 쌓아온 경험을 숫자로 정리했습니다."
          />
          <div className="grid grid-cols-4 gap-4">
            {metrics.map(({ label, value }) => (
              <div key={label} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <div className="text-2xl font-bold">{value}</div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <SectionHeader
            label="Projects"
            title="프로젝트"
            description="완료된 프로젝트와 진행중인 프로젝트를 상세 내용까지 포함해 정리했습니다."
          />
          <div className="space-y-16 print:space-y-8">
            {allProjects.map((project) => (
              <ProjectDetail key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="break-inside-avoid">
          <SectionHeader
            label="Tech Stack"
            title="기술 스택"
            description="실무와 프로젝트에서 직접 사용하며 익힌 기술들입니다."
          />
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map(({ category, items }) => (
              <div key={category} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                  {category}
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

        {/* Experience & Education */}
        <section>
          <SectionHeader
            label="Experience"
            title="경력 및 학력"
            description="인턴으로 실무를 경험하고, 정보보안을 전공하며 개발의 기초를 다졌습니다."
          />
          <div className="space-y-4">
            {timeline.map(({ type, company, role, period, items }) => (
              <div key={company} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 break-inside-avoid">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{company}</h3>
                      <Badge variant={type === '경력' ? 'blue' : 'gray'} className="px-2 py-0.5">
                        {type}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">{role}</p>
                  </div>
                  <span className="text-sm text-gray-400 shrink-0 ml-4">{period}</span>
                </div>
                {items && (
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-gray-400 mt-0.5 shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Troubleshooting Cases — full content */}
        <section>
          <SectionHeader
            label="Troubleshooting"
            title="트러블슈팅 케이스"
            description="실무에서 마주친 문제를 원인 분석부터 해결까지 정리했습니다."
          />
          <div className="space-y-16 print:space-y-8">
            {cases.map(({ slug, frontmatter, content }) => (
              <article key={slug}>
                <div className="break-inside-avoid">
                  <span className="text-xs uppercase tracking-widest text-gray-400 block">CASE</span>
                  <h3 className="text-2xl font-bold mt-2 mb-2">{frontmatter.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{frontmatter.date}</p>
                  {frontmatter.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {frontmatter.tags.map((tag) => (
                        <Badge key={tag} variant="gray" className="px-2 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {frontmatter.summary && (
                    <p className="text-gray-500 dark:text-gray-400 text-sm border-l-2 border-gray-300 dark:border-gray-600 pl-4 mb-8">
                      {frontmatter.summary}
                    </p>
                  )}
                </div>
                <div className="prose prose-gray dark:prose-invert max-w-none prose-sm">
                  <MDXRemote source={content} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
