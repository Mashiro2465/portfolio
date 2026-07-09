import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { Badge } from '@/components/Badge'

export function ProjectCard({
  title,
  category,
  desc,
  tags,
  stackByCategory,
  features,
  links,
  status,
}: Project) {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
        {category}
      </span>
      <div className="flex items-center gap-2 mt-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        {status === 'in-progress' && (
          <Badge className="px-2 py-0.5">진행중</Badge>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-2">{desc}</p>

      <div className="mt-4">
        {stackByCategory
          ? stackByCategory.map(({ category: stackCategory, items }) => (
              <div key={stackCategory} className="mb-2 last:mb-0">
                <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  {stackCategory}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Badge key={item} className="px-2.5 py-1">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))
          : (
              <div className="flex flex-wrap gap-2">
                {tags?.map((tag) => (
                  <Badge key={tag} className="px-2.5 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
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
