class User < ApplicationRecord

  def initialize(options={})
    opt = options.with_indifferent_access
    if opt[:password]
      password = opt.delete(:password)
      encrypted = Digest::SHA2.new(512).update(password + opt[:password_salt])
      opt[:encrypted_password] = encrypted.to_s
    end
    super(opt)
  end

  validates :username, presence: true
  validates :encrypted_password, presence: true
  validates :password_salt, presence: true
end
