class CreateFridge < ActiveRecord::Migration[7.0]
  def change
    create_table :fridges do |t|
      t.string :name
      t.string :archived_at
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
