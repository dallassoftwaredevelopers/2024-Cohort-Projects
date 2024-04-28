# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding Test User"
test = User.new
test.email = 'test@example.com'
test.password = "password"
test.save!

test.recipes.create([
  { name: "food", image: "", cook_time: 4, prep_time: 4, yields: 4, description: "Just do it", category: "Breakfast"},
  { name: "lunch sandwich", image: "", cook_time: 5, prep_time: 3, yields: 8, description: "figure it out", category: "Lunch"},
  { name: "meat", image: "", cook_time: 50, prep_time: 65, yields: 3, description: "cook it", category: "Dinner"},
  { name: "cream", image: "", cook_time: 1, prep_time: 1, yields: 1, description: "yum", category: "Dessert"},
  { name: "help", image: "", cook_time: 2, prep_time: 4, yields: 6, description: "whoops", category: "Snack"}
])