class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create, :me]

    def create
        user = User.create!(user_params)
        session[:user_id]=user.id
        render json: user, status: :created
    end

    def me
        render json: current_user, status: :ok
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation)
    end
    
end

