class CreateFoodResources < ActiveRecord::Migration[5.1]
  def change
    create_table :food_resources do |t|
      t.string :name
      t.text :alias
      t.text :description

      t.timestamps
    end
  end
end
