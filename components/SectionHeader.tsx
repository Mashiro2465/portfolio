interface SectionHeaderProps {
  label: string
  title: string
  description?: string
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
        {label}
      </span>
      <h2 className="text-2xl font-bold mt-2">{title}</h2>
      {description && (
        <p className="text-sm text-gray-500 mt-2 max-w-2xl">{description}</p>
      )}
    </div>
  )
}
