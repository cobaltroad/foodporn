require 'test_helper'

class DishesControllerTest < ActionDispatch::IntegrationTest

  test "return all dishes" do
    get api_dishes_url
    assert_response :ok
  end
end
