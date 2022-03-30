class MuseumsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Museum.all, status: :ok
    end

    def show
       museum=Museum.find(params[:id])
       render json: museum, serializer: MuseumTourSerializer, status: :ok
    end
    
end
