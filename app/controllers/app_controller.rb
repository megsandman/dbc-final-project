class AppController < ApplicationController

  def index
    redirect_to "/login#" unless session[:user_id]
  end

end