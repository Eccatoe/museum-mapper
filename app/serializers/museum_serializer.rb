class MuseumSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :category, :image, :link
end
