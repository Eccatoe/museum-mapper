class MuseumsController < ApplicationController
    def index
        render json: Museum.all, status: :ok
    end
end
