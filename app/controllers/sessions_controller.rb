class SessionsController < ApplicationController
  before_action -> { verify_facebook_auth }
  def create

  end

  def destroy
  end

  def current_user
  end

  def verify_facebook_auth
    response = Koala::Facebook::OAuth.new('1520208361571689', '9bf144adb6dc080b2ea9f89218b08d14')

    p response
    p response.get_user_info_from_cookies
    # p response.data.user_id
  end
end
