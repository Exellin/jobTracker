class Resume < ApplicationRecord
  belongs_to :user

  has_attached_file :file,
    storage: :s3,
    url: ':s3_domain_url',
    path: 'file/:id/:filename',
    s3_credentials: proc { |a| a.instance.s3_credentials },
    s3_host_name: 's3.amazonaws.com',
    s3_permissions: :private

  validates_attachment_content_type :file, content_type: ['application/pdf']

  def s3_credentials
    {
      bucket: ENV['S3_BUCKET_NAME'],
      access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      secret_access_key: ENV['AWS_SECRET_KEY'],
      s3_region: ENV['AWS_REGION']
    }
  end
end
