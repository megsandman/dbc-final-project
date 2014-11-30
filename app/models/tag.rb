class Tag < ActiveRecord::Base
  has_and_belongs_to_many :recipes

  validates :name, presence: true, uniqueness: true

  def self.process_tags(tag_string)
    tags_array = tag_string.split(',')
    tags_array.map! {|tag| tag.strip}
    return tags_array
  end


end
