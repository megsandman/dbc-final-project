class UsersController < ApplicationController
  before_filter :parse_facebook_cookies

  def index

    @access_token = @facebook_cookies["access_token"]
    @graph = Koala::Facebook::GraphAPI.new(@access_token)

  end

end
