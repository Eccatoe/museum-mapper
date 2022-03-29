class User < ApplicationRecord
    has_secure_password
    has_many :user_tours
    has_many :tours, through: :user_tours

    # validates :username, uniqueness: :true
    # validates :password, length: {minimum: 5}
    # #---- custom validations 
    # validate :password_contains_number
    # validate :password_special_char


    def password_special_char
        special = "?<>',?[]}{=-)(*&^%$#`~{}!"
        regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
        return if password =~ regex
        errors.add :password, ' must contain special character'
      end
    
      def password_contains_number
        return if password.count("0-9") > 0
        errors.add :password, ' must contain at least one number'
      end
end
