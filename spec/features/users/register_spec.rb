require 'rails_helper'

RSpec.feature 'Users registering', js: true do
  let(:user) { FactoryGirl.build(:user) }
  let!(:original_user_count) { User.count }

  before do
    visit '/'
    click_link 'Register'
  end

  feature 'with valid credentials' do
    before do
      fill_in 'email', with: user.email
      fill_in 'password', with: user.password
      fill_in 'password confirmation', with: user.password
      click_button 'Register'
    end

    scenario 'creates a new user' do
      wait_for_ajax
      created_user = User.last
      expect(User.count - original_user_count).to eq(1)
      expect(created_user.email).to eq(user.email)
    end

    scenario 'shows a message saying the registration was successful' do
      expect(page).to have_content('You have successfully registered')
    end

    scenario 'logs the user in' do
      expect(page).to have_link('Log Out')
    end
  end

  feature 'with invalid credentials' do
    before do
      fill_in 'email', with: 'an_invalid_email'
      fill_in 'password', with: 'short'
      fill_in 'password confirmation', with: 'not_matching_password'
      click_button 'Register'
    end

    scenario 'does not create a new user' do
      wait_for_ajax
      expect(User.count).to eq(original_user_count)
    end

    scenario 'shows messages saying why the user was not created' do
      expect(page).to have_content('is not an email')
      expect(page).to have_content('password is too short (minimum is 8 characters)')
      expect(page).to have_content("password confirmation doesn't match Password")
    end
  end
end
