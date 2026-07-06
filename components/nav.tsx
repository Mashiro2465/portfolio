'use client'

import { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/projects'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="print:hidden border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between md:justify-start md:gap-6">
        <Link href="/" className="font-semibold text-sm">
          김민석
        </Link>

        <div className="hidden md:flex md:flex-1 items-center gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.href}
              className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              {project.title}
            </Link>
          ))}
          <Link
            href="/#cases"
            className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Cases
          </Link>
          <a
            href="https://github.com/Mashiro2465"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            GitHub
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴 열기"
          aria-expanded={open}
          className="md:hidden p-2 -mr-2 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" d="M2.5 5h15M2.5 10h15M2.5 15h15" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 px-4 py-3 flex flex-col gap-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.href}
              onClick={() => setOpen(false)}
              className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              {project.title}
            </Link>
          ))}
          <Link
            href="/#cases"
            onClick={() => setOpen(false)}
            className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Cases
          </Link>
          <a
            href="https://github.com/Mashiro2465"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  )
}
