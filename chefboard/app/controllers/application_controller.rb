class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  # before_filter: set_access_control_headers
  # def  set_access_control_headers
  #   # http://chrome-extension://fepdobinlffgccepofengciffppnghjh/popup.html
  #   headers["Access-Control-Allow-Origin"] = "*"
  #   headers['Access-Control-Request-Method'] = 'POST'
  #   headers['Access-Control-Allow-Headers'] = 'content-type, accept'
  #   # headers['Access-Control-Allow-Credentials'] = "true"
  # end
end
