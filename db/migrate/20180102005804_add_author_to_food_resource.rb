class AddAuthorToFoodResource < ActiveRecord::Migration[5.1]
  def change
    add_column :food_resources, :author, :string
  end
end
