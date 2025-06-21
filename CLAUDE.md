# Project Claude.md

## プロジェクト概要

質問に答えていって、回答者がどのVtuberがおすすめかを推奨する。

## プロジェクトの目的

Vtuberを推奨する。知ってもらう。

## プロジェクトの背景

人におすすめする際に、自分の推しをおすすめをするのではなく、その人にあったVtuberを推奨できるようにする。

## 使用技術

### frontend

- React
- Next.js
- Tailwind CSS
- Hero UI
- TypeScript
- Vercel

### データベース

- Supabase

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

### 1.2 スコープ（1stリリース）

対象: ホロライブ所属Vtuberのみ（JP/EN/ID）
ユーザー管理: なし（匿名利用）
データ保存: なし（セッションベース）
推薦手法: ルールベース

### 1.3 将来拡張予定

にじさんじ、ぶいすぽっ！等の他事務所追加
ユーザー登録・履歴機能
機械学習ベース推薦

## 2. 機能要件

### 2.1 メイン機能

#### 2.1.1 質問システム

質問数: 7-10問の固定質問
質問形式:
単一選択（4-5選択肢）
複数選択（最大3つまで）
スライダー（5段階評価）
UI: 1問ずつ表示、プログレスバー付き
操作: 前の質問に戻る機能

#### 2.1.2 推薦エンジン

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

### 2.3 ホロライブVtuberデータ

#### 2.3.1 ホロライブJP（主要メンバー）

ときのそら、AZKi、ロボ子さん
さくらみこ、白上フブキ、夏色まつり
赤井はあと、湊あくあ、紫咲シオン
百鬼あやめ、癒月ちょこ、大空スバル
大神ミオ、猫又おかゆ、戌神ころね
兎田ぺこら、潤羽るしあ→みけねこ（除外）
不知火フレア、白銀ノエル、宝鐘マリン
天音かなた、桐生ココ（卒業・除外）
角巻わため、常闇トワ、姫森ルーナ
雪花ラミィ、桃鈴ねね、獅白ぼたん
尾丸ポルカ、ラプラス・ダークネス
鷹嶺ルイ、博衣こより、沙花叉クロヱ
風真いろは、こぼ・かなえる、風真いろは

#### 2.3.2 ホロライブEN（主要メンバー）

Gawr Gura、Takanashi Kiara、Ninomae Ina'nis
Mori Calliope、Watson Amelia
IRyS、Hakos Baelz、Ouro Kronii
Nanashi Mumei、Tsukumo Sana、Ceres Fauna

#### 2.3.3 ホロライブID

Ayunda Risu、Moona Hoshinova、Airani Iofifteen
Kureiji Ollie、Anya Melfissa、Pavolia Reine

#### 2.3.4 データ構造

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
Frontend & Backend: Next.js 14 (App Router)
├── app/
│   ├── page.tsx (ランディング)
│   ├── quiz/
│   │   └── page.tsx (質問フロー)
│   ├── result/
│   │   └── page.tsx (結果表示)
│   └── api/
│       └── recommend/
│           └── route.ts (推薦API)
├── components/ (UIコンポーネント)
├── lib/
│   ├── questions.ts (質問データ)
│   ├── members.ts (メンバーデータ)
│   └── recommendation.ts (推薦ロジック)
```

### 4.2 技術スタック

Framework: Next.js 14 (App Router)
Language: TypeScript
Styling: Tailwind CSS + Headless UI
State Management: Zustand
Icons: Lucide React
Animation: Framer Motion
Deployment: Vercel

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

## 5. 開発計画

### 5.1 Phase 1: 基盤開発（1週間）

```typescript
Next.jsプロジェクト初期設定
基本UI/UXデザイン
質問フロー実装
ホロライブメンバーデータ整備（JP主要メンバー20名程度）
```

### 5.2 Phase 2: 推薦機能実装（1週間）

```typescript
推薦ロジック実装
結果表示画面
シェア機能
レスポンシブ対応
```

### 5.3 Phase 3: 調整・デプロイ（3-4日）

```typescript
データ精査・推薦精度調整
UI/UX最終調整
Vercelデプロイ設定
テスト・デバッグ
```

### 5.4 Phase 4: 拡張（将来）

```typescript
EN/IDメンバー追加
質問項目追加・改良
推薦精度向上
他事務所対応準備
```

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
