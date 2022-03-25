class CreateMuseumTours < ActiveRecord::Migration[7.0]
  def change
    create_table :museum_tours do |t|
      t.belongs_to :museum, null: false, foreign_key: true
      t.belongs_to :tour, null: false, foreign_key: true

      t.timestamps
    end
  end
end
