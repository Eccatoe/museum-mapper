class AddMuseumIdToTour < ActiveRecord::Migration[7.0]
  add_column :tours, :museum_id, :integer
end
