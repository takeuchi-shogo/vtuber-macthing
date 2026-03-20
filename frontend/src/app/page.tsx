import { HeroSection } from '@/components/landing/hero-section'
import { GenerationShowcase } from '@/components/landing/generation-showcase'
import { QuizCtaSection } from '@/components/landing/quiz-cta-section'
import { BranchHub } from '@/components/landing/branch-hub'

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="mb-8 text-center font-[var(--font-noto-sans-jp)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
          世代から探す
        </h2>
        <GenerationShowcase />
      </section>

      <QuizCtaSection />

      <section className="mx-auto max-w-4xl px-4 py-20">
        <h2 className="mb-8 text-center font-[var(--font-noto-sans-jp)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
          ブランチから探す
        </h2>
        <BranchHub />
      </section>

      <footer className="py-8 text-center text-sm text-[var(--text-secondary)]">
        <p>
          ※この診断は非公式のファンメイドコンテンツです
          <br />
          ホロライブプロダクション所属タレントの情報は2024年時点のものです
        </p>
      </footer>
    </main>
  )
}
