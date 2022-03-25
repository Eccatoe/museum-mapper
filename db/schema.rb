# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_03_25_172613) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "museum_tours", force: :cascade do |t|
    t.bigint "museum_id", null: false
    t.bigint "tour_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["museum_id"], name: "index_museum_tours_on_museum_id"
    t.index ["tour_id"], name: "index_museum_tours_on_tour_id"
  end

  create_table "museums", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "link"
    t.string "image"
  end

  create_table "tours", force: :cascade do |t|
    t.string "name"
    t.string "day"
    t.string "time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_tours", force: :cascade do |t|
    t.bigint "tour_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tour_id"], name: "index_user_tours_on_tour_id"
    t.index ["user_id"], name: "index_user_tours_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "museum_tours", "museums"
  add_foreign_key "museum_tours", "tours"
  add_foreign_key "user_tours", "tours"
  add_foreign_key "user_tours", "users"
end
