# UI再設計 実装計画

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** ホロライブVTuber推薦アプリのUIを、世代テーマ・アニメーション・ダークモード対応で全面再設計する

**Architecture:** デザインシステム基盤（テーマ・カラー・フォント）→ アニメーション基盤 → 各ページ再設計の順で実装。世代テーマは `GenerationThemeProvider` コンテキストで管理し、ダークモードは `next-themes` + HeroUI の class ベースで統合。アニメーションは Framer Motion + Canvas パーティクルで全ページに適用。

**Tech Stack:** Next.js (App Router), React 19, TypeScript, Tailwind CSS 4, HeroUI, Framer Motion, next-themes

**Spec:** `docs/superpowers/specs/2026-03-20-ui-redesign-design.md`

**前提:** `chore/upgrade-nextjs-16` ブランチが master にマージ済みであること（Next.js 16 + ネイティブ ESLint フラットコンフィグ）

---

## ファイル構成

### 新規作成

```
frontend/src/
├── components/
│   ├── ui/
│   │   ├── card/
│   │   │   └── glass-card.tsx      # グラスモーフィズムカード
│   │   ├── chip.tsx                # アニメーション付きチップ
│   │   ├── progress-bar.tsx        # パーティクル付きプログレスバー
│   │   ├── skeleton.tsx            # スケルトンUI
│   │   └── theme-toggle.tsx        # ダークモードトグル
│   ├── layout/
│   │   ├── header.tsx              # グラスモーフィズムヘッダー
│   │   ├── footer.tsx              # フッター
│   │   └── breadcrumb.tsx          # パンくずリスト
│   ├── animation/
│   │   ├── page-transition.tsx     # ページ遷移ラッパー（AnimatePresence）
│   │   ├── scroll-reveal.tsx       # スクロール連動出現
│   │   ├── stagger-container.tsx   # stagger子要素アニメ
│   │   ├── particle-background.tsx # パーティクル背景（Canvas）
│   │   ├── glow-effect.tsx         # グロウエフェクト
│   │   └── typewriter-text.tsx     # タイプライター表示
│   ├── theme/
│   │   ├── generation-theme-provider.tsx  # テーマコンテキスト
│   │   ├── theme-config.ts               # 15世代テーマ定義
│   │   └── use-generation-theme.ts       # テーマ取得フック
│   ├── landing/
│   │   ├── hero-section.tsx        # ヒーローセクション
│   │   ├── generation-showcase.tsx # 横スクロール世代カード
│   │   ├── quiz-cta-section.tsx    # 診断CTA
│   │   └── branch-hub.tsx          # ブランチハブ
│   └── result/
│       ├── result-reveal.tsx       # ドラマチック演出
│       ├── result-main-card.tsx    # メイン推薦カード
│       ├── result-sub-card.tsx     # サブ推薦カード
│       ├── match-counter.tsx       # カウントアップ演出
│       └── share-button.tsx        # シェアボタン
├── app/
│   └── result/
│       └── opengraph-image.tsx     # OGP画像動的生成（ImageResponse）
└── hooks/
    └── use-reduced-motion.ts       # reduced-motion検出
```

### 既存変更

```
frontend/src/
├── app/
│   ├── layout.tsx                  # next-themes ThemeProvider 追加、フォント変更、Header/Footer追加
│   ├── globals.css                 # CSS変数追加（ベーストークン、ダークモード）
│   ├── page.tsx                    # トップページ全面書き直し
│   ├── member/
│   │   ├── page.tsx                # メンバーハブ再設計
│   │   └── [team]/
│   │       ├── client.tsx          # 世代テーマ適用、アニメーション追加
│   │       └── [id]/
│   │           └── client.tsx      # 詳細ページ再設計
│   ├── quiz/
│   │   └── page.tsx                # 診断フロー再設計
│   └── result/
│       └── page.tsx                # 結果ページ全面書き直し
├── components/
│   ├── ui/
│   │   ├── button.tsx              # グロウ・spring 対応追加
│   │   ├── card/index.tsx          # glass-card と統合
│   │   └── index.ts               # 新コンポーネントのエクスポート追加
│   ├── member/
│   │   ├── member-card.tsx         # テーマ対応、アニメーション追加
│   │   └── member-list-card.tsx    # テーマ対応、グロウ追加
│   └── quiz/
│       └── quiz-question.tsx       # カード型選択肢、スライダー再設計
├── types/
│   └── index.ts                    # branch 型に 'DEV_IS' 追加
└── providers/
    └── heroui-provider.tsx         # ThemeProvider 統合（削除 or 統合）
```

