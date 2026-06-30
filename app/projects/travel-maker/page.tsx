import Link from 'next/link'

const stack = [
  {
    category: 'Backend',
    items: ['Django', 'DRF', 'pgvector', 'PostgreSQL', 'Redis', 'Celery'],
  },
  {
    category: 'Infra',
    items: ['Docker', 'GitHub Actions', 'AWS EC2 / S3', 'Nginx', 'Gunicorn'],
  },
  {
    category: 'Auth / External',
    items: ['카카오 소셜 로그인', 'JWT'],
  },
  {
    category: 'Monitoring',
    items: ['TimedRotatingFileHandler', 'Celery Flower'],
  },
]

const relatedCases = [
  { slug: 'cicd-migration', title: 'CI/CD 파이프라인 안정화' },
  { slug: 'logging', title: '로그 추적 체계 부재' },
  { slug: 's3-presigned-url', title: 'S3 Presigned URL 보안 개선' },
]

export default function TravelMakerPage() {
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
        <h1 className="text-3xl font-bold mb-3">TravelMaker</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
          여행지를 고르기 어려워하는 사람들을 위해, 성향 테스트 기반 맞춤형 여행지 추천과
          나만의 여행 경로 생성을 제공하는 여행 플랫폼. 12문항 성향 테스트로 산출한 6축 벡터를
          pgvector 기반 코사인 유사도 검색에 매핑하여 개인화된 추천을 제공하고, 일자별 장소·순서를
          편집할 수 있는 코스 빌더 기능을 함께 구현했습니다.
        </p>
        <p className="text-sm text-gray-400 mt-3">
          팀 i(eight) · 2026.05 – 2026.06 ·{' '}
          <a
            href="https://github.com/Ie-ight/travel-maker-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>

      {/* Key Numbers */}
      <section>
        <h2 className="text-xl font-semibold mb-4">프로젝트 개요</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: '진행 기간', value: '2개월' },
            { label: '팀명', value: 'i(eight)' },
            { label: '담당 역할', value: '백엔드 / 인프라' },
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
          {[
            'Django 프로젝트 인프라 설계 및 AWS EC2(t2.micro) 배포·운영 주도',
            'CI/CD 파이프라인 전환 — EC2 직접 빌드(OOM 반복) → GitHub Actions + Docker Hub + EC2 pull 구조',
            'S3 이미지 업로드 구조 개선 — 클라이언트 직접 업로드 → Pre-signed URL 방식으로 보안 강화',
            '서버 운영 — EBS 용량 확장, Swap 증설, gunicorn worker 수 조정, Redis 메모리 관리',
            '로그/모니터링 체계 구축 — TimedRotatingFileHandler(보존 7일), Celery Flower',
            '북마크·공유하기 API 개발',
          ].map((item) => (
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
          {stack.map(({ category, items }) => (
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
      <section>
        <h2 className="text-xl font-semibold mb-4">아키텍처</h2>
        <img
          src="/travel-maker-architecture.jpg"
          alt="TravelMaker 아키텍처 다이어그램"
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700"
        />
      </section>

      {/* User Flow */}
      <section>
        <h2 className="text-xl font-semibold mb-4">유저 플로우</h2>
        <img
          src="/travel-maker-userflow.jpg"
          alt="TravelMaker 유저 플로우"
          className="w-full rounded-xl border border-gray-200 dark:border-gray-700"
        />
      </section>

      {/* Related Troubleshooting Cases */}
      <section>
        <h2 className="text-xl font-semibold mb-4">관련 트러블슈팅</h2>
        <div className="space-y-2">
          {relatedCases.map(({ slug, title }) => (
            <Link
              key={slug}
              href={`/cases/${slug}`}
              className="flex items-center gap-2 text-sm py-2 hover:underline"
            >
              <span className="text-gray-400">→</span>
              {title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
