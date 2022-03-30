class TourSerializer < ActiveModel::Serializer
  attributes :id, :museum_id, :name
  belongs_to :museum
end
