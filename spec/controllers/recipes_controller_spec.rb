require 'rails_helper'

RSpec.describe RecipesController, :type => :controller do
  before :each do
    user = User.create(name: "charlie", uid: '10100684954327834')
    Category.create(name: "Entree")
    user.recipes.create(title: "title", source_url: "", img_url: "", body: nil, tag_string: "", category: Category.first)
  end
  context "#index" do
    #shows all the recipes for a given user
    #need to create a user and add a recipe to that user
    it "returns all a users recipes" do
      user_recipes_path(User.first)
      expect(response).to be_success
    end
    xit "returns recipes as JSON" do
      get :index, format: :json, id: 1
      expect(response.body).to eq(user.recipes.to_json)
    end
  end


  context "#create" do
    it "creates a new object in the DB" do
      expect { post :create, user_id: 1, recipe: { title: "The new" }, category: Category.first}.to change(Recipe, :count).by(1)
    end
  end

  context "#delete" do
   xit "deletes a recipe from a users board" do
      expect { delete :destroy, user_id: 1, id: 1 }.to change(Recipe, :count).by(-1)
    end
  end
end
