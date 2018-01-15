require 'test_helper'

class AuthenticationsControllerTest < ActionDispatch::IntegrationTest

  test "creating with valid password" do
    user = users(:test)
    params = { username: 'test', password: 'foo' }
    post api_authentication_url, params: params
    assert_response :created
  end

  test "creating with bad password" do
  end

  test "destroying with good token" do
  end

  test "destroying with bad token" do
  end
end
