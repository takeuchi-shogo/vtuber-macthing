# UI再設計 - ホロライブVTuber推薦システム

## 概要

ホロライブVTuber推薦WebアプリのUI全面再設計。「公式リスペクトの品格 + ファンプロジェクトの遊び心」を両立し、世代単位のダイナミックテーマ、ふんだんなアニメーション、ライト/ダーク自動切り替えを実現する。

## 設計方針

- **公式感 + エッジ**: ホロライブのタレントを尊重した洗練されたデザインに、ファンプロジェクトならではの大胆さを加える
- **世代テーマ**: 15世代ごとにカラー・グロウ・グラデーションが切り替わるダイナミックテーマ
- **アニメーション全部盛り**: 演出（パーティクル、パララックス、ページ遷移）+ マイクロインタラクション（spring、ホバー、stagger）
- **ダーク/ライト自動切り替え**: OS設定連動 + 手動トグル
- **ショーケース + ハブ**: トップページは世界観に浸れる導入と実用的なナビゲーションを融合

## デザインシステム

### カラートークン

#### ベーストークン（ライト / ダーク）

| トークン | ライト | ダーク |
|---------|--------|--------|
| `--bg-primary` | `#FAFBFE` | `#0A0B10` |
| `--bg-surface` | `rgba(255,255,255,0.7)` | `rgba(255,255,255,0.05)` |
| `--bg-elevated` | `#FFFFFF` | `#14151A` |
| `--text-primary` | `#1A1B25` | `#EDEDF0` |
| `--text-secondary` | `#6B7080` | `#8A8F9E` |
| `--border` | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.08)` |

#### 世代テーマカラー

| 世代 | Primary | Glow | コンセプト |
|------|---------|------|-----------|
| 0期生 | `#00B8ED` | cyan | ホロライブの原点・空色 |
| 1期生 | `#E84393` | pink | 華やかな初期メンバー |
| 2期生 | `#FD79A8` | rose | 可愛さ・柔らかさ |
| ゲーマーズ | `#00B894` | green | ゲーミンググリーン |
| 3期生 | `#E17055` | orange | 冒険・情熱 |
| 4期生 | `#A29BFE` | violet | 天界・神秘的 |
| 5期生 | `#74B9FF` | ice blue | 氷雪イメージ |
| holoX | `#6C5CE7` | dark purple | 秘密結社・ダーク&シャープ |
| Myth | `#D63031` | crimson | 神話・ゴシック |
| Promise | `#FDCB6E` | golden | 約束・希望 |
| Advent | `#E84393`+`#6C5CE7` | magenta | 降臨・ドラマチック |
| Justice | `#0984E3` | electric blue | 正義・クール |
| ID Gen1-3 | `#E74C3C` | red | インドネシアの情熱 |
| ReGLOSS | `#FD79A8` | neon pink | 新世代アイドル |
| FLOW GLOW | `#A29BFE` | aurora | フロウ・オーロラ |

ID Gen1, Gen2, Gen3 は同一テーマカラーを共有する。Advent は `primary` に1色（`#E84393`）を使用し、`gradient` で2色目（`#6C5CE7`）を組み合わせる。

#### テーマ型定義

```typescript
interface GenerationTheme {
  primary: string;        // メインカラー hex
  glow: string;           // box-shadow 値（例: "0 0 20px rgba(0,184,237,0.3)"）
  gradient: string;       // ライトモード用 Tailwind グラデーション（例: "from-cyan-500/20 to-blue-500/20"）
  darkGradient: string;   // ダークモード用 Tailwind グラデーション（例: "from-cyan-900/30 to-blue-900/30"）
  particle: string;       // パーティクル色 hex
}
```

サンプル（0期生）:
```typescript
const gen0Theme: GenerationTheme = {
  primary: '#00B8ED',
  glow: '0 0 20px rgba(0, 184, 237, 0.3)',
  gradient: 'from-cyan-500/20 to-blue-500/20',
  darkGradient: 'from-cyan-900/30 to-blue-900/30',
  particle: '#00B8ED',
};
```

#### テーマ解決マッピング

`generation` フィールド（文字列）からテーマキーへのマッピング:

```typescript
const generationToThemeKey: Record<string, string> = {
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
  'Gen 1': 'id',      // ID Gen1-3 は同一テーマ
  'Gen 2': 'id',
  'Gen 3': 'id',
  'ReGLOSS': 'regloss',
  'FLOW GLOW': 'flowglow',
};
```

