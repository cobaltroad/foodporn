class ApplicationController < ActionController::API
  before_action :authenticate_request

  class AlreadyLoggedOutError < StandardError
  end

  private

  def authenticate_request
    begin
      id = auth_token[:user] && auth_token[:user][:id]
      user = User.find(id)
      last_login = auth_token[:user] && auth_token[:user][:last_login]
      raise AlreadyLoggedOutError unless last_login == user.last_login.to_i
      @current_user = user
    rescue
      render json: { error: 'Not authenticated' }, status: :unauthorized
    end
  end

  private

  def http_token
    @http_token ||= if request.headers['Authorization'].present?
                      request.headers['Authorization'].split(' ').last
                    end
  end

  def auth_token
    @auth_token ||= begin
                      decoded = JWT.decode(http_token, Rails.application.secrets.secret_key_base)
                      HashWithIndifferentAccess.new(decoded[0])
                    rescue JWT::DecodeError
                      nil
                    end
  end
end
