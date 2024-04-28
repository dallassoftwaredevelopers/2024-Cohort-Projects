require 'test_helper'

class SessionsControllerTest < ActionController::TestCase
include Devise::Test::ControllerHelpers 

    def setup
        @controller = Users::SessionsController.new
        @request.env["devise.mapping"] = Devise.mappings[:user]
        
    end

    test 'should allow user to login' do
        @user = User.create(email: 'sessionstest@gmail.com', password: '123456')
        post :create, params: { email: @user.email, password: @user.password}
        assert_response :created
        assert_equal @user.id, session['warden.user.user.key'][0][0]
    end

    test 'should allow user to log out' do
        @user = users(:two)
        sign_in(@user)

        delete :destroy
        assert_response :ok
        assert_nil session['warden.user.user.key']
    end


end