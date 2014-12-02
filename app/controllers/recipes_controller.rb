class RecipesController < ApplicationController

  skip_before_filter  :verify_authenticity_token

  def index
    fb_id = params[:user_id]
    if User.find_by_facebook_id(fb_id) == nil
      #CREATE USER
      @oauth = Koala::Facebook::OAuth.new('1520208361571689', '9bf144adb6dc080b2ea9f89218b08d14', 'http://localhost:3000/callback')
      @oauth.get_user_info_from_cookies(cookes)
    else
      user = User.find_by_facebook_id(fb_id)
      @recipes = user.recipes.order('created_at desc')
      render json: @recipes.to_json
    end
  end

  def show
    # recipe = Recipe.find(params[:id])
    # render json: recipe.to_json
  end

  def create
    ##########################
    ### => Need to find the user based on params[:user_id] from URL
    ### => then add this new recipe to user_name.recipes
    user = User.find_by(id: params[:user_id])

    @recipe = Recipe.new(recipe_params)
    category = params[:category] || "Appetizers"
    @recipe.category_id = Category.get_category_id(category)

    recipe_tags = params[:tags]
    tags_array = recipe_tags.split(',')
    tags_array.map! {|tag| tag.strip}

    tags_array = Tag.process_tags(params[:tags])

    tags_array.each do |tag|
      if Tag.find_by_name(tag) == nil
        @recipe.tags << Tag.create(name: tag)
      else
        @recipe.tags << Tag.find_by_name(tag)
      end
    end

    if @recipe.save
      user.recipes << @recipe
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
    params.require(:recipe).permit(:title, :source_url, :img_url, :category_id)
  end
end
