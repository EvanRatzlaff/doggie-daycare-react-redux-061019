class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :breed
      t.integer :section_number

      t.timestamps
    end
  end
end