---

## Task 1: next-themes インストールと依存整理

**Files:**
- Modify: `frontend/package.json`

- [ ] **Step 1: next-themes をインストール**

```bash
cd frontend && npm install next-themes
```

- [ ] **Step 2: インストール確認**

```bash
npm ls next-themes
```
Expected: `next-themes@x.x.x`

- [ ] **Step 3: コミット**

```bash
git add frontend/package.json frontend/package-lock.json
git commit -m "📦 chore: next-themes を追加"
```

---

## Task 2: CSS変数とグローバルスタイル定義

**Files:**
- Modify: `frontend/src/app/globals.css`

- [ ] **Step 1: globals.css にベーストークンを追加**

`:root`（ライト）と `.dark`（ダーク）のセレクタで CSS 変数を定義する。既存の `--background` / `--foreground` 変数は新トークンに置き換える。

```css
:root {
  --bg-primary: #FAFBFE;
  --bg-surface: rgba(255, 255, 255, 0.7);
  --bg-elevated: #FFFFFF;
  --text-primary: #1A1B25;
  --text-secondary: #6B7080;
  --border: rgba(0, 0, 0, 0.08);
}

.dark {
  --bg-primary: #0A0B10;
  --bg-surface: rgba(255, 255, 255, 0.05);
  --bg-elevated: #14151A;
  --text-primary: #EDEDF0;
  --text-secondary: #8A8F9E;
  --border: rgba(255, 255, 255, 0.08);
}
```

- [ ] **Step 2: body のベーススタイルを更新**

```css
body {
  background: var(--bg-primary);
  color: var(--text-primary);
}
```

- [ ] **Step 3: ビルド確認**

```bash
npm run build
```
Expected: 成功

- [ ] **Step 4: コミット**

```bash
git add frontend/src/app/globals.css
git commit -m "🎨 style: ベースカラートークンとダークモード CSS 変数を追加"
```

---

## Task 3: フォント設定

**Files:**
- Modify: `frontend/src/app/layout.tsx`
- Modify: `frontend/src/app/globals.css`

Task 2 と並列実行可能（globals.css の変更箇所が異なるため）。ただし同一ファイルを触るので、並列実行時はマージに注意。

- [ ] **Step 1: Geist フォントを Noto Sans JP / Inter / Zen Kaku Gothic New に置き換え**

`next/font/google` から3フォントをインポート。`layout.tsx` の `<body>` に CSS クラスを適用する。

```typescript
import { Noto_Sans_JP, Inter, Zen_Kaku_Gothic_New } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-inter',
  display: 'swap',
})

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-zen-kaku',
  display: 'swap',
})
```

`<body>` に `className={`${notoSansJP.variable} ${inter.variable} ${zenKaku.variable} font-sans`}` を適用。

- [ ] **Step 2: globals.css にフォントファミリーを追加**

```css
body {
  font-family: var(--font-noto-sans-jp), var(--font-inter), sans-serif;
}
```

- [ ] **Step 3: ビルド確認**

```bash
npm run build
```

- [ ] **Step 4: コミット**

```bash
git add frontend/src/app/layout.tsx frontend/src/app/globals.css
git commit -m "🔤 style: フォントを Noto Sans JP / Inter / Zen Kaku Gothic New に変更"
```

---

## Task 4: ダークモード統合（next-themes + HeroUI）

**Files:**
- Modify: `frontend/src/app/layout.tsx`
- Modify: `frontend/src/providers/heroui-provider.tsx`

- [ ] **Step 1: layout.tsx に ThemeProvider を追加**

`next-themes` の `ThemeProvider` を最外層に配置。`<html>` タグに `suppressHydrationWarning` を追加。

