class UsersController < ApplicationController
  # before_filter :parse_facebook_cookies

  # def parse_facebook_cookies
  # @facebook_cookies ||= Koala::Facebook::OAuth.new('1520208361571689', '9bf144adb6dc080b2ea9f89218b08d14').get_user_info_from_cookie(cookies)
  # end

  def current_user
    if session['access_token']
      @graph = Koala::Facebook::GraphAPI.new(session["access_token"])
       p @graph.get_object("me")
    else
      p "*" * 50
      session['oauth'] = Koala::Facebook::OAuth.new(ENV['APP_ID'], ENV['APP_SECRET'], ENV['CALLBACK_URI'])
      redirect_to session['oauth'].url_for_oauth_code()
    end
    # p @oauth
    # @facebook_cookies = @oauth.get_user_info_from_cookies(cookies)
    # p @facebook_cookies
    # @fb_user_id = @facebook_cookies["user_id"]
    # return @fb_user_id

    ####


    # @graph = Koala::Facebook::API.new(your_oauth_token)
    # @graph.get_object("me")

  end

  def logout
    session['oauth'] = nil
    session['access_token'] = nil
    redirect_to '/'
  end

  def callback
    p "^" * 50
    p params[:code]
    p session['oauth']
    p session['oauth'].methods.sort
    # session['access_token'] = session['oauth'].get_access_token(params[:code])
    # redirect_to '/current_user'
  end
end


# @oauth = Koala::Facebook::OAuth.new('1520208361571689', '868bc8ca70358e100dc9572a14e54f55')

# cookies = {"fbs_190889632882"=>"\"access_token=190889632882|2.U25mFtixF8Pqth45AtnsBQ__.3600.1272909600-2905623|DNjswq9QfKDrP60TY76Tv8GxCc.&expires=1272909600&secret=QR_id58vqV_qW7MnfJlmLw__&session_key=2.U25mFtixF8Pqth45AtnsBQ__.3600.1272909600-2905623&sig=a76960c0c3669470f7ca53b53e034ac4&uid=2905623\""}

# {"code"=>"AQCPD53I_AgOFllgwjo6J-77-RJqfATyeKDb-m6e8yR89bXy-7rduIxbKVQgv_u0Nnjng8am2_SDqaz-bP4M6AbiX4uZXvJwG34JD_5QHSNJriqlJ1ban4pVQaEHHhPbZr15ZTUnXDS80bDlk1LHxXDnl7yx4m_9Z5fOtHVf5jc0esh9xWAD77eUL0upVJ1ESftQKPCu-4k62zQCinrg2phJkOdIubR8xSN5j6ty37usn4B2K34AWalvGkmo9EHjppVt_N-FfyAn_ZqkYWJwx8N8OJCvqtdXnxckpPXTBIzn3-Fz3D5Gzq03jSXoZ94o1rQ"}