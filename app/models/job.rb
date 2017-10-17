class Job < ApplicationRecord
  validates :title, presence: true, length: { maximum: 255 }
  validates :company, presence: true, length: { maximum: 255 }
  validates :company_url, length: { maximum: 2048 }
  validates :application_url, length: { maximum: 2048 }
  validates :point_of_contact, length: { maximum: 255 }
  validates :cover_letter, length: { maximum: 3000 }
  validates :description, length: { maximum: 5000 }
  validates :status, presence: true
  validates :feedback, length: { maximum: 255 }

  enum status: [:discovered, :applied, :followed_up, :no_interview,
                :interviewing, :no_offer_received, :offer_recieved]

  belongs_to :user

  after_initialize :init

  def init
    self.status ||= :discovered
  end
end
