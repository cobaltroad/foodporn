require 'test_helper'

class CurrentUsersControllerTest < ActionDispatch::IntegrationTest

  test "current user with no token" do
    get api_current_user_url
    assert_response :unauthorized
  end

  test "current user with expired token" do
    user = users(:test)
    get api_current_user_url, headers: auth_bearer(user, 24.hours.ago.to_i)
    assert_response :unauthorized
  end

  test "current user with good token" do
    user = users(:test)
    get api_current_user_url, headers: auth_bearer(user)
    assert_response :ok
  end

  test "current user with bad token (bad secret key)" do
    bad_token = JWT.encode({foo: 'bar'}, "abc123")
    get api_current_user_url, headers: {"Authorization": "Bearer #{bad_token}"}
    assert_response :unauthorized
  end

  test "current user with bad token (bad payload)" do
    bad_token = JWT.encode({foo: 'bar'}, Rails.application.secrets.secret_key_base)
    get api_current_user_url, headers: {"Authorization": "Bearer #{bad_token}"}
    assert_response :unauthorized
  end

  test "current user with bad token (unknown user id)" do
    bad_token = JWT.encode({user: { id: 0 }}, Rails.application.secrets.secret_key_base)
    get api_current_user_url, headers: {"Authorization": "Bearer #{bad_token}"}
    assert_response :unauthorized
  end

  test "destroying with good token" do
    user = users(:test)
    delete api_logout_url, headers: auth_bearer(user)
    assert_response :reset_content
    last_login = user.reload.last_login
    assert_not last_login.blank?
  end

  test "current user after already logged out" do
    user = users(:test)
    delete api_logout_url, headers: auth_bearer(user)
    assert_response :reset_content
    get api_current_user_url, headers: auth_bearer(user)
    assert_response :unauthorized
  end
end
