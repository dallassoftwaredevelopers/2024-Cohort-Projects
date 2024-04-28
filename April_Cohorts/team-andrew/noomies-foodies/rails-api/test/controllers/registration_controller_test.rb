require 'test_helper'

class RegistrationsControllerTest < ActionController::TestCase 

include Devise::Test::ControllerHelpers



  def setup
    @controller = Users::RegistrationsController.new
    @request.env["devise.mapping"] = Devise.mappings[:user]

  end

  test "should create a new user" do

    user_params = { email: 'foobar@example.com', password: '123456'}  

    assert_nil User.find_by(email: 'foobar@example.com')

    post :create, params: user_params

    assert_response :created

  end


  test 'should update user email' do

    @user = users(:one)
    sign_in(@user)

    @request.env['action_dispatch.request.flash_hash'] = {}

    new_email = 'updatedemail@email.com'
    patch :update, params: { email: new_email, id: @user.id}

    assert_response :created
    @user.reload
    assert_equal new_email, @user.email
  end

  test 'should archive user when deleted' do
    @user = users(:one)
    sign_in(@user)

    delete :destroy, params: { id: @user.id }

    assert_not_nil @user.archived_at

  end

  
end