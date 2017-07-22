require 'rails_helper'

RSpec.describe Job do
  it 'has a valid factory' do
    expect(FactoryGirl.build(:job)).to be_valid
  end

  describe '#title' do
    it 'is invalid when nil' do
      expect(FactoryGirl.build(:job, title: nil)).not_to be_valid
    end

    it 'is valid when under 256 characters' do
      expect(FactoryGirl.build(:job, title: Faker::Lorem.characters(255))).to be_valid
    end

    it 'is invalid when over 255 characters' do
      expect(FactoryGirl.build(:job, title: Faker::Lorem.characters(256))).not_to be_valid
    end
  end

  describe '#company' do
    it 'is invalid when nil' do
      expect(FactoryGirl.build(:job, company: nil)).not_to be_valid
    end

    it 'is valid when under 256 characters' do
      expect(FactoryGirl.build(:job, company: Faker::Lorem.characters(255))).to be_valid
    end

    it 'is invalid when over 255 characters' do
      expect(FactoryGirl.build(:job, company: Faker::Lorem.characters(256))).not_to be_valid
    end
  end

  describe '#company_url' do
    it 'is valid when nil' do
      expect(FactoryGirl.build(:job, company_url: nil)).to be_valid
    end

    it 'is valid when under 2049 characters' do
      expect(FactoryGirl.build(:job, company_url: Faker::Lorem.characters(2048))).to be_valid
    end

    it 'is invalid when over 2048 characters' do
      expect(FactoryGirl.build(:job, company_url: Faker::Lorem.characters(2049))).not_to be_valid
    end
  end

  describe '#application_url' do
    it 'is valid when nil' do
      expect(FactoryGirl.build(:job, application_url: nil)).to be_valid
    end

    it 'is valid when under 2049 characters' do
      expect(FactoryGirl.build(:job, application_url: Faker::Lorem.characters(2048))).to be_valid
    end

    it 'is invalid when over 2048 characters' do
      expect(FactoryGirl.build(:job, application_url: Faker::Lorem.characters(2049))).not_to be_valid
    end
  end

  describe '#point_of_contact' do
    it 'is valid when nil' do
      expect(FactoryGirl.build(:job, point_of_contact: nil)).to be_valid
    end

    it 'is valid when under 256 characters' do
      expect(FactoryGirl.build(:job, point_of_contact: Faker::Lorem.characters(255))).to be_valid
    end

    it 'is invalid when over 255 characters' do
      expect(FactoryGirl.build(:job, point_of_contact: Faker::Lorem.characters(256))).not_to be_valid
    end
  end

  describe '#date_applied' do
    it 'is invalid when nil' do
      expect(FactoryGirl.build(:job, date_applied: nil)).not_to be_valid
    end
  end

  describe '#date_posted' do
    it 'is invalid when nil' do
      expect(FactoryGirl.build(:job, date_posted: nil)).not_to be_valid
    end
  end

  describe '#status' do
    let(:statuses) do
      [:discovered, :applied, :followed_up, :no_interview, :interviewing, :no_offer_received, :offer_recieved]
    end

    it 'is invalid when nil' do
      expect(FactoryGirl.build(:job, status: nil)).not_to be_valid
    end

    it 'is invalid outside of the enumerable range' do
      expect { FactoryGirl.build(:job, status: 7) }.to raise_error(ArgumentError)
        .with_message("'7' is not a valid status")
    end

    it 'has a default of discovered' do
      job = FactoryGirl.create(:job)
      expect(job.status).to eq('discovered')
    end

    it 'has the right index' do
      statuses.each_with_index do |status, index|
        expect(described_class.statuses[status]).to eq(index)
      end
    end
  end

  describe '#cover_letter' do
    it 'is valid when nil' do
      expect(FactoryGirl.build(:job, cover_letter: nil)).to be_valid
    end

    it 'is valid when under 3001 characters' do
      expect(FactoryGirl.build(:job, cover_letter: Faker::Lorem.characters(3000))).to be_valid
    end

    it 'is invalid when over 3000 characters' do
      expect(FactoryGirl.build(:job, cover_letter: Faker::Lorem.characters(3001))).not_to be_valid
    end
  end

  describe '#description' do
    it 'is valid when nil' do
      expect(FactoryGirl.build(:job, description: nil)).to be_valid
    end

    it 'is valid when under 5001 characters' do
      expect(FactoryGirl.build(:job, description: Faker::Lorem.characters(5000))).to be_valid
    end

    it 'is invalid when over 5000 characters' do
      expect(FactoryGirl.build(:job, description: Faker::Lorem.characters(5001))).not_to be_valid
    end
  end
end
