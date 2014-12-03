class User < ActiveRecord::Base
  has_many :recipes

  # validates :email, :password, presence: true
  # validates  :email, uniqueness: true

  def self.omniauth(auth)
    p "*" * 50
    if User.find_by(uid: auth.provider) == nil
      user = User.new(provider: auth.provider, uid: auth.uid, name: auth.info.name, image: auth.info.image, expires_at: Time.at(auth.credentials.expires_at), token: auth.credentials.token)
      user.save!
    else
      user = User.find_by(uid: auth.provider)
    end

    p "*" * 50
    # p auth
    # where(auth.slice(:provider, :uid)).first_or_initialize.tap do |user|
    #   user.provider = auth.provider
    #   user.uid = auth.uid
    #   user.name = auth.info.name
    #   user.image = auth.info.image
    #   user.token = auth.credentials.token
    #   user.expires_at = Time.at(auth.credentials.expires_at)
    #   user.save!
    # end
  end

end
