class UsersController < ApplicationController
  # before_filter :parse_facebook_cookies

  # def index

  #   @access_token = @facebook_cookies["access_token"]
  #   @graph = Koala::Facebook::GraphAPI.new(@access_token)

  # end
  before_action -> { verify_facebook_auth params[:access_key] }

  def verify_facebook_auth access_key
        p access_key

        response = HTTParty.get("https://graph.facebook.com/debug_token?input_token=#{access_key}&access_token=#{access_key}")

        # check response for "is valid" to ensure the key is legitimate
        # optionally, also compare the "user id" from the response against the stored user's facebook_id

        p response
    end

    def login

      # takes FB ID and checks to see if user exists

      # if user exists
        # Assign access key

      # if user does NOT exist
        # Create new user based on params
        # Assign access key

    end

    def logout

      # delete access key

    end

end
