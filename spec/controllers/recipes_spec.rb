require 'rails_helper'

describe RecipesController do
  context "#index" do
    #shows all the recipes for a given user
    #need to create a user and add a recipe to that user
    let!(:user) {User.create()}
  end

  context "show" do
    #shows a specific recipe of a given ID
  end
end