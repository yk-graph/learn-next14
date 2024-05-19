## Overview

### clone ~ setup

```
$ git clone git@github.com:yk-graph/learn-next14.git

$ cd learn-next14

$ npm install

$ cp .env.local.example .env.local
```

### MongoDB

1. MongoDB にログイン https://account.mongodb.com/account/login
2. プロジェクト作成

- New Project をクリック
- Name Your Project の欄に適当なプロジェクト名を登録
- Next ボタンクリック
- Create Project ボタンクリック

3. クラスターの作成

- Create a cluster の画面で +Create ボタンをクリック
- M0 の Free を選択
- Name の欄に適当な名前を入力
- Provider は AWS を選択
- Region は Tokyo を選択
- Create Deployment ボタンをクリック

4. DB の設定

- TOP ページ -> サイドバー -> SECURITY 内の Quickstart を選択
- Username and Password を選択
- 何も変更を加えないで Create User をクリック
- Add entries to your IP Access List の IP Address に 0.0.0.0/0 を追記
- Add entries to your IP Access List の Description に 適当な文字列を追記
- Finish and Close をクリック

5. MongoDB との接続に必要なコネクションの文字列をコピー

- TOP ページ -> Clusters 内 -> Connect ボタンをクリック
- Driver ボタンをクリック
- 3. Add your connection string into your application code にある文字列をコピー

### プロジェクトを local で起動

環境変数 .env.local の API_URL に、上記でコピーした MongoDB の文字列をペースト

```
$ npm run dev
```