```tsx
import { ThemeProvider } from 'next-themes'

// <html> に suppressHydrationWarning を追加
// <body> 内:
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  <HeroUIProvider>
    {children}
  </HeroUIProvider>
</ThemeProvider>
```

- [ ] **Step 2: ビルドして動作確認**

```bash
npm run build
```

- [ ] **Step 3: コミット**

```bash
git add frontend/src/app/layout.tsx frontend/src/providers/heroui-provider.tsx
git commit -m "🌓 feat: next-themes によるダークモード自動切り替えを追加"
```

---

## Task 5: 世代テーマシステム

**Files:**
- Create: `frontend/src/components/theme/theme-config.ts`
- Create: `frontend/src/components/theme/generation-theme-provider.tsx`
- Create: `frontend/src/components/theme/use-generation-theme.ts`
- Modify: `frontend/src/types/index.ts`

- [ ] **Step 1: types/index.ts の branch 型に DEV_IS を追加**

`HoloMember` の `branch` プロパティの型を `'JP' | 'EN' | 'ID' | 'DEV_IS'` に変更する。

- [ ] **Step 2: theme-config.ts を作成**

`GenerationTheme` インターフェースと15世代分のテーマ定義。`generationToThemeKey` マッピング。スペックの全値を定義する。

```typescript
export interface GenerationTheme {
  primary: string
  glow: string
  gradient: string
  darkGradient: string
  particle: string
}

export const generationThemes: Record<string, GenerationTheme> = {
  gen0: {
    primary: '#00B8ED',
    glow: '0 0 20px rgba(0, 184, 237, 0.3)',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    darkGradient: 'from-cyan-900/30 to-blue-900/30',
    particle: '#00B8ED',
  },
  // ... 残り14世代（スペックの世代テーマカラー表を全て定義）
}

export const generationToThemeKey: Record<string, string> = {
  '0期生': 'gen0',
  '1期生': 'gen1',
  '2期生': 'gen2',
  'ゲーマーズ': 'gamers',
  '3期生': 'gen3',
  '4期生': 'gen4',
  '5期生': 'gen5',
  'holoX': 'holox',
  'Myth': 'myth',
  'Promise': 'promise',
  'Advent': 'advent',
  'Justice': 'justice',
  'Gen 1': 'id',
  'Gen 2': 'id',
  'Gen 3': 'id',
  'ReGLOSS': 'regloss',
  'FLOW GLOW': 'flowglow',
}
```

- [ ] **Step 3: generation-theme-provider.tsx を作成**

React Context で世代テーマを子コンポーネントに提供する。

```typescript
'use client'
import { createContext, ReactNode } from 'react'
import { GenerationTheme, generationThemes, generationToThemeKey } from './theme-config'

interface GenerationThemeContextValue {
  theme: GenerationTheme
  generation: string
}

export const GenerationThemeContext = createContext<GenerationThemeContextValue | null>(null)

interface Props {
  generation: string
  children: ReactNode
}

export function GenerationThemeProvider({ generation, children }: Props) {
  const themeKey = generationToThemeKey[generation] ?? 'gen0'
  const theme = generationThemes[themeKey] ?? generationThemes.gen0

  return (
    <GenerationThemeContext.Provider value={{ theme, generation }}>
      {children}
    </GenerationThemeContext.Provider>
  )
}
```

- [ ] **Step 4: use-generation-theme.ts を作成**

```typescript
'use client'
import { useContext } from 'react'
import { GenerationThemeContext } from './generation-theme-provider'
import { generationThemes } from './theme-config'

export function useGenerationTheme() {
  const context = useContext(GenerationThemeContext)
  if (!context) {
    return { theme: generationThemes.gen0, generation: '0期生' }
  }
  return context
}
```

- [ ] **Step 5: ビルド確認**

```bash
npm run build
```

- [ ] **Step 6: コミット**

```bash
git add frontend/src/components/theme/ frontend/src/types/index.ts
git commit -m "✨ feat: 世代テーマシステムを追加（15世代対応）"
```

---

## Task 6: reduced-motion フック

**Files:**
- Create: `frontend/src/hooks/use-reduced-motion.ts`

- [ ] **Step 1: use-reduced-motion.ts を作成**

