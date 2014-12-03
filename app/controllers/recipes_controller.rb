class RecipesController < ApplicationController

  skip_before_filter  :verify_authenticity_token

  def index
    fb_id = params[:user_id]
    if User.find_by(uid: fb_id) == nil
      redirect_to sessions

####   OLD
      # p "*" * 50
      # p "in create user section"
      # @oauth = Koala::Facebook::OAuth.new(ENV['APP_ID'], ENV['APP_SECRET'], ENV['CALLBACK_URI'])
      # @facebook_cookies = @oauth.get_user_info_from_cookies(cookies)
      # @fb_user_id = @facebook_cookies["user_id"]
      # @access_token = @facebook_cookies["access_token"]
      # @graph = Koala::Facebook::API.new(@access_token)
      # graph = @graph.get_object("#{@fb_user_id}")
      # # p "*" * 50
      # user = User.new(uid: @fb_user_id,
      #                 first_name: graph["first_name"],
      #                 last_name: graph["last_name"],
      #                 email: graph["email"])
      # if user.save
      #   p "saved!"
      # else
      #   p "didn't save"
      # end
    else
      user = User.find_by(uid: fb_id)
      @recipes = user.recipes.order('created_at desc')
      render json: @recipes.to_json
    end
  end


  def create

    user = User.find_by(uid: fb_id)

    @recipe = Recipe.new(recipe_params)
    category = params[:category] || "Appetizers"
    @recipe.category_id = Category.get_category_id(category)

    recipe_tags = params[:tags]
    tags_array = recipe_tags.split(',')
    tags_array.map! {|tag| tag.strip}

    tags_array = Tag.process_tags(params[:tags])

    tags_array.each do |tag|
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
    fb_id = params[:user_id]
    recipe = Recipe.find(params[:id])
    user = User.find_by(uid: fb_id)

    recipe.update(title: params[:title])

    recipe.category = Category.find(params[:category_id])

    recipe_tags = params[:tags]
    recipe.tag_string = params[:tags]
    p "5" * 50
    tags_array = recipe_tags.split(',')
    p tags_array
    # tags_array.map! {|tag| tag.strip}

    # tags_array = Tag.process_tags(params[:tags])

    tags_array.each do |tag|
      if Tag.find_by(name: tag) == nil
        p "6" * 50
        p tag
        # stripped_tag = tag.strip
        recipe.tags << Tag.create(name: tag)
      else
        recipe.tags << Tag.find_by(name: tag)
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
    fb_id = params[:user_id]
    recipe = Recipe.find_by(id: params[:id])
    user = User.find_by(uid: fb_id)
    recipe.destroy
    recipes = user.recipes
    render json: recipes.to_json


    # redirect_to user_recipes_path
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :source_url, :img_url, :category_id)
  end
end
