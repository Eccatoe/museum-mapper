class UserTourSerializer < ActiveModel::Serializer
  attributes :id, :time, :tour_id, :museum_name, :quantity, :ticket_price
  belongs_to :tour

  def museum_name
    self.object.tour.museum.name
  end
end
