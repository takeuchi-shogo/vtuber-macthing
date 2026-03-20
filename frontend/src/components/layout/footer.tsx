import { ExternalLink } from 'lucide-react'

const EXTERNAL_LINKS = [
  {
    label: 'ホロライブ公式',
    href: 'https://hololive.hololivepro.com/',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@haborivepro',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/haborivepro_en',
  },
] as const

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-6xl px-4 py-8 text-center">
        <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
          このサイトはファンメイドのプロジェクトです。
          <br className="sm:hidden" />
          ホロライブプロダクション及びカバー株式会社とは一切関係ありません。
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          {EXTERNAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {link.label}
              <ExternalLink size={12} />
            </a>
          ))}
        </div>

        <p className="mt-4 text-[10px] text-[var(--text-secondary)] opacity-60">
          &copy; {new Date().getFullYear()} ホロライブ診断
        </p>
      </div>
    </footer>
  )
}
