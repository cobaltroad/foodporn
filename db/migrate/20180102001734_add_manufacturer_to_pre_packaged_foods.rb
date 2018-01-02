class AddManufacturerToPrePackagedFoods < ActiveRecord::Migration[5.1]
  def change
    add_column :pre_packaged_foods, :manufacturer, :string
  end
end
