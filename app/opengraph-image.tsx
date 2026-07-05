import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = '김민석 | 백엔드 개발자'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

const skills = ['Django', 'Java', 'Spring Boot', 'Docker', 'PostgreSQL']

export default async function Image() {
  const profileData = await readFile(join(process.cwd(), 'public/profile.jpg'), 'base64')
  const profileSrc = `data:image/jpeg;base64,${profileData}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#fafafa',
          padding: '0 60px',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: 620, flexShrink: 0 }}>
          <div style={{ fontSize: 88, fontWeight: 700, color: '#111827' }}>
            김민석
          </div>
          <div style={{ fontSize: 34, color: '#6b7280', marginTop: 16 }}>
            Backend Developer
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 40 }}>
            {skills.map((skill) => (
              <div
                key={skill}
                style={{
                  display: 'flex',
                  fontSize: 26,
                  color: '#374151',
                  backgroundColor: '#f3f4f6',
                  borderRadius: 9999,
                  padding: '10px 24px',
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <img
          src={profileSrc}
          width={340}
          height={412}
          style={{
            objectFit: 'cover',
            borderRadius: 24,
            border: '1px solid #e5e7eb',
            flexShrink: 0,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
