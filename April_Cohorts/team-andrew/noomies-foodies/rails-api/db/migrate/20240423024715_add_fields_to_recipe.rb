class AddFieldsToRecipe < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :image, :string
    add_column :recipes, :category, :string
    add_column :recipes, :cook_time, :string
    add_column :recipes, :prep_time, :string
    add_column :recipes, :yields, :string
  end
end
