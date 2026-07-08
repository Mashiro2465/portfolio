import Link from 'next/link'
import Image from 'next/image'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeader } from '@/components/SectionHeader'
import { Badge } from '@/components/Badge'
import { PrintButton } from '@/components/PrintButton'
import { projects, inProgressProjects } from '@/lib/projects'

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

const metrics = [
  { label: '트러블슈팅 케이스', value: '5건' },
  { label: '팀 프로젝트', value: '2건' },
  { label: '인턴 경력', value: '3개월' },
  { label: '보유 기술', value: '10+' },
]

const skills = [
  {
    category: 'Backend',
    items: ['Python', 'Django', 'DRF', 'PostgreSQL', 'pgvector', 'Redis', 'Celery'],
  },
  {
    category: 'DevOps / Infra',
    items: ['Docker', 'GitHub Actions', 'AWS EC2', 'AWS S3', 'Nginx', 'Gunicorn', 'Linux'],
  },
  {
    category: 'Auth',
    items: ['JWT', 'OAuth 2.0 (카카오 소셜)'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'TDD', 'uv'],
  },
]

type TimelineEntry = {
  type: '경력' | '교육'
  company: string
  role: string
  period: string
  startDate: string
  items?: string[]
}

const timelineEntries: TimelineEntry[] = [
  {
    type: '교육',
    company: '동신대학교',
    role: '정보보안학과',
    period: '2017.03 – 2023.02',
    startDate: '2017.03',
  },
  {
    type: '교육',
    company: '국제인재개발원',
    role: '자바와 스프링(Spring)+스프링 부트를 적용한 웹 개발자 양성',
    period: '2023.12 – 2024.07',
    startDate: '2023.12',
    items: [
      'HTML/CSS/JavaScript 기반 프론트엔드 개발 학습',
      'Java/JSP·Servlet/MariaDB/Tomcat 기반 백엔드 개발 학습',
      'Spring/Spring Boot 프레임워크를 적용한 실무 웹 개발 학습',
    ],
  },
  {
    type: '경력',
    company: '주식회사 메가웍스',
    role: '연구원 · 개발팀 (인턴)',
    period: '2024.12 – 2025.03',
    startDate: '2024.12',
    items: [
      '설문 데이터 자동 가공 파이프라인 구축으로 반복 수작업 업무 시간 단축',
      'OpenAI 기반 연구자료 자동 생성 시스템 구축 — 통계자료·표·그래프 생성 자동화',
      '위성 데이터 + 카카오 지도 기반 시각화 기능 개발로 사용자 데이터 이해도 개선',
    ],
  },
  {
    type: '교육',
    company: '넥스트러너스평생교육시설',
    role: '초격차 캠프 백엔드 코스',
    period: '2025.12 – 2026.06',
    startDate: '2025.12',
    items: [
      'Python, Django, Flask, FastAPI 기반 백엔드 프레임워크 학습',
      'AWS 클라우드 인프라와 Linux 운영체제 원리 학습',
      'SQL 데이터베이스 및 웹 스크래핑 기법 학습',
    ],
  },
]

const timeline = [...timelineEntries].sort((a, b) => a.startDate.localeCompare(b.startDate))

const cases = [
  {
    slug: 'cicd-migration',
    title: 'CI/CD 파이프라인 안정화',
    tags: ['GitHub Actions', 'Docker', 'AWS EC2'],
  },
  {
    slug: 'logging',
    title: '로그 추적 체계 부재',
    tags: ['Django', 'Celery', 'Linux'],
  },
  {
    slug: 's3-presigned-url',
    title: 'S3 Presigned URL 보안 개선',
    tags: ['AWS S3', 'Django'],
  },
  {
    slug: 'category-hierarchy',
    title: '계층형 카테고리 깊이 검증 문제',
    tags: ['Django', 'DRF', '설계'],
  },
  {
    slug: 'n1-query',
    title: '질문 목록 조회 N+1 쿼리 최적화',
    tags: ['Django', 'ORM', '성능'],
  },
]

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 space-y-20">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Backend Developer
          </span>
          <h1 className="text-4xl font-bold tracking-tight mt-2 mb-4">김민석</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            데이터 자동화와 백엔드 개발 경험을 통해 실제 업무 효율을 개선한 개발자입니다.
            인턴 경험과 팀 프로젝트를 통해 CI/CD 파이프라인 구축, 서버 인프라 운영,
            API 설계까지 경험했습니다.
          </p>
          <div className="flex gap-3 mt-5">
            <a
              href="https://github.com/Mashiro2465"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rlaalstjr2465@gmail.com"
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
