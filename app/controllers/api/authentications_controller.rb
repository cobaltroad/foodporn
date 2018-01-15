class Api::AuthenticationsController < ActionController::API
  def create
    user = User.find_by_username(authentication_params[:username])
    if user.try(:authenticate, authentication_params[:password])
      render json: { token: user.json_web_token }, status: :created
    else
      render json: { error: 'Not authenticated' }, status: :unauthorized
    end
  end

  private

  def authentication_params
    @authentication_params ||= params.permit(:username, :password)
  end
end
