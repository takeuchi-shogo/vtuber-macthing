# Project Claude.md

## プロジェクト概要

質問に答えていって、回答者がどのVtuberがおすすめかを推奨する。

## プロジェクトの目的

Vtuberを推奨する。知ってもらう。

## プロジェクトの背景

人におすすめする際に、自分の推しをおすすめをするのではなく、その人にあったVtuberを推奨できるようにする。

## 使用技術

### frontend

- **React** 19.1.0
- **Next.js** 15.3.4 (App Router)
- **TypeScript** 5
- **Tailwind CSS** 4
- **Hero UI** 2.x系 (UI コンポーネントライブラリ)
- **Framer Motion** 12.18.1 (アニメーション)
- **Lucide React** 0.522.0 (アイコン)
- **Clerk** 6.22.0 (認証・ユーザー管理、将来利用予定)

### スタイリング・ユーティリティ

- **clsx** 2.1.1 (条件付きクラス名)
- **tailwind-merge** 3.3.1 (Tailwindクラスのマージ)

### 開発ツール

- **ESLint** 9 (静的解析)
- **Prettier** 3.5.3 (コードフォーマッター)
- **Turbopack** (開発サーバー高速化)

### デプロイ・ホスティング

- **Vercel** (デプロイ・ホスティング)

### データベース

- **ローカルTypeScriptデータ** (現在の実装)
- **Supabase** (将来の実装予定)

### コード規約

#### TypeScript規約

- **型定義**:
  - interfaceを優先（typeは必要な場合のみ）
  - Props型は明示的に定義
  - any型の使用禁止
- **命名規則**:
  - コンポーネント: PascalCase
  - 関数・変数: camelCase
  - 定数: UPPER_SNAKE_CASE
  - 型・インターフェース: PascalCase
- **ファイル構成**:
  - 1ファイル1コンポーネント
  - index.tsでの再エクスポート
  - ロジックとUIの分離（カスタムフック活用）
  - ファイル名のみケバブケース

#### React規約

- **Hooks**:
  - カスタムフックは use プレフィックス
  - 依存配列の適切な管理
  - useMemo/useCallbackの適切な使用
- **状態管理**:
  - ローカル状態は最小限に
  - グローバル状態は必要な場合のみ
  - Server State管理ライブラリの活用（TanStack Query等）
- **パフォーマンス**:
  - React.memoの適切な使用
  - 動的インポートによるコード分割
  - 画像の最適化（next/image使用）

#### スタイリング (Tailwind CSS)

- **クラス名の順序**:
  1. レイアウト（flex, grid）
  2. 配置（justify, items）
  3. サイズ（w, h）
  4. 余白（m, p）
  5. 装飾（bg, text, border）
  6. その他（hover, focus）
- **カスタムコンポーネント**: 再利用可能なUIコンポーネントの作成
- **レスポンシブ**: モバイルファーストアプローチ

## 要件定義

ホロライブVtuber推薦システム 1stリリース要件定義

## 1. プロジェクト概要

### 1.1 システム概要

ユーザーの嗜好に関する質問に回答してもらい、ホロライブ所属のVtuberの中から最適な推薦を行うWebアプリケーション

### 1.2 スコープ（現在の実装）

**実装済み機能:**

- 対象: ホロライブ所属Vtuberのみ（JP/EN/ID/DEV_IS） - 100名以上のデータベース
- メンバー一覧・検索機能（ブランチ別・世代別表示）
- 個別メンバープロフィール詳細ページ
- レスポンシブデザイン対応
- 公式リンク連携（YouTube、Twitter）

**実装予定機能:**

- 質問システム・推薦エンジン
- ユーザー管理: なし（匿名利用）
- データ保存: なし（セッションベース）
- 推薦手法: ルールベース

### 1.3 将来拡張予定

にじさんじ、ぶいすぽっ！等の他事務所追加
ユーザー登録・履歴機能
機械学習ベース推薦

## 2. 機能要件

### 2.1 実装済み機能

#### 2.1.1 メンバー一覧システム

**ブランチ別表示:**

- ホロライブJP（60+ メンバー）
- ホロライブEN（20+ メンバー）
- ホロライブID（9+ メンバー）
- DEV_IS（10+ メンバー）

