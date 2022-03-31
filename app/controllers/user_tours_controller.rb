class UserToursController < ApplicationController

    def index 
        user_tour=UserTour.order_time
        render json: user_tour
    end
    
    def create
        user_tour=UserTour.create!(user_tour_params)
        render json: user_tour
    end

    private

    def user_tour_params
        params.permit(:time, :tour_id, :user_id)
    end
end
