class User < ApplicationRecord

  def initialize(opt={})
    if opt[:password]
      password = opt.delete(:password)
      opt[:encrypted_password] = User.encrypt_password(password, opt[:password_salt])
    end
    super(opt)
  end

  validates :username, presence: true
  validates :encrypted_password, presence: true
  validates :password_salt, presence: true

  def has_password?(unencrypted_password)
    # potentially use bcrypt gem
    input_password = User.encrypt_password(unencrypted_password, password_salt)
    input_password == encrypted_password
  end

  def jwt_token
    payload = {
      exp: 24.hours.from_now.to_i,
      current_user: {
        id: id,
        username: username,
        encrypted_password: encrypted_password,
        last_login: last_login.to_i
      }
    }

    # JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  class << self
    def encrypt_password(password, salt)
      encrypted = Digest::SHA2.new(512).update(password + salt)
      encrypted.to_s
    end
  end
end
