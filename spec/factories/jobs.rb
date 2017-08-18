FactoryGirl.define do
  factory :job do
    title { Faker::Job.title }
    company { Faker::Company.name }
    company_url { Faker::Internet.url }
    application_url { Faker::Internet.url }
    point_of_contact { Faker::Name.name }
    date_applied { Faker::Date.between(2.days.ago, Date.today) }
    date_posted { Faker::Date.between(7.days.ago, 2.days.ago) }
    cover_letter { Faker::Lorem.paragraph }
    description { Faker::Lorem.paragraph }
    association :user, factory: :user
  end
end
