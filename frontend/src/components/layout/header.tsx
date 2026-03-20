'use client'

import { useContext, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from '@/components/ui'
import { GenerationThemeContext } from '@/components/theme/generation-theme-provider'
import { NeonText } from '@/components/effects/neon-text'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'ホーム', href: '/' },
  { label: 'メンバー', href: '/member' },
  { label: '診断', href: '/quiz' },
] as const

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const generationTheme = useContext(GenerationThemeContext)

  const accentColor = generationTheme?.theme.primary ?? null

  return (
    <header
      className={cn(
        'sticky top-0 z-50',
        'border-b border-[var(--border)]',
        'bg-[var(--bg-surface)]/80 backdrop-blur-xl'
      )}
    >
      {/* Accent line */}
      {accentColor && (
        <div
          className="h-0.5 w-full transition-colors duration-300"
          style={{ backgroundColor: accentColor }}
        />
      )}

      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold transition-opacity hover:opacity-80"
        >
          <NeonText color="#00B8ED" flicker={false}>
            ホロライブ診断
          </NeonText>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm transition-colors',
                  isActive
                    ? 'font-semibold text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] transition-colors hover:bg-[var(--bg-surface)] md:hidden"
            aria-label={mobileOpen ? 'メニューを閉じる' : 'メニューを開く'}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-[var(--border)] bg-[var(--bg-surface)] px-4 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'block rounded-lg px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-[var(--bg-elevated)] font-semibold text-[var(--text-primary)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]'
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
