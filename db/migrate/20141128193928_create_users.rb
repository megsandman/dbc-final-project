class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.bigint :facebook_id
      t.string :email
      t.string :access_key


      t.timestamps
    end
  end
end
