class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true
  validates :password_digest, presence: true

  def json_web_token(expiration=24.hours.from_now.to_i)
    payload = {
      exp: expiration,
      user: {
        id: id,
        last_login: last_login.to_i
      }
    }

    JWT.encode(payload, Rails.application.secrets.secret_key_base, 'HS256')
  end
end
