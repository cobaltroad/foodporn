require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test 'fields are required' do
    new_user = User.new
    assert_not new_user.valid?
  end

  test 'can initialize with :password' do
    new_user = User.new(username: 'foo', password: 'bar', password_salt: 'salt')
    assert new_user.valid?
  end
end