**世代別グループ表示:**

- JP: 0期生〜holoX、ゲーマーズ
- EN: Myth、Promise、Advent、Justice
- ID: Gen 1〜3
- DEV_IS: ReGLOSS、FLOW GLOW

**メンバーカード機能:**

- プロフィール画像表示
- 基本情報（名前、世代、ブランチ）
- 特徴タグ（コンテンツタイプ、性格）
- 詳細ページへのリンク

#### 2.1.2 メンバープロフィール詳細

**基本情報表示:**

- 名前（日本語名・英語名）
- プロフィール画像
- 所属ブランチ・世代
- デビュー日
- 詳細説明

**特徴・属性表示:**

- 主なコンテンツタイプ
- 性格特性
- 配信スタイル
- 対応言語
- 配信時間の長さ

**外部リンク:**

- YouTubeチャンネル
- Twitter（X）
- 公式プロフィールページ

**推薦理由:**

- メンバー固有の魅力・推薦ポイント

### 2.2 実装予定機能

#### 2.2.1 質問システム

質問数: 7-10問の固定質問
質問形式:
単一選択（4-5選択肢）
複数選択（最大3つまで）
スライダー（5段階評価）
UI: 1問ずつ表示、プログレスバー付き
操作: 前の質問に戻る機能

#### 2.2.2 推薦エンジン

アルゴリズム: 重み付きスコア計算
結果数: メイン1名 + サブ2名の計3名表示
マッチ理由: 「○○な配信が好きなあなたに」等の説明

#### 2.1.3 結果表示

Vtuberプロフィール: 名前、画像、簡単な説明
おすすめ理由: マッチした要素の説明
リンク: YouTubeチャンネル、Twitter
アクション:
「もう一度診断する」ボタン
結果シェア（Twitter）

### 2.2 質問内容詳細

#### 2.2.1 質問内容

Q1: 配信の長さ（単一選択）
短時間（30分-1時間）でサクッと
中時間（1-2時間）でじっくり
長時間（2時間以上）でまったり
長さは気にしない

#### 2.2.2 視聴スタイル（単一選択）

リアルタイムでライブ視聴派
アーカイブでマイペース視聴派
切り抜きでハイライト視聴派
どれでも楽しめる

#### 2.2.3 好きなコンテンツ（複数選択・最大3つ）

ゲーム実況（アクション・RPGなど）
雑談・フリートーク
歌配信・歌ってみた
ASMR・癒し系
お絵描き・創作活動
コラボ・大型企画
学習・教育系

#### 2.2.4 好みの性格（単一選択）

元気で明るいムードメーカー
落ち着いて癒し系
ツッコミ上手でテンポ良い
天然でほんわか
クールで大人っぽい

#### 2.2.5 コミュニケーション（単一選択）

チャットをよく読んでくれる
リスナーとの距離感が近い
適度な距離感を保っている
あまり気にしない

#### 2.2.6 言語・地域（単一選択）

日本語のみ（ホロライブJP）
英語メイン（ホロライブEN）
多言語対応（ID含む）
言語は問わない

#### 2.2.7 視聴時間帯（複数選択）

朝（6-12時）
昼（12-18時）
夜（18-24時）
深夜（24-6時）

#### 2.2.8 推しに求めるもの（スライダー・5段階）

エンターテイメント性 ←→ 癒し・安らぎ
高技術・プロ志向 ←→ 親しみやすさ

### 2.3 実装済みホロライブVtuberデータベース

#### 2.3.1 ホロライブJP（60+ メンバー）

**0期生:** ときのそら、AZKi、ロボ子さん、さくらみこ、星街すいせい
**1期生:** 白上フブキ、夏色まつり、赤井はあと、湊あくあ、紫咲シオン
**2期生:** 百鬼あやめ、癒月ちょこ、大空スバル、湊あくあ、紫咲シオン
**ゲーマーズ:** 大神ミオ、猫又おかゆ、戌神ころね
**3期生:** 兎田ぺこら、不知火フレア、白銀ノエル、宝鐘マリン
**4期生:** 天音かなた、角巻わため、常闇トワ、姫森ルーナ
**5期生:** 雪花ラミィ、桃鈴ねね、獅白ぼたん、尾丸ポルカ
**holoX:** ラプラス・ダークネス、鷹嶺ルイ、博衣こより、沙花叉クロヱ、風真いろは

