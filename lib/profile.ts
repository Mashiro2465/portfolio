export const heroName = '김민석'
export const heroTitle = 'Backend Developer'
export const heroIntro =
  '데이터 자동화와 백엔드 개발 경험을 통해 실제 업무 효율을 개선한 개발자입니다. ' +
  '인턴 경험과 팀 프로젝트를 통해 CI/CD 파이프라인 구축, 서버 인프라 운영, API 설계까지 경험했습니다.'

export const contact = {
  github: 'https://github.com/Mashiro2465',
  email: 'rlaalstjr2465@gmail.com',
}

export const metrics = [
  { label: '트러블슈팅 케이스', value: '5건' },
  { label: '팀 프로젝트', value: '2건' },
  { label: '인턴 경력', value: '3개월' },
  { label: '보유 기술', value: '10+' },
]

export const skills = [
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

export type TimelineEntry = {
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

export const timeline = [...timelineEntries].sort((a, b) => a.startDate.localeCompare(b.startDate))

export const caseSlugOrder = [
  'cicd-migration',
  'logging',
  's3-presigned-url',
  'category-hierarchy',
  'n1-query',
]
