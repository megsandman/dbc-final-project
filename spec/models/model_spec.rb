require 'rails_helper'

describe User do
  context "presence validations" do
    it { should validate_presence_of :username }
    it { should validate_presence_of :email }
    it { should validate_presence_of :password }
  end

  context "uniqueness validations" do
    it { should validate_uniqueness_of :username }
    it { should validate_uniqueness_of :email }
  end
end

describe Recipe do
  context "presence validations" do
    it { should validate_presence_of :title }
    it { should validate_presence_of :category_id }
  end
end

describe Category do
  context "validations" do
    it { should validate_presence_of :name }
    it { should validate_uniqueness_of :name }
  end
end

describe Tag do
  context "validations" do
    it { should validate_presence_of :name }
    it { should validate_uniqueness_of :name }
  end
end