###4. Firebase プロジェクトの作成と設定
1.Firebase コンソール: https://console.firebase.google.com/(opens in a new tab) にアクセスし、Google アカウントでログインします。 2.プロジェクトの追加: 「プロジェクトを追加」ボタンをクリックし、プロジェクト名を入力して作成します。 3.ウェブアプリの追加: プロジェクトの概要ページで、ウェブアイコン (</>) をクリックし、ウェブアプリを追加します。 4.アプリに名前を付ける: アプリに名前を付け、Firebase Hosting の設定はスキップして「アプリを登録」をクリックします。
5.Firebase SDK の構成: 表示された Firebase SDK の構成コードをコピーします。

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_PROJECT_ID.appspot.com",
messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
appId: "YOUR_APP_ID"
};

#Firebase パッケージのインストール: ターミナルで以下のコマンドを実行して、Firebase パッケージをインストールします。

npm install firebase

#Firebase の初期化: firebase.js ファイルを作成し、コピーした Firebase SDK の構成コードを貼り付けて、Firebase を初期化します。
lib/firebase.js を作成して下記を貼り付けてください

// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };

#.env.local ファイルを作成して、firebaseConfig の値を環境変数として定義してください。

NEXT_PUBLIC_FIREBASE_API_KEY="YOUR_API_KEY"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="YOUR_PROJECT_ID.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="YOUR_PROJECT_ID.appspot.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
NEXT_PUBLIC_FIREBASE_APP_ID="YOUR_APP_ID"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="YOUR_MEASUREMENT_ID"

###コンポーネントの作成 ##ディレクトリ構造:
my-eng-vocab-app/
├── src/
│ ├── app/
│ │ ├── page.js // ホームページ
│ │ ├── layout.js // ルートレイアウト
│ │ ├── new-word/ // 新規登録ページ
│ │ │ ├── page.js
│ │ ├── edit-word/ // 編集ページ
│ │ │ ├── page.js
│ │ ├── test/ // 暗記テストページ
│ │ │ ├── page.js
│ │ ├── components/ // React コンポーネント
│ │ │ ├── WordForm.js // 単語登録・編集フォーム
│ │ │ ├── WordList.js // 単語リスト
│ │ │ ├── ConfirmationModal.js // 削除確認モーダル
│ │ │ ├── TestTable.js // テストテーブル
│ │ ├── firebase.js // Firebase 初期化
├── public/
├── styles/
├── next.config.js
├── package.json
└── ...