```typescript
'use client'
import { useEffect, useState } from 'react'

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mql.matches)
    const handler = (event: MediaQueryListEvent) => setPrefersReducedMotion(event.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return prefersReducedMotion
}
```

- [ ] **Step 2: コミット**

```bash
git add frontend/src/hooks/use-reduced-motion.ts
git commit -m "♿ feat: useReducedMotion フックを追加"
```

---

## Task 7: 基盤UIコンポーネント

**Files:**
- Create: `frontend/src/components/ui/card/glass-card.tsx`
- Create: `frontend/src/components/ui/skeleton.tsx`
- Create: `frontend/src/components/ui/theme-toggle.tsx`
- Create: `frontend/src/components/ui/chip.tsx`
- Create: `frontend/src/components/ui/progress-bar.tsx`
- Modify: `frontend/src/components/ui/index.ts`

- [ ] **Step 1: glass-card.tsx を作成（`ui/card/` 配下）**

グラスモーフィズムスタイルのカードコンポーネント。スペック定義の CSS 値を適用:
- `backdrop-filter: blur(16px)`
- `background: var(--bg-surface)`（ライト 0.7 以上の不透明度で WCAG AA 4.5:1 コントラスト保証）
- `border: 1px solid var(--border)`
- `border-radius: 16px`
- `box-shadow: 0 8px 32px rgba(0,0,0,0.08)`

世代テーマのグロウに対応する `glowColor` prop（ホバー時に `box-shadow` 追加）。

- [ ] **Step 2: skeleton.tsx を作成**

`animate-pulse` ベースのスケルトンUI。幅・高さ・角丸をpropsで受ける。

- [ ] **Step 3: theme-toggle.tsx を作成**

`next-themes` の `useTheme()` を使用。Sun/Moon アイコン（Lucide）を切り替え。ライト → ダーク → システム の3状態トグル。

- [ ] **Step 4: chip.tsx を作成**

Framer Motion `spring` アニメーション付き。タップで `scale: 0.95` → `1`。選択状態でグロウボーダー。

- [ ] **Step 5: progress-bar.tsx を作成**

プログレスバーコンポーネント。完了率を props で受ける。バー上をテーマカラーの光粒子がアニメーションで流れる演出（CSS animation）。`useReducedMotion` で粒子アニメ無効化。

- [ ] **Step 6: index.ts にエクスポートを追加**

`GlassCard`, `Skeleton`, `ThemeToggle`, `Chip`, `ProgressBar` を追加エクスポート。

- [ ] **Step 7: ビルド確認**

```bash
npm run build
```

- [ ] **Step 8: コミット**

```bash
git add frontend/src/components/ui/
git commit -m "✨ feat: 基盤UIコンポーネントを追加（GlassCard, Skeleton, ThemeToggle, Chip, ProgressBar）"
```

---

## Task 8: アニメーション基盤コンポーネント

**Files:**
- Create: `frontend/src/components/animation/page-transition.tsx`
- Create: `frontend/src/components/animation/scroll-reveal.tsx`
- Create: `frontend/src/components/animation/stagger-container.tsx`
- Create: `frontend/src/components/animation/particle-background.tsx`
- Create: `frontend/src/components/animation/glow-effect.tsx`
- Create: `frontend/src/components/animation/typewriter-text.tsx`

- [ ] **Step 1: page-transition.tsx を作成**

Framer Motion `AnimatePresence` + `motion.div` によるページ遷移ラッパー。`app/layout.tsx` の `{children}` をラップする形で使用。フェード + スライドアニメーション。デスクトップ 300ms / モバイル 200ms。`useReducedMotion` で即時切り替え。`key` に pathname を使用して遷移を検出。

- [ ] **Step 2: scroll-reveal.tsx を作成**

Framer Motion `useInView` + `motion.div`。`threshold` prop で発火タイミング調整。`useReducedMotion` で即時表示にフォールバック。`opacity: 0 → 1`, `y: 30 → 0` のデフォルトアニメーション。

- [ ] **Step 3: stagger-container.tsx を作成**

親要素に `staggerChildren: 0.05` を設定する `motion.div` ラッパー。子要素は `motion.div` で個別にフェードイン。

