class TourSerializer < ActiveModel::Serializer
  attributes :id, :museum_id, :name, :price
  belongs_to :museum
end
