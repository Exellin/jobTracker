class CreateResumes < ActiveRecord::Migration[5.1]
  def change
    create_table :resumes do |t|
      t.attachment :file
      t.integer :user_id
    end

    add_column :jobs, :resume_id, :integer
  end
end
