class SessionsController < ApplicationController

  def create
    user = User.omniauth(env['omniauth.auth'])
    p "%" * 50
    p user
    session[:user_id] = user
    redirect_to root_url
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end

end