`branch` 型は `'JP' | 'EN' | 'ID' | 'DEV_IS'` に拡張する（既存の `HoloMember` 型を更新）。ルーティング `/member/[team]` では `team` パラメータとして `jp`, `en`, `id`, `devis` を使用し、ブランチ内の世代ごとにテーマが切り替わる。

### タイポグラフィ

| 要素 | フォント | ウェイト | サイズ（デスクトップ / モバイル） |
|------|---------|---------|-------------------------------|
| h1（ヒーロー） | Noto Sans JP | 900 | 3.5rem / 2.25rem |
| h2（セクション） | Noto Sans JP | 700 | 2.25rem / 1.75rem |
| h3（カード見出し） | Noto Sans JP | 700 | 1.5rem / 1.25rem |
| 英語見出し | Inter | 800 | 対応する日本語サイズに準ずる |
| 本文 | Noto Sans JP / Inter | 400 | 1rem / 1rem |
| キャプション | Noto Sans JP / Inter | 400 | 0.875rem / 0.875rem |
| アクセント（世代名等） | Zen Kaku Gothic New | 700 | コンテキストに応じる |

`next/font` (`next/font/google`) で最適化読み込み、`display: swap` 指定。

### グラスモーフィズムカード

```css
backdrop-filter: blur(16px);
background: var(--bg-surface);
border: 1px solid var(--border);
border-radius: 16px;
box-shadow: 0 8px 32px rgba(0,0,0,0.08);
```

グラスカード上のテキストコントラスト保証: `--bg-surface` のライトモード不透明度は 0.7 以上を維持し、パーティクル背景上でも WCAG AA (4.5:1) を満たす。

## ページ設計

### グローバルレイアウト

- **ヘッダー**: グラスモーフィズム背景のスティッキーナビ。ロゴ + ナビリンク（ホーム / メンバー / 診断）+ ダークモードトグル。世代ページではヘッダーのアクセントラインが世代テーマカラーに変化
- **フッター**: ファンプロジェクト免責表示 + 公式リンク（ホロライブ公式 / YouTube / Twitter）。全ページ共通
- **ナビゲーション**: 世代一覧・詳細ページではパンくずリスト表示

### トップページ（ショーケース + ハブ）

4つのセクションで構成:

1. **ヒーローセクション**: パーティクル背景（浮遊する光の粒子）、大きなタイトル、タイプライター風サブテキスト、CTAボタンが下から浮き上がる
2. **世代ショーケース**: 横スクロール（snap）の世代カード。ホバーで世代テーマカラーのグロウ + 代表メンバー3名がフェードイン。代表メンバーは各世代データ配列の先頭3名を使用
3. **診断CTAセクション**: スクロール連動で背景グラデーション変化、ステップ図解が順番に出現、大きなCTAボタン
4. **ブランチハブ**: 2x2グリッド（JP/EN/ID/DEV_IS）、ホバーでグラスモーフィズムカード浮き上がり

### 世代メンバー一覧ページ

- **世代ヒーローバナー**: テーマカラーのグラデーション背景、世代名グロウ表示、テーマカラーのパーティクル
- **メンバーグリッド**: stagger animation で1枚ずつフェードイン、ホバーでグロウボーダー + 浮き上がり
- **他世代導線**: 横スクロールで隣の世代カードを表示

### メンバー詳細ページ

- **ヒーロープロフィール**: メンバーカラーのグラデーション背景、パララックス画像、タイプライター名前表示
- **詳細情報**: アイコン付きカードでビジュアル表示、スクロール連動出現
- **外部リンク**: YouTube/Twitterボタンにグロウエフェクト

### 診断（Quiz）ページ

- **背景演出**: 質問ごとにグラデーションが変化（回答に応じてホロライブカラーに寄る）
- **プログレスバー**: 光の粒子がバーに沿って流れる
- **選択肢**: カード型。タップで spring animation、選択済みはグロウボーダー + チェックマーク出現
- **スライダー**: つまみドラッグに追従、背景色がグラデーション変化。`aria-valuemin` / `aria-valuemax` / `aria-valuenow` 対応
- **遷移**: 質問間はフェード + スライドで切り替わり

### 結果ページ

