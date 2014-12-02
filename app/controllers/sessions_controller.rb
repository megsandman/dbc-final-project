class SessionsController < ApplicationController
  # before_action -> { verify_facebook_auth }
  def create

  end

  def destroy
  end

  def current_user
    @oauth = Koala::Facebook::OAuth.new('1520208361571689', '9bf144adb6dc080b2ea9f89218b08d14', 'http://localhost:3000/callback')
    @oauth.get_user_info_from_cookies(cookes)
  end

  def verify_facebook_auth


  end
end
