# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Stock.create!(name: "Rice", quantity: "10 bags", description: "Grade A Rice")
Stock.create!(name: "Cooking Oil", quantity: "10 Cans", description: "The best cooking oil in the market")
Stock.create!(name: "Maize Flour", quantity: "10 bags", description: "Grade A maize flour")
Stock.create!(name: "Mango Juice", quantity: "30 dozens", description: "Very tasty juice")

