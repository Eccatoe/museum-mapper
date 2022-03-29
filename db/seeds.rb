puts "seeding...."


User.destroy_all
Museum.destroy_all
Tour.destroy_all

50.times do
    User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, username: Faker::Hipster.word, password_digest: BCrypt::Password.create(Faker::Games::Pokemon.name))
end


Museum.create(
    name: "Anacostia Community Museum", 
    address: "1901 Fort Pl SE", 
    category: "African American History Culture", 
    link: "https://anacostia.si.edu/", 
    image: "https://rodneybailey.com/wp-content/uploads/bfi_thumb/Host-Your-Event-at-the-Smithsonian-Washington-DC-event-photographers-Rodney-Bailey-photography__0059-o53pd34a4l2j3e5y1t061ipexofem8gu0cexdlrth4.jpg"
)
Museum.create(
    name: "Hirshhorn Museum and Sculpture Garden", 
    address: "Independence Ave SW & 7th St SW", 
    category: "Contemporary Modern Art", 
    link: "https://hirshhorn.si.edu/", 
    image: "https://hirshhorn.si.edu/wp-content/uploads/2016/12/KUSA1018-1.jpg"
)
Museum.create(
    name: "National Air and Space Museum", 
    address: "655 Jefferson Dr SW", 
    category: "Aviation Space Science History", 
    link: "https://airandspace.si.edu/", 
    image: "https://pbs.twimg.com/profile_images/1016670443560988672/bLMYqlx9_400x400.jpg"
)
Museum.create(
    name: "National Museum of African American History and Culture", 
    address: "1400 Constitution Ave", 
    category: "African American History Culture", 
    link: "https://nmaahc.si.edu/", 
    image: "https://media.newyorker.com/photos/5daf34395c3c310008f83cac/master/w_1920,c_limit/Phillips-AfricanAmericanMuseum-Primary.jpg"
)
Museum.create(
    name: "National Museum of African Art", 
    address: "950 Independence Ave SW ", 
    category: "African Art Culture", 
    link: "https://africa.si.edu/", 
    image: "https://www.si.edu/sites/default/files/newsdesk/press_releases/croppedvisionsfront11.jpg"
)
Museum.create(
    name: "National Museum of American History", 
    address: "1300 Constitution Ave. NW", 
    category: "History", 
    link: "https://americanhistory.si.edu/", 
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/fe/22/8d.jpg"
)
Museum.create(
    name: "National Museum of Asian Art", 
    address: "1050 Independence Ave SW", 
    category: "Asian Art Culture", 
    link: "https://asia.si.edu/", 
    image: "https://ids.si.edu/ids/deliveryService?max_w=550&id=FS-F1904.61_006"
)
Museum.create(
    name: "National Museum of the American Indian", 
    address: "4th St & Independence Ave SW", 
    category: "Native American History Art", 
    link: "https://americanindian.si.edu/", 
    image: "https://dceff.org/wp-content/uploads/2014/12/NATIONAL-MUSEUM-OF-THE-AMERICAN-INDIAN.jpg"
)
Museum.create(
    name: "National Museum of Natural History", 
    address: "10th St & Constitution Ave NW", 
    category: "Natural Science History", 
    link: "https://naturalhistory.si.edu/", 
    image: "https://unsplash.com/photos/WDn-p4QqlLs"
)
Museum.create(
    name: "National Portrait Gallery", 
    address: "800 F St NW", 
    category: "Portraiture Art", 
    link: "https://npg.si.edu/", 
    image: "http://media.afar.com/uploads/images/post_images/images/k9hlvGyY4V/original__NPG6805_R.jpg"
)
Museum.create(
    name: "National Postal Museum", 
    address: "2 Massachusetts Ave NE", 
    category: "History", 
    link: "https://postalmuseum.si.edu/", 
    image: "https://www.trolleytours.com/wp-content/uploads/2016/06/national-postal-museum-exhibit.jpg"
)
Museum.create(
    name: "Renwick Gallery", 
    address: "1661 Pennsylvania Avenue NW", 
    category: "Craft Decorative Art", 
    link: "https://americanart.si.edu/", 
    image: "https://www.si.edu/sites/default/files/newsdesk/press_releases/dawe_plexus_detail.jpg"
)
Museum.create(
    name: "Smithsonian American Art Museum", 
    address: "800 G St NW", 
    category: "Art Culture", 
    link: "https://americanart.si.edu/", 
    image: "https://unsplash.com/photos/xXJ5xPcknRA"
)
Museum.create(
    name: "Smithsonian Institution Building (The Castle)", 
    address: "1000 Jefferson Dr SW", 
    category: "Visitor Center Offices History", 
    link: "https://www.si.edu/museums/smithsonian-institution-building", 
    image: "https://images.unsplash.com/photo-1591030277042-2267f4ce3019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
)
Museum.create(
    name: "National Zoological Park (National Zoo)", 
    address: "3001 Connecticut Ave NW", 
    category: "Zoo", 
    link: "https://nationalzoo.si.edu/", 
    image: "https://nationalzoo.si.edu/sites/default/files/animals/giantpanda-007.jpg"
)
Museum.create(
    name: "National Archives", 
    address: "701 Constitution Ave NW", 
    category: "History", 
    link: "https://www.archives.gov/", 
    image: "https://images.unsplash.com/photo-1559421240-c3356cab72ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
)
Museum.create(
    name: "United States Holocaust Memorial Museum", 
    address: "100 Raoul Wallenberg Pl SW", 
    category: "History", 
    link: "https://www.ushmm.org/", 
    image: "https://warner.edu/wp-content/uploads/2019/03/Wall-of-Remembrance-at-the-U.S.-National-Holocaust-Museum-Washington-D.C.-e1541999476511.jpg"
)

Museum.all.each do |m|
    Tour.create(name: "#{m.name} Basic Tour", museum_id: m.id) 
    Tour.create(name: "#{m.name} Interactive Tour", museum_id: m.id) 
    Tour.create(name: "#{m.name} Private Tour",  museum_id: m.id) 
end



puts "done seeding"
