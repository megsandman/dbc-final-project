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

    @recipe.category_id = Category.get_category_id(params[:category])

    # recipe_tags = params[:tags]
    # tags_array = recipe_tags.split(',')
    # tags_array.map! {|tag| tag.strip}

    tags_array = Tag.process_tags(params[:tags])

    tags_array.each do |tag|
      if Tag.find_by_name(tag) == nil
        @recipe.tags << Tag.create(name: tag)
      else
        @recipe.tags << Tag.find_by_name(tag)
      end
    end

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
