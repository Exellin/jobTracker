require 'rails_helper'

RSpec.feature 'Users logging in', js: true do
  let(:user) { FactoryGirl.create(:user) }

  before do
    visit '/'
    click_link 'Log In'
  end

  feature 'with valid credentials' do
    before do
      fill_in 'email', with: user.email
      fill_in 'password', with: user.password
      click_button 'Log In'
    end

    scenario 'logs the user in' do
      expect(page).to have_button('Log Out')
    end

    scenario 'shows a message saying the user was logged in' do
      expect(page).to have_content('You have successfully logged in')
    end
  end

  feature 'with invalid credentials' do
    before do
      fill_in 'email', with: 'wrong_email@test.com'
      fill_in 'password', with: 'wrong_password'
      click_button 'Log In'
    end

    scenario 'stay on the log in page' do
      expect(current_path).to eq('/login')
    end

    scenario 'shows a message saying why the log in was not successful' do
      expect(page).to have_content('Invalid login credentials. Please try again')
    end
  end
end
