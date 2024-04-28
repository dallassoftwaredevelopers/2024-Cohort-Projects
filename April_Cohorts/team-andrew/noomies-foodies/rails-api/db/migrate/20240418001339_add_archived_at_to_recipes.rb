class AddArchivedAtToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :archived_at, :string
  end
end
