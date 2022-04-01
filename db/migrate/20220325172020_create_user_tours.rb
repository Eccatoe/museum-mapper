class CreateUserTours < ActiveRecord::Migration[7.0]
  def change
    create_table :user_tours do |t|
      t.string :time
      t.integer :ticket_price
      t.integer :quantity
      t.belongs_to :tour, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
