class RecipesController < ApplicationController

  def index
    user = User.find(params[:user_id])
    @recipes = Recipe.where(user_id: user.id)
    render json: @recipes.to_json
  end

  def show
    recipe = Recipe.find(params[:id])
    render json: recipe.to_json
  end

  def create
    Recipe.create(recipe_params)
    p"*"*30
    p"*"*30
    p Recipe.count
    p"*"*30
    p"*"*30
    redirect_to
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :source_url, :img_url, :body, :category_id) #don't require user_id because that will be done automatically within the routes
  end
end
