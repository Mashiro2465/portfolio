import Link from 'next/link'
import Image from 'next/image'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeader } from '@/components/SectionHeader'
import { Badge } from '@/components/Badge'
import { PrintButton } from '@/components/PrintButton'
import { projects, inProgressProjects } from '@/lib/projects'
import { getCaseBySlug } from '@/lib/mdx'
import { heroName, heroIntro, contact, metrics, skills, timeline, caseSlugOrder } from '@/lib/profile'

const focusAreas = [
  {
    title: 'Backend & API',
    description: 'Django/DRF 기반 실무 경험을 바탕으로, Java/Spring Boot 기반 백엔드 개발에도 관심을 넓혀가고 있습니다',
  },
  {
    title: 'Infra & Automation',
    description: 'Docker, CI/CD 기반 배포 자동화 및 운영',
  },
  {
    title: 'Practical Problem-Solving',
    description: '실무 트러블슈팅과 데이터 자동화 파이프라인 구축 경험',
  },
]

const cases = caseSlugOrder.map((slug) => {
  const { frontmatter } = getCaseBySlug(slug)
  return { slug, title: frontmatter.title, tags: frontmatter.tags }
})

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-20">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Backend Developer
          </span>
          <h1 className="text-4xl font-bold tracking-tight mt-2 mb-4">{heroName}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            {heroIntro}
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              이메일 보내기
            </a>
            <PrintButton />
          </div>
        </div>
        <div className="w-72 shrink-0 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="relative w-full aspect-[3/4] rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <Image
              src="/profile.jpg"
              alt="김민석 프로필 사진"
              fill
              sizes="240px"
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="text-xs font-medium text-gray-400 uppercase tracking-widest mt-4">
            Focus
          </div>
          <div className="space-y-3 mt-3">
            {focusAreas.map(({ title, description }) => (
              <div key={title}>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section>
        <SectionHeader
          label="Core Metrics"
          title="핵심 지표"
          description="짧은 기간 동안 쌓아온 경험을 숫자로 정리했습니다."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {metrics.map(({ label, value }) => (
            <div
              key={label}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
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
          description="팀 프로젝트를 통해 백엔드 설계부터 인프라 운영까지 경험한 프로젝트들입니다."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.href} {...project} />
          ))}
        </div>
      </section>

      {/* In Progress */}
      <section>
        <SectionHeader
          label="In Progress"
          title="진행중인 프로젝트"
          description="현재 설계와 개발을 이어가고 있는 프로젝트입니다."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {inProgressProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <SectionHeader
          label="Tech Stack"
          title="기술 스택"
          description="실무와 프로젝트에서 직접 사용하며 익힌 기술들입니다."
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
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
            <div
              key={company}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
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

      {/* Troubleshooting Cases */}
      <section id="cases">
        <SectionHeader
          label="Troubleshooting"
          title="트러블슈팅 케이스"
          description="실무에서 마주친 문제를 원인 분석부터 해결까지 정리했습니다."
        />
        <div className="space-y-3">
          {cases.map(({ slug, title, tags }) => (
            <Link
              key={slug}
              href={`/cases/${slug}`}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border border-gray-200 dark:border-gray-700 rounded-lg px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-900 hover:shadow-md transition-all duration-200"
            >
              <span className="font-medium text-sm">{title}</span>
              <div className="flex flex-wrap gap-3">
                {tags.map((t) => (
                  <Badge key={t} variant="gray" className="text-gray-400 px-2 py-1">
                    {t}
                  </Badge>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
