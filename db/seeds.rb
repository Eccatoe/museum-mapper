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
    image: "https://rodneybailey.com/wp-content/uploads/bfi_thumb/Host-Your-Event-at-the-Smithsonian-Washington-DC-event-photographers-Rodney-Bailey-photography__0059-o53pd34a4l2j3e5y1t061ipexofem8gu0cexdlrth4.jpg",
    about: "Located in the Anacostia neighborhood, this museum examines, documents, and interprets the impact of historical and contemporary social issues on urban communities.
    Dynamic rotating exhibitions explore various aspects of urban community life, including modernization, cultural encounters, environmental change, gentrification, employment, and globalization."
)
Museum.create(
    name: "Hirshhorn Museum and Sculpture Garden", 
    address: "Independence Ave SW & 7th St SW", 
    category: "Contemporary Modern Art", 
    link: "https://hirshhorn.si.edu/", 
    image: "https://hirshhorn.si.edu/wp-content/uploads/2016/12/KUSA1018-1.jpg",
    about: "The Hirshhorn features international modern and contemporary art in the celebrated Gordon Bunshaft designed cylindrical building, adjoining plaza, and sunken sculpture garden. The museum is a leading voice for contemporary art and culture and provides a national platform for the art and artists of our time."
)
Museum.create(
    name: "National Air and Space Museum", 
    address: "655 Jefferson Dr SW", 
    category: "Aviation Space Science History", 
    link: "https://airandspace.si.edu/", 
    image: "https://pbs.twimg.com/profile_images/1016670443560988672/bLMYqlx9_400x400.jpg",
    about: "Launch into the history of flight by surrounding yourself with icons of air and space travel. The flagship building on the National Mall in Washington, D.C, exhibits aircraft, spacecraft, missiles, rockets, and other flight-related artifacts. "    
)
Museum.create(
    name: "National Museum of African American History and Culture", 
    address: "1400 Constitution Ave", 
    category: "African American History Culture", 
    link: "https://nmaahc.si.edu/", 
    image: "https://media.newyorker.com/photos/5daf34395c3c310008f83cac/master/w_1920,c_limit/Phillips-AfricanAmericanMuseum-Primary.jpg",
    about: "The National Museum of African American History and Culture is a place where all Americans can learn about the richness and diversity of the African American experience, what it means to their lives, and how it helped us shape this nation."
)
Museum.create(
    name: "National Museum of African Art", 
    address: "950 Independence Ave SW ", 
    category: "African Art Culture", 
    link: "https://africa.si.edu/", 
    image: "https://www.si.edu/sites/default/files/newsdesk/press_releases/croppedvisionsfront11.jpg",
    about: "The National Museum of African Art is the only national museum in the United States dedicated to the collection, exhibition, conservation, and study of the arts of Africa. On exhibit are the finest examples of traditional and contemporary art from the entire continent of Africa."
)
Museum.create(
    name: "National Museum of American History", 
    address: "1300 Constitution Ave. NW", 
    category: "History", 
    link: "https://americanhistory.si.edu/", 
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/fe/22/8d.jpg",
    about: "Devoted to the scientific, cultural, social, technological, and political development of the United States, the museum traces the American experience from colonial times to the present. The American History Museum's collection contains more than three million historical objects—including the famed Star-Spangled Banner—and documents that explore the evolution of the American identity."
)
Museum.create(
    name: "National Museum of Asian Art", 
    address: "1050 Independence Ave SW", 
    category: "Asian Art Culture", 
    link: "https://asia.si.edu/", 
    image: "https://ids.si.edu/ids/deliveryService?max_w=550&id=FS-F1904.61_006",
    about: "The museum is home to an incomparable collection of art, including some of the most important ancient Chinese jades and bronzes in the world. In addition to the exhibitions on display, the galleries feature innovative programming for visitors of all ages, such as lectures, concerts, films, and podcasts that enhance and extend the visit. The Freer Gallery houses one of the premier collections of Asian art, with objects dating from Neolithic times to the early 20th century, as well as the world's most important collection of works by James McNeill Whistler."
)
Museum.create(
    name: "National Museum of the American Indian", 
    address: "4th St & Independence Ave SW", 
    category: "Native American History Art", 
    link: "https://americanindian.si.edu/", 
    image: "https://dceff.org/wp-content/uploads/2014/12/NATIONAL-MUSEUM-OF-THE-AMERICAN-INDIAN.jpg",
    about: "The National Museum of the American Indian cares for one of the world's most expansive collections of Native objects, photographs, and media, covering the entire Western Hemisphere from the Arctic Circle to Tierra del Fuego. The museum's sweeping curvilinear architecture, its indigenous landscaping, and its exhibitions, all designed in collaboration with tribes and communities, combine to give visitors from around the world the sense and spirit of Native America."
)
Museum.create(
    name: "National Museum of Natural History", 
    address: "10th St & Constitution Ave NW", 
    category: "Natural Science History", 
    link: "https://naturalhistory.si.edu/", 
    image: "http://shfwire.com/sites/default/files/images/Elephant.JPG",
    about: "The world's most popular natural history museum is dedicated to understanding the natural world and our place in it. Delve into the fascinating story of our planet, from its fiery beginnings through billions of years of transformation, and explore life on Earth through exhibitions and activities, collection objects and research that happens in the lab and in the field. The museum is larger than 18 football fields and is home to the largest natural history collection in the world."
) 
Museum.create(
    name: "National Portrait Gallery", 
    address: "800 F St NW", 
    category: "Portraiture Art", 
    link: "https://npg.si.edu/", 
    image: "http://media.afar.com/uploads/images/post_images/images/k9hlvGyY4V/original__NPG6805_R.jpg",
    about: "With visual arts, performing arts, and new media, the Portrait Gallery introduces you to the people who have shaped the country—poets, presidents, actors, activists, visionaries, villains...and everyone in between. Its collection weaves together story and biography from precolonial times to the present to tell the American story."
)
Museum.create(
    name: "National Postal Museum", 
    address: "2 Massachusetts Ave NE", 
    category: "History", 
    link: "https://postalmuseum.si.edu/", 
    image: "https://www.trolleytours.com/wp-content/uploads/2016/06/national-postal-museum-exhibit.jpg",
    about: "Located in the historic D.C. City Post Office next to the restored Union Station, the Smithsonian's National Postal Museum showcases the largest and most comprehensive collection of stamps and philatelic material in the world—including postal stationery, vehicles used to transport the mail, mailboxes, meters, cards and letters, and postal materials that predate the use of stamps. Visitors can walk along a Colonial post road, ride with the mail in a stagecoach, browse through a small town post office from the 1920s, receive free stamps to start a collection and more."
)
Museum.create(
    name: "Renwick Gallery", 
    address: "1661 Pennsylvania Avenue NW", 
    category: "Craft Decorative Art", 
    link: "https://americanart.si.edu/", 
    image: "https://www.si.edu/sites/default/files/newsdesk/press_releases/dawe_plexus_detail.jpg",
    about: "A branch of the Smithsonian American Art Museum dedicated to exhibiting American contemporary craft, celebrating makers taking both innovative and time-honored approaches to their work. The Renwick Gallery is located steps from the White House in the heart of historic federal Washington. This National Historic Landmark was designed by architect James Renwick Jr. in 1858 and was the first building in the United States built specifically to be an art museum."
)
Museum.create(
    name: "Smithsonian American Art Museum", 
    address: "800 G St NW", 
    category: "Art Culture", 
    link: "https://americanart.si.edu/", 
    image: "https://smarthistory.org/wp-content/uploads/2019/09/wide-angle-full-sm.jpg",
    about: "The nation's first collection of American art offers an unparalleled record of the American experience, capturing the aspirations, character and imagination of the American people throughout three centuries. The museum is home to one of the largest and most inclusive collections of American art in the world, including works by such stylistically diverse luminaries as John Singleton Copley, Winslow Homer, and Georgia O'Keeffe, housed in one of the oldest public buildings constructed in early Washington."
)
Museum.create(
    name: "Smithsonian Institution Building (The Castle)", 
    address: "1000 Jefferson Dr SW", 
    category: "Visitor Center Offices History", 
    link: "https://www.si.edu/museums/smithsonian-institution-building", 
    image: "https://images.unsplash.com/photo-1591030277042-2267f4ce3019?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    about: "Completed in 1855, the Castle is the Smithsonian Institute's signature building and home to the Smithsonian Visitor Center. As such, it makes a great starting point for your journey—here you can get a grasp of the scope and scale of the Smithsonian, see collections highlights from each of our museums, tour the Castle's 19th-century architecture, see what's going on today at all the museums, and consult with our in-house experts about what to see and do."
)
Museum.create(
    name: "National Zoological Park (National Zoo)", 
    address: "3001 Connecticut Ave NW", 
    category: "Zoo", 
    link: "https://nationalzoo.si.edu/", 
    image: "https://nationalzoo.si.edu/sites/default/files/animals/giantpanda-007.jpg",
    about: "The Smithsonian's National Zoo sits on 163 acres in the heart of Washington, D.C.'s Rock Creek Park. Founded in 1889, the Zoo is currently home to more than 2,700 animals representing more than 390 species."
)
Museum.create(
    name: "National Archives", 
    address: "701 Constitution Ave NW", 
    category: "History", 
    link: "https://www.archives.gov/", 
    image: "https://images.unsplash.com/photo-1559421240-c3356cab72ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    about: "The National Archives Museum in Washington, DC, is home to the Declaration of Independence, Constitution, and Bill of Rights."
)
Museum.create(
    name: "United States Holocaust Memorial Museum", 
    address: "100 Raoul Wallenberg Pl SW", 
    category: "History", 
    link: "https://www.ushmm.org/", 
    image: "https://warner.edu/wp-content/uploads/2019/03/Wall-of-Remembrance-at-the-U.S.-National-Holocaust-Museum-Washington-D.C.-e1541999476511.jpg",
    about: "The United States Holocaust Memorial Museum is America's national institution for the documentation, study, and interpretation of Holocaust history, and serves as this country's memorial to the millions of people murdered during the Holocaust."
)

Museum.all.each do |m|
    Tour.create(name: "Standard", museum_id: m.id) 
    Tour.create(name: "Extended", museum_id: m.id) 
    Tour.create(name: "Private", museum_id: m.id) 
end



puts "done seeding"
