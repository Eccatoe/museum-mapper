puts "seeding...."


User.destroy_all

100.times do
    User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::Hipster.word, password_digest: BCrypt::Password.create(Faker::Games::Pokemon.name))
end

Museum.create(name: "Anacostia Community Museum", address: "", category: "African American Culture", link: "", image: "")
Museum.create(name: "Arthur M. Sackler Gallery"  , address: , category: , link: , image: )
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")
# Museum.create(name: "", address: "", category: "", link: "", image: "")

puts "done seeding"
