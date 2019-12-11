class Product < ApplicationRecord
  has_many :images, dependent: :destroy
  accepts_nested_attributes_for :images, allow_destroy: true # allow_destroy を設定すると params[:_destroy] = 1 だったら要素を削除する
  validates :images, presence: true
  validates :name, presence: true
end