#### 2.3.2 ホロライブEN（20+ メンバー）

**Myth:** Gawr Gura、Takanashi Kiara、Ninomae Ina'nis、Mori Calliope、Watson Amelia
**Promise:** IRyS、Hakos Baelz、Ouro Kronii、Nanashi Mumei、Ceres Fauna
**Advent:** Shiori Novella、Koseki Bijou、Nerissa Ravencroft、Fuwawa Abyssgard、Mococo Abyssgard
**Justice:** Elizabeth Rose Bloodflame、Gigi Murin、Cecilia Immergreen、Raora Panthera

#### 2.3.3 ホロライブID（9 メンバー）

**Gen 1:** Ayunda Risu、Moona Hoshinova、Airani Iofifteen
**Gen 2:** Kureiji Ollie、Anya Melfissa、Pavolia Reine
**Gen 3:** Vestia Zeta、Kaela Kovalskia、Kobo Kanaeru

#### 2.3.4 DEV_IS（10 メンバー）

**ReGLOSS:** 火威青、音乃瀬奏、一条莉々華、儒烏風亭らでん、轟はじめ
**FLOW GLOW:** 奏手イヅル、古石ビジュー、小春花奏、ひすひすい、雪虎りみや

#### 2.3.5 データ構造

```typescript
interface HoloMember {
  id: string;
  name: string;
  nameJP?: string; // 日本語名（ENの場合）
  branch: 'JP' | 'EN' | 'ID';
  generation: string; // '0期生', 'Myth', 'Gen 1'等
  debut: string; // デビュー日
  description: string;
  
  // マッチング用属性
  contentTypes: ContentType[]; // 主なコンテンツタイプ
  personality: PersonalityType[]; // 性格特性
  streamingStyle: StreamingStyle; // 配信スタイル
  languages: string[]; // ['JP', 'EN', 'ID']
  typicalStreamTimes: TimeSlot[]; // よく配信する時間帯
  streamLength: 'short' | 'medium' | 'long' | 'varied';
  
  // 表示用情報
  profileImage: string;
  channelUrl: string;
  twitterUrl?: string;
  catchphrase?: string; // 「こんにちは〜」等の挨拶
  
  // 推薦表示用
  recommendReason: string; // 「○○な配信で癒されたいあなたに」
  representativeClips?: string[]; // 代表的な切り抜きや配信URL
}

type ContentType = 
  | 'gaming' | 'chatting' | 'singing' | 'asmr' 
  | 'drawing' | 'collab' | 'educational' | 'music_creation';

type PersonalityType = 
  | 'energetic' | 'calm' | 'witty' | 'natural' 
  | 'cool' | 'motherly' | 'mischievous';

type StreamingStyle = 
  | 'chat_interactive' | 'performance_focused' 
  | 'laid_back' | 'professional';

type TimeSlot = 'morning' | 'afternoon' | 'evening' | 'late_night';
```

## 3. 非機能要件

### 3.1 パフォーマンス

各質問の表示: 300ms以下
推薦結果計算・表示: 1秒以下
モバイルファースト設計

### 3.2 対応環境

ブラウザ: Chrome, Safari, Firefox, Edge（最新2バージョン）
デバイス: スマートフォン、タブレット、PC
レスポンシブ: 320px〜の画面幅対応

### 3.3 SEO・アクセシビリティ

OGP設定（シェア時の表示最適化）
セマンティックHTML
キーボードナビゲーション対応

## 4. 技術仕様

### 4.1 アーキテクチャ

