class User < ApplicationRecord
    has_secure_password
    has_many :user_tours
    has_many :tours, through: :user_tours
end