- **演出**: 暗転 → パーティクル爆発 → メイン推薦メンバー登場（3秒）。画面右下に「スキップ」ボタン表示。スキップタップ時は即座に完了状態（全要素表示済み）へ遷移
- **メイン推薦**: 大きなプロフィール画像 + メンバーカラーの光背景、タイプライター名前表示、マッチ率 0%→N% カウントアップ。カウントアップ完了後 `aria-live="polite"` で最終値をアナウンス
- **マッチ理由**: チップが stagger で1つずつ出現
- **サブ推薦**: 横並び小カード、ホバーで拡大
- **アクション**: もう一度 / シェア / プロフィールへ
- **シェア機能**: Next.js App Router の `opengraph-image.tsx` で `ImageResponse` を使用し、メンバー名・マッチ率・推薦理由を含むOGP画像を動的生成。URL にクエリパラメータ（`?member=tokino_sora&score=95`）で結果を渡す

### 共通ステート

- **ローディング**: グラスモーフィズムカード内にスケルトンUI（`animate-pulse`）を表示。世代テーマカラーのアクセント付き
- **エラー**: グラスカード内にエラーメッセージ + 「再試行」ボタン。破壊的でない柔らかいトーン
- **空ステート**: 「メンバーが見つかりませんでした」+ イラスト or アイコン表示
- **画像フォールバック**: メンバー画像の読み込み失敗時はイニシャルアイコン（世代テーマカラー背景）を表示

## コンポーネント構成

ベースパス: `frontend/src/components/`
既存ファイルとの関係: `quiz-question.tsx` → `quiz/quiz-question.tsx` に移動・拡張。`member-card.tsx`, `member-list-card.tsx` は `member/` に移動・拡張。`ui/button.tsx`, `ui/card/index.tsx` はその場で拡張。

```
frontend/src/components/
├── ui/                          # 基盤UI
│   ├── button.tsx               # 既存拡張: グロウ・spring対応
│   ├── card/
│   │   ├── glass-card.tsx       # グラスモーフィズムカード
│   │   └── index.tsx
│   ├── chip.tsx                 # アニメーション付きチップ
│   ├── progress-bar.tsx         # パーティクル付きプログレス
│   ├── skeleton.tsx             # スケルトンUI
│   ├── theme-toggle.tsx         # ダークモードトグル
│   └── index.ts
├── layout/                      # グローバルレイアウト
│   ├── header.tsx               # グラスモーフィズムヘッダー
│   ├── footer.tsx               # フッター
│   └── breadcrumb.tsx           # パンくずリスト
├── animation/                   # アニメーション専用
│   ├── page-transition.tsx      # ページ遷移ラッパー
│   ├── scroll-reveal.tsx        # スクロール連動出現
│   ├── stagger-container.tsx    # stagger子要素アニメ
│   ├── particle-background.tsx  # パーティクル背景（Canvas実装）
│   ├── glow-effect.tsx          # グロウエフェクト
│   └── typewriter-text.tsx      # タイプライター表示
├── theme/                       # 世代テーマ
│   ├── generation-theme-provider.tsx
│   ├── theme-config.ts          # 15世代テーマ定義
│   └── use-generation-theme.ts
├── landing/                     # トップページ
│   ├── hero-section.tsx
│   ├── generation-showcase.tsx
│   ├── quiz-cta-section.tsx
│   └── branch-hub.tsx
├── member/                      # メンバー系
│   ├── member-grid.tsx
│   ├── member-card.tsx
│   ├── member-detail-hero.tsx
│   └── member-list-card.tsx
├── quiz/                        # 診断系
│   ├── quiz-card-option.tsx
│   ├── quiz-slider.tsx
│   ├── quiz-progress.tsx
│   └── quiz-question.tsx
└── result/                      # 結果系
    ├── result-reveal.tsx
    ├── result-main-card.tsx
    ├── result-sub-card.tsx
    ├── match-counter.tsx
    └── share-button.tsx
```

## アニメーション設計

