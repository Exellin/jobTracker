require 'rails_helper'

RSpec.feature 'Users log out', js: true do
  let(:user) { FactoryGirl.create(:user) }

  scenario 'successfully and the log out link is no longer visible' do
    login_as(user)
    visit '/'
    expect(page).to have_content('Log Out')
    click_button 'Log Out'
    expect(page).to have_content('You have successfully signed out')
    expect(page).not_to have_link('Log Out')
  end
end
