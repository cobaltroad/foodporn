class Api::CurrentUsersController < ApplicationController
  def show
    render json: { current_user_id: @current_user.id }
  end

  def destroy
    @current_user.update_attributes(last_login: Time.now)
    head :reset_content
  end
end
