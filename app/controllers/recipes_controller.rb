class RecipesController < ApplicationController

  before_action :set_headers
  skip_before_filter  :verify_authenticity_token

  def index
    fb_id = params[:user_id]
    if User.find_by_facebook_id(fb_id) == nil
      p "*" * 50
      p "in create user section"
      @oauth = Koala::Facebook::OAuth.new(ENV['APP_ID'], ENV['APP_SECRET'], ENV['CALLBACK_URI'])
      @facebook_cookies = @oauth.get_user_info_from_cookies(cookies)
      @fb_user_id = @facebook_cookies["user_id"]
      @access_token = @facebook_cookies["access_token"]
      @graph = Koala::Facebook::API.new(@access_token)
      graph = @graph.get_object("#{@fb_user_id}")
      p "*" * 50
      user = User.new(facebook_id: @fb_user_id,
                      first_name: graph["first_name"],
                      last_name: graph["last_name"],
                      email: graph["email"])
      if user.save
        p "saved!"
      else
        p "didn't save"
      end

    else
      p "!" * 50
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
    #don't require user_id because that will be done automatically within the actions based on the params[:user_id]

    ####### => Do we include tags here??? the Extension will be sending tags with it.
    params.require(:recipe).permit(:title, :source_url, :img_url, :category_id)
  end

  def set_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  end

end