```bash
Frontend & Backend: Next.js 15.3.4 (App Router)
├── app/
│   ├── page.tsx (ランディング・ホームページ)
│   ├── member/
│   │   ├── page.tsx (メンバー一覧ハブ)
│   │   └── [team]/
│   │       ├── page.tsx (ブランチ別メンバー一覧)
│   │       ├── client.tsx (クライアントコンポーネント)
│   │       └── [id]/
│   │           ├── page.tsx (メンバー詳細ページ)
│   │           └── client.tsx (クライアントコンポーネント)
│   ├── quiz/ (実装予定)
│   │   └── page.tsx (質問フロー)
│   ├── result/ (実装予定)
│   │   └── page.tsx (結果表示)
│   └── api/ (実装予定)
│       └── recommend/
│           └── route.ts (推薦API)
├── components/
│   ├── ui/ (共通UIコンポーネント)
│   │   ├── button.tsx
│   │   └── card/
│   ├── member-card.tsx (メンバーカード)
│   ├── member-list-card.tsx (一覧用カード)
│   └── member-list-client.tsx (一覧クライアント)
├── lib/
│   ├── members/ (メンバーデータ)
│   │   ├── hololive/
│   │   │   ├── gen0.ts〜holox.ts (JP各世代)
│   │   │   ├── en/ (ENブランチ)
│   │   │   ├── id/ (IDブランチ)
│   │   │   └── devis/ (DEV_ISブランチ)
│   │   └── index.ts
│   ├── questions.ts (質問データ・実装予定)
│   ├── utils.ts (ユーティリティ関数)
│   └── recommendation.ts (推薦ロジック・実装予定)
├── types/
│   └── index.ts (TypeScript型定義)
└── public/
    └── images/ (メンバー画像・アセット)
```

### 4.2 現在の技術スタック

**フレームワーク・ランタイム:**

- Next.js 15.3.4 (App Router)
- React 19.1.0
- TypeScript 5
- Node.js (Vercel環境)

**スタイリング・UI:**

- Tailwind CSS 4
- Hero UI 2.x系 (コンポーネントライブラリ)
- Framer Motion 12.18.1 (アニメーション)
- Lucide React 0.522.0 (アイコンライブラリ)

**開発・ビルドツール:**

- Turbopack (開発サーバー)
- ESLint 9 (リンター)
- Prettier 3.5.3 (フォーマッター)

**ユーティリティ:**

- clsx 2.1.1 (条件付きクラス名)
- tailwind-merge 3.3.1 (Tailwindクラスマージ)

**認証・将来予定:**

- Clerk 6.22.0 (ユーザー管理・認証)

**デプロイ:**

- Vercel (ホスティング・CI/CD)

### 4.3 推薦ロジック例

```typescript
function calculateRecommendation(answers: Answer[]): RecommendationResult {
  const memberScores = holoMembers.map(member => {
    let score = 0;

    // コンテンツタイプマッチング（重み: 30%）
    if (answers.contentTypes.some(ct => member.contentTypes.includes(ct))) {
      score += 30;
    }

    // 性格マッチング（重み: 25%）
    if (member.personality.includes(answers.personality)) {
      score += 25;
    }

    // 言語・ブランチマッチング（重み: 20%）
    if (answers.branch === 'any' || member.branch === answers.branch) {
      score += 20;
    }

    // 時間帯マッチング（重み: 15%）
    if (answers.timeSlots.some(ts => member.typicalStreamTimes.includes(ts))) {
      score += 15;
    }

    // 配信スタイルマッチング（重み: 10%）
    if (member.streamingStyle === answers.communicationStyle) {
      score += 10;
    }

    return { member, score };
  });

  // スコア順ソート
  memberScores.sort((a, b) => b.score - a.score);

  return {
    main: memberScores[0],
    alternatives: memberScores.slice(1, 3)
  };
}
```

## 5. 開発計画・進捗

### 5.1 Phase 1: 基盤開発 ✅ **完了**

- Next.js 15プロジェクト設定 ✅
- TypeScript + Tailwind CSS + Hero UI設定 ✅
- 基本UI/UXデザイン ✅
- ホロライブメンバーデータベース整備（100名以上） ✅
- Server/Client Component適切な分離 ✅
- レスポンシブデザイン対応 ✅

### 5.2 Phase 2: メンバー機能実装 ✅ **完了**

- メンバー一覧システム（ブランチ別・世代別） ✅
- 個別メンバープロフィール詳細ページ ✅
- ナビゲーション・UIコンポーネント ✅
- 画像・アセット管理システム ✅
- 公式リンク連携（YouTube、Twitter） ✅
- フォールバック画像システム ✅

### 5.3 Phase 3: 推薦機能実装 🚧 **実装予定**

