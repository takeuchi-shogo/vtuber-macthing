# ホロライブVtuber推薦システム

ユーザーの嗜好に関する質問に回答してもらい、ホロライブ所属のVtuberの中から最適な推薦を行うWebアプリケーション

## 概要

このプロジェクトは、ユーザーが質問に答えることで、自分にぴったりのホロライブメンバーを見つけることができる推薦システムです。単に自分の推しを薦めるのではなく、その人の好みや視聴スタイルに合ったVtuberを科学的に推薦します。

## 特徴

- 📊 **個人に最適化された推薦**: 視聴スタイル、好みのコンテンツ、性格などに基づいた推薦
- 🌍 **全ホロライブ支部対応**: JP、EN、ID、DEV_ISの全メンバーを網羅
- 🎯 **詳細なマッチング**: コンテンツタイプ、配信時間、言語など多角的な分析
- 📱 **レスポンシブデザイン**: スマートフォンからPCまで対応
- 🎨 **美しいUI**: Tailwind CSSとHero UIによる洗練されたデザイン

## 対象メンバー

### ホロライブJP

- **0期生**: ときのそら、ロボ子さん、AZKi、星街すいせい、さくらみこ
- **1期生**: 白上フブキ、赤井はあと、夏色まつり、アキ・ローゼンタール
- **2期生**: 湊あくあ、紫咲シオン、百鬼あやめ、癒月ちょこ、大空スバル
- **ゲーマーズ**: 大神ミオ、猫又おかゆ、戌神ころね
- **3期生**: 兎田ぺこら、不知火フレア、白銀ノエル、宝鐘マリン
- **4期生**: 天音かなた、角巻わため、常闇トワ、姫森ルーナ
- **5期生**: 雪花ラミィ、桃鈴ねね、獅白ぼたん、尾丸ポルカ
- **holoX**: ラプラス・ダークネス、鷹嶺ルイ、博衣こより、沙花叉クロヱ、風真いろは

### ホロライブEN

- **Myth**: Mori Calliope、Takanashi Kiara、Ninomae Ina'nis
- **Promise**: IRyS、Ouro Kronii、Hakos Baelz、Ceres Fauna、Nanashi Mumei
- **Advent**: Shiori Novella、Koseki Bijou、Nerissa Ravencroft、Fuwawa & Mococo Abyssgard
- **Justice**: Elizabeth Rose Bloodflame、Gigi Murin、Cecilia Immergreen、Raora Panthera

### ホロライブID

- **1期生**: Ayunda Risu、Moona Hoshinova、Airani Iofifteen
- **2期生**: Kureiji Ollie、Anya Melfissa、Pavolia Reine
- **3期生**: Vestia Zeta、Kaela Kovalskia、Kobo Kanaeru

### DEV_IS

- **ReGLOSS**: 火威青、音乃瀬奏、一条莉々華、儒烏風亭らでん、轟はじめ
- **FLOW GLOW**: 響咲リオナ、虎金妃笑虎、水宮枢、輪堂千速、綺々羅々ヴィヴィ

## 開発環境

このプロジェクトは**Vibe Coding**（AIペアプログラミング）で開発されています。

### Vibe Codingとは

AIアシスタント（Claude）と開発者が協力してコーディングを行う新しい開発スタイルです。このプロジェクトでは：

- 🤖 **AIアシスタント**: 設計提案、コード生成、リファクタリング支援
- 👨‍💻 **開発者**: 方向性決定、要件定義、最終確認
- 🔄 **相互作用**: リアルタイムでのフィードバックと改善

### 開発の特徴

- **高速プロトタイピング**: AIによる即座のコード生成
- **品質保証**: TypeScriptによる型安全性とAIによるベストプラクティス適用
- **拡張性重視**: 将来の機能追加を考慮したモジュラー設計
- **ドキュメント駆動**: コードと同時にドキュメントも生成

## 技術スタック

### フロントエンド

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Hero UI
- **Animation**: Framer Motion
- **State Management**: Zustand
- **Icons**: Lucide React

### インフラ

- **Deployment**: Vercel
- **Development**: Vibe Coding with Claude AI

## プロジェクト構造

```text
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # ランディングページ
│   │   ├── quiz/              # 質問フロー
│   │   └── result/            # 結果表示
│   ├── components/            # UIコンポーネント
│   ├── lib/
│   │   ├── members/           # メンバーデータ
│   │   │   ├── hololive/
│   │   │   │   ├── jp/        # JPメンバー（世代別）
│   │   │   │   ├── en/        # ENメンバー（世代別）
│   │   │   │   ├── id/        # IDメンバー（世代別）
│   │   │   │   └── devis/     # DEV_ISメンバー
│   │   │   └── index.ts       # 統合エクスポート
│   │   ├── questions.ts       # 質問データ
│   │   ├── recommendation.ts  # 推薦ロジック
│   │   └── icon-mapping.ts    # アイコンマッピング
│   └── types/                 # TypeScript型定義
└── public/
    └── images/
        └── hololive/
            └── icon/
                ├── jp/        # JPメンバーアイコン
                ├── en/        # ENメンバーアイコン
                ├── id/        # IDメンバーアイコン
                └── devis/     # DEV_ISメンバーアイコン
```

## 推薦アルゴリズム

システムは以下の要素を重み付けして推薦スコアを算出します：

- **コンテンツタイプマッチング** (30%): ゲーム実況、歌配信、雑談など
- **性格マッチング** (25%): 元気系、癒し系、クール系など
- **言語・支部マッチング** (20%): JP、EN、IDの好み
- **配信時間マッチング** (15%): 朝、昼、夜、深夜の視聴時間
- **配信スタイルマッチング** (10%): リスナーとの距離感、パフォーマンス重視など

## 開発・運用

### 環境設定

```bash
# 依存関係のインストール
cd frontend
npm install

# 開発サーバーの起動
npm run dev

# 本番ビルド
npm run build
```

### 環境変数

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### コード規約

#### TypeScript

- interfaceを優先（typeは必要な場合のみ）
- any型の使用禁止
- 厳密な型定義

#### React

- カスタムフックはuseプレフィックス
- パフォーマンス最適化（React.memo、useMemo等）
- Server State管理

#### スタイリング

- モバイルファーストアプローチ
- Tailwind CSSクラスの順序統一
- レスポンシブデザイン対応

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## Vibe Codingでの開発例

このプロジェクトでは、以下のような開発プロセスを採用：

1. **要件定義の対話**
   - 開発者: 「ホロライブのメンバーを推薦するシステムを作りたい」
   - AI: 質問形式の推薦システムを提案、技術スタックを推奨

2. **リアルタイムコーディング**
   - 開発者: 「ENメンバーも追加して」
   - AI: 即座にファイル構造を拡張し、データを追加

3. **リファクタリング**
   - 開発者: 「members.tsが長くなりすぎた」
   - AI: モジュラー構造への分割を実装

4. **品質向上**
   - TypeScriptの型定義を自動生成
   - ベストプラクティスに基づくコード構造

## 貢献

バグ報告や機能提案は、GitHubのIssuesまでお願いします。

Vibe Codingに興味がある方は、このプロジェクトがどのようにAIと協力して開発されたかを参考にしてください。

---

**Note**: このプロジェクトはファンプロジェクトであり、カバー株式会社とは関係ありません。
