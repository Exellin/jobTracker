class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :company
      t.string :company_url
      t.string :application_url
      t.string :point_of_contact
      t.date :date_applied
      t.date :date_posted
      t.integer :status
      t.text :cover_letter
      t.text :description
      t.timestamps
    end
  end
end
