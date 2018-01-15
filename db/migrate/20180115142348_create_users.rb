class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.text :encrypted_password
      t.string :password_salt
      t.datetime :last_login

      t.timestamps
    end
  end
end
