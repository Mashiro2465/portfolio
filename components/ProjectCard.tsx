import Link from 'next/link'
import type { Project } from '@/lib/projects'

export function ProjectCard({ title, category, desc, tags, features, links, status }: Project) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
        {category}
      </span>
      <div className="flex items-center gap-2 mt-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        {status === 'in-progress' && (
          <span className="text-xs bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 px-2 py-0.5 rounded-full">
            진행중
          </span>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-2">{desc}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-300 px-2.5 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <ul className="space-y-1.5 mt-4">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="text-gray-400 mt-0.5 shrink-0">·</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
          {links.map(({ label, href, variant }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={
                variant === 'filled'
                  ? 'text-sm px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors'
                  : 'text-sm px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors'
              }
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
