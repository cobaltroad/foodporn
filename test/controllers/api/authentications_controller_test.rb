require 'test_helper'

class AuthenticationsControllerTest < ActionDispatch::IntegrationTest

  test "creating with valid password" do
    params = { username: 'test', password: 'foo' }
    post api_login_url, params: params
    assert_response :created
  end

  test "creating with bad password" do
    params = { username: 'test', password: 'bar' }
    post api_login_url, params: params
    assert_response :unauthorized
  end
end
