require 'test_helper'

class DishesControllerTest < ActionDispatch::IntegrationTest

  test "with no header, return unauthorized" do
    get api_dishes_url
    assert_response :unauthorized
  end
end
