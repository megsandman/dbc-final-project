require 'rails_helper'

describe User do
  context "presence validations" do
    xit { should validate_presence_of :username }
    xit { should validate_presence_of :email }
    xit { should validate_presence_of :password }
  end

  context "uniqueness validations" do
    xit { should validate_uniqueness_of :username }
    xit { should validate_uniqueness_of :email }
  end
end

describe Recipe do
  context "presence validations" do
    xit { should validate_presence_of :title }
    xit { should validate_presence_of :category_id }
  end
end

describe Category do
  context "validations" do
    xit { should validate_presence_of :name }
    xit { should validate_uniqueness_of :name }
  end
end

describe Tag do
  context "validations" do
    xit { should validate_presence_of :name }
    xit { should validate_uniqueness_of :name }
  end
end