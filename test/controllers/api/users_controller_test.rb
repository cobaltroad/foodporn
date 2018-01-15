require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest

  test "with no header, return unauthorized" do
    get api_current_user_url
    assert_response :unauthorized
  end
end
