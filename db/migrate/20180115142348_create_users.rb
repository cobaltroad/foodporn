class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.text :password_digest
      t.datetime :last_login

      t.timestamps
    end
  end
end
