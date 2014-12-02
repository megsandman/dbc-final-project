class UsersController < ApplicationController
  before_filter :parse_facebook_cookies

  def parse_facebook_cookies
  # @facebook_cookies ||= Koala::Facebook::OAuth.new('1520208361571689', '9bf144adb6dc080b2ea9f89218b08d14').get_user_info_from_cookie(cookies)
  # end

  def current_user

    @oauth = Koala::Facebook::OAuth.new(ENV['APP_ID'], ENV['APP_SECRET'], ENV['CALLBACK_URI'])
    @facebook_cookies = @oauth.get_user_info_from_cookies(cookies)
    @fb_user_id = @facebook_cookies["user_id"]
    return @fb_user_id

  end
end
