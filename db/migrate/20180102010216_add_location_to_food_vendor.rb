class AddLocationToFoodVendor < ActiveRecord::Migration[5.1]
  def change
    add_column :food_vendors, :location, :text
  end
end
