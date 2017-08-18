require 'rails_helper'

RSpec.describe User do
  let(:user) { FactoryGirl.build(:user) }

  it 'has a valid factory' do
    expect(user).to be_valid
  end

  describe '#jobs' do
    it 'returns the jobs it has' do
      jobs = FactoryGirl.create_list(:job, 2, user: user)
      expect(user.jobs).to eq(jobs)
    end
  end
end
