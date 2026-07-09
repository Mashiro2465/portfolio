'use client'

import { useEffect, useRef, useState } from 'react'

export function PrintButton() {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  return (
    <div ref={containerRef} className="print:hidden relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-sm px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
      >
        PDF 다운로드
      </button>
      {open && (
        <div className="absolute left-0 mt-2 w-56 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md overflow-hidden z-10">
          <button
            type="button"
            onClick={() => {
              setOpen(false)
              window.print()
            }}
            className="w-full text-left text-sm px-4 py-2.5 whitespace-nowrap hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            요약본 다운로드
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false)
              window.open('/resume', '_blank')
            }}
            className="w-full text-left text-sm px-4 py-2.5 whitespace-nowrap hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-t border-gray-100 dark:border-gray-800"
          >
            상세 포트폴리오 다운로드
          </button>
        </div>
      )}
    </div>
  )
}
