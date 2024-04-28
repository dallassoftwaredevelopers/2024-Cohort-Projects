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

ActiveRecord::Schema[7.0].define(version: 2024_04_23_032341) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "archived_at"
    t.bigint "user_id"
    t.index ["user_id"], name: "index_foods_on_user_id"
  end

  create_table "fridge_items", force: :cascade do |t|
    t.bigint "fridge_id"
    t.bigint "grocery_id"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "archived_at"
    t.index ["fridge_id"], name: "index_fridge_items_on_fridge_id"
    t.index ["grocery_id"], name: "index_fridge_items_on_grocery_id"
  end

  create_table "fridges", force: :cascade do |t|
    t.string "name"
    t.string "archived_at"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_fridges_on_user_id"
  end

  create_table "groceries", force: :cascade do |t|
    t.string "archived_at"
    t.boolean "universal"
    t.string "brand", limit: 100
    t.string "quantity", limit: 100
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_groceries_on_user_id"
  end

  create_table "list_items", force: :cascade do |t|
    t.string "name"
    t.integer "quantity"
    t.string "archived_at"
    t.bigint "shopping_list_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["shopping_list_id"], name: "index_list_items_on_shopping_list_id"
  end

  create_table "meals", force: :cascade do |t|
    t.string "category"
    t.string "description"
    t.string "archived_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_meals_on_user_id"
  end

  create_table "recipe_items", force: :cascade do |t|
    t.bigint "recipe_id"
    t.bigint "food_id"
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["food_id"], name: "index_recipe_items_on_food_id"
    t.index ["recipe_id"], name: "index_recipe_items_on_recipe_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "archived_at"
    t.string "image"
    t.string "category"
    t.string "cook_time"
    t.string "prep_time"
    t.string "yields"
    t.index ["user_id"], name: "index_recipes_on_user_id"
  end

  create_table "shopping_lists", force: :cascade do |t|
    t.string "name"
    t.string "color"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id"
    t.string "archived_at"
    t.index ["name"], name: "index_shopping_lists_on_name"
    t.index ["user_id"], name: "index_shopping_lists_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "archived_at"
    t.string "jti", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["jti"], name: "index_users_on_jti", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "foods", "users"
  add_foreign_key "fridge_items", "fridges"
  add_foreign_key "fridge_items", "groceries"
  add_foreign_key "fridges", "users"
  add_foreign_key "groceries", "users"
  add_foreign_key "list_items", "shopping_lists"
  add_foreign_key "meals", "users"
  add_foreign_key "recipe_items", "foods"
  add_foreign_key "recipe_items", "recipes"
  add_foreign_key "recipes", "users"
  add_foreign_key "shopping_lists", "users"
end
