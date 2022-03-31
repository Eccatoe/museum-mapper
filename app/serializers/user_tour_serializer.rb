class UserTourSerializer < ActiveModel::Serializer
  attributes :id, :price, :time, :tour_id
  belongs_to :tour
end
