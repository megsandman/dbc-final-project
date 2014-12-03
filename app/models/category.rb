class Category < ActiveRecord::Base
  has_many :recipes

  validates :name, presence: true, uniqueness: true

  def self.get_category_id(category_name)
    category = Category.find_by(name: category_name)
    category.id
  end

end
