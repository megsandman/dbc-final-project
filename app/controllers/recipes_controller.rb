class RecipesController < ApplicationController

  skip_before_filter  :verify_authenticity_token

  def index
    if session[:user_id]
      fb_id = params[:user_id]

      if User.find_by(uid: fb_id) == nil
        p "$" * 50
        p params
        redirect_to new_session_path("facebook")
      else
        user = User.find_by(uid: fb_id)
        @recipes = user.recipes.order('created_at desc')
        render json: @recipes.to_json
      end
    else
      redirect_to '/login'
    end
  end


  def create

    if session[:user_id]
      fb_id = params[:user_id]
      user = User.find_by(uid: fb_id)

      @recipe = Recipe.new(recipe_params)
      category = params[:category] || "Appetizers"
      @recipe.category_id = Category.get_category_id(category)


      recipe_tags = tag_params
      tags_array = recipe_tags.split(',')
      tags_array.map! {|tag| tag.strip}

      tags_array.each do |tag|
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
    else
      redirect_to '/login'
    end

  end

  def update
    if session[:user_id]
      fb_id = params[:user_id]
      user = User.find_by(uid: fb_id)
      recipe = Recipe.find(params[:id])

      recipe.title = params[:title]
      recipe.category = Category.find(params[:category_id])

      recipe.tag_string = params[:tag_string]
      tag_array = recipe.tag_string.split(',')

      tag_array.each do |tag|
        stripped_tag = tag.strip
        if Tag.find_by(name: tag) == nil
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
    else
      redirect_to '/login'
    end
  end

    def destroy
      if session[:user_id]
        fb_id = params[:user_id]
        recipe = Recipe.find_by(id: params[:id])
        user = User.find_by(uid: fb_id)
        recipe.destroy
        recipes = user.recipes
        render json: recipes.to_json
      else
        redirect_to '/login'
      end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :source_url, :img_url)
  end

  def tag_params
    params.permit(:tags)
  end

  def category_params
    params.permit(:category)
  end

end
