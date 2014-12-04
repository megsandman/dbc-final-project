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
    redirect_to '/login'

  end

  def current_user
    if session[:user_id]
      render json: User.find(session[:user_id]).to_json
    else
      fail = "false"
      render json: fail.to_json
    end
  end


  def login
    p ")" * 50
    render :login
  end

end
