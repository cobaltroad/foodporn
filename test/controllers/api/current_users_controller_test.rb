require 'test_helper'

class CurrentUsersControllerTest < ActionDispatch::IntegrationTest

  test "with no header" do
    get api_current_user_url
    assert_response :unauthorized
  end

  test "with header" do
    user = users(:test)
    get api_current_user_url, headers: auth_bearer(user)
    assert_response :ok
  end
end
