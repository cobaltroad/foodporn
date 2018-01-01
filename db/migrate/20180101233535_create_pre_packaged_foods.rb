class CreatePrePackagedFoods < ActiveRecord::Migration[5.1]
  def change
    create_table :pre_packaged_foods do |t|
      t.string :name
      t.text :alias
      t.text :description

      t.timestamps
    end
  end
end