- [ ] **Step 4: particle-background.tsx を作成**

Canvas ベースのパーティクル背景。props で `color`（テーマカラー）と `count`（粒子数）を受ける。`requestAnimationFrame` でアニメーション。画面外で自動停止（`IntersectionObserver`）。モバイル（`< 640px`）では `count` を 10 に制限。`useReducedMotion` で無効化。`dynamic(() => import(...), { ssr: false })` で読み込む前提。

- [ ] **Step 5: glow-effect.tsx を作成**

ホバー時にグロウボーダーを表示するラッパー。`color` prop でグロウカラー指定。CSS `box-shadow` + `transition` で実装。

- [ ] **Step 6: typewriter-text.tsx を作成**

1文字ずつ表示するタイプライターエフェクト。`text` prop, `speed` prop（デフォルト 50ms）。`useReducedMotion` で即時全文表示。完了時に `onComplete` コールバック。

- [ ] **Step 7: ビルド確認**

```bash
npm run build
```

- [ ] **Step 8: コミット**

```bash
git add frontend/src/components/animation/
git commit -m "✨ feat: アニメーション基盤コンポーネントを追加（PageTransition, ScrollReveal, Stagger, Particle, Glow, Typewriter）"
```

---

## Task 9: グローバルレイアウト（ヘッダー・フッター）

**Files:**
- Create: `frontend/src/components/layout/header.tsx`
- Create: `frontend/src/components/layout/footer.tsx`
- Create: `frontend/src/components/layout/breadcrumb.tsx`
- Modify: `frontend/src/app/layout.tsx`

- [ ] **Step 1: header.tsx を作成**

グラスモーフィズム背景のスティッキーヘッダー。ロゴテキスト + ナビリンク（ホーム / メンバー / 診断）+ `ThemeToggle`。`backdrop-filter: blur(16px)`, `sticky top-0 z-50`。世代テーマ対応のアクセントライン（`GenerationThemeContext` から取得、null なら非表示）。モバイルではハンバーガーメニュー。

- [ ] **Step 2: footer.tsx を作成**

ファンプロジェクト免責表示 + 公式リンク（ホロライブ公式 / YouTube / Twitter）。全ページ共通。ダークモード対応。

- [ ] **Step 3: breadcrumb.tsx を作成**

パス配列を受け取り、`/` 区切りのパンくずリストを表示。最後のアイテムは非リンク。

- [ ] **Step 4: layout.tsx にヘッダー・フッター・PageTransition を配置**

`<Header />` を `{children}` の前、`<Footer />` を後に配置。`{children}` を `PageTransition` でラップ。

- [ ] **Step 5: ブラウザで目視確認**

```bash
npm run dev
```
ヘッダーがスティッキーで表示され、ダークモードトグルが動作すること。

- [ ] **Step 6: コミット**

```bash
git add frontend/src/components/layout/ frontend/src/app/layout.tsx
git commit -m "✨ feat: グローバルレイアウト（ヘッダー・フッター・パンくず）を追加"
```

---

## Task 10: トップページ再設計

**Files:**
- Create: `frontend/src/components/landing/hero-section.tsx`
- Create: `frontend/src/components/landing/generation-showcase.tsx`
- Create: `frontend/src/components/landing/quiz-cta-section.tsx`
- Create: `frontend/src/components/landing/branch-hub.tsx`
- Modify: `frontend/src/app/page.tsx`

- [ ] **Step 1: hero-section.tsx を作成**

`ParticleBackground`（ホロライブブルー `#00B8ED`）+ 大きなタイトル（Noto Sans JP 900）+ `TypewriterText` サブテキスト + CTA 2 ボタン（診断 / メンバー一覧）が `ScrollReveal` で出現。

- [ ] **Step 2: generation-showcase.tsx を作成**

横スクロール `snap-x` コンテナ。全世代のカードを表示。各カードは世代テーマカラーの `GlassCard` + `GlowEffect`。ホバーで先頭3メンバーの名前がフェードイン。`StaggerContainer` で初回表示時のアニメーション。

メンバーデータは `lib/members` からインポートし、世代ごとにグループ化して先頭3名を抽出。

- [ ] **Step 3: quiz-cta-section.tsx を作成**

