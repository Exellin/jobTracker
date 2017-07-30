module AuthenticationHelper
  def login_as(user)
    visit '/'
    click_link 'Log In'
    fill_in 'email', with: user.email
    fill_in 'password', with: user.password
    click_button 'Log In'
    wait_for_ajax
  end
end

def already_logged_in
  scenario 'will redirect to the root path with a message saying why the user was redirected' do
    expect(current_path).to eq(root_path)
    expect(page).to have_content('You are already logged in')
  end
end

RSpec.configure do |config|
  config.include AuthenticationHelper
end
