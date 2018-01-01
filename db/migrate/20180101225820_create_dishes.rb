class CreateDishes < ActiveRecord::Migration[5.1]
  def change
    create_table :dishes do |t|
      t.string :name
      t.text :alias
      t.text :description
      t.integer :source_id
      t.string :source_type

      t.timestamps
    end
  end
end
