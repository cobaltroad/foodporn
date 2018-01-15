class ApplicationController < ActionController::API
  before_action :authenticate_request

  private

  def authenticate_request
    if auth_token.blank?
      render json: { error: 'Not authenticated' }, status: :unauthorized
    end
  end

  def auth_token
    @auth_token ||= if request.headers['Authorization'].present?
                      request.headers['Authorization'].split(' ').last
                    end
  end
end
