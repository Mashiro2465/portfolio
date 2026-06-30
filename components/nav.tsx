import Link from 'next/link'

export function Nav() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center gap-6">
        <Link href="/" className="font-semibold text-sm">
          김민석
        </Link>
        <Link
          href="/projects/travel-maker"
          className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          TravelMaker
        </Link>
        <Link
          href="/projects/oz-externship"
          className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          OZ Externship
        </Link>
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
    </nav>
  )
}
