class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true
  validates :password_digest, presence: true

  def jwt_token
    payload = {
      exp: 24.hours.from_now.to_i,
      current_user: {
        id: id,
        username: username,
        password_digest: password_digest,
        last_login: last_login.to_i
      }
    }

    # JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end
end
