class PrePackagedFood < ApplicationRecord
  has_many :dishes, as: :source
end