`ScrollReveal` でステップ図解（1→2→3）が順に出現。背景にグラデーション変化。大きな CTA ボタン。

- [ ] **Step 4: branch-hub.tsx を作成**

2x2 グリッド。各カードは `GlassCard` + `GlowEffect` でブランチカラー。JP/EN/ID/DEV_IS へのリンク。ホバーで浮き上がり。

- [ ] **Step 5: page.tsx を書き直し**

既存の内容を全て置き換え。4セクションを順に配置。Server Component として（各セクションが client component を内包）。

- [ ] **Step 6: ブラウザで目視確認**

```bash
npm run dev
```
トップページの4セクションが表示され、アニメーションが動作すること。

- [ ] **Step 7: コミット**

```bash
git add frontend/src/components/landing/ frontend/src/app/page.tsx
git commit -m "✨ feat: トップページを再設計（ヒーロー・世代ショーケース・診断CTA・ブランチハブ）"
```

---

## Task 11: 世代メンバー一覧ページ再設計

**Files:**
- Create: `frontend/src/components/member/member-grid.tsx`
- Modify: `frontend/src/app/member/[team]/client.tsx`
- Modify: `frontend/src/components/member/member-list-card.tsx`
- Modify: `frontend/src/components/member/member-card.tsx`

- [ ] **Step 1: member-grid.tsx を作成**

`StaggerContainer` + `ScrollReveal` でメンバーカードを stagger 表示するグリッドラッパー。レスポンシブ: 1col → 2col → 3col → 4col。

- [ ] **Step 2: member-list-card.tsx を世代テーマ対応に拡張**

`useGenerationTheme` でテーマを取得。ホバーで `GlowEffect`（テーマカラー）。テーマカラーのアクセントライン追加。画像フォールバック: 読み込み失敗時はイニシャルアイコン（世代テーマカラー背景 + メンバー名の頭文字）を表示。

- [ ] **Step 3: member-card.tsx を世代テーマ対応に拡張**

`useGenerationTheme` でテーマを取得。テーマカラーでグロウボーダー。アニメーション付きチップ。

- [ ] **Step 4: client.tsx を再設計**

世代ごとに `GenerationThemeProvider` でラップ。世代ヒーローバナー（テーマカラーグラデーション背景 + 世代名グロウ + パーティクル）を追加。`MemberGrid` を使用。他世代導線の横スクロールカードを下部に追加。`Breadcrumb` を配置。

エラーステート: データ取得失敗時は `GlassCard` 内にエラーメッセージ + 再試行ボタン。空ステート: メンバー0件時は「メンバーが見つかりませんでした」+ アイコン表示。

- [ ] **Step 5: ブラウザで目視確認**

各ブランチのメンバー一覧ページにアクセスし、世代テーマが切り替わること。

- [ ] **Step 6: コミット**

```bash
git add frontend/src/components/member/ frontend/src/app/member/
git commit -m "✨ feat: 世代メンバー一覧ページを再設計（テーマ切替・アニメーション）"
```

---

## Task 12: メンバー詳細ページ再設計

**Files:**
- Create: `frontend/src/components/member/member-detail-hero.tsx`
- Modify: `frontend/src/app/member/[team]/[id]/client.tsx`

- [ ] **Step 1: member-detail-hero.tsx を作成**

メンバーの世代テーマカラーでグラデーション背景。プロフィール画像を大きく表示（パララックス効果: Framer Motion `useScroll` + `useTransform` でスクロールに応じて画像の `y` 位置を変化）。名前を `TypewriterText` で表示。キャッチフレーズ表示。世代 / ブランチのチップ。

- [ ] **Step 2: client.tsx を再設計**

`GenerationThemeProvider` でラップ。`MemberDetailHero` を上部に配置。詳細情報をアイコン付き `GlassCard` で表示（`ScrollReveal` で順に出現）。YouTube / Twitter ボタンに `GlowEffect` 追加。`Breadcrumb` を配置。

- [ ] **Step 3: ブラウザで目視確認**

- [ ] **Step 4: コミット**

