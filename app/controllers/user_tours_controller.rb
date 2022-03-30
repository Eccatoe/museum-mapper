class UserToursController < ApplicationController
    def create
        user_tour=UserTour.create!(user_tour_params)
        render json: user_tour
    end

    private

    def user_tour_params
        params.permit(:type, :price, :time, :tour_id, :user_id)
    end
end
