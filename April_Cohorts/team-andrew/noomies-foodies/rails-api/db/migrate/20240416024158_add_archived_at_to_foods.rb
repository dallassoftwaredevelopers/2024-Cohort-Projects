class AddArchivedAtToFoods < ActiveRecord::Migration[7.0]
  def change
    add_column :foods, :archived_at, :string
  end
end
