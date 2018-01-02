class FoodResource < ApplicationRecord
  has_many :dishes, as: :source
end
