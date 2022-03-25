class Museum < ApplicationRecord
    has_many :museum_tours
    has_many :tours, through: :museum_tours
end