```bash
git add frontend/src/components/member/member-detail-hero.tsx frontend/src/app/member/[team]/[id]/client.tsx
git commit -m "✨ feat: メンバー詳細ページを再設計（テーマ・パララックス・タイプライター）"
```

---

## Task 13: メンバーハブページ再設計

**Files:**
- Modify: `frontend/src/app/member/page.tsx`

- [ ] **Step 1: page.tsx を再設計**

ブランチカードを `GlassCard` + `GlowEffect` で再実装。各カードにブランチカラー。`StaggerContainer` でアニメーション出現。`ParticleBackground` を背景に配置。

- [ ] **Step 2: ブラウザで目視確認**

- [ ] **Step 3: コミット**

```bash
git add frontend/src/app/member/page.tsx
git commit -m "✨ feat: メンバーハブページを再設計"
```

---

## Task 14: 診断フロー再設計

**Files:**
- Create: `frontend/src/components/quiz/quiz-card-option.tsx`
- Create: `frontend/src/components/quiz/quiz-slider.tsx`
- Create: `frontend/src/components/quiz/quiz-progress.tsx`
- Modify: `frontend/src/components/quiz/quiz-question.tsx`
- Modify: `frontend/src/app/quiz/page.tsx`

- [ ] **Step 1: quiz-card-option.tsx を作成**

カード型選択肢。`GlassCard` ベース。タップで Framer Motion `spring` バウンス。選択済みはグロウボーダー + チェックマーク（Lucide `Check`）出現。`aria-selected` 対応。

- [ ] **Step 2: quiz-slider.tsx を作成**

カスタムスライダー。つまみドラッグに追従。背景色がグラデーション変化。`aria-valuemin`, `aria-valuemax`, `aria-valuenow` 対応。左右のラベル表示。

- [ ] **Step 3: quiz-progress.tsx を作成**

ステップドットプログレス。完了ステップはテーマカラーで塗りつぶし。アニメーション付きトランジション。

- [ ] **Step 4: quiz-question.tsx を新コンポーネントを使うように更新**

`QuizCardOption`, `QuizSlider`, `QuizProgress` を使用。質問遷移は Framer Motion `AnimatePresence` でフェード + スライド。背景グラデーションが質問インデックスに応じて変化。

- [ ] **Step 5: quiz/page.tsx を更新**

背景演出の追加。全体を `GlassCard` でラップ。

- [ ] **Step 6: ブラウザで目視確認**

診断フローを1問目から最後まで通して動作確認。

- [ ] **Step 7: コミット**

```bash
git add frontend/src/components/quiz/ frontend/src/app/quiz/
git commit -m "✨ feat: 診断フローを再設計（カード型選択肢・スライダー・プログレス演出）"
```

---

## Task 15: 結果ページ再設計

**Files:**
- Create: `frontend/src/components/result/result-reveal.tsx`
- Create: `frontend/src/components/result/result-main-card.tsx`
- Create: `frontend/src/components/result/result-sub-card.tsx`
- Create: `frontend/src/components/result/match-counter.tsx`
- Create: `frontend/src/components/result/share-button.tsx`
- Create: `frontend/src/app/result/opengraph-image.tsx`
- Modify: `frontend/src/app/result/page.tsx`

- [ ] **Step 1: match-counter.tsx を作成**

0 → N のカウントアップアニメーション。`useReducedMotion` で即時表示。完了後に `aria-live="polite"` で最終値をアナウンス。

- [ ] **Step 2: result-reveal.tsx を作成**

暗転 → パーティクル爆発 → コンテンツ表示の3段階演出（3秒）。画面右下に「スキップ」ボタン。スキップで即座に完了状態へ。`useReducedMotion` でスキップ直行。

- [ ] **Step 3: result-main-card.tsx を作成**

大きなプロフィール画像 + メンバーカラーの光背景。`TypewriterText` で名前表示。`MatchCounter` でマッチ率。マッチ理由チップが `StaggerContainer` で出現。YouTube / Twitter リンク。

- [ ] **Step 4: result-sub-card.tsx を作成**

小さめの推薦カード。ホバーで拡大。基本情報 + マッチ率。

- [ ] **Step 5: share-button.tsx を作成**

Twitter シェアボタン。テキストにメンバー名・マッチ率を含む。

