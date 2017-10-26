source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

# Use Angular Rails CSRF to create valid authenticity tokens from Angular
gem 'angular_rails_csrf'
# Use aws for file storage
gem 'aws-sdk', '~> 2.3.0'
# Dependency for devise_token_auth
gem 'devise'
# Use Devise_token_auth as the authentication solution
gem 'devise_token_auth'
# Use figaro to hold environment variables
gem 'figaro'
# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.2'
# Use paperclip for file attachments
gem 'paperclip'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Dependency for devise_token_auth
gem 'omniauth'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Use capybara for feature testing
  gem 'capybara'
  # Use faker to generate data for use in factories
  gem 'faker'
  # Use factory_girl as the fixtures replacement for testing
  gem 'factory_girl_rails'
  # Use poltergeist as the javascript driver for capybara
  gem 'poltergeist'
  # Use rspec as the testing framework
  gem 'rspec-rails'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'web-console', '>= 3.3.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  # Use guard to automatically run tests on file save
  gem 'guard-rspec', require: false
  # Use rubocop for ruby file linting
  gem 'rubocop', require: false
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
