class MuseumTourSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image
  has_many :tours
end
