require 'test_helper'

class SinglePageAppControllerTest < ActionDispatch::IntegrationTest

  test "all HTML routes should redirect to root" do
    get "/some_path", as: :html
    assert_response :redirect
  end
end
