class AddLinkToMuseums < ActiveRecord::Migration[7.0]
  add_column :museums, :link, :string
  add_column :museums, :image, :string
end
