require 'rails_helper'

RSpec.describe RecipesController, :type => :controller do
  before :each do
    user = User.create(username: "charlie", email: "charlie@charlie.com", password: "charlie")
    Category.create(name: "Entree")
    user.recipes.create(title: "title", category: Category.first)
  end
  context "#index" do
    #shows all the recipes for a given user
    #need to create a user and add a recipe to that user
    it "returns all a users recipes" do
      user_recipes_path(User.first)
      expect(response).to be_success
    end
    it "returns recipes as JSON" do
      get :index, format: :json, user_id: 1
      expect(response.body).to eq(Recipe.all.to_json)
    end
  end

  context "#show" do
    #shows a specific recipe of a given ID
    it "returns a given recipe" do
      user_recipe_path(User.first, Recipe.first)
      expect(response).to be_success
    end
    it "returns the recipe as JSON" do
      get :show, format: :json, user_id: 1, id: 1
      expect(response.body).to eq(Recipe.first.to_json)
    end
  end

  context "#create" do
    it "creates a new object in the DB" do
      expect { post :create, user_id: 1, recipe: { title: "The new", category_id: Category.first.id } }.to change(Recipe, :count).by(1)
    end
  end

  context "#delete" do
    it "deletes a recipe from a users board" do
      expect { delete :destroy, user_id: 1, id: 1 }.to change(Recipe, :count).by(-1)
    end
  end
end
