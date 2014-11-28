class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :source_url
      t.string :img_url
      t.string :body
      t.integer :category_id
      t.integer :user_id

      t.timestamps
    end
  end
end
