class SessionsController < ApplicationController

  def create
    user_id = User.omniauth(env['omniauth.auth'])
    p "%" * 50
    p user_id
    session[:user_id] = user_id
    redirect_to "#/dashboard"
  end

  def destroy
    p "!" * 50
    session[:user_id] = nil
    redirect_to root_url
  end

  def current_user
    if session[:user_id]
      render json: User.find(session[:user_id]).to_json
    else
      ## does this have to return as JSON?
      fail = "Did not work"
      render json: fail.to_json
    end
  end

  def login
    redirect_to "/auth/facebook"
  end

end
