class MuseumsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Museum.all, status: :ok
    end
end
