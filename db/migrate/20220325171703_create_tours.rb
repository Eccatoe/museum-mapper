class CreateTours < ActiveRecord::Migration[7.0]
  def change
    create_table :tours do |t|
      t.string :name
      t.string :day
      t.string :time

      t.timestamps
    end
  end
end
