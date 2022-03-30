class MuseumTourSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :image, :about
  has_many :tours
end
