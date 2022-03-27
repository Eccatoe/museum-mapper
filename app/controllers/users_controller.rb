class UsersController < ApplicationController
#     skip_before_action :authorize, only: :create

    def create
        user = User.create!(user_params)
        # session[:user_id] = user.id -- do we need this? 
        render json: user, status: :created
    end

#     def show
#         if current_user
#             render json: current_user, status: :ok
#         else
#             render json: {error: error.messages.full_messages}, status: :unprocessable_entity
#             # vs status: :unauthorized? 
#         end
#     end

# #--------------------------------
    private
    def user_params
        params.permit(:first_name, :last_name, :username, :password, :password_confirmation)
    end
end

