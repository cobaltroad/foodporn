class FoodVendor < ApplicationRecord
  has_many :dishes, as: :source
end
