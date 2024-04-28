class AddArchivedAtToFridgeItems < ActiveRecord::Migration[7.0]
  def change
    add_column :fridge_items, :archived_at, :string
  end
end
