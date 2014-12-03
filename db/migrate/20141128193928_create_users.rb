class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :provider
      t.integer :uid
      t.string :name
      t.string :image
      t.datetime :expires_at


      t.timestamps
    end
  end
end
