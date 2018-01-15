class ApplicationController < ActionController::API
  before_action :authenticate_request

  private

  def authenticate_request
    if auth_token.blank?
      render json: { error: 'Not authenticated' }, status: :unauthorized
    else
      id = auth_token[:user] && auth_token[:user][:id]
      @current_user = User.find(id)
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
