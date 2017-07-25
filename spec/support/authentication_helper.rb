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

RSpec.configure do |config|
  config.include AuthenticationHelper
end
