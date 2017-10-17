class AddFeedbackToJobs < ActiveRecord::Migration[5.1]
  def change
    add_column :jobs, :feedback, :string
  end
end
