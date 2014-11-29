require 'rails_helper'

RSpec.describe UsersController, :type => :controller do
  let!(:user_params){{username: "charlie", email: "charlie@charlie.com", password: "charlie"}}

  context "#index" do
    it "redirects you to your recipes" do
      get :index, user_id: 1, user: user_params
      # expect(response).to be_redirect
    end
  end
end