| カテゴリ | 内容 | 実装技術 | デスクトップ | モバイル |
|---------|------|---------|------------|---------|
| ページ遷移 | フェード+スライド、世代カラーオーバーレイ | Framer Motion `AnimatePresence` | 300ms | 200ms軽量版 |
| スクロール連動 | パララックス背景、セクション出現 | `useScroll` + `useTransform` | フル | パララックス無効 |
| カード出現 | stagger fade-in（下から浮き上がり） | `staggerChildren: 0.05` | フル | フル |
| ホバー | グロウボーダー+浮き上がり+背景ブラー変化 | CSS transition + Framer Motion | フル | タップ発火 |
| パーティクル | 浮遊する光の粒子（世代カラー） | Canvas (`requestAnimationFrame`) | 30粒子 | 10粒子、`< 640px` で無効化も可 |
| マイクロ | ボタンプレス、チップ選択、プログレスバー | Framer Motion `spring` | フル | フル |
| reduced-motion | 全アニメ→即時表示、opacity遷移のみ許可 | `useReducedMotion` フック | - | - |

## レスポンシブ戦略

| ブレークポイント | レイアウト | アニメーション |
|----------------|----------|-------------|
| `< 640px` | 1カラム、カード全幅、縦スクロール | パーティクル10個、パララックス無効、遷移200ms |
| `640-1024px` | 2カラムグリッド | パーティクル20個、パララックス軽量版 |
| `> 1024px` | 3-4カラム、横スクロールショーケース | フル演出 |

## パフォーマンス戦略

| 施策 | 手法 |
|------|------|
| アニメーション最適化 | `transform`/`opacity` のみ。`will-change` 最小限 |
| パーティクル | Canvas実装、`requestAnimationFrame`、画面外で自動停止 |
| 画像 | `next/image` + WebP + blur placeholder + lazy loading |
| コード分割 | 各ページ動的import。`animation/` は `dynamic(() => import(...), { ssr: false })` |
| フォント | `next/font` で最適化読み込み、`display: swap` |
| reduced-motion | `useReducedMotion()` で一括制御 |

## ダークモード実装

`app/layout.tsx` でのプロバイダ構成:

```tsx
// app/layout.tsx
import { ThemeProvider } from 'next-themes';
import { HeroUIProvider } from '@heroui/react';

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <HeroUIProvider>
            {children}
          </HeroUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

1. `next-themes` の `ThemeProvider` が最外層。`attribute="class"` で HeroUI の class ベースダークモードと統合
2. `<html>` に `suppressHydrationWarning` を追加（ハイドレーション不整合防止）
3. CSS変数で `--bg-*`, `--text-*` をライト/ダーク定義（`globals.css` の `:root` / `.dark` セレクタ）
4. 世代テーマカラーは `gradient` / `darkGradient` の両方を保持
5. ヘッダーにダークモードトグルボタン配置

## 実装フェーズ

| Phase | 内容 | 依存 |
|-------|------|------|
| P1 | デザインシステム基盤（テーマ、カラー、フォント、グラスカード、ダークモード、グローバルレイアウト） | なし |
| P2 | アニメーション基盤（page-transition, scroll-reveal, stagger, particle） | P1 |
| P3 | トップページ再設計（ヒーロー、世代ショーケース、ハブ） | P1, P2 |
| P4 | 世代一覧ページ（テーマ切替、メンバーグリッド、ヒーローバナー） | P1, P2 |
| P5 | メンバー詳細ページ（パララックス、タブUI、グロウリンク） | P1, P2 |
| P6 | 診断フロー再設計（カード型選択肢、スライダー、プログレス演出） | P1, P2 |
| P7 | 結果ページ（ドラマチック演出、カウントアップ、シェア機能） | P1, P2 |

## 技術スタック（追加・変更）

| パッケージ | 用途 | 備考 |
|-----------|------|------|
| `framer-motion` | アニメーション全般 | 既存（本格活用へ） |
| `next-themes` | ダーク/ライト切り替え | 新規追加 |
| `next/font` | フォント最適化 | Next.js 組み込み（パッケージ追加不要） |

## 制約・注意事項

- ファンプロジェクトであり公式コンテンツではない旨の免責表示を維持
- ホロライブのタレント画像・名前は敬意を持って扱う
- WCAG AA準拠（コントラスト比 4.5:1 以上）
- グラスカード上のテキストは `--bg-surface` の不透明度調整でコントラスト保証
- `prefers-reduced-motion` 対応必須
- モバイルファーストで、演出はプログレッシブエンハンスメント
- 診断スライダーは `aria-valuemin` / `aria-valuemax` / `aria-valuenow` 対応
