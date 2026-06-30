import Link from 'next/link'

const metrics = [
  { label: '트러블슈팅 케이스', value: '5건' },
  { label: '팀 프로젝트', value: '4건' },
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
    category: '협업 · 도구',
    items: ['Git', 'GitHub', 'TDD', 'uv'],
  },
]

const experiences = [
  {
    company: '주식회사 메가웍스',
    role: '연구원 · 개발팀 (인턴)',
    period: '2024.12 – 2025.03',
    items: [
      '설문 데이터 자동 가공 파이프라인 구축으로 반복 수작업 업무 시간 단축',
      'OpenAI 기반 연구자료 자동 생성 시스템 구축 — 통계자료·표·그래프 생성 자동화',
      '위성 데이터 + 카카오 지도 기반 시각화 기능 개발로 사용자 데이터 이해도 개선',
    ],
  },
]

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
      <section>
        <h1 className="text-4xl font-bold tracking-tight mb-4">김민석</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          데이터 자동화와 백엔드 개발 경험을 통해 실제 업무 효율을 개선한 개발자입니다.
          인턴 경험과 팀 프로젝트를 통해 CI/CD 파이프라인 구축, 서버 인프라 운영,
          API 설계까지 경험했습니다.
        </p>
        <p className="text-sm text-gray-400 mt-3">
          rlaalstjr2465@gmail.com · <a href="https://github.com/Mashiro2465" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/Mashiro2465</a>
        </p>
      </section>

      {/* Key Metrics */}
      <section>
        <h2 className="text-xl font-semibold mb-6">핵심 지표</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {metrics.map(({ label, value }) => (
            <div
              key={label}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-5"
            >
              <div className="text-2xl font-bold">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold mb-6">기술 스택</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {skills.map(({ category, items }) => (
            <div
              key={category}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-5"
            >
              <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xl font-semibold mb-6">경력</h2>
        <div className="space-y-4">
          {experiences.map(({ company, role, period, items }) => (
            <div
              key={company}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{company}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{role}</p>
                </div>
                <span className="text-sm text-gray-400 shrink-0 ml-4">{period}</span>
              </div>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-gray-400 mt-0.5 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-xl font-semibold mb-6">학력</h2>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold">동신대학교</h3>
              <p className="text-sm text-gray-500 mt-0.5">정보보안학과</p>
            </div>
            <span className="text-sm text-gray-400 shrink-0 ml-4">2017.03 – 2023.02</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xl font-semibold mb-6">프로젝트</h2>
        <div className="space-y-3">
          {[
            {
              href: '/projects/travel-maker',
              title: 'TravelMaker',
              desc: '성향 테스트 기반 맞춤형 여행지 추천과 나만의 여행 코스 빌더를 제공하는 여행 플랫폼. pgvector 유사도 검색으로 개인화 추천을 구현했습니다.',
              tags: ['Django', 'pgvector', 'AWS EC2', 'Docker', 'Redis', 'Celery'],
            },
            {
              href: '/projects/oz-externship',
              title: 'OZ Externship',
              desc: 'LMS(학습 관리 시스템) 구축 프로젝트. 계층형 카테고리, QnA 시스템, 관리자 권한 관리를 담당했습니다.',
              tags: ['Django', 'DRF', 'PostgreSQL', 'Docker', 'GitHub Actions'],
            },
          ].map(({ href, title, desc, tags }) => (
            <Link
              key={href}
              href={href}
              className="block border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{desc}</p>
                </div>
                <span className="text-gray-400 text-lg">→</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Troubleshooting Cases */}
      <section id="cases">
        <h2 className="text-xl font-semibold mb-6">트러블슈팅 케이스</h2>
        <div className="space-y-3">
          {cases.map(({ slug, title, tags }) => (
            <Link
              key={slug}
              href={`/cases/${slug}`}
              className="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-lg px-5 py-4 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <span className="font-medium text-sm">{title}</span>
              <div className="flex gap-3">
                {tags.map((t) => (
                  <span key={t} className="text-xs text-gray-400">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
