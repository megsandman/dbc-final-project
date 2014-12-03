class UsersController < ApplicationController


  def current_user

    if session[:user_id] == nil
      return (-1)
    else
      return User.find(session[:user_id]).uid
    end

end

