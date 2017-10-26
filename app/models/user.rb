class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :omniauthable

  include DeviseTokenAuth::Concerns::User

  has_many :jobs
  has_many :resumes

  before_create :skip_confirmation

  def skip_confirmation
    skip_confirmation!
  end
end
