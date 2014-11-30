class RecipesController < ApplicationController

  skip_before_filter  :verify_authenticity_token

  def index
    # user = User.find(params[:user_id])
    # @recipes = Recipe.where(user_id: user.id)
    @recipes = Recipe.all.order('created_at desc')
    render json: @recipes.to_json
  end

  def show
    # recipe = Recipe.find(params[:id])
    # render json: recipe.to_json
  end

  def create
    @recipe = Recipe.new(recipe_params)
    category = Category.find_by_name(params[:category])
    cat_id = category.id
    @recipe.category_id = cat_id
    if @recipe.save
      render json: @recipe.to_json
    else
      format.json { render json: @recipe.errors, status: :unprocessable_entity }
    end

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
