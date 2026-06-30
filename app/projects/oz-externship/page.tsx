import Link from 'next/link'

const stack = [
  {
    category: 'Backend',
    items: ['Django', 'DRF', 'PostgreSQL', 'JWT'],
  },
  {
    category: 'Infra',
    items: ['Docker', 'GitHub Actions', 'AWS EC2', 'uv'],
  },
  {
    category: 'Admin / Auth',
    items: ['Django Admin Page', '관리자 권한 분리'],
  },
  {
    category: '협업 도구',
    items: ['GitHub (브랜치 전략)', '코드 리뷰', 'TDD'],
  },
]

const relatedCases = [
  { slug: 'category-hierarchy', title: '계층형 카테고리 깊이 검증 문제' },
  { slug: 'n1-query', title: '질문 목록 조회 N+1 쿼리 최적화' },
]

export default function OzExternshipPage() {
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
        <h1 className="text-3xl font-bold mb-3">OZ Externship</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl">
          LMS(학습 관리 시스템)를 구축하여 교육 운영 전반을 효율적으로 관리하고,
          학습자와 운영진 간의 원활한 커뮤니케이션 및 학습 관리 환경을 제공하는 플랫폼.
          수강 관리, 쪽지 시험, 커뮤니티, QnA, AI 기반 기능을 포함합니다.
        </p>
        <p className="text-sm text-gray-400 mt-3">
          넥스트러너스 · 2026.04 – 2026.05 ·{' '}
          <a
            href="https://github.com/OZCodingSchool/oz_externship_be_08/tree/develop"
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
            { label: '주관', value: '넥스트러너스' },
            { label: '담당 역할', value: '백엔드' },
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
            'QnA 및 카테고리 관리 기능 설계 및 구현',
            '계층형 카테고리 구조 설계 — 대/중/소 3단계 자기참조 모델',
            '관리자 권한 및 인증 로직 구현',
            'API 응답 구조 및 에러 핸들링 로직 설계',
            '테스트 코드 작성 및 예외 케이스 대응',
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
          src="/oz-externship-architecture.png"
          alt="OZ Externship 아키텍처 다이어그램"
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
