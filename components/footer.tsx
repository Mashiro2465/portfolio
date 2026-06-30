export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="text-sm text-gray-400">© 2026 김민석</span>
        <div className="flex gap-4 text-sm text-gray-400">
          <a
            href="mailto:rlaalstjr2465@gmail.com"
            className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            rlaalstjr2465@gmail.com
          </a>
          <a
            href="https://github.com/Mashiro2465"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
