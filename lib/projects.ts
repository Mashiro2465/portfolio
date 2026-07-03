export interface ProjectLink {
  label: string
  href: string
  variant: 'filled' | 'outline'
}

export interface Project {
  href: string
  title: string
  category: 'Personal Project' | 'Team Project'
  desc: string
  tags: string[]
  features: string[]
  links: ProjectLink[]
  status: 'in-progress' | 'done'
}

export const projects: Project[] = [
  {
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
        href: 'https://github.com/OZCodingSchool/oz_externship_be_08/tree/develop',
        variant: 'outline',
      },
    ],
    status: 'done',
  },
  {
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
  },
]

export const inProgressProjects: Project[] = [
  {
    href: '#',
    title: 'gg-tournament',
    category: 'Personal Project',
    desc: '누구나 게임 대회를 개설하고 참가비를 걷고 상금을 정산할 수 있는 e스포츠 커뮤니티 플랫폼',
    tags: ['Java', 'Spring Boot'],
    features: ['대회 개설 및 참가비 결제 흐름 설계'],
    links: [],
    status: 'in-progress',
  },
]
