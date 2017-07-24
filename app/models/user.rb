class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :omniauthable

  include DeviseTokenAuth::Concerns::User

  before_create :skip_confirmation

  def skip_confirmation
    self.skip_confirmation!
  end
end
