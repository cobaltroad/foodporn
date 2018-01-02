class Dish < ApplicationRecord
  belongs_to :source, polymorphic: true

  scope :named, ->(name) { where(name: name) }
end
