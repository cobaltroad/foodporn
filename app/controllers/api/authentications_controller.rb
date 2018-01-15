class Api::AuthenticationsController < ActionController::API
  def create
    user = User.find_by_username(authentication_params[:username])
    if user.try(:authenticate, authentication_params[:password])
      render json: user.jwt_token, status: :created
    end
  end

  def destroy
    # update last login
  end

  private

  def authentication_params
    @authentication_params ||= params.permit(:username, :password)
  end
end
