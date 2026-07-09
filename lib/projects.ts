export interface ProjectLink {
  label: string
  href: string
  variant: 'filled' | 'outline'
}

export interface StackGroup {
  category: string
  items: string[]
}

export interface Project {
  slug: string
  href: string
  title: string
  category: 'Personal Project' | 'Team Project'
  desc: string
  tags?: string[]
  stackByCategory?: StackGroup[]
  features: string[]
  links: ProjectLink[]
  status: 'in-progress' | 'done'
  team: string
  period: string
  role: string
  longDesc: string
  detailedStack: StackGroup[]
  responsibilities: string[]
  architectureImage?: string
  userFlowImage?: string
  relatedCases?: string[]
}

export const projects: Project[] = [
  {
    slug: 'oz-externship',
    href: '/projects/oz-externship',
    title: 'OZ Externship',
    category: 'Team Project',
    desc: 'LMS(학습 관리 시스템) 구축 프로젝트. 계층형 카테고리, QnA 시스템, 관리자 권한 관리를 담당했습니다.',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    features: [
      '대/중/소 3단계 자기참조형 계층 카테고리 설계',
      'QnA 및 카테고리 관리 기능 구현',
      '관리자 권한 및 인증 로직 구현',
      'API 응답 구조 및 에러 핸들링 설계',
    ],
    links: [
      { label: '상세 보기', href: '/projects/oz-externship', variant: 'filled' },
      {
        label: 'GitHub',
        href: 'https://github.com/OZ-Coding-School/oz_externship_be_08/tree/develop',
        variant: 'outline',
      },
    ],
    status: 'done',
    team: '넥스트러너스',
    period: '2026.04–2026.05',
    role: '백엔드',
    longDesc:
      'LMS(학습 관리 시스템)를 구축하여 교육 운영 전반을 효율적으로 관리하고, 학습자와 운영진 간의 원활한 커뮤니케이션 및 학습 관리 환경을 제공하는 플랫폼. 수강 관리, 쪽지 시험, 커뮤니티, QnA, AI 기반 기능을 포함합니다.',
    detailedStack: [
      { category: 'Backend', items: ['Django', 'DRF', 'PostgreSQL', 'JWT'] },
      { category: 'Infra', items: ['Docker', 'GitHub Actions', 'AWS EC2', 'uv'] },
      { category: 'Admin / Auth', items: ['Django Admin Page', '관리자 권한 분리'] },
      { category: 'Collaboration', items: ['GitHub (브랜치 전략)', '코드 리뷰', 'TDD'] },
    ],
    responsibilities: [
      'QnA 및 카테고리 관리 기능 설계 및 구현',
      '계층형 카테고리 구조 설계 — 대/중/소 3단계 자기참조 모델',
      '관리자 권한 및 인증 로직 구현',
      'API 응답 구조 및 에러 핸들링 로직 설계',
      '테스트 코드 작성 및 예외 케이스 대응',
    ],
    architectureImage: '/oz-externship-architecture.png',
    relatedCases: ['category-hierarchy', 'n1-query'],
  },
  {
    slug: 'travel-maker',
    href: '/projects/travel-maker',
    title: 'TravelMaker',
    category: 'Team Project',
    desc: '성향 테스트 기반 맞춤형 여행지 추천과 나만의 여행 코스 빌더를 제공하는 여행 플랫폼. pgvector 유사도 검색으로 개인화 추천을 구현했습니다.',
    tags: ['Django', 'pgvector', 'AWS EC2', 'Docker', 'Redis', 'Celery'],
    features: [
      '12문항 성향 테스트 기반 pgvector 코사인 유사도 추천',
      '일자별 장소·순서 편집이 가능한 여행 코스 빌더',
      'GitHub Actions + Docker Hub 기반 CI/CD 파이프라인 구축',
      'S3 Pre-signed URL 방식 이미지 업로드 보안 개선',
    ],
    links: [
      { label: '상세 보기', href: '/projects/travel-maker', variant: 'filled' },
      {
        label: 'GitHub',
        href: 'https://github.com/Ie-ight/travel-maker-backend',
        variant: 'outline',
      },
    ],
    status: 'done',
    team: '팀 i(eight)',
    period: '2026.05–2026.06',
    role: '백엔드 / 인프라',
    longDesc:
      '여행지를 고르기 어려워하는 사람들을 위해, 성향 테스트 기반 맞춤형 여행지 추천과 나만의 여행 경로 생성을 제공하는 여행 플랫폼. 12문항 성향 테스트로 산출한 6축 벡터를 pgvector 기반 코사인 유사도 검색에 매핑하여 개인화된 추천을 제공하고, 일자별 장소·순서를 편집할 수 있는 코스 빌더 기능을 함께 구현했습니다.',
    detailedStack: [
      { category: 'Backend', items: ['Django', 'DRF', 'pgvector', 'PostgreSQL', 'Redis', 'Celery'] },
      { category: 'Infra', items: ['Docker', 'GitHub Actions', 'AWS EC2 / S3', 'Nginx', 'Gunicorn'] },
      { category: 'Auth / External', items: ['카카오 소셜 로그인', 'JWT'] },
      { category: 'Monitoring', items: ['TimedRotatingFileHandler', 'Celery Flower'] },
    ],
    responsibilities: [
      'Django 프로젝트 인프라 설계 및 AWS EC2(t2.micro) 배포·운영 주도',
      'CI/CD 파이프라인 전환 — EC2 직접 빌드(OOM 반복) → GitHub Actions + Docker Hub + EC2 pull 구조',
      'S3 이미지 업로드 구조 개선 — 클라이언트 직접 업로드 → Pre-signed URL 방식으로 보안 강화',
      '서버 운영 — EBS 용량 확장, Swap 증설, gunicorn worker 수 조정, Redis 메모리 관리',
      '로그/모니터링 체계 구축 — TimedRotatingFileHandler(보존 7일), Celery Flower',
      '북마크·공유하기 API 개발',
    ],
    architectureImage: '/travel-maker-architecture.jpg',
    userFlowImage: '/travel-maker-userflow.jpg',
    relatedCases: ['cicd-migration', 'logging', 's3-presigned-url'],
  },
]

export const inProgressProjects: Project[] = [
  {
    slug: 'gg-tournament',
    href: '#',
    title: 'gg-tournament',
    category: 'Personal Project',
    desc: '누구나 게임 대회를 개설하고 참가비를 걷고 상금을 정산할 수 있는 e스포츠 커뮤니티 플랫폼',
    stackByCategory: [
      {
        category: 'BACKEND',
        items: ['Java', 'Spring Boot', 'Spring Batch', 'MySQL', 'Redis', 'JWT', '카카오 OAuth2', '토스페이먼츠'],
      },
      { category: 'FRONTEND', items: ['React', 'TypeScript'] },
    ],
    features: ['대회 개설 및 참가비 결제 흐름 설계'],
    links: [],
    status: 'in-progress',
    team: '개인 프로젝트',
    period: '2026.07 – 진행중',
    role: '백엔드',
    longDesc: '누구나 게임 대회를 개설하고 참가비를 걷고 상금을 정산할 수 있는 e스포츠 커뮤니티 플랫폼',
    detailedStack: [{ category: 'Backend', items: ['Java', 'Spring Boot'] }],
    responsibilities: ['대회 개설 및 참가비 결제 흐름 설계'],
  },
]
