class AddDescriptonToMuseum < ActiveRecord::Migration[7.0]
  add_column :museums, :about, :string
end
