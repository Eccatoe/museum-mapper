class Tour < ApplicationRecord
    belongs_to :museum
    has_many :user_tours
    has_many :users, through: :user_tours
end
