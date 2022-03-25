class Tour < ApplicationRecord
    has_many :museum_tours
    has_many :tours, through: :museum_tours
    has_many :user_tours
    has_many :users, through: :user_tours
end