- 質問システム・フロー実装
- 推薦ロジック実装
- 結果表示画面
- シェア機能
- ローディング状態表示（Issue #1）

### 5.4 Phase 4: 調整・デプロイ 🚧 **実装予定**

- 推薦精度調整・テスト
- パフォーマンス最適化
- SEO・OGP設定
- 最終UI/UX調整

### 5.5 Phase 5: 拡張機能 📋 **将来計画**

- ユーザー認証機能（Clerk）
- お気に入り・履歴機能
- 他事務所対応準備
- 多言語対応
- API公開

## 6. 成功指標

### 6.1 定量指標

月間ユニークユーザー数: 1,000人以上
診断完了率: 70%以上
シェア率: 10%以上

### 6.2 定性指標

推薦結果への満足度（Twitterフィードバック等）
ホロライブファンコミュニティでの認知・評価

## 7. 運用・保守

### 7.1 データ更新

新メンバーデビュー時の追加
既存メンバーのデータ更新（コンテンツタイプ変化等）
卒業メンバーの非表示化

### 7.2 継続改善

ユーザーフィードバックに基づく質問項目調整
推薦ロジックの精度向上
UI/UX改善

## 8. その他

この要件定義で1stリリースとして十分実装可能で、かつ将来の拡張性も考慮されていますがいかがでしょうか？

## 9. 参考文献

- [ホロライブ公式サイト](https://hololive.hololivepro.com/)
- [ホロライブ公式Twitter](https://twitter.com/hololive_staff)

## 10. よく使用するGitHub操作コマンド

### Issue関連

```bash
# Issue一覧を表示
gh issue list

# 特定のIssueを表示
gh issue view <issue番号>

# 新しいIssueを作成
gh issue create --title "タイトル" --body "本文"

# Issueにコメントを追加
gh issue comment <issue番号> --body "コメント内容"

# Issueをクローズ
gh issue close <issue番号>

# Issueに自分をアサイン
gh issue edit <issue番号> --add-assignee @me
```

### Pull Request関連

```bash
# PR一覧を表示
gh pr list

# 現在のブランチでPRを作成
gh pr create --title "タイトル" --body "本文"

# PRを作成（ベースブランチ指定）
gh pr create --title "タイトル" --body "本文" --base main

# PRの詳細を表示
gh pr view <PR番号>

# PRをマージ
gh pr merge <PR番号>

# PRのレビュー承認
gh pr review <PR番号> --approve

# PRにコメント
gh pr comment <PR番号> --body "コメント内容"

# PRのチェック状況を確認
gh pr checks <PR番号>
```

### リポジトリ関連

```bash
# リポジトリ情報を表示
gh repo view

# リポジトリをクローン
gh repo clone <owner>/<repo>

# ブラウザでリポジトリを開く
gh repo view --web

# リポジトリのフォーク
gh repo fork

# リポジトリの作成
gh repo create <名前> --public/--private
```

### ワークフロー関連

```bash
# GitHub Actionsのワークフロー一覧
gh workflow list

# ワークフローの実行状況を確認
gh workflow view

# ワークフローを手動実行
gh workflow run <workflow名>

# 実行履歴を表示
gh run list

# 特定の実行ログを表示
gh run view <run-id>
```

### リリース関連

```bash
# リリース一覧
gh release list

# 新しいリリースを作成
gh release create <tag> --title "タイトル" --notes "リリースノート"

# リリースをダウンロード
gh release download <tag>
```

### 便利な使い方

```bash
# エイリアス設定（よく使うコマンドを短縮）
gh alias set prc 'pr create'
gh alias set prl 'pr list'
gh alias set prv 'pr view'

# 現在のPRをブラウザで開く
gh pr view --web

# 現在のIssueをブラウザで開く
gh issue view --web

# PRのdiffを表示
gh pr diff <PR番号>

# 自分に関連するPR/Issueを表示
gh pr list --assignee @me
gh issue list --assignee @me

# 特定のラベルでフィルタ
gh issue list --label "bug"
gh pr list --label "feature"
```

### 設定・認証

```bash
# GitHub CLIの認証
gh auth login

# 認証状態の確認
gh auth status

# デフォルトのエディタを設定
gh config set editor vim
```
