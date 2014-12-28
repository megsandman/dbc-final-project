class RecipesController < ApplicationController

  skip_before_filter  :verify_authenticity_token
  before_action :authenticate

  def index
    fb_id = user_id[:user_id]

    if User.find_by(id: session[:user_id]) == nil
      redirect_to new_session_path("facebook")
    else
      user = User.find_by(id: session[:user_id])
      @recipes = user.recipes.order('created_at desc')
      render json: @recipes.to_json
    end
  end


  def create
    fb_id = user_id[:user_id]
    user = User.find_by(id: session[:user_id])

    @recipe = Recipe.new(recipe_params)
    category = category_params[:category] || "Appetizers"
    @recipe.category_id = Category.get_category_id(category)
    @recipe.tag_string = tag_params[:tags]
    tag_array = @recipe.tag_string.split(',')

    tag_array.each do |tag|
      stripped_tag = tag.strip
      if Tag.find_by(name: tag) == nil
        @recipe.tags << Tag.create(name: tag)
      else
        @recipe.tags << Tag.find_by(name: tag)
      end
    end

    if @recipe.save
      user.recipes << @recipe
      render json: @recipe.to_json
    else
      format.json { render json: @recipe.errors, status: :unprocessable_entity }
    end

  end

  def update
    fb_id = user_id[:user_id]
    user = User.find_by(uid: fb_id)
    recipe = Recipe.find(params[:id])

    recipe.title = params[:title]
    recipe.category = Category.find(params[:category_id])

    recipe.tag_string = tag_params[:tags]
    tag_array = recipe.tag_string.split(',')

    tag_array.each do |tag|
      stripped_tag = tag.strip
      if Tag.find_by(name: stripped_tag) == nil
        recipe.tags << Tag.create(name: stripped_tag)
      else
        recipe.tags << Tag.find_by(name: stripped_tag)
      end
    end

    if recipe.save
      user.recipes << recipe
      render json: recipe.to_json
    else
      format.json { render json: recipe.errors, status: :unprocessable_entity }
    end
  end

    def destroy
      fb_id = user_id[:user_id]
      recipe = Recipe.find_by(id: params[:id])
      user = User.find_by(uid: fb_id)
      recipe.destroy
      recipes = user.recipes
      render json: recipes.to_json
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :source_url, :img_url, :user_id)
  end

  def tag_params
    params.permit(:tags)
  end

  def category_params
    params.permit(:category)
  end

  def user_id
    params.permit(:user_id)
  end

end
