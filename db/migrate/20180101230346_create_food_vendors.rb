class CreateFoodVendors < ActiveRecord::Migration[5.1]
  def change
    create_table :food_vendors do |t|
      t.string :name
      t.text :alias
      t.text :description

      t.timestamps
    end
  end
end
