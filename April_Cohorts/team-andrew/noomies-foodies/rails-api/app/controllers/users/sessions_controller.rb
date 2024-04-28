# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  #Enabling Devise to respond to json
  respond_to :json

  # before_action :configure_sign_in_params, only: [:create]


  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    user = User.find_for_database_authentication(email: params[:email])

    if user && user[:archived_at] == nil && user.valid_password?(params[:password])
      sign_in(user)
      respond_with(user)
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   sign_out(current_user)
  #   render json: {message: 'Logged out successfully'}, status: :ok
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end

  private
  
  def respond_with(resource, _opts = {})
    render json: UserSerializer.new(resource).serializable_hash[:data][:attributes], status: :ok
  end

  def respond_to_on_destroy
    if request.headers['Authorization'].present?
      jwt_payload = JWT.decode(request.headers['Authorization'].split(' ').last, ENV['DEVISE_JWT_SECRET_KEY']).first
      current_user = User.find(jwt_payload['sub'])
    end
    
    if current_user
      render json: {
        status: 200,
        message: 'Logged out successfully.'
      }, status: :ok
    else
      render json: {
        status: 401,
        message: "Couldn't find an active session."
      }, status: :unauthorized
    end
  end
end
