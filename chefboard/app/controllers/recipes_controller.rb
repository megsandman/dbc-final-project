class RecipesController < ApplicationController

  def index
    # user = User.find(params[:user_id])
    # @recipes = Recipe.where(user_id: user.id)
    @recipes = Recipe.where(user_id: 1)
    render json: @recipes.to_json
  end

  def show
    recipe = Recipe.find(params[:id])
    render json: recipe.to_json
  end

  def create
    Recipe.create(recipe_params)
    redirect_to
  end

  def destroy
    recipe = Recipe.find_by(id: params[:id])
    recipe.destroy
    redirect_to user_recipes_path
  end



  private #--------------------------------------------------
  def recipe_params
    #don't require user_id because that will be done automatically within the actions based on the params[:user_id]
    params.require(:recipe).permit(:title, :source_url, :img_url, :body, :category_id)
  end
end
