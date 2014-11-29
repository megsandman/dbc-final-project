require 'rails_helper'

RSpec.describe UsersController, :type => :controller do
  context "#index" do
    it "redirects you to your recipes" do
      expect(response).to be_redirect
    end
  end
end