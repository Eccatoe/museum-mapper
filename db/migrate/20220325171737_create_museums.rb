class CreateMuseums < ActiveRecord::Migration[7.0]
  def change
    create_table :museums do |t|
      t.string :name
      t.string :address
      t.text :category, array: true, default: []
      t.timestamps
    end
  end
end