- [ ] **Step 6: opengraph-image.tsx を作成**

Next.js App Router の `ImageResponse` を使用した OGP 画像動的生成。URL クエリパラメータ `?member=<id>&score=<n>` からメンバー情報を取得し、メンバー名・マッチ率・推薦理由を含む 1200x630 の画像を生成。

```typescript
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ searchParams }: { searchParams: { member?: string; score?: string } }) {
  // メンバー情報を取得して ImageResponse で画像生成
}
```

- [ ] **Step 7: result/page.tsx を書き直し**

`ResultReveal` → `ResultMainCard` → `ResultSubCard` x 2 → アクションボタン の順。`GenerationThemeProvider` でメイン推薦メンバーの世代テーマを適用。

- [ ] **Step 8: ブラウザで目視確認**

診断を完了して結果ページに遷移し、演出が動作すること。

- [ ] **Step 9: コミット**

```bash
git add frontend/src/components/result/ frontend/src/app/result/
git commit -m "✨ feat: 結果ページを再設計（ドラマチック演出・カウントアップ・OGP・シェア）"
```

---

## Task 16: Button コンポーネント拡張

**Files:**
- Modify: `frontend/src/components/ui/button.tsx`

- [ ] **Step 1: グロウ・spring アニメーション対応を追加**

Framer Motion `motion.button` を使用。`whileTap={{ scale: 0.97 }}`、`whileHover={{ scale: 1.02 }}`。`glowColor` prop を追加し、ホバー時に `box-shadow` でグロウ。

- [ ] **Step 2: ビルド確認**

```bash
npm run build
```

- [ ] **Step 3: コミット**

```bash
git add frontend/src/components/ui/button.tsx
git commit -m "✨ feat: Button にグロウ・spring アニメーションを追加"
```

---

## Task 17: 全体ビルド・lint・目視確認

**Files:** なし（検証タスク）

- [ ] **Step 1: lint**

```bash
npm run lint
```
Expected: エラーなし

- [ ] **Step 2: ビルド**

```bash
npm run build
```
Expected: 全ルート成功

- [ ] **Step 3: 全ページ目視確認**

```bash
npm run dev
```

以下のページを確認:
- `/` トップページ（4セクション、アニメーション、ダークモードトグル）
- `/member` メンバーハブ（ブランチカード）
- `/member/jp` JP 一覧（世代テーマ切替）
- `/member/jp/tokino_sora` 詳細（テーマ、タイプライター、パララックス）
- `/quiz` 診断（カード選択肢、スライダー、プログレス）
- `/result` 結果（演出、カウントアップ、スキップ）
- ダークモード切り替えが全ページで動作
- 画像フォールバック（存在しないメンバー画像でイニシャル表示）

- [ ] **Step 4: レスポンシブ確認**

ブラウザの DevTools でモバイル（375px）、タブレット（768px）を確認。

- [ ] **Step 5: コミット（もし修正があれば）**

```bash
git add -A
git commit -m "🔧 fix: UI再設計の全体調整"
```

---

## 実装順序の依存関係

```
Task 1 (next-themes)
  ↓
Task 2 (CSS変数) ─┬─ Task 3 (フォント)  ※並列可能（globals.css変更箇所が異なる）
                  ↓
              Task 4 (ダークモード統合)
                  ↓
Task 5 (世代テーマ) + Task 6 (reduced-motion)  ※並列可能
                  ↓
Task 7 (基盤UI) + Task 8 (アニメーション基盤)  ※並列可能
                  ↓
Task 9 (グローバルレイアウト) + Task 16 (Button拡張)  ※並列可能
                  ↓
Task 10 (トップページ) ─┬─ Task 11 (世代一覧) ─┬─ Task 12 (メンバー詳細)
                       ├─ Task 13 (メンバーハブ) │
                       └─ Task 14 (診断フロー)  │
                                    ↓           │
                           Task 15 (結果ページ)  │
                                    ↓           ↓
                            Task 17 (全体検証)
```

Task 10-14 は基盤（Task 1-9, 16）完了後に並行実行可能。Task 15（結果ページ）は Task 14（診断フロー）の後に実行すると E2E で通し確認しやすい。
