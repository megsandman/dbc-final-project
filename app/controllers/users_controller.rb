class UsersController < ApplicationController
  before_filter :parse_facebook_cookies

  def parse_facebook_cookies
  # @facebook_cookies ||= Koala::Facebook::OAuth.new('1520208361571689', '9bf144adb6dc080b2ea9f89218b08d14').get_user_info_from_cookie(cookies)
  # end

  def index

    # @access_token = @facebook_cookies["access_token"]
    # @graph = Koala::Facebook::GraphAPI.new(@access_token)

  end
end
