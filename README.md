# README

## What
1. 画像の複数枚削除
    1. プレビュー時に削除ボタン追加
    1. 削除ボタン押下時にプレビュー削除(見た目の削除)
    1. 上記と同時に、"_destroy"に value = 1 を付与(データの削除予約)

## Why
* メルカリ画像投稿機能の細分化

## gem list
* pry-rails
* jquery-rail https://github.com/rails/jquery-rails
* haml-rails https://github.com/haml/haml-rails
* carrierwave

## 構築手順
* productテーブル作成(name:string)
* imageテーブル作成(image:string, product_id:外部キー)
* 親 productモデル 子 imageモデル で構築
* "carrierwave"導入後、以下のコードを実行

```
rails g uploader images
```
* image モデルに以下の一文を追加

```
mount_uploader :image, ImagesUploader
```

## 参考記事
