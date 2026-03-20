import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="パンくずリスト"
      className="flex items-center gap-1 text-sm text-[var(--text-secondary)]"
    >
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-1">
          {index > 0 && <ChevronRight size={14} />}
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--text-primary)]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
