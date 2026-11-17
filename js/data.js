/* =========================================================
   Content data — edit here to change places, dishes, packing.
   Prices are rough guides (late 2026). `img` keys live in images.js.
   ========================================================= */

window.SGN_DATA = {

  /* Trip window — used only for the weather forecast, not for planning */
  trip: { start: "2026-11-27", end: "2026-12-03" },

  /* ---------- CITIES (in trip order) ----------
     Items carry city: "hanoi" | "ninhbinh" | "hue" | "saigon" (no city = saigon). */
  cities: [
    { id: "hanoi",    name: "Hà Nội",    gq: "Hanoi",    lat: 21.0287, lon: 105.8524, zoom: 14 },
    { id: "ninhbinh", name: "Ninh Bình", gq: "Ninh Binh", lat: 20.2420, lon: 105.9330, zoom: 12 },
    { id: "hue",      name: "Huế",       gq: "Hue",       lat: 16.4637, lon: 107.5909, zoom: 13, mapLat: 16.43, mapLon: 107.6, },
    { id: "saigon",   name: "Sài Gòn",   gq: "Ho Chi Minh City",   lat: 10.7722, lon: 106.7037, zoom: 15, mapLat: 10.7707, mapLon: 106.6997, hotel: true }
  ],

  /* ---------- SEE ---------- */
  categories: [
    { id: "two",   label: "For two",      icon: "i-heart" },
    { id: "art",   label: "Art",          icon: "i-palette" },
    { id: "shop",  label: "Shopping",     icon: "i-bag" },
    { id: "old",   label: "History",      icon: "i-landmark" },
    { id: "spirit",label: "Temples",      icon: "i-temple" },
    { id: "out",   label: "Out & about",  icon: "i-sparkle" },
    { id: "trips", label: "Day trips",    icon: "i-van" }
  ],

  places: [
    /* For two — honeymoon picks */
    {
      id: "two-cruise", cat: "two", img: null,
      name: "Sunset dinner cruise", vi: "Du thuyền sông Sài Gòn",
      desc: "Dinner on the Saigon River, past the lit-up bridges and skyline.",
      time: "2.5–3 h", best: "Sunset", cost: "~US$70+ each", from: "Near Bạch Đằng pier",
      tip: "Book a vegetarian set menu ahead, say you're vegan, and ask for no fish sauce, egg or butter.",
      q: "Saigon River dinner cruise"
    },
    {
      id: "two-hum", cat: "two", img: null,
      name: "Candlelit dinner at Hum", vi: "Hum Vegetarian",
      desc: "A calm, leafy dining room with a mostly vegan menu. The go-to for a special night.",
      time: "1.5 h", best: "Dinner, booked", cost: "Mid-range", from: "Car 10 min",
      tip: "Book ahead and mention it's your honeymoon.",
      q: "Hum Vegetarian Café & Restaurant Võ Văn Tần"
    },
    {
      id: "two-rooftop", cat: "two", img: null,
      name: "Social Club Rooftop", vi: "Hôtel des Arts, 24th floor",
      desc: "An elegant poolside rooftop bar high above District 3.",
      time: "1–2 h", best: "Sunset", cost: "Splurge", from: "Car 10 min",
      tip: "The pool is for hotel guests, but the bar is open to all. Dress smart-casual.",
      q: "Social Club Rooftop Bar Hotel des Arts Saigon"
    },
    {
      id: "two-spa", cat: "two", img: null,
      name: "Le Spa des Artistes", vi: "Spa · Hôtel des Arts",
      desc: "A quiet hotel spa with double rooms for a couples' massage.",
      time: "1.5–2 h", best: "Late afternoon", cost: "Splurge", from: "Car 10 min",
      tip: "Book a couples room ahead, then head up to the rooftop for sunset.",
      q: "Le Spa des Artistes Hotel des Arts Saigon"
    },
    {
      id: "two-miumiu", cat: "two", img: null,
      name: "Miu Miu Spa", vi: "Miu Miu 1 · 4 Chu Mạnh Trinh",
      desc: "A popular, good-value spa chain with couples' rooms. Branch 1 is the closest one still open.",
      time: "1–2 h", best: "After a long walk", cost: "~350k–1m ₫", from: "Walk 12 min",
      tip: "Message a day ahead to book the couples' room.",
      q: "Miu Miu Spa 1 Chu Mạnh Trinh"
    },
    {
      id: "two-baSon", cat: "two", img: null,
      name: "Ba Son Bridge at night", vi: "Cầu Ba Son",
      desc: "Stroll the riverside park and across the cable bridge as the skyline lights up.",
      time: "45 min", best: "After dark", cost: "Free", from: "Walk 20 min",
      tip: "Start at Bạch Đằng park and walk north along the river.",
      q: "Ba Son Bridge"
    },
    {
      id: "two-vespa", cat: "two", img: null,
      name: "Saigon after dark by Vespa", vi: "Vespa night tour",
      desc: "Ride pillion on vintage Vespas through backstreets, night markets and live-music bars.",
      time: "4 h", best: "Evening", cost: "Tour", from: "Hotel pickup",
      tip: "Book an operator that confirms vegan food in advance.",
      q: "Vespa Adventures Saigon"
    },
    {
      id: "two-aodai", cat: "two", img: null,
      name: "Áo dài photo walk", vi: "Chụp ảnh áo dài",
      desc: "Rent áo dài and take photos at the Post Office, the pink church and Book Street.",
      time: "2–3 h", best: "Early morning light", cost: "Rental + photographer", from: "Walk 15 min",
      tip: "Many rentals stock only women's áo dài, so ask for a men's one too.",
      q: "áo dài rental Quận 1"
    },

    /* History — palaces, museums and the French quarter */
    {
      id: "nguyen-hue", cat: "out", img: "nguyen-hue",
      name: "Nguyễn Huệ & City Hall", vi: "Phố đi bộ Nguyễn Huệ",
      desc: "A pedestrian boulevard running from the French-era City Hall to the river, with the Opera House a block away.",
      time: "1 h", best: "After sunset", cost: "Free", from: "Walk 3 min",
      tip: "Number 42 is the Café Apartment, a whole block of tiny cafés. Pick one with a balcony over the street.",
      q: "Nguyễn Huệ Walking Street"
    },
    {
      id: "post-office", cat: "old", img: "post-office",
      name: "Post Office & Cathedral", vi: "Bưu điện Thành phố",
      desc: "Eiffel-era vaulted post office (still working), Notre-Dame Cathedral across the square, and shady Book Street alongside.",
      time: "45 min", best: "Morning", cost: "Free", from: "Walk 15 min",
      tip: "The cathedral's restoration runs into 2027. The scaffolding is coming down, but you may only see it from outside. Book Street is good for postcards and a coffee.",
      q: "Saigon Central Post Office"
    },
    {
      id: "palace", cat: "old", img: "palace",
      name: "Independence Palace", vi: "Dinh Độc Lập",
      desc: "A 1960s modernist presidential palace preserved as it was in 1975, with reception halls, a rooftop helipad and the tanks that broke through the gates.",
      time: "1.5 h", best: "Morning", cost: "80k ₫", from: "Walk 18 min",
      tip: "Don't miss the basement war rooms, with their maps, radios and tunnels.",
      q: "Independence Palace Ho Chi Minh"
    },
    {
      id: "hcmc-museum", cat: "old", img: "hcmc-museum",
      name: "Ho Chi Minh City Museum", vi: "Bảo tàng Thành phố Hồ Chí Minh",
      desc: "A grand neoclassical palace (Gia Long Palace) that tells Saigon's story from trading port to megacity.",
      time: "1 h", best: "Afternoon", cost: "~30k ₫", from: "Walk 10 min",
      tip: "It's 5 minutes from Independence Palace, so you can do both in one morning.",
      q: "Ho Chi Minh City Museum Gia Long Palace"
    },
    {
      id: "fine-arts", cat: "art", img: "fine-arts",
      name: "Museum of Fine Arts", vi: "Bảo tàng Mỹ thuật",
      desc: "Three ochre colonial mansions full of lacquer paintings, Cham sculpture and wartime art, with an old cage lift and patterned tile floors.",
      time: "1 h", best: "Midday, out of the heat", cost: "~30k ₫", from: "Walk 8 min",
      tip: "It's rarely crowded, and the stairwells are very photogenic. Lê Công Kiều antiques street is right behind it.",
      q: "Ho Chi Minh City Museum of Fine Arts"
    },
    {
      id: "opera", cat: "art", img: "opera",
      name: "Saigon Opera House", vi: "Nhà hát Thành phố",
      desc: "A 1900 French Belle Époque theatre at the top of Đồng Khởi street.",
      time: "15 min · show 1 h", best: "Evening show", cost: "Shows paid", from: "Walk 7 min",
      tip: "Look up the AO Show, a contemporary bamboo-circus performance about southern life (about 1 h, from ~800k ₫). Book a day ahead.",
      q: "Saigon Opera House"
    },
    {
      id: "war-remnants", cat: "old", img: "war-remnants",
      name: "War Remnants Museum", vi: "Bảo tàng Chứng tích Chiến tranh",
      desc: "A powerful, confronting record of the American War, told through photojournalism, with aircraft and tanks in the yard.",
      time: "1.5–2 h", best: "Morning", cost: "~60k ₫", from: "Car 10 min",
      tip: "Some galleries are very graphic. Tickets can be bought online. Hum Vegetarian is a few doors away for a calm lunch afterwards.",
      q: "War Remnants Museum"
    },

    {
      id: "history-museum", cat: "old", img: null,
      name: "Museum of Vietnamese History", vi: "Bảo tàng Lịch sử Việt Nam",
      desc: "Thousands of years of Vietnamese history, from bronze drums to Cham sculpture, in a 1920s building at the zoo gates.",
      time: "1–1.5 h", best: "Morning", cost: "~30k ₫", from: "Car 10 min",
      tip: "Pair it with the zoo's gardens next door.",
      q: "Museum of Vietnamese History Nguyễn Bỉnh Khiêm"
    },
    {
      id: "women-museum", cat: "old", img: null,
      name: "Southern Women's Museum", vi: "Bảo tàng Phụ nữ Nam Bộ",
      desc: "The stories of Southern Vietnamese women, from wartime roles to áo dài and everyday life.",
      time: "45 min", best: "Afternoon", cost: "Low", from: "Car 10 min",
      tip: "The áo dài gallery is a good warm-up for an áo dài photo walk.",
      q: "Southern Women's Museum Võ Thị Sáu"
    },
    {
      id: "ton-duc-thang", cat: "old", img: null,
      name: "Tôn Đức Thắng Museum", vi: "Bảo tàng Tôn Đức Thắng",
      desc: "A small riverside museum on the life of Vietnam's second president, a quick stop near the hotel.",
      time: "30–45 min", best: "Any time", cost: "Low", from: "Walk 8 min",
      tip: "Combine it with a riverside walk at Bạch Đằng.",
      q: "Tôn Đức Thắng Museum"
    },

    /* Art — Alex's favourite */
    {
      id: "galerie-quynh", cat: "art", img: "a-quynh",
      name: "Galerie Quynh", vi: "Phòng tranh Quỳnh",
      desc: "One of Saigon's longest-running contemporary galleries, showing leading Vietnamese artists in painting, installation and photography.",
      time: "45 min", best: "Weekday afternoon", cost: "Free", from: "Car 10 min",
      tip: "Check their website or Instagram for the current show and opening days before you go.",
      q: "Galerie Quynh"
    },
    {
      id: "green-palm", cat: "art", img: null,
      name: "Green Palm Gallery", vi: "Green Palm Gallery",
      desc: "Traditional and modern Vietnamese painting, including lacquer, silk and oils, at 49 Mạc Thị Bưởi.",
      time: "30 min", best: "Any day, 8am–7pm", cost: "Free", from: "Walk 5 min",
      tip: "A great place to see lacquer painting up close, and staff are happy to explain how it's made.",
      q: "Green Palm Gallery 49 Mạc Thị Bưởi"
    },
    {
      id: "le-cong-kieu", cat: "art", img: "a-lck",
      name: "Lê Công Kiều Antiques Street", vi: "Phố đồ cổ Lê Công Kiều",
      desc: "A short street of antique and curio shops selling ceramics, bronzes, wood carvings and old propaganda posters, right behind the Fine Arts Museum.",
      time: "30–45 min", best: "Morning", cost: "Free to browse", from: "Walk 8 min",
      tip: "Many \"antiques\" are reproductions, so buy because you love it. Genuine antiques need export paperwork.",
      q: "Lê Công Kiều antique street"
    },
    {
      id: "water-puppets", cat: "art", img: "a-puppet",
      name: "Water Puppet Show", vi: "Múa rối nước Rồng Vàng",
      desc: "Vietnam's centuries-old folk art: lacquered wooden puppets glide across a pool to live traditional music.",
      time: "45 min show", best: "Evening", cost: "~350k ₫", from: "Car 10 min",
      tip: "Book a day ahead and sit near the front. The live musicians are half the show.",
      q: "Golden Dragon Water Puppet Theatre"
    },

    /* Shopping — local design, fair prices */
    {
      id: "ohquao", cat: "shop", img: null,
      name: "OHQUAO The Local Edit", vi: "Hẻm 58 Phạm Ngọc Thạch",
      desc: "A concept store in an alley, stocked entirely with things designed and made in Saigon: stationery, homeware, prints and a room of local fashion labels.",
      time: "45 min", best: "Afternoon", cost: "Fixed prices", from: "Car 10 min",
      tip: "Their own paper goods make light, packable gifts. Check it's open on Maps first; there's also a branch in Thảo Điền.",
      q: "OHQUAO Phạm Ngọc Thạch"
    },
    {
      id: "dinh-design", cat: "shop", img: null,
      name: "Dinh Design Store", vi: "Independence Palace shop",
      desc: "A well-curated design shop inside the Independence Palace grounds, selling items by local designers with a Saigon twist.",
      time: "20 min", best: "With the palace", cost: "Fixed prices", from: "Walk 18 min",
      tip: "Visit it on the way out of the palace, so you don't need a separate trip.",
      q: "Dinh Design Store Independence Palace"
    },
    {
      id: "ginkgo", cat: "shop", img: "s-ginkgo",
      name: "Ginkgo Concept Store", vi: "Ginkgo",
      desc: "Fun Saigon-themed T-shirts, bags and souvenirs from a long-running local brand. The new Lê Lợi flagship has a small gallery, Petit Art Space, inside.",
      time: "20–30 min", best: "Any time", cost: "Fixed prices", from: "Walk 10 min",
      tip: "Good for gifts that still look good once you're home. Have a look at the gallery while you're there.",
      q: "Ginkgo Concept Store 92 Lê Lợi"
    },
    {
      id: "tan-dinh-market", cat: "shop", img: "s-tan-dinh",
      name: "Tân Định Market", vi: "Chợ Tân Định",
      desc: "A locals' fabric market, with tailors nearby.",
      time: "1 h", best: "Morning", cost: "Haggle gently", from: "Car 10 min",
      tip: "Go early in the trip if you want something tailored. It's next to the pink Tân Định Church.",
      q: "Tân Định Market"
    },
    {
      id: "saigon-centre", cat: "shop", img: null,
      name: "Saigon Centre & Takashimaya", vi: "65 Lê Lợi",
      desc: "A big, cool, air-conditioned mall with fixed prices, international and Vietnamese brands, and a food hall downstairs.",
      time: "1 h", best: "Rainy afternoon", cost: "Fixed prices", from: "Walk 5 min",
      tip: "Good for a rainy-day escape, or to pick up anything you forgot to pack.",
      q: "Saigon Centre Takashimaya"
    },

    /* Temples & Chinatown */
    {
      id: "jade-emperor", cat: "spirit", img: "jade-emperor",
      name: "Jade Emperor Pagoda", vi: "Chùa Ngọc Hoàng",
      desc: "A smoky, atmospheric Taoist temple full of carved deities, with a turtle pond out front.",
      time: "30–45 min", best: "Morning", cost: "Free", from: "Car 10–15 min",
      tip: "Cover shoulders and knees. Combine it with Tân Định Church, which is 5 minutes away.",
      q: "Jade Emperor Pagoda"
    },
    {
      id: "tan-dinh", cat: "spirit", img: "tan-dinh",
      name: "Tân Định Church", vi: "Nhà thờ Tân Định",
      desc: "The bright-pink 1870s church on Hai Bà Trưng street, with the Tân Định market behind it.",
      time: "20 min", best: "Morning light", cost: "Free", from: "Car 10 min",
      tip: "The best photos are from across the street. Inside is usually open around mass times only.",
      q: "Tân Định Church"
    },
    {
      id: "cholon", cat: "spirit", img: "thien-hau",
      name: "Chợ Lớn: Thiên Hậu & Bình Tây", vi: "Chùa Bà Thiên Hậu · Chợ Bình Tây",
      desc: "Saigon's Chinatown: the incense-filled Thiên Hậu Temple and the huge Bình Tây market.",
      time: "2–3 h", best: "Morning", cost: "Free", from: "Car 20–30 min",
      tip: "Look for dried fruit, tea and spices at Bình Tây. In the evening (6pm–midnight) the market street becomes the Chợ Lớn night food street.",
      q: "Thiên Hậu Temple Chợ Lớn"
    },
    {
      id: "vinh-nghiem", cat: "spirit", img: "vinh-nghiem",
      name: "Vĩnh Nghiêm Pagoda", vi: "Chùa Vĩnh Nghiêm",
      desc: "One of the city's largest Buddhist pagodas, with a seven-storey tower, a grand gate and a calm, open courtyard.",
      time: "30–45 min", best: "Early morning", cost: "Free", from: "Car 15 min",
      tip: "Go early to hear the morning chanting. Dress modestly, and take your shoes off inside the halls.",
      q: "Vĩnh Nghiêm Pagoda"
    },
    {
      id: "mariamman", cat: "spirit", img: "mariamman",
      name: "Mariamman Temple", vi: "Đền Mariamman",
      desc: "A small, colourful South Indian Hindu temple, a short walk from home.",
      time: "20 min", best: "Any time", cost: "Free", from: "Walk 12 min",
      tip: "Take your shoes off at the entrance. It's an easy stop on the way home.",
      q: "Mariamman Temple Ho Chi Minh City"
    },

    {
      id: "giac-lam", cat: "spirit", img: "r-mo-stupa1",
      name: "Giác Lâm Pagoda", vi: "Chùa Giác Lâm",
      desc: "One of Saigon's oldest pagodas, with a peaceful garden of monks' stupas.",
      time: "45 min", best: "Morning", cost: "Free", from: "Car 20–30 min",
      tip: "Dress modestly and walk quietly through the stupa garden at the back.",
      q: "Chùa Giác Lâm Lạc Long Quân"
    },

    /* Out & about */
    {
      id: "zoo", cat: "out", img: null,
      name: "Saigon Zoo & Botanical Gardens", vi: "Thảo Cầm Viên",
      desc: "One of the world's oldest zoos, opened in 1864, with shady botanical gardens, old trees and lily ponds.",
      time: "1.5–2 h", best: "Early morning", cost: "~60k ₫", from: "Car 10 min",
      tip: "Go early before the heat. The gardens are the highlight; some enclosures are dated.",
      q: "Saigon Zoo and Botanical Gardens"
    },
    {
      id: "tao-dan", cat: "out", img: "tao-dan",
      name: "Tao Đàn Park", vi: "Công viên Tao Đàn",
      desc: "The leafy park where Saigon wakes up, with tai chi, badminton, joggers and locals bringing caged songbirds for a morning coffee.",
      time: "45 min", best: "6–8am", cost: "Free", from: "Walk 20 min · car 5",
      tip: "Go early. By 9am it's hot and quiet. Metro works fence off the Cách Mạng Tháng Tám side, so enter from Trương Định.",
      q: "Tao Đàn Park"
    },
    {
      id: "skydeck", cat: "out", img: "skydeck",
      name: "Saigon Skydeck", vi: "Tháp Bitexco",
      desc: "An observation deck high in the lotus-bud Bitexco tower, right in the centre, with 360° views over the river and old town.",
      time: "45 min", best: "Sunset", cost: "~240k ₫", from: "Walk 2 min",
      tip: "Open 9:30am–9:30pm. Arrive about 30 minutes before sunset for day and night views.",
      q: "Saigon Skydeck Bitexco"
    },
    {
      id: "thao-dien", cat: "out", img: "thao-dien",
      name: "Thảo Điền by metro", vi: "Thảo Điền",
      desc: "Ride the new metro east to a leafy riverside neighbourhood of cafés, boutiques and brunch spots.",
      time: "Half day", best: "Late morning", cost: "Metro ~10k ₫", from: "Metro 15 min",
      tip: "Get off at Thảo Điền station. Kashew Cheese & Wine is here for a plant-based cheese board.",
      q: "Thảo Điền"
    },
    {
      id: "landmark", cat: "out", img: "landmark",
      name: "Landmark 81", vi: "Landmark 81 SkyView",
      desc: "Vietnam's tallest tower, with a sunset sky deck.",
      time: "1–2 h", best: "Sunset", cost: "Paid deck", from: "Metro 10 min",
      tip: "Combine it with Thảo Điền on the same metro line, getting off at Tân Cảng station on the way back.",
      q: "Landmark 81 SkyView"
    },
    {
      id: "waterbus", cat: "out", img: "waterbus",
      name: "Sunset Waterbus", vi: "Buýt đường sông",
      desc: "A cheap river cruise past the skyline from Bạch Đằng pier, with the city lights coming on as you return.",
      time: "1–1.5 h", best: "Sunset", cost: "15k one way · 30k return", from: "Walk 5 min",
      tip: "The timetable changed in 2026, so check saigonwaterbus.com or ask at the pier earlier in the day.",
      q: "Bach Dang Waterbus Station"
    },
    {
      id: "ho-thi-ky", cat: "out", img: "ho-thi-ky",
      name: "Hồ Thị Kỷ market", vi: "Chợ hoa Hồ Thị Kỷ",
      desc: "A flower market by day that becomes a buzzing street-food alley at night.",
      time: "1 h", best: "Evening", cost: "Free", from: "Car 10 min",
      tip: "Ask \"chay?\" before ordering. Fruit, chè and sugarcane juice are safe bets.",
      q: "Hồ Thị Kỷ Flower Market"
    },
    {
      id: "bui-vien", cat: "out", img: "bui-vien",
      name: "Bùi Viện Walking Street", vi: "Phố Tây Bùi Viện",
      desc: "A neon backpacker street with loud bars, street performers and plastic stools.",
      time: "1 h", best: "After 9pm", cost: "Free", from: "Walk 15 min",
      tip: "Keep your phone zipped away; this is pickpocket territory.",
      q: "Bùi Viện Walking Street"
    },

    /* Huế — on this trip; see the "Huế and the royal tombs" read */
    {
      id: "hue-citadel", city: "hue", cat: "old", img: "r-hue-citadel",
      name: "Imperial City", vi: "Hoàng thành Huế · Đại Nội",
      desc: "The walled palace of the Nguyễn emperors on the Perfume River, entered through the Noon Gate.",
      time: "2–3 h", best: "Morning", cost: "200k ₫", from: "Central Huế",
      tip: "Doing the tombs too? The 4-site combo is 530k ₫, or 600k ₫ for every site over 5 days. Floods can close the sites at short notice, so check each morning.",
      q: "Imperial City Hue Ngọ Môn"
    },
    {
      id: "hue-minhmang", city: "hue", cat: "old", img: "r-hue-hero",
      name: "Tomb of Minh Mạng", vi: "Lăng Minh Mạng",
      desc: "Gates, bridges and pavilions laid out in perfect symmetry along a 700 m axis across two lakes.",
      time: "1.5 h", best: "Early morning", cost: "150k ₫", from: "Car 20–30 min",
      tip: "The most peaceful of the tombs. Walk the full axis to the burial mound at the back.",
      q: "Tomb of Minh Mang Hue"
    },
    {
      id: "hue-tuduc", city: "hue", cat: "old", img: "r-hue-tuduc",
      name: "Tomb of Tự Đức", vi: "Lăng Tự Đức",
      desc: "A poet-emperor's lakeside retreat, built as a pleasure garden he lived in for years.",
      time: "1–1.5 h", best: "Morning", cost: "150k ₫", from: "Car 20 min",
      tip: "Find the Xung Khiêm pavilion on the lake, where he wrote poetry. Từ Hiếu Pagoda is a short walk away.",
      q: "Tomb of Tu Duc Hue"
    },
    {
      id: "hue-khaidinh", city: "hue", cat: "old", img: "r-hue-kd-stairs",
      name: "Tomb of Khải Định", vi: "Lăng Khải Định",
      desc: "Concrete, dragons and glittering glass-and-porcelain mosaics climbing a hillside. East meets West.",
      time: "1 h", best: "Morning", cost: "150k ₫", from: "Car 20–30 min",
      tip: "Lots of steps, slippery in rain. The mosaic interior of Thiên Định palace is the highlight for an art lover.",
      q: "Tomb of Khai Dinh Hue"
    },
    {
      id: "hue-gialong", city: "hue", cat: "old", img: null,
      name: "Tomb of Gia Long", vi: "Lăng Gia Long",
      desc: "The dynasty founder's double grave with his empress, in quiet open hills far from the crowds.",
      time: "1 h", best: "Morning, dry day", cost: "150k ₫", from: "Car ~40 min",
      tip: "Furthest out and least visited; flooded roads cut it off first after heavy rain. Combine it with Minh Mạng (combo 240k ₫).",
      q: "Tomb of Gia Long Hue"
    },

    {
      id: "hue-anbang", city: "hue", cat: "spirit", img: "r-mo-hero",
      name: "An Bằng cemetery", vi: "Nghĩa trang An Bằng · \"city of ghosts\"",
      desc: "A village cemetery of towering, colourful family tombs covered in broken-porcelain mosaics.",
      time: "1 h", best: "Morning light", cost: "Free", from: "Car, east of Huế toward the coast",
      tip: "Treat it as a place of remembrance: don't climb or step on graves, and no drones. See the \"Graves of everyday Vietnam\" read.",
      q: "Nghĩa trang An Bằng Huế"
    },

    {
      id: "hue-dragonboat", city: "hue", cat: "two", img: null,
      name: "Perfume River boat at sunset", vi: "Thuyền rồng sông Hương",
      desc: "A slow dragon-boat ride upriver toward Thiên Mụ Pagoda as the light fades over the water.",
      time: "1–2 h", best: "Sunset, dry day", cost: "Private boat ~500–800k ₫", from: "Tòa Khâm pier, Lê Lợi",
      tip: "Agree the price and route first; boats stop when the river floods. Tipping is optional: ~20k ₫, or buy something small from the family's table.",
      q: "Bến thuyền Tòa Khâm Huế"
    },
    {
      id: "hue-vongcanh", city: "hue", cat: "two", img: null,
      name: "Vọng Cảnh Hill", vi: "Đồi Vọng Cảnh",
      desc: "A pine-covered hill with the classic view of the Perfume River curving through the tomb country.",
      time: "45 min", best: "4:30–5:30pm", cost: "Free", from: "Car 20 min",
      tip: "Make a half-day loop with Tự Đức's tomb and the incense village. Skip it in fog.",
      q: "Đồi Vọng Cảnh Huế"
    },
    {
      id: "hue-antiquities", city: "hue", cat: "art", img: null,
      name: "Museum of Royal Antiquities", vi: "Bảo tàng Cổ vật Cung đình Huế",
      desc: "Nguyễn-dynasty ceramics, costume and lacquer inside the 1845 Long An Palace, itself a jewel of carved, lacquered wood.",
      time: "1 h", best: "Any time · good when it rains", cost: "50k ₫", from: "Car 5 min from the Citadel",
      tip: "Look up at the poem-inscribed lacquer panels; the building is as much the exhibit as the objects.",
      q: "Bảo tàng Cổ vật Cung đình Huế"
    },
    {
      id: "hue-finearts", city: "hue", cat: "art", img: null,
      name: "Lê Bá Đảng Art Centre & Fine Arts Museum", vi: "Bảo tàng Mỹ thuật Huế · 15 Lê Lợi",
      desc: "A riverside gallery of the Paris-based modernist Lê Bá Đảng, also used by Huế's Museum of Fine Arts for changing shows.",
      time: "1 h", best: "Rainy day · closed Mon", cost: "~30k ₫", from: "Car 5 min",
      tip: "Closed at lunch (11:30–1pm); a short film on the artist plays upstairs. The Điềm Phùng Thị centre at 17 Lê Lợi is next door.",
      q: "Lebadang Art Space 15 Lê Lợi Huế"
    },
    {
      id: "hue-thuyxuan", city: "hue", cat: "art", img: null,
      name: "Thủy Xuân incense village", vi: "Làng hương Thủy Xuân",
      desc: "Roadside workshops where families roll and dye incense sticks into bright fans of colour.",
      time: "45–90 min", best: "Dry morning", cost: "Free · try it ~50–100k ₫", from: "Car 15–20 min",
      tip: "In wet weather the colourful displays shrink and work moves inside, so go on a dry spell. Ask before photographing people.",
      q: "Làng hương Thủy Xuân Huế"
    },
    {
      id: "hue-dongba", city: "hue", cat: "shop", img: null,
      name: "Đông Ba Market", vi: "Chợ Đông Ba",
      desc: "Huế's century-old riverside market for poem hats, sesame candy, lotus seeds and royal tea.",
      time: "1 h", best: "Morning", cost: "Haggle gently", from: "Across Trường Tiền bridge",
      tip: "Hold a nón bài thơ hat up to the light to see the poem hidden inside.",
      q: "Chợ Đông Ba Huế"
    },
    {
      id: "hue-andinh", city: "hue", cat: "old", img: null,
      name: "An Định Palace", vi: "Cung An Định",
      desc: "Emperor Khải Định's 1910s riverside residence, where French Baroque plasterwork meets Vietnamese royal motifs.",
      time: "45–90 min", best: "Early or late light", cost: "~50k ₫", from: "Car 10 min",
      tip: "See it alongside Khải Định's tomb: the same eclectic, East-meets-West taste.",
      q: "Cung An Định Huế"
    },
    {
      id: "hue-thanhtoan", city: "hue", cat: "old", img: null,
      name: "Thanh Toàn tile-roofed bridge", vi: "Cầu ngói Thanh Toàn",
      desc: "An 18th-century covered wooden bridge over a canal through the rice fields.",
      time: "1 h", best: "Late afternoon", cost: "Free", from: "Car 20–25 min",
      tip: "Hire bikes in the village and ride the lanes between the paddies.",
      q: "Cầu ngói Thanh Toàn"
    },
    {
      id: "hue-thienmu", city: "hue", cat: "spirit", img: null,
      name: "Thiên Mụ Pagoda", vi: "Chùa Thiên Mụ",
      desc: "Huế's symbol: a seven-storey tower on a hill above the Perfume River, still a working monastery.",
      time: "45–60 min", best: "Early or late in the day", cost: "Free", from: "Car 10–15 min",
      tip: "Cover shoulders and knees. Arrive by dragon boat on a dry day, or by road if the river is high.",
      q: "Chùa Thiên Mụ Huế"
    },
    {
      id: "hue-tuhieu", city: "hue", cat: "spirit", img: null,
      name: "Từ Hiếu Pagoda", vi: "Chùa Từ Hiếu",
      desc: "A pine-shaded 1843 pagoda where Thích Nhất Hạnh became a monk and spent his last years.",
      time: "1–1.5 h", best: "Early morning bell", cost: "Free", from: "Car 15–20 min",
      tip: "No photos inside the halls. It's next to Tự Đức's tomb, so pair the two.",
      q: "Chùa Từ Hiếu Huế"
    },

    /* Hà Nội */
    {
      id: "hn-longbien", city: "hanoi", cat: "two", img: null,
      name: "Long Biên Bridge at sunset", vi: "Cầu Long Biên",
      desc: "A 1903 steel bridge over the Red River that still carries trains and motorbikes. Walk out together as the sun drops.",
      time: "45 min–1 h", best: "Sunset", cost: "Free", from: "From the lake: car 10 min",
      tip: "Stay on the pedestrian walkway at the side; the tracks are off limits.",
      q: "Long Bien Bridge Hanoi"
    },
    {
      id: "hn-codam", city: "hanoi", cat: "two", img: null,
      name: "Tasting dinner at Cồ Đàm", vi: "Nhà hàng chay Cồ Đàm",
      desc: "Vegetarian fine dining with an 11-course set menu that can be made fully vegan. A special-occasion night.",
      time: "2–2.5 h", best: "Dinner, booked", cost: "Splurge (~1M ₫ each)", from: "From the lake: walk 10 min",
      tip: "Book ahead (a deposit is needed), ask for the vegan version and mention it's your honeymoon.",
      q: "Co Dam vegetarian restaurant 68a Tran Hung Dao"
    },
    {
      id: "hn-opera", city: "hanoi", cat: "two", img: null,
      name: "Opera House by night", vi: "Nhà hát Lớn Hà Nội",
      desc: "A 1911 French opera house at the end of Tràng Tiền Street, beautiful when lit up in the evening.",
      time: "15 min outside", best: "Evening", cost: "Free outside", from: "From the lake: walk 10 min",
      tip: "One 2026 source says it may be closed for restoration, so tours and shows could be suspended. It still looks lovely from the square.",
      q: "Hanoi Opera House"
    },
    {
      id: "hn-finearts", city: "hanoi", cat: "art", img: null,
      name: "Vietnam National Fine Arts Museum", vi: "Bảo tàng Mỹ thuật Việt Nam",
      desc: "The national collection, from folk prints to modern lacquer and silk painting by Nguyễn Gia Trí, Tô Ngọc Vân and Bùi Xuân Phái.",
      time: "1.5–2 h", best: "Morning · closed Mon", cost: "40k ₫", from: "Near the Temple of Literature",
      tip: "The modern lacquer and silk galleries are upstairs; don't run out of time before you get there.",
      q: "Vietnam National Fine Arts Museum 66 Nguyen Thai Hoc"
    },
    {
      id: "hn-puppets", city: "hanoi", cat: "art", img: null,
      name: "Thăng Long Water Puppets", vi: "Nhà hát Múa rối Thăng Long",
      desc: "The classic water-puppet theatre by the lake, with a live traditional band. About 50 minutes.",
      time: "50 min show", best: "Late afternoon or evening", cost: "100–200k ₫", from: "By the lake",
      tip: "Shows run several times a day (about 4:10pm to 8pm). Book a day ahead for good seats.",
      q: "Thang Long Water Puppet Theatre 57B Dinh Tien Hoang"
    },
    {
      id: "hn-manzi", city: "hanoi", cat: "art", img: null,
      name: "Manzi Art Space", vi: "Manzi · 14 Phan Huy Ích",
      desc: "An independent contemporary art space with changing exhibitions, open studios and an artist residency.",
      time: "30–45 min", best: "Afternoon · Tue–Sun", cost: "Free", from: "From the lake: car 10 min",
      tip: "Check what's on first. Manzi's affordable art fair has run in late Nov–early Dec before.",
      q: "Manzi Art Space 14 Phan Huy Ich"
    },
    {
      id: "hn-vcca", city: "hanoi", cat: "art", img: null,
      name: "Vincom Center for Contemporary Art", vi: "VCCA · Royal City",
      desc: "A big contemporary art centre under the Royal City mall that hosts major group shows.",
      time: "45 min–1 h", best: "During a show, 10am–9pm", cost: "Often free", from: "From the lake: car 30 min",
      tip: "It sometimes sits empty between shows, so check the programme before the trip out.",
      q: "VCCA Vincom Center for Contemporary Art Royal City"
    },
    {
      id: "hn-aspace", city: "hanoi", cat: "art", img: null,
      name: "Á Space", vi: "Á Space · Ngô Gia Tự",
      desc: "A small independent space across the river for experimental art and open studios.",
      time: "30–45 min", best: "During an event", cost: "Usually free", from: "From the lake: car 20 min",
      tip: "It only opens when something is on; check its Facebook page or Hanoi Grapevine first.",
      q: "Á Space Ngõ 59 Ngô Gia Tự Hà Nội"
    },
    {
      id: "hn-battrang", city: "hanoi", cat: "art", img: null,
      name: "Bát Tràng ceramic village", vi: "Làng gốm Bát Tràng",
      desc: "A centuries-old pottery village with workshops, a big ceramics market and a ceramics museum.",
      time: "Half day", best: "Morning", cost: "Free · wheel class ~50–100k ₫", from: "From the lake: car 30 min",
      tip: "Try throwing a pot together at a workshop; some will fire and ship it.",
      q: "Bat Trang Ceramic Village"
    },
    {
      id: "hn-hanggai", city: "hanoi", cat: "shop", img: null,
      name: "Hàng Gai silk street", vi: "Phố Hàng Gai",
      desc: "The Old Quarter street for silk and made-to-measure tailoring.",
      time: "30 min–1 h", best: "Early in your stay", cost: "Shirt ~800k–1.5M ₫", from: "From the lake: walk 5 min",
      tip: "Fittings take a day or two. Buy from tailors and silk specialists, not the souvenir shops.",
      q: "Hang Gai Street Hanoi silk"
    },
    {
      id: "hn-hangma", city: "hanoi", cat: "shop", img: null,
      name: "Hàng Mã street", vi: "Phố Hàng Mã",
      desc: "The street of paper offerings, lanterns and festive decorations, a riot of colour.",
      time: "20–40 min", best: "Evening", cost: "Free to browse", from: "From the lake: walk 15 min",
      tip: "Ask before photographing shopkeepers. Bạch Mã Temple is a few minutes away.",
      q: "Hang Ma Street Hanoi"
    },
    {
      id: "hn-mausoleum", city: "hanoi", cat: "old", img: null,
      name: "Ho Chi Minh Mausoleum & One Pillar Pagoda", vi: "Lăng Chủ tịch Hồ Chí Minh · Chùa Một Cột",
      desc: "The mausoleum on Ba Đình Square, with the stilt house, the Presidential Palace gardens and the little One Pillar Pagoda nearby.",
      time: "2–3 h", best: "8–11am · closed Mon & Fri", cost: "Mausoleum free · grounds ~25–40k ₫", from: "From the lake: car 10–15 min",
      tip: "Mornings only, with a strict dress code: cover shoulders and knees, hats off, silence inside. See the mausoleum read.",
      q: "Ho Chi Minh Mausoleum"
    },
    {
      id: "hn-citadel", city: "hanoi", cat: "old", img: null,
      name: "Imperial Citadel of Thăng Long", vi: "Hoàng thành Thăng Long",
      desc: "UNESCO-listed heart of the old royal city: the Đoan Môn gate, the Kính Thiên platform and layers of excavated palaces.",
      time: "1.5–2 h", best: "Morning or late afternoon", cost: "100k ₫", from: "From the lake: car 10 min",
      tip: "Kính Thiên Palace is being rebuilt (2026–2029), so parts of the centre may be fenced off. A lantern-lit night tour (300k ₫) runs Fri and Sat at 7pm. See the Thăng Long read.",
      q: "Imperial Citadel of Thang Long"
    },
    {
      id: "hn-templeoflit", city: "hanoi", cat: "old", img: null,
      name: "Temple of Literature", vi: "Văn Miếu – Quốc Tử Giám",
      desc: "A Confucian temple from 1070 that housed Vietnam's first university, with walled courtyards and stelae on stone turtles.",
      time: "1–1.5 h", best: "8am opening", cost: "70k ₫", from: "From the lake: car 10 min",
      tip: "Cover shoulders and knees, and bring cash for the ticket office.",
      q: "Temple of Literature Hanoi"
    },
    {
      id: "hn-ethnology", city: "hanoi", cat: "old", img: null,
      name: "Vietnam Museum of Ethnology", vi: "Bảo tàng Dân tộc học",
      desc: "Vietnam's 54 ethnic groups, with a garden of full-size houses, including a real Gia Rai tomb house.",
      time: "2.5–3 h", best: "Morning · closed Mon", cost: "40k ₫", from: "From the lake: car 25 min",
      tip: "Leave an hour for the outdoor garden: you can step inside the houses. Read the nhà mồ article first.",
      q: "Vietnam Museum of Ethnology"
    },
    {
      id: "hn-hoalo", city: "hanoi", cat: "old", img: null,
      name: "Hỏa Lò Prison", vi: "Di tích Nhà tù Hỏa Lò",
      desc: "Part of the French colonial prison later known to American POWs as the 'Hanoi Hilton', now a museum.",
      time: "1–1.5 h", best: "Daytime", cost: "50k ₫", from: "From the lake: walk 15 min",
      tip: "A heavy visit on imprisonment; the audio guide gives useful context.",
      q: "Hoa Lo Prison Hanoi"
    },
    {
      id: "hn-womens", city: "hanoi", cat: "old", img: null,
      name: "Vietnamese Women's Museum", vi: "Bảo tàng Phụ nữ Việt Nam",
      desc: "Women's lives in family, history and fashion, with superb ethnic-minority textiles.",
      time: "1.5 h", best: "Daytime", cost: "40k ₫", from: "From the lake: walk 10 min",
      tip: "The textile and jewellery floor is the one for anyone into craft and design.",
      q: "Vietnamese Women's Museum 36 Ly Thuong Kiet"
    },
    {
      id: "hn-mamay", city: "hanoi", cat: "old", img: null,
      name: "Heritage House, 87 Mã Mây", vi: "Ngôi nhà di sản 87 Mã Mây",
      desc: "A restored merchant tube house showing how Old Quarter families lived and traded.",
      time: "20–30 min", best: "Daytime", cost: "~30k ₫", from: "From the lake: walk 10 min",
      tip: "Pair it with a wander along Mã Mây and Hàng Buồm.",
      q: "Heritage House 87 Ma May Hanoi"
    },
    {
      id: "hn-tranquoc", city: "hanoi", cat: "spirit", img: null,
      name: "West Lake & Trấn Quốc Pagoda", vi: "Hồ Tây · Chùa Trấn Quốc",
      desc: "Hanoi's oldest pagoda, with a tall red stupa on a little peninsula in the city's biggest lake.",
      time: "1–2 h", best: "Late afternoon to sunset", cost: "Free", from: "From the lake: car 15 min",
      tip: "Cover shoulders and knees inside. The best view is from across the water on Thanh Niên road.",
      q: "Tran Quoc Pagoda"
    },
    {
      id: "hn-hoankiem", city: "hanoi", cat: "out", img: null,
      name: "Hoàn Kiếm Lake & Ngọc Sơn Temple", vi: "Hồ Hoàn Kiếm · Đền Ngọc Sơn",
      desc: "The lake at the heart of the city, with Ngọc Sơn Temple on an islet across the red Thê Húc bridge.",
      time: "1–1.5 h", best: "Early morning or evening", cost: "Temple 50k ₫", from: "Centre of the Old Quarter",
      tip: "On weekend evenings the streets around the lake close to traffic and fill with families.",
      q: "Ngoc Son Temple Hanoi"
    },
    {
      id: "hn-oldquarter", city: "hanoi", cat: "out", img: null,
      name: "Old Quarter & night market", vi: "Phố cổ Hà Nội",
      desc: "The tangle of narrow trade streets north of the lake, the old '36 streets'.",
      time: "2–4 h", best: "Morning, or Fri–Sun night", cost: "Free", from: "From the lake: walk 5 min",
      tip: "The weekend night market runs Fri–Sun about 6–11pm from Hàng Đào up to Đồng Xuân Market.",
      q: "Hanoi Old Quarter"
    },
    {
      id: "hn-trainstreet", city: "hanoi", cat: "out", img: null,
      name: "Train Street", vi: "Phố đường tàu · Phùng Hưng",
      desc: "A stretch of railway where trains squeeze past homes and cafés a metre away.",
      time: "45 min", best: "Weekday, before a train", cost: "Buy a drink", from: "From the lake: walk 15 min",
      tip: "Access comes and goes: tours were banned in 2025 and police sometimes close it. Sit in a café, stay off the tracks, and leave if there are barriers.",
      q: "Hanoi Train Street Phung Hung"
    },
    {
      id: "hn-duonglam", city: "hanoi", cat: "trips", img: null,
      name: "Đường Lâm ancient village", vi: "Làng cổ Đường Lâm",
      desc: "A quiet village of laterite-brick houses, with an old communal house and Mía Pagoda.",
      time: "Full day", best: "Morning", cost: "20k ₫ + car", from: "Car ~1.5 h",
      tip: "Go with a driver and take it slowly; it's the calm countryside day.",
      q: "Duong Lam Ancient Village"
    },

    /* Ninh Bình — mostly Tràng An */
    {
      id: "nb-hangmua", city: "ninhbinh", cat: "two", img: "r-ta-243",
      name: "Hang Múa viewpoint at sunset", vi: "Hang Múa",
      desc: "About 500 stone steps to a dragon-topped lookout over the Tam Cốc river bends and karst peaks.",
      time: "1.5–2 h", best: "Sunset, or 6am", cost: "150k ₫", from: "Tam Cốc: bike 15 min",
      tip: "Bring water, good shoes and a phone torch for the way down after sunset.",
      q: "Hang Múa, Ninh Xuân, Ninh Bình"
    },
    {
      id: "nb-ninhvan", city: "ninhbinh", cat: "art", img: null,
      name: "Ninh Vân stone-carving village", vi: "Làng đá mỹ nghệ Ninh Vân",
      desc: "A centuries-old working village where artisans carve Buddhas, lions and temple stonework in the open air.",
      time: "45–90 min", best: "Weekday morning", cost: "Free", from: "Tam Cốc: car 15 min",
      tip: "It's a real workplace: expect dust and grinders, and ask before photographing the carvers.",
      q: "Làng đá mỹ nghệ Ninh Vân"
    },
    {
      id: "nb-vanlam", city: "ninhbinh", cat: "art", img: null,
      name: "Văn Lâm embroidery", vi: "Làng thêu ren Văn Lâm",
      desc: "The village at the Tam Cốc boat wharf, known for hand-embroidered landscape pictures since the early 1900s.",
      time: "30–60 min", best: "With the Tam Cốc boat", cost: "Free to browse", from: "At the Tam Cốc wharf",
      tip: "Turn the piece over: hand stitching looks slightly uneven at the back; machine work looks perfect.",
      q: "Làng thêu ren Văn Lâm"
    },
    {
      id: "nb-hoalu", city: "ninhbinh", cat: "old", img: "r-ta-126",
      name: "Hoa Lư ancient capital", vi: "Cố đô Hoa Lư",
      desc: "Vietnam's capital from 968 to 1010, now two royal temples to the Đinh and Lê kings, set between river and mountain.",
      time: "1–1.5 h", best: "After the Tràng An boat", cost: "~20k ₫ (check at gate)", from: "Tràng An: car 10 min",
      tip: "Look for the carved stone doorsteps at the Đinh temple, which the Lê temple lacks.",
      q: "Đền vua Đinh Tiên Hoàng Hoa Lư"
    },
    {
      id: "nb-baidinh", city: "ninhbinh", cat: "spirit", img: "r-ta-192",
      name: "Bái Đính Pagoda", vi: "Chùa Bái Đính",
      desc: "A vast modern Buddhist complex with a corridor of 500 arhats and a huge bronze bell, plus an old cave pagoda up the hill.",
      time: "3–4 h", best: "Weekday morning", cost: "Free · e-car 100k ₫", from: "Tràng An: car 20 min",
      tip: "Walk on past the new halls to the old cave pagoda; it's quieter and far more atmospheric.",
      q: "Chùa Bái Đính"
    },
    {
      id: "nb-bichdong", city: "ninhbinh", cat: "spirit", img: null,
      name: "Bích Động Pagoda", vi: "Chùa Bích Động",
      desc: "A three-level pagoda from 1428 built into a cliff, linked by a cave passage.",
      time: "30–45 min", best: "Late afternoon", cost: "Free–20k ₫", from: "Tam Cốc: bike 10 min",
      tip: "Cover shoulders and knees, and take shoes off where asked.",
      q: "Chùa Bích Động"
    },
    {
      id: "nb-trangan", city: "ninhbinh", cat: "out", img: "r-ta-6",
      name: "Tràng An boat trip", vi: "Bến thuyền Tràng An",
      desc: "A rowed boat through flooded caves and past island temples in the UNESCO-listed Tràng An landscape.",
      time: "2–3.5 h", best: "7–8am, weekday", cost: "300k ₫ each", from: "Ninh Bình city: car 15 min",
      tip: "A private boat (~1.2M ₫) is worth it for two. Tips aren't included: about 50k ₫ each, in cash to the rower at the end, is usual. Rowers here don't ask.",
      q: "Bến thuyền Tràng An"
    },
    {
      id: "nb-tamcoc", city: "ninhbinh", cat: "out", img: null,
      name: "Tam Cốc boat trip", vi: "Bến thuyền Tam Cốc",
      desc: "A gentle row along the Ngô Đồng river through three caves, often with rowers using their feet.",
      time: "1.5–2 h", best: "6:30–10am (water lilies)", cost: "~250k ₫ (check at counter)", from: "Tam Cốc village",
      tip: "Tip about 50–100k ₫ per boat as you step off. Rowers aren't allowed to ask for more or sell, so decline the floating vendors' 'drink for the rower'; bring water from the pier instead.",
      q: "Bến thuyền Tam Cốc"
    },
    {
      id: "nb-thungnham", city: "ninhbinh", cat: "out", img: null,
      name: "Thung Nham bird park", vi: "Vườn chim Thung Nham",
      desc: "Caves, gardens and a lagoon where storks and herons fly in to roost at dusk.",
      time: "2–3 h", best: "3–5pm", cost: "250k ₫", from: "Tam Cốc: car 15 min",
      tip: "Recent reviews mention few birds and construction noise. Optional; Vân Long is the better wildlife trip.",
      q: "Vườn chim Thung Nham"
    },
    {
      id: "nb-vanlong", city: "ninhbinh", cat: "trips", img: null,
      name: "Vân Long wetland", vi: "Khu bảo tồn Vân Long",
      desc: "A quiet bamboo-boat glide across a karst-ringed wetland, home of the rare Delacour's langur.",
      time: "1.5 h boat", best: "Early or late in the day", cost: "~30k ₫ + boat", from: "Tràng An: car 30 min",
      tip: "Bring binoculars; the langurs stay high on the cliffs.",
      q: "Khu bảo tồn Vân Long"
    },
    {
      id: "nb-phatdiem", city: "ninhbinh", cat: "trips", img: null,
      name: "Phát Diệm Cathedral", vi: "Nhà thờ Phát Diệm",
      desc: "An 1890s stone and ironwood cathedral built to look like a giant Vietnamese pagoda.",
      time: "2 h", best: "Weekday", cost: "Free", from: "Car 45–60 min",
      tip: "Look at the carved ironwood columns and stone reliefs, which mix Vietnamese motifs with Christian imagery.",
      q: "Nhà thờ Phát Diệm"
    },
    {
      id: "nb-cucphuong", city: "ninhbinh", cat: "trips", img: null,
      name: "Cúc Phương National Park", vi: "Vườn quốc gia Cúc Phương",
      desc: "Vietnam's first national park: old-growth forest, giant trees and a primate rescue centre.",
      time: "Full day", best: "Early start", cost: "60k ₫", from: "Car ~1 h",
      tip: "Only worth it with a spare day and a love of forest walks.",
      q: "Vườn quốc gia Cúc Phương"
    },

    /* Ninh Bình — more */
    {
      id: "nb-thungui-raft", city: "ninhbinh", cat: "two", img: null,
      name: "Private raft at Thung Ui", vi: "Bè VIP hồ Ngọc · Thung Ui",
      desc: "A bamboo raft just for the two of you on the quiet lake inside the newly opened Thung Ui valley.",
      time: "Up to 3 h", best: "Late afternoon", cost: "~2M ₫ per raft", from: "Tràng An: car 20 min",
      tip: "Far quieter than the Tràng An or Tam Cốc boats. Prices are 2026 reference rates, so confirm at the gate, and bring a layer for the evening chill.",
      q: "Thung Ui Ninh Bình"
    },
    {
      id: "nb-lilies", city: "ninhbinh", cat: "two", img: null,
      name: "Water-lily boat at Tam Cốc", vi: "Hoa súng Tam Cốc",
      desc: "From October to December, water lilies turn the Ngô Đồng river pink and purple, peaking in November.",
      time: "1.5–2 h", best: "6:30–10am", cost: "Tam Cốc boat ticket", from: "Tam Cốc village",
      tip: "The flowers open in the morning and close by dusk, so take an early boat. Agree 'no stops' with your rower.",
      q: "Bến thuyền Tam Cốc"
    },
    {
      id: "nb-huongsen", city: "ninhbinh", cat: "two", img: null,
      name: "Herbal bath & massage for two", vi: "Hương Sen Massage",
      desc: "A private steam, sauna and herbal-pot bath with tea and fruit, plus massages. Popular with couples.",
      time: "1.5–2.5 h", best: "Evening after a big day", cost: "~150–420k ₫ each", from: "Ninh Bình city",
      tip: "Ask for the private herbal-pot room for two. Open 7am to midnight.",
      q: "Hương Sen Massage Ninh Bình"
    },
    {
      id: "nb-colau", city: "ninhbinh", cat: "art", img: null,
      name: "'Anh Hùng Cờ Lau' lake show", vi: "Show thực cảnh Anh Hùng Cờ Lau",
      desc: "An hour-long open-air show of light, water and dance on the lake at Hoa Lư Old Quarter, telling the rise of King Đinh.",
      time: "1 h, 8:45pm", best: "Thu–Sun nights", cost: "250–500k ₫", from: "Tràng An: car 15 min",
      tip: "Check dates and book on the show's site or Ticketbox. Arrive 20–30 minutes early and bring a warm layer.",
      q: "Phố cổ Hoa Lư Anh Hùng Cờ Lau"
    },
    {
      id: "nb-tamcocmuseum", city: "ninhbinh", cat: "art", img: null,
      name: "Tam Cốc Museum workshop", vi: "Bảo tàng Tam Cốc",
      desc: "A hands-on rural-culture space where you make a rice-grain mosaic picture together, and try broom-making or milling rice.",
      time: "2–3 h", best: "Afternoon after the boat", cost: "~US$14 each", from: "Tam Cốc: walk 5 min",
      tip: "You take home a framed mosaic you made together: a lovely honeymoon keepsake. Book online.",
      q: "Bảo tàng Tam Cốc Ninh Bình"
    },
    {
      id: "nb-thungui", city: "ninhbinh", cat: "old", img: null,
      name: "Thung Ui & the Heaven Altar", vi: "Đàn Kính Thiên · Thung Ui",
      desc: "A restored 10th-century sky-worship altar in a hidden valley of the Tràng An core zone, opened to visitors in 2026.",
      time: "2–3 h", best: "Morning", cost: "150k ₫ · 250k with boat", from: "Tràng An: car 20 min",
      tip: "Climb to the altar terrace for the view. Bikes or electric carts get you around the valley.",
      q: "Thung Ui Đàn Kính Thiên Ninh Bình"
    },
    {
      id: "nb-phocohoalu", city: "ninhbinh", cat: "out", img: null,
      name: "Hoa Lư Old Quarter by night", vi: "Phố cổ Hoa Lư",
      desc: "A lantern-lit, newly built old-style town around Kỳ Lân Lake, with stone bridges, street food and folk music.",
      time: "1.5–3 h", best: "From 6:30pm, weekdays", cost: "Free · lake boat ~100–150k ₫", from: "Tràng An: car 15 min",
      tip: "Enjoy it as a pretty evening stroll rather than heritage, then catch the Cờ Lau show on the same lake.",
      q: "Phố cổ Hoa Lư Ninh Bình"
    },
    {
      id: "nb-bikeloop", city: "ninhbinh", cat: "out", img: null,
      name: "Back-lanes bike loop", vi: "Đạp xe Văn Lâm – Thái Vi",
      desc: "Flat village lanes from Tam Cốc past karsts and ponds to the old Thái Vi temple.",
      time: "2–3 h", best: "7–10am", cost: "Bike hire ~50–100k ₫", from: "Tam Cốc: from your door",
      tip: "Rice is long harvested in late November, so fields are bare. Stop for coconut coffee at Xanh Coffee on the way.",
      q: "Đền Thái Vi Ninh Bình"
    },
    {
      id: "nb-thaivi", city: "ninhbinh", cat: "spirit", img: null,
      name: "Thái Vi Temple", vi: "Đền Thái Vi",
      desc: "A small stone temple of the 13th-century Trần kings, set among paddies and karsts on the Tam Cốc back lanes.",
      time: "20–30 min", best: "On a morning bike ride", cost: "Free", from: "Tam Cốc: bike 10 min",
      tip: "Cover shoulders and knees. The elderly caretaker sometimes plays traditional instruments; a small tip is welcome.",
      q: "Đền Thái Vi Ninh Bình"
    },
    {
      id: "nb-amtien", city: "ninhbinh", cat: "spirit", img: null,
      name: "Am Tiên Cave & Tuyệt Tình Cốc", vi: "Động Am Tiên · Tuyệt Tình Cốc",
      desc: "A hidden lake valley behind King Đinh's temple, reached through a rock tunnel, with a cave pagoda up 170-odd steps.",
      time: "1–1.5 h", best: "Early or late, weekdays", cost: "~50–100k ₫", from: "Tràng An: car 10 min",
      tip: "Use the east entrance. The lake loop is flat; the cave stairs are steep.",
      q: "Động Am Tiên Tuyệt Tình Cốc Ninh Bình"
    },

    /* Huế — more */
    {
      id: "hue-anhien", city: "hue", cat: "two", img: null,
      name: "An Hiên garden house", vi: "Nhà vườn An Hiên",
      desc: "A 19th-century mandarin garden house in Kim Long, with carved wood, mother-of-pearl inlay and a fruit-tree garden.",
      time: "45 min", best: "Early morning", cost: "50k ₫", from: "Car 10 min",
      tip: "Tea and a short history talk in English are included. Pair it with Thiên Mụ Pagoda along the river.",
      q: "Nhà vườn An Hiên 58 Nguyễn Phúc Nguyên Huế"
    },
    {
      id: "hue-riverwalk", city: "hue", cat: "two", img: null,
      name: "Riverside walk & Trường Tiền lights", vi: "Phố đi bộ Nguyễn Đình Chiểu",
      desc: "An evening stroll on the Perfume River promenade, with street food, music and the colour-changing lights of the 1899 Trường Tiền bridge.",
      time: "1–2 h", best: "From dusk", cost: "Free", from: "Car 5 min",
      tip: "The promenade runs about 4–10pm. Skip it if the river is in flood.",
      q: "Phố đi bộ Nguyễn Đình Chiểu Huế"
    },
    {
      id: "hue-cookclass", city: "hue", cat: "two", img: null,
      name: "Vegan cooking class & meditation", vi: "Lớp nấu chay & thiền",
      desc: "A small-group evening: market trip, cook a Huế vegan dish, meditate at a temple, then eat together.",
      time: "3.5 h, from 5:15pm", best: "Evening, rain-proof", cost: "From ~1M ₫ each", from: "Hillside Homestay Huế",
      tip: "Book on Airbnb Experiences ('Meditation cooking class', host Huyen); free cancellation up to a day before.",
      q: "Hillside Homestay Huế"
    },
    {
      id: "hue-sinh", city: "hue", cat: "art", img: null,
      name: "Sình village woodblock prints", vi: "Làng tranh Sình",
      desc: "A 400-year-old folk woodblock print tradition, coloured with natural pigments; artisans let you print and hand-colour your own.",
      time: "1.5 h", best: "Morning, rain-proof", cost: "Workshop fee (agree first)", from: "Car 20 min",
      tip: "Ask for artisan Kỳ Hữu Phước's house or the Mộc Huy workshop; your hotel can book it.",
      q: "Làng tranh Sình Phú Mậu Huế"
    },
    {
      id: "hue-paperflowers", city: "hue", cat: "art", img: null,
      name: "Thanh Tiên paper flowers", vi: "Làng hoa giấy Thanh Tiên",
      desc: "A riverside village making bright paper lotus flowers for altars; families teach you to fold one over tea.",
      time: "1 h", best: "Morning, booked ahead", cost: "Small fee (agree first)", from: "Car 20 min",
      tip: "Book through your hotel; walk-ins may find no one working. Agree the price before you start.",
      q: "Làng hoa giấy Thanh Tiên Huế"
    },
    {
      id: "hue-dongkhanh", city: "hue", cat: "old", img: null,
      name: "Tomb of Đồng Khánh", vi: "Lăng Đồng Khánh",
      desc: "A small royal tomb mixing Vietnamese and French styles, in pine country near Tự Đức. Often you'll have it to yourselves.",
      time: "45 min", best: "Morning, dry spell", cost: "Check at the gate", from: "Car 20 min",
      tip: "Nothing is sold on site, so bring water. Paths get slippery in rain.",
      q: "Lăng Đồng Khánh Huế"
    },
    {
      id: "hue-thieutri", city: "hue", cat: "old", img: null,
      name: "Tomb of Thiệu Trị", vi: "Lăng Thiệu Trị",
      desc: "A quiet, simple royal tomb among rice fields and pines, built by Tự Đức for his father.",
      time: "45 min", best: "Afternoon light", cost: "Check at the gate", from: "Car 20 min",
      tip: "Parts were under restoration in 2026. Combine it with Đồng Khánh.",
      q: "Lăng Thiệu Trị Huế"
    },
    {
      id: "hue-namgiao", city: "hue", cat: "old", img: null,
      name: "Nam Giao Esplanade", vi: "Đàn Nam Giao",
      desc: "The three-tiered open-air altar where Nguyễn emperors worshipped Heaven, in a pine park freshly restored in 2026.",
      time: "30–45 min", best: "Late afternoon", cost: "Free or small fee", from: "Car 10 min",
      tip: "A calm walk among the pines; the restoration was finishing in November 2026.",
      q: "Đàn Nam Giao Huế"
    },
    {
      id: "hue-hoquyen", city: "hue", cat: "old", img: null,
      name: "Hổ Quyền tiger arena", vi: "Hổ Quyền",
      desc: "An 1830 royal arena where elephants fought tigers for the emperor: odd, atmospheric and one of the last of its kind.",
      time: "15–20 min", best: "Any time", cost: "Free · tip the guard", from: "Car 15 min",
      tip: "The gate is often locked and a guard comes to open it, so ask your driver to wait.",
      q: "Hổ Quyền Huế"
    },
    {
      id: "hue-dieude", city: "hue", cat: "spirit", img: null,
      name: "Diệu Đế Pagoda", vi: "Quốc tự Diệu Đế",
      desc: "One of Huế's surviving 'national pagodas', founded in 1844, on the river near Đông Ba Market.",
      time: "30 min", best: "Early evening", cost: "Free", from: "Walk 15 min",
      tip: "Combine it with Đông Ba Market and dress modestly.",
      q: "Chùa Diệu Đế Huế"
    },
    {
      id: "hue-baovinh", city: "hue", cat: "out", img: null,
      name: "Bao Vinh old port", vi: "Phố cổ Bao Vinh",
      desc: "A short riverside street of old merchant houses: a tiny, untouristed 'Hội An'.",
      time: "1 h", best: "Late afternoon", cost: "Free", from: "Car 10 min",
      tip: "Have a drink by the water at Cà Phê Mắt Biếc. It's low-lying, so skip it after heavy rain.",
      q: "Phố cổ Bao Vinh Huế"
    },
    {
      id: "hue-tamgiang", city: "hue", cat: "trips", img: null,
      name: "Tam Giang lagoon sunset", vi: "Phá Tam Giang · Đầm Chuồn",
      desc: "Southeast Asia's largest lagoon system: fish-trap stakes, fishing boats and wide sunsets at Đầm Chuồn.",
      time: "Half day", best: "4–6:30pm, clear days", cost: "Boat or tour", from: "Car 30–40 min",
      tip: "Go only on a dry day. Lagoon eateries serve seafood, so eat vegan in town first.",
      q: "Đầm Chuồn Huế"
    },
    {
      id: "hue-phuoctich", city: "hue", cat: "trips", img: null,
      name: "Phước Tích pottery village", vi: "Làng cổ Phước Tích",
      desc: "A 500-year-old royal pottery village on the Ô Lâu river, with old wooden houses, kilns and pottery demonstrations.",
      time: "Half day", best: "Dry morning", cost: "Free · demos extra", from: "Car 1 h",
      tip: "The river floods in Nov–Dec, so check the forecast and hire a car.",
      q: "Làng cổ Phước Tích Phong Điền"
    },

    /* Hà Nội — more */
    {
      id: "hn-metropole", city: "hanoi", cat: "two", img: null,
      name: "An afternoon at the Metropole", vi: "Sofitel Legend Metropole",
      desc: "The 1901 grand hotel where Chaplin and Paulette Goddard honeymooned. See the 'Hanoi: Traces of Time' photo show, then a drink at the Bamboo Bar.",
      time: "1.5–2 h", best: "Late afternoon", cost: "Free to look · luxury bar", from: "From the lake: walk 8 min",
      tip: "Smart casual. The photo show is in the Opera Wing lobby until 9 December 2026.",
      q: "Sofitel Legend Metropole Hanoi Bamboo Bar"
    },
    {
      id: "hn-omamori", city: "hanoi", cat: "two", img: null,
      name: "Couples' massage at Omamori", vi: "Omamori Spa · 48 Ngõ Huyện",
      desc: "A social-enterprise spa where visually impaired therapists give superb massages at fair prices.",
      time: "1–3 h", best: "After a long walking day", cost: "Mid-range", from: "From the lake: walk 5 min",
      tip: "Book a day ahead and ask for side-by-side treatments in a private room (a small extra).",
      q: "Omamori Spa 48 Ngõ Huyện"
    },
    {
      id: "hn-cookclass", city: "hanoi", cat: "two", img: null,
      name: "Vegan cooking class", vi: "Lớp nấu chay · Kim's Kitchen",
      desc: "A market walk, then cook a vegan menu together: banana-flower salad, spring rolls, bún chay and coffee.",
      time: "4.5 h, 9am or 3pm", best: "Morning session", cost: "~US$42 each", from: "Old Quarter pickup",
      tip: "Book the 100% vegan class and confirm 'no fish sauce, no egg'. Rose Kitchen runs a vegan class too.",
      q: "Kim's Kitchen Hanoi vegan cooking class"
    },
    {
      id: "hn-designfest", city: "hanoi", cat: "art", img: null,
      name: "Creative Design Festival & heritage houses", vi: "Lễ hội Thiết kế Sáng tạo Hà Nội",
      desc: "Until 28 November: lakeside installations, lacquer and craft shows, and workshops in ten Old Quarter heritage houses.",
      time: "Day and evening", best: "Before 28 Nov · 23–24 Nov extra events", cost: "Mostly free", from: "East shore of the lake",
      tip: "Don't miss the Lacquer Road Project and the bronze-casting and pottery workshops at Kim Ngân communal house, 42 Hàng Bạc.",
      q: "Đình Kim Ngân 42 Hàng Bạc"
    },
    {
      id: "hn-indochine", city: "hanoi", cat: "art", img: null,
      name: "Indochine House gallery", vi: "Indochine House · 8 Tràng Thi",
      desc: "An elegant gallery pairing modern and contemporary Vietnamese painting with East Asian antiques, with changing shows.",
      time: "45 min", best: "Tue–Sun, 10am–5pm", cost: "Free", from: "From the lake: walk 8 min",
      tip: "It's on the third floor. La Vegarie, with a vegan menu, is next door for lunch.",
      q: "Indochine House 8 Tràng Thi Hà Nội"
    },
    {
      id: "hn-murals", city: "hanoi", cat: "art", img: null,
      name: "Phùng Hưng mural arches", vi: "Phố bích họa Phùng Hưng",
      desc: "Railway arches painted with scenes of old Hà Nội: trams, street vendors, corner shops, with trains rumbling overhead.",
      time: "30 min", best: "Morning, or lit at night", cost: "Free", from: "From the lake: walk 15 min",
      tip: "Watch for motorbikes along the arches.",
      q: "Phố bích họa Phùng Hưng"
    },
    {
      id: "hn-complex01", city: "hanoi", cat: "art", img: null,
      name: "Complex 01", vi: "Complex 01 · ngõ 167 Tây Sơn",
      desc: "A converted factory of studios, cafés and pop-up exhibitions: experimental art, sound and touring shows.",
      time: "1 h", best: "When a show is on", cost: "Free to wander", from: "From the lake: car 15–20 min",
      tip: "Check Hanoi Grapevine for what's on. Fully vegan Sạp Chay Cô Phiêu is inside.",
      q: "Complex 01 Tây Sơn Hà Nội"
    },
    {
      id: "hn-nguyenart", city: "hanoi", cat: "art", img: null,
      name: "Nguyễn Art Gallery", vi: "Nguyễn Art Gallery · 31A Văn Miếu",
      desc: "Vietnamese lacquer, oils and watercolours by working artists, opposite the Temple of Literature.",
      time: "30–45 min", best: "After the Temple of Literature", cost: "Free · works for sale", from: "From the lake: car 10 min",
      tip: "Ask to see the lacquer, and get framing and shipping costs in writing before buying.",
      q: "Nguyen Art Gallery 31A Văn Miếu"
    },
    {
      id: "hn-dongxuan", city: "hanoi", cat: "shop", img: null,
      name: "Đồng Xuân Market", vi: "Chợ Đồng Xuân",
      desc: "Hà Nội's biggest covered market, an 1889 hall of fabrics and dried goods; a design-festival venue until 28 November.",
      time: "1 h", best: "Morning", cost: "Free", from: "From the lake: walk 15 min",
      tip: "Fabric is upstairs. Keep bags zipped. The weekend night market starts at its gate.",
      q: "Chợ Đồng Xuân"
    },
    {
      id: "hn-military", city: "hanoi", cat: "old", img: null,
      name: "Military History Museum", vi: "Bảo tàng Lịch sử Quân sự",
      desc: "A vast national museum opened in 2024, with aircraft, tanks and a thousand years of military history.",
      time: "2–3 h", best: "Weekday morning", cost: "40k ₫", from: "From the lake: car 40 min",
      tip: "Optional and far out. Displays tell the national story. Check opening days before you go.",
      q: "Bảo tàng Lịch sử Quân sự Việt Nam Đại lộ Thăng Long"
    },
    {
      id: "hn-stjoseph", city: "hanoi", cat: "spirit", img: null,
      name: "St Joseph's Cathedral", vi: "Nhà thờ Lớn",
      desc: "An 1886 neo-Gothic cathedral with weathered twin towers and stained glass, on a café-ringed square.",
      time: "20–30 min", best: "Before evening Mass", cost: "Free", from: "From the lake: walk 5 min",
      tip: "Open about 8–11am and 2–5pm. Christmas decorations go up in early December.",
      q: "St. Joseph's Cathedral Hanoi"
    },
    {
      id: "hn-bachma", city: "hanoi", cat: "spirit", img: null,
      name: "Bạch Mã Temple", vi: "Đền Bạch Mã",
      desc: "The Old Quarter's oldest temple, with lacquered red-and-gold altars and the white horse it's named for.",
      time: "20 min", best: "A weekend evening", cost: "20k ₫", from: "From the lake: walk 10 min",
      tip: "At 76 Hàng Buồm; open some weekend evenings too. Cover shoulders and knees.",
      q: "Đền Bạch Mã 76 Hàng Buồm"
    },
    {
      id: "hn-quanthanh", city: "hanoi", cat: "spirit", img: null,
      name: "Quán Thánh Temple", vi: "Đền Quán Thánh",
      desc: "A guardian temple facing West Lake, home to a 3.96 m bronze statue cast in 1677.",
      time: "20–30 min", best: "Late afternoon", cost: "Small fee", from: "From the lake: car 10 min",
      tip: "Walk on to Trấn Quốc Pagoda for sunset; Hồi vegetarian restaurant is 300 m away.",
      q: "Đền Quán Thánh"
    },
    {
      id: "hn-vanphuc", city: "hanoi", cat: "trips", img: null,
      name: "Vạn Phúc silk village", vi: "Làng lụa Vạn Phúc",
      desc: "A thousand-year-old silk-weaving village with clacking looms, an umbrella-canopied lane and rows of silk shops.",
      time: "Half day", best: "Weekday morning", cost: "Free", from: "From the lake: car 30–40 min",
      tip: "Ask to see the shop's own looms, since some sell imported silk.",
      q: "Làng lụa Vạn Phúc Hà Đông"
    },

    /* Day trips — realistically pick one */
    {
      id: "cu-chi", cat: "trips", img: "cu-chi",
      name: "Củ Chi Tunnels", vi: "Địa đạo Củ Chi",
      desc: "A wartime tunnel network you can crawl through, with traps and field kitchens.",
      time: "Half day", best: "Early start", cost: "~90–135k ₫ + transport", from: "Car 1.5–2 h",
      tip: "Bến Đình is less crowded than Bến Dược. Wear clothes you don't mind getting dusty.",
      q: "Cu Chi Tunnels Ben Dinh"
    },
    {
      id: "mekong", cat: "trips", img: "mekong",
      name: "Mekong Delta", vi: "Mỹ Tho · Bến Tre",
      desc: "Sampans through coconut-palm canals, fruit orchards, coconut-candy workshops and river islands.",
      time: "Full day", best: "Early start", cost: "Tour", from: "Car ~2 h",
      tip: "Tour lunches are often fish, so book a vegan meal in writing when you reserve. Mỹ Tho is now in Đồng Tháp province and Bến Tre in Vĩnh Long.",
      q: "Mỹ Tho"
    },
    {
      id: "can-gio", cat: "trips", img: "can-gio",
      name: "Cần Giờ Mangroves", vi: "Rừng Sác Cần Giờ",
      desc: "A UNESCO mangrove biosphere reserve on the coast, with boat rides through the forest and a cheeky monkey island.",
      time: "Full day", best: "Weekday", cost: "Tour / car", from: "Car ~2 h",
      tip: "The monkeys grab sunglasses and bags, so carry nothing loose.",
      q: "Cần Giờ Mangrove Forest"
    },
    {
      id: "cao-dai", cat: "trips", img: "cao-dai",
      name: "Cao Đài Temple & Bà Đen", vi: "Tòa Thánh Tây Ninh · Núi Bà Đen",
      desc: "The vivid Holy See of Vietnam's home-grown Cao Đài faith, often paired with a cable car up Bà Đen, the highest peak in the south.",
      time: "Full day", best: "Noon service", cost: "Tour / car", from: "Car 2.5–3 h",
      tip: "Visitors can watch the noon service quietly from the balcony. Dress modestly.",
      q: "Tây Ninh Holy See Cao Đài"
    },
    {
      id: "vung-tau", cat: "trips", img: "vung-tau",
      name: "Vũng Tàu", vi: "Vũng Tàu",
      desc: "The nearest beach city, with a seaside promenade, a hilltop Christ statue and a lighthouse with sweeping views.",
      time: "Full day", best: "Weekday", cost: "Car / fast boat", from: "Car ~2 h",
      tip: "Climbing the Christ the King statue needs covered shoulders and knees, and it's worth it for the view.",
      q: "Vũng Tàu"
    }
  ],

  /* ---------- EAT ---------- */
  /* kind: "vegan" = 100% vegan · "veg" = vegetarian (ask about egg/dairy) · "options" = vegan options */
  eatAreas: [
    { id: "home",  label: "Near home",   icon: "i-pin" },
    { id: "east",  label: "Thảo Điền",   icon: "i-train" },
    { id: "rmit",  label: "Near RMIT",   icon: "i-grad" },
    { id: "oldquarter", label: "Old Quarter", icon: "i-pin" },
    { id: "westlake", label: "West Lake", icon: "i-drop" },
    { id: "french", label: "French Quarter", icon: "i-landmark" },
    { id: "tamcoc", label: "Tam Cốc", icon: "i-pin" },
    { id: "trangan", label: "Tràng An", icon: "i-boat" },
    { id: "city", label: "Ninh Bình city", icon: "i-landmark" },
    { id: "citadel", label: "Citadel side", icon: "i-pavilion" },
    { id: "south", label: "South bank", icon: "i-pin" },
    { id: "pagoda", label: "Pagoda kitchens", icon: "i-temple" },
    { id: "cheap", label: "Cheap & local", icon: "i-cash" }
  ],

  restaurants: [
    /* Near home — District 1 / 3 */
    { area: "home", kind: "veg", name: "Chay Tuệ", where: "Đa Kao · opposite the Jade Emperor Pagoda",
      desc: "A well-liked chay restaurant with a long menu of Vietnamese vegetarian dishes. Pair it with the pagoda.",
      q: "Chay Tuệ 76 Mai Thị Lựu" },
    { area: "home", kind: "vegan", name: "Zero Plant-based", where: "D1 · 69/4 Tôn Thất Đạm, ~3 min walk",
      desc: "A fully vegan café-restaurant tucked down an alley near the hotel: Vietnamese dishes, pastries and coffee.",
      q: "Zero Plant-based Tôn Thất Đạm 69/4" },
    { area: "home", kind: "vegan", name: "Bon's Vegan", where: "D1 · alley 89/8 Hàm Nghi, ~5 min walk",
      desc: "A small, fully vegan spot for bánh mì, noodle bowls and nut milks, a short walk from the hotel.",
      q: "Bon's Vegan Bistro 89/8 Hàm Nghi" },
    { area: "home", kind: "veg", name: "Chay Garden", where: "D3 · Võ Văn Tần · Michelin Bib Gourmand",
      desc: "Vietnamese vegetarian cooking in a garden house, recognised by the Michelin Guide.",
      q: "Chay Garden 52 Võ Văn Tần" },
    { area: "home", kind: "veg", name: "PI Vegetarian Bistro", where: "Đa Kao · 187/15 Điện Biên Phủ",
      desc: "A relaxed bistro with rice bowls, tempeh salads and Vietnamese dishes.",
      q: "PI Vegetarian Bistro 187/15 Điện Biên Phủ" },
    { area: "home", kind: "veg", name: "Hum Vegetarian", where: "D3 · next to War Remnants",
      desc: "Calm, leafy and a bit upscale, with a large vegan menu. Ask which dishes are fully vegan.",
      q: "Hum Vegetarian Café & Restaurant Võ Văn Tần" },
    { area: "home", kind: "options", name: "Tartine Saigon", where: "D1 · 215 Lý Tự Trọng",
      desc: "A sourdough bakery-café with vegan sandwiches and pastries, good for breakfast.",
      q: "Tartine Saigon 215 Lý Tự Trọng" },
    { area: "home", kind: "vegan", name: "Filthy Vegan", where: "D1 · 86 Cô Bắc, upstairs · closed Sun",
      desc: "Indulgent vegan comfort food: burgers, loaded fries, the works.",
      q: "Filthy Vegan Cô Bắc" },

    /* Thảo Điền — by metro */
    { area: "east", kind: "vegan", name: "Zeroism Vegan Café", where: "Alley off Nguyễn Văn Hưởng",
      desc: "A fully vegan café and bakery on a quiet lane, with cakes, brunch and good coffee with plant milks.",
      q: "Zeroism Vegan Cafe Bakery Thảo Điền" },
    { area: "east", kind: "vegan", name: "Kashew Cheese & Wine", where: "Trần Ngọc Diện street",
      desc: "Cashew cheese boards, pasta and salads with a glass of wine.",
      q: "Kashew Cheese Wine Bar Thảo Điền" },
    { area: "east", kind: "veg", name: "Hum Garden", img: "hum-garden", where: "Villa with garden",
      desc: "Hum's sister restaurant in a leafy villa, slower and greener than the city branch.",
      q: "Hum Garden Thảo Điền" },
    { area: "east", kind: "veg", name: "Chay Garden Thảo Điền", where: "52 Xuân Thủy",
      desc: "The Thảo Điền branch of the Michelin-listed Chay Garden, in a garden house.",
      q: "Chay Garden Thảo Điền 52 Xuân Thủy" },
    { area: "east", kind: "options", name: "Baba's Kitchen", where: "35 Lê Văn Miến",
      desc: "Indian food with plenty of vegetarian dishes.",
      q: "Baba's Kitchen 35 Lê Văn Miến" },
    
    /* Near RMIT — Phú Mỹ Hưng / old District 7 */
    { area: "rmit", kind: "vegan", name: "Liên Hoa 2", where: "439 Trần Xuân Soạn",
      desc: "A clean, open-air, all-vegan Vietnamese canteen.",
      q: "Liên Hoa 2 chay 439 Trần Xuân Soạn" },
    { area: "rmit", kind: "vegan", name: "Kashew Phú Mỹ Hưng", where: "The Ascentia, 3 Nguyễn Lương Bằng",
      desc: "The south-side branch of the plant-based cheese bar.",
      q: "Kashew Cheese Phú Mỹ Hưng" },

    /* Cheap & local */
    { area: "cheap", kind: "vegan", name: "Bánh Mì Xanh", where: "D1 · 2B Trần Hưng Đạo",
      desc: "Fully vegan bánh mì. No pâté or butter to worry about.",
      q: "Bánh Mì Xanh 2B Trần Hưng Đạo" },
    { area: "cheap", kind: "vegan", name: "SEN Vegan", where: "D1 · 171 Nguyễn Thái Học",
      desc: "Simple, good-value vegan Vietnamese set meals, around 60–80k ₫ a plate.",
      q: "Sen Vegan House 171 Nguyễn Thái Học" },
    { area: "cheap", kind: "veg", name: "Any \"Quán cơm chay\"", where: "Every neighbourhood",
      desc: "Buddhist vegetarian canteens where you point at what you want, about 30–50k ₫ a plate.",
      q: "quán cơm chay Quận 1" },

    /* Hà Nội */
    { id: "r-hn-uudam", city: "hanoi", area: "french", kind: "veg", name: "Ưu Đàm Chay", where: "55 Nguyễn Du · Michelin Bib Gourmand",
      desc: "A stylish three-floor vegetarian restaurant with Buddhist décor; reviewers say the menu is all vegan.",
      q: "Uu Dam Chay 55 Nguyen Du Hanoi" },
    { id: "r-hn-codam", city: "hanoi", area: "french", kind: "veg", name: "Cồ Đàm", where: "68a Trần Hưng Đạo · book ahead",
      desc: "Vegetarian fine dining with an 11-course set menu that can be made vegan.",
      q: "Co Dam vegetarian restaurant 68a Tran Hung Dao" },
    { id: "r-hn-dana", city: "hanoi", area: "oldquarter", kind: "vegan", name: "Dana Vegan House", where: "12 Đông Thái",
      desc: "Fully vegan modern Vietnamese food in a 100-year-old rice warehouse, with a tasting menu.",
      q: "Dana Vegan House 12 Dong Thai Hanoi" },
    { id: "r-hn-katze", city: "hanoi", area: "oldquarter", kind: "vegan", name: "Katze", where: "26B Cầu Gỗ, down an alley",
      desc: "A homely, fully vegan Vietnamese kitchen known for its free starters and sides.",
      q: "Katze vegan 26B Cau Go Hanoi" },
    { id: "r-hn-ivegan", city: "hanoi", area: "oldquarter", kind: "vegan", name: "iVegan Supershop", where: "56 Hàng Điếu",
      desc: "A casual, good-value vegan café with a wide menu and vegan cakes.",
      q: "iVegan Supershop 56 Hang Dieu" },
    { id: "r-hn-social", city: "hanoi", area: "oldquarter", kind: "options", name: "The Hanoi Social Club", where: "6 Hội Vũ",
      desc: "A café-bar in an old house with clearly marked vegan dishes like a tempeh sandwich.",
      q: "The Hanoi Social Club 6 Hoi Vu" },
    { id: "r-hn-kiez", city: "hanoi", area: "westlake", kind: "vegan", name: "Kiez Vegan Butcher", where: "12/2A Đặng Thai Mai · closed Mon",
      desc: "A vegan brunch bistro making its own mock meats; try the eggs Benedict.",
      q: "Kiez Vegan Butcher Cafe Hanoi" },
    { id: "r-hn-lastudio", city: "hanoi", area: "westlake", kind: "vegan", name: "La Studio", where: "44, lane 31 Xuân Diệu",
      desc: "A long-running vegan restaurant in the leafy West Lake area.",
      q: "La Studio vegan Xuan Dieu Hanoi" },
    { id: "r-hn-veggiecastle", city: "hanoi", area: "cheap", kind: "vegan", name: "Veggie Castle", where: "7 Yên Ninh · ~120k ₫ buffet",
      desc: "A self-serve, all-you-can-eat vegan Vietnamese buffet.",
      q: "Veggie Castle 7 Yen Ninh" },
    { id: "r-hn-lovinghut", city: "hanoi", area: "cheap", kind: "vegan", name: "Loving Hut Ba Đình", where: "9a Đặng Tất alley · cash only",
      desc: "A small, quiet vegan restaurant with a big, cheap menu.",
      q: "Loving Hut 9a Dang Tat Hanoi" },
    { id: "r-hn-baoan", city: "hanoi", area: "cheap", kind: "vegan", name: "Bao An Vegan", where: "66B Trần Hưng Đạo · Mon–Sat",
      desc: "A family-run counter for vegan bánh mì, phở and rolls. Cash only.",
      q: "Bao An Vegan 66B Tran Hung Dao" },

    /* Ninh Bình */
    { id: "r-nb-ngon", city: "ninhbinh", area: "tamcoc", kind: "vegan", name: "Ngon Vegan", where: "Tam Cốc Rd · may close Tue",
      desc: "A stylish, fully vegan restaurant with a big menu, from tofu dishes to fresh spring rolls.",
      q: "Ngon Vegan Restaurant Tam Coc" },
    { id: "r-nb-ngodong", city: "ninhbinh", area: "tamcoc", kind: "vegan", name: "Ngô Đồng Vegan", where: "By the Tam Cốc entrance",
      desc: "A family-run, fully vegan Vietnamese menu: banana-flower salad, fried lotus, dumplings.",
      q: "Ngo Dong Vegan Restaurant Tam Coc" },
    { id: "r-nb-theboat", city: "ninhbinh", area: "tamcoc", kind: "options", name: "The Boat", where: "Tam Cốc Rd · 9am–4:30pm",
      desc: "A healthy café with a separate vegan menu, oat-milk coffee and smoothie bowls. Good for breakfast.",
      q: "The Boat Healthy and Vegan Eatery Tam Coc" },
    { id: "r-nb-hoalu", city: "ninhbinh", area: "city", kind: "vegan", name: "Chay Hoa Lư (Loving Hut)", where: "56 Lương Văn Thăng",
      desc: "An all-vegan family restaurant with a huge menu of mushroom and mock-meat dishes at local prices.",
      q: "Nhà Hàng Chay Hoa Lư Loving Hut Ninh Bình" },
    { id: "r-nb-khaitam", city: "ninhbinh", area: "city", kind: "vegan", name: "Chay Khai Tâm", where: "15 Đông Phương Hồng",
      desc: "A calm, fully vegan restaurant with a bonsai garden and an English picture menu.",
      q: "Nhà hàng chay Khai Tâm Ninh Bình" },

    /* Huế */
    { id: "r-hue-nhatle", city: "hue", area: "citadel", kind: "vegan", name: "Nhật Lệ vegan canteen", where: "87 Nhật Lệ · 7am–2pm",
      desc: "Cheap, all-plant-based rice and noodle plates (~20–30k ₫), the closest vegan food to the Imperial City.",
      q: "Vegan Restaurant Nhật Lệ Huế" },
    { id: "r-hue-baminh", city: "hue", area: "citadel", kind: "veg", name: "Quán Chay Bà Minh", where: "4 Hàn Thuyên, near Đông Ba",
      desc: "A homely spot doing vegetarian versions of Huế classics like bún and bánh ram ít, with an English menu.",
      q: "Quán Chay Bà Minh 4 Hàn Thuyên Huế" },
    { id: "r-hue-tinhtam", city: "hue", area: "south", kind: "vegan", name: "Tịnh Tâm Vegan", where: "12 Chu Văn An",
      desc: "A fully vegan restaurant for Huế rice and noodle dishes. Some reviews mention a service charge.",
      q: "Tịnh Tâm Vegan 12 Chu Văn An Huế" },
    { id: "r-hue-tinhgarden", city: "hue", area: "south", kind: "veg", name: "Tĩnh Garden", where: "140 Phan Bội Châu",
      desc: "A pretty garden restaurant with a clearly labelled menu and lots of vegan dishes. Hugely popular.",
      q: "Tĩnh Garden Vegetarian 140 Phan Bội Châu Huế" },
    { id: "r-hue-sanmay", city: "hue", area: "south", kind: "veg", name: "Sân Mây", where: "8 Thanh Tịnh, Vỹ Dạ",
      desc: "Old-Huế-style dining room in the riverside Vỹ Dạ quarter, with several vegan dishes. A lovely dinner.",
      q: "Sân Mây Huế Thanh Tịnh" },
    { id: "r-hue-mingle", city: "hue", area: "south", kind: "veg", name: "Mingle Café", where: "Lane 42 Nguyễn Công Trứ",
      desc: "An open-air garden café with all-day vegetarian food and oat milk; tofu scramble stands in for eggs.",
      q: "Mingle Vegetarian Cafe Restaurant Huế" },
    { id: "r-hue-tamduc", city: "hue", area: "cheap", kind: "vegan", name: "Bánh Mì Chay Tâm Đức", where: "137 Phan Bội Châu · 6–10:30am",
      desc: "A street cart making excellent vegan bánh mì. Mornings only.",
      q: "Bánh mì chay Tâm Đức 137 Phan Bội Châu Huế" },
    { id: "r-hue-lienhoa", city: "hue", area: "cheap", kind: "veg", name: "Liên Hoa", where: "3 Lê Quý Đôn",
      desc: "A long-running, very local vegetarian canteen in a garden: cheap, busy, little English.",
      q: "Cơm chay Liên Hoa 3 Lê Quý Đôn Huế" },

    /* Ninh Bình — more */
    { id: "r-nb-antamcoc", city: "ninhbinh", area: "tamcoc", kind: "options", name: "An Tam Cốc", where: "By the river on Tam Cốc Rd · 8am–10pm",
      desc: "Riverside tables with karst views and a clearly marked vegan menu.",
      q: "An Tam Coc Restaurant & Coffee" },
    { id: "r-nb-daisy", city: "ninhbinh", area: "tamcoc", kind: "options", name: "Daisy and Rosie", where: "84f Tam Cốc Rd · 8am–3pm",
      desc: "A garden brunch café, mostly vegan: tofu scramble, falafel wraps, smoothie bowls, oat-milk coffee.",
      q: "Daisy and Rosie cafe Tam Coc" },
    { id: "r-nb-mami", city: "ninhbinh", area: "tamcoc", kind: "options", name: "Mami", where: "Văn Lâm, Tam Cốc · 9am–11pm",
      desc: "A family-run Vietnamese kitchen with a separate vegan menu; tofu in tomato sauce is the go-to.",
      q: "Mami Restaurant Vietnamese Cuisine Tam Coc" },
    { id: "r-nb-saffron", city: "ninhbinh", area: "tamcoc", kind: "options", name: "Saffron Indian", where: "Văn Lâm, Tam Cốc · lunch & dinner",
      desc: "A popular Indian kitchen that reviewers call a gem for vegans; try the Manchurian cauliflower.",
      q: "Saffron Indian Restaurant Ninh Binh" },
    { id: "r-nb-thungsen", city: "ninhbinh", area: "tamcoc", kind: "options", name: "Thung Sen", where: "On the lane to Thái Vi · 7:30am–11pm",
      desc: "A lakeside garden restaurant with marked vegan dishes, an easy lunch stop on the bike loop.",
      q: "Thung Sen Tam Coc Glamping & Restaurant" },
    { id: "r-nb-trungtuyet", city: "ninhbinh", area: "city", kind: "options", name: "Trung Tuyết", where: "14 Hoàng Hoa Thám · 8am–9:30pm",
      desc: "A much-loved family restaurant with a separate vegan menu, including vegan phở. Big portions.",
      q: "Restaurant Trung Tuyết Ninh Bình" },

    /* Huế — more */
    { id: "r-hue-annhien", city: "hue", area: "south", kind: "veg", name: "An Nhiên Garden", where: "Mỹ Thượng, ~6 km east · 10am–9:30pm",
      desc: "Vegetarian fusion in an old family garden villa: lotus rice, bao and garden fruit. A romantic splurge.",
      q: "An Nhien Garden Vegetarian Huế" },
    { id: "r-hue-thanhlieu", city: "hue", area: "south", kind: "veg", name: "Thanh Liễu", where: "50 Nguyễn Công Trứ · 7am–8pm",
      desc: "A busy, cheap chay canteen for Huế bánh bèo, nậm and lọc, plus vegan hotpot.",
      q: "Quán chay Thanh Liễu 50 Nguyễn Công Trứ Huế" },
    { id: "r-hue-sala", city: "hue", area: "south", kind: "veg", name: "Sala Huế", where: "4 Phan Bội Châu · 6am–8pm",
      desc: "Fully vegetarian, smart but fairly priced, with many vegan dishes and a Thai-style hotpot.",
      q: "Sala Huế Nhà hàng Chay 4 Phan Bội Châu" },
    { id: "r-hue-bode", city: "hue", area: "south", kind: "veg", name: "Bồ Đề", where: "11 Lê Lợi, by the river · 7am–10pm",
      desc: "A long-running vegetarian spot with riverside tables, crispy spring rolls and jackfruit salad.",
      q: "Nhà Hàng Cơm Chay Bồ Đề 11 Lê Lợi" },
    { id: "r-hue-thuwheels", city: "hue", area: "south", kind: "options", name: "Cafe on Thu Wheels", where: "3 kiệt 34 Nguyễn Tri Phương",
      desc: "A friendly family café loved by vegetarians for tofu stir-fries and smoothies. Not fully vegetarian.",
      q: "Cafe on Thu Wheels Huế" },
    { id: "r-hue-truongan", city: "hue", area: "cheap", kind: "veg", name: "Quán chay Trường An", where: "304 Phan Bội Châu · 7am–9pm",
      desc: "A neighbourhood chay with a picture menu and plenty of vegetables beyond mock meat.",
      q: "Quán ăn chay Trường An 304 Phan Bội Châu" },
    { id: "r-hue-annhien2", city: "hue", area: "cheap", kind: "veg", name: "Chay An Nhiên", where: "Kiệt 1 Văn Cao · 7am–8pm",
      desc: "A calm Buddhist-style canteen with fresh vegan plates and big portions, about 50k ₫ a meal.",
      q: "Nhà hàng chay An Nhiên Văn Cao Huế" },

    /* Hà Nội — more */
    { id: "r-hn-hoi", city: "hanoi", area: "westlake", kind: "veg", name: "Hồi", where: "81 Quán Thánh · lunch & dinner",
      desc: "A 1921 French villa with a garden and an upstairs art gallery, serving a table-served vegetarian buffet with many vegan dishes.",
      q: "Hoi Modern Vegetarian Dining 81 Quán Thánh" },
    { id: "r-hn-lavegarie", city: "hanoi", area: "french", kind: "veg", name: "La Vegarie", where: "4A Tràng Thi · lunch & dinner",
      desc: "A French-Vietnamese vegetarian bistro with a separate vegan menu. An easy date night near the lake.",
      q: "La Vegarie 4A Tràng Thi" },
    { id: "r-hn-abracado", city: "hanoi", area: "french", kind: "vegan", name: "Abracado", where: "56 Thợ Nhuộm · 10am–4pm, closed Sat",
      desc: "A fully vegan café for a Western break: tempeh sandwich, wraps, a carrot 'lox' bagel.",
      q: "Abracado 56 Thợ Nhuộm" },
    { id: "r-hn-bonbagu", city: "hanoi", area: "oldquarter", kind: "vegan", name: "Bonbagu", where: "9 Hàng Phèn · 7am–8:30pm",
      desc: "A fully vegan bánh mì counter: mushroom-pâté baguette and pumpkin-cashew rolls. Few seats.",
      q: "Bonbagu Vegan Baguette 9 Hàng Phèn" },
    { id: "r-hn-huongviet", city: "hanoi", area: "oldquarter", kind: "options", name: "Hương Việt", where: "13 Hàng Cá · 8am–9pm",
      desc: "A busy Old Quarter kitchen with clearly marked vegan phở, bún chả and bánh mì. Arrive early.",
      q: "Hương Việt 13 Hàng Cá" },
    { id: "r-hn-chayviahe", city: "hanoi", area: "cheap", kind: "vegan", name: "Chay vỉa hè", where: "19 Châu Long, near Trúc Bạch",
      desc: "A fully vegan self-serve street-food spread: bún riêu, bún chả, bánh mì, cashew milk. About 30–40k ₫ a dish.",
      q: "Chay vỉa hè 19 Châu Long" },
    { id: "r-hn-cophieu", city: "hanoi", area: "cheap", kind: "vegan", name: "Sạp Chay Cô Phiêu", where: "Inside Complex 01, Tây Sơn",
      desc: "A fully vegan stall for bún bò Huế, bánh mì and fresh cashew milk, about 25–40k ₫ a dish.",
      q: "Sạp Chay Cô Phiêu Tây Sơn" }
  ],

  /* ---------- FAIR PRICES (VND, rough 2026 ranges) ---------- */
  prices: [
    { group: "Food & drink", items: [
      { name: "Iced coffee, street stall", lo: 15000, hi: 30000 },
      { name: "Coffee in a café", lo: 40000, hi: 80000 },
      { name: "Bánh mì chay", lo: 20000, hi: 35000 },
      { name: "Cơm chay plate", lo: 30000, hi: 55000 },
      { name: "Noodle soup bowl", lo: 40000, hi: 70000 },
      { name: "Vegan restaurant main", lo: 80000, hi: 180000 },
      { name: "Fresh coconut", lo: 25000, hi: 45000 },
      { name: "Sugarcane juice", lo: 10000, hi: 20000 },
      { name: "Bottle of water (shop)", lo: 5000, hi: 12000 },
      { name: "Local beer, street or shop", lo: 20000, hi: 35000 },
      { name: "Beer in a bar", lo: 50000, hi: 90000 },
      { name: "Craft beer, pint", lo: 100000, hi: 160000 },
      { name: "Rooftop cocktail", lo: 200000, hi: 400000 }
    ] },
    { group: "Getting around", items: [
      { name: "Grab bike, short hop", lo: 15000, hi: 35000 },
      { name: "Grab car across District 1", lo: 40000, hi: 80000 },
      { name: "Grab car to the airport", lo: 120000, hi: 250000 },
      { name: "Grab car to RMIT", lo: 120000, hi: 220000 },
      { name: "Metro ticket", lo: 7000, hi: 20000 },
      { name: "Cyclo, one hour", lo: 150000, hi: 300000 }
    ] },
    { group: "Things to do", items: [
      { name: "Museum or heritage ticket", lo: 30000, hi: 200000 },
      { name: "Foot massage, 60 min", lo: 200000, hi: 400000 },
      { name: "Laundry, per kg", lo: 30000, hi: 50000 }
    ] }
  ],

  /* ---------- READ ----------
     Short articles on Vietnamese traditions. Each one:
     { id, title, vi, icon, teaser, minutes, lead,
       sections: [{ h, p: ["paragraph", ...], tip }],
       sources: [{ title, url }] } */
  readings: [
    {
      "id": "nha-mo-gia-rai",
      "title": "The tomb houses of the Gia Rai",
      "vi": "Nhà mồ Gia Rai",
      "img": {
        "key": "r-gr-hero",
        "cap": "A Gia Rai tomb house, built by Jrai Arap craftsmen from Gia Lai, at the Vietnam Museum of Ethnology in Hanoi."
      },
      "teaser": "Carved wooden mourners, painted roofs, and a final ceremony that sets the dead free. Plus how the rest of Vietnam says goodbye.",
      "minutes": 14,
      "lead": "In the Central Highlands, the Gia Rai honour their dead with a tomb house ringed by carved wooden figures. Then, after one last great ceremony, they walk away from it for good, and let the forest take it back. It's one of the most striking ways of saying goodbye in Vietnam, and very different from how most Vietnamese remember their dead.",
      "sections": [
        {
          "h": "Who the Gia Rai are",
          "p": [
            "The Gia Rai (also written Jrai or Jarai) are one of the largest peoples of Vietnam's Central Highlands, living mainly in Gia Lai province and in parts of Kon Tum and Đắk Lắk. Their language belongs to the Austronesian family and is related to Cham, so it sounds nothing like Vietnamese.",
            "Society is matrilineal: family lines run through the mother. Children take their mother's family name, and a husband moves in with his wife's family. Villages (plơi) are built of stilt houses around a tall communal house, the rông, where the village meets."
          ]
        },
        {
          "h": "The soul that stays behind",
          "p": [
            "For the Gia Rai, everything has a soul. When a person dies, their soul becomes a spirit (ma) that does not leave straight away. It lingers by the grave, visits home, and still needs to eat. So the family brings it food, often every day.",
            "Burial follows the mother's line. Members of the same maternal clan share one grave, with coffins laid side by side and later stacked. A man who dies in his wife's village is carried back to be buried in his mother's clan grave.",
            "The in-between time lasts from one to three years, sooner for a poorer family and later for a wealthier one. While it lasts, the family is in mourning. Traditionally they don't wear new clothes, use new things, or go travelling. The dead and the living are still tied together, and only one ceremony can untie them."
          ]
        },
        {
          "h": "The tomb house",
          "p": [
            "When the time comes, the family and village build a proper tomb house, the nhà mồ. Men gather timber, bamboo, rattan and grass and do the building, women cook for them, and neighbours lend a hand. It can take anything from a week to a month.",
            "The roof is the showpiece: wooden planks covered in woven bamboo, painted with a homemade red pigment. The patterns show the farewell ceremony itself, with gong players, drummers and xoang dancers, alongside elephants and birds. A single tomb can hold many members of the same clan; one village tomb is said to hold about 30.",
            "Inside go the things the dead will need, and gifts from those left behind: gongs, jars, baskets, bowls, tools and bead bracelets, plus broken dishes, bottles and small model tools, since what is broken here is whole in the world of the dead. Today you may also find modern things, because the idea is simply to send loved ones off with what they valued.",
            "Each Gia Rai subgroup builds its own style. The Mơthur around Ayun Pa build a round tomb like a haystack. The Hđrung around Pleiku build one tall and steep like a rông house. The Arap build a long, low tomb surrounded by many statues."
          ],
          "imgs": [
            {
              "key": "r-gr-inside",
              "cap": "Inside a Jarai tomb near Kon Tum: offerings and belongings for the dead, including a television."
            },
            {
              "key": "r-gr-tomb",
              "cap": "The tomb house at the Museum of Ethnology, with its fence of carved figures."
            }
          ],
          "gallery": [
            {
              "key": "r-gr-g1",
              "cap": "Statues on the fence beneath the patterned roof."
            }
          ]
        },
        {
          "h": "The statues",
          "p": [
            "Around the tomb stands a fence of wooden figures, the tượng nhà mồ. Each is carved from a single piece of wood using only an axe, chisel and knife, with no sketches. The rough, chunky cuts are part of the style: faces are bold and simple, and the carver's marks stay visible.",
            "The figures are a portrait of life itself. There are mourners crouching with hands on their faces or propping up their chins, the image of a grieving husband or wife. There are mothers holding babies (a widow waiting), pregnant women and embracing couples (fertility and birth), and drummers and gong players (death as a beginning). People call them người ở lại, \"the ones who stay\": companions so the dead are never lonely.",
            "Carving is slow, skilled work. Before the farewell ceremony, the master artisan Ksor Krôh of Mrông Ngó village, honoured as a Meritorious Artisan in 2019, would carve day and night: one to three days for a small figure, up to a month for a large one. Good hardwood is now scarce, and statues of ordinary wood rot much faster.",
            "The statues are made for the farewell ceremony and then left behind, slowly greying and cracking in the sun and rain. That weathering isn't neglect. It is meant to happen."
          ],
          "imgs": [
            {
              "key": "r-gr-pair",
              "cap": "Carved figures on the tomb fence. Couples and pregnant women speak of fertility and rebirth."
            },
            {
              "key": "r-gr-face",
              "cap": "A carved head, cut with axe and chisel. The tool marks are part of the look."
            },
            {
              "key": "r-gr-guard",
              "cap": "A weathered guardian figure from a Jarai tomb near Kon Tum."
            }
          ],
          "gallery": [
            {
              "key": "r-gr-g2",
              "cap": "Figures carved from single tree trunks."
            },
            {
              "key": "r-gr-g3",
              "cap": "Weathered figures at the corner of the fence."
            }
          ],
          "tip": "For an art lover: this is some of Vietnam's most striking folk sculpture. Look at how much feeling comes from a few deep cuts: the slump of a grieving body, a hand pressed to a cheek."
        },
        {
          "h": "Pơ thi: the farewell ceremony",
          "p": [
            "Between one and three years after a death, and sometimes longer, comes pơ thi, the grave-abandonment ceremony (lễ bỏ mả). The Gia Rai consider it the most important rite of the whole life cycle. It is usually held in the dry season after the harvest, and lasts two or three days, moving between the family's home and the tomb.",
            "The family first shares out the dead person's valuables (gongs, jars, bead bracelets, tools), which go to the tomb. Villagers gather beneath an old tree beside the tomb house. The gongs begin, played in set rhythms: the elders on the big gongs and the young people on the small ones. Everyone dances the xoang in a circle around the tomb.",
            "Offerings depend on what a family can afford. A wealthy family may sacrifice a buffalo, cattle, pigs and chickens and raise a decorated ceremonial pole (cây nêu); a poorer one offers a chicken, a pig and rice wine. Afterwards the village elder shares the offerings out among the villagers.",
            "Young men smear themselves with mud and wear masks to become Bram, spirits who come to welcome the dead person's soul to Yàng, the world of the spirits. The elder pours rượu cần, rice wine drunk through long bamboo straws, onto the grave and says farewell prayers. Then the gongs fall silent and the family goes into the tomb house to weep and say goodbye one last time. Dancing and drinking go on until dawn.",
            "At the end, the elder speaks to the spirit directly: this house was built for you; from now on you must leave your descendants and seek your food from the spirits, because the living will no longer bring it. From that moment the family stops feeding the dead, the mourning rules are lifted, and there is no yearly anniversary. The tomb is left to the weather, and nobody tends it again."
          ]
        },
        {
          "h": "The voice of the gongs",
          "p": [
            "Gongs (cồng chiêng) run through every part of Highland life, and death is no exception. They open the farewell ceremony, carry it through the night, and go into the tomb as treasured belongings. Behind every gong, people say, there is a deity.",
            "UNESCO recognised the \"Space of Gong Culture\" of the Central Highlands as world heritage in 2005, inscribed in 2008. It covers 17 ethnic communities, including the Gia Rai, and names mourning rites among the ceremonies the gongs belong to."
          ]
        },
        {
          "h": "Neighbours in the Highlands",
          "p": [
            "The Gia Rai are not alone. Their northern neighbours the Bahnar also hold a grave-abandonment ceremony one to three years after a death. Tomb statues are carved by the Ê Đê and M'nông too. Among the Ê Đê, relatives go into the forest to choose the trees and make an offering before cutting them. The Xơ Đăng carve statues as well, but theirs don't always stand at graves; they may stand by the communal house or in the village.",
            "Further north, in the hills of Quảng Nam and Huế, the Cơ Tu build some of the most colourful tomb houses of all. They stand about two metres tall, with roofs painted in red, white and blue checks and roosters on the ridge. The pillars are carved with turtles, snakes and lizards, the beams are shaped like pythons, and fierce painted masks keep watch. Statues show people crying, playing gongs, dancing and sacrificing buffalo. For a respected person, the Cơ Tu hold a second funeral, the Têng Ping, and the remains rest in a boat-shaped coffin carved with buffalo heads. A wealthy family may spend five or six years preparing."
          ],
          "gallery": [
            {
              "key": "r-gr-cotu1",
              "cap": "A Cơ Tu tomb house at the Museum of Ethnology in Hanoi."
            },
            {
              "key": "r-gr-cotu2",
              "cap": "Carved and painted details on the Cơ Tu tomb house."
            }
          ]
        },
        {
          "h": "How the rest of Vietnam says goodbye",
          "p": [
            "For the majority Kinh (Viet) people, death doesn't end a relationship; it changes it. Nearly every home keeps an ancestor altar (bàn thờ gia tiên) with photos, incense and offerings. In a 2023 Pew survey, 96% of Vietnamese adults had burned incense for their ancestors in the past year, and nearly 8 in 10 said an ancestor's spirit had helped them.",
            "A traditional funeral moves through set steps: washing and dressing the body, laying it in the coffin with a bowl of rice and chopsticks on top, setting up an altar with the spirit tablet, then days of visitors bringing incense, flowers and money while a hired band plays oboes, flutes and drums. Close family wear rough hemp tunics and white headbands; the type of headband shows how you were related, and great-grandchildren wear coloured bands instead. A procession then carries the coffin to the grave. In most places this all happens within a day or two; in Huế a funeral could traditionally last a week, until a 2026 rule capped it at 72 hours.",
            "Many families burn vàng mã, votive paper offerings: paper money, clothes, houses, phones and even cars, sent to the dead through the smoke. Most are made in Song Hồ village in Bắc Ninh, a craft dating back to the 17th century, and Hanoi's Hàng Mã street is famous for selling them. Around 50,000 tonnes are burned across the country every year."
          ],
          "imgs": [
            {
              "key": "r-gr-altar",
              "cap": "A traditional family ancestor altar."
            },
            {
              "key": "r-gr-fun1926",
              "cap": "Mourners at a 1926 funeral in Saigon."
            }
          ],
          "gallery": [
            {
              "key": "r-gr-paperhouse",
              "cap": "A paper house, made to be burned as an offering."
            },
            {
              "key": "r-gr-horse",
              "cap": "A red paper horse, an offering typical of Huế."
            },
            {
              "key": "r-gr-burn",
              "cap": "Burning votive paper."
            },
            {
              "key": "r-gr-altar2",
              "cap": "A family altar laid with offerings for the ancestors."
            },
            {
              "key": "r-gr-fun1926b",
              "cap": "The hearse in a crowded 1926 funeral procession in Saigon."
            }
          ]
        },
        {
          "h": "The days and years after",
          "p": [
            "Mourning unfolds over years. Offerings are made on the third day, then every week until the 49th day, when the daily rice offerings stop. On the 100th day comes tốt khốc, \"stop weeping\": paper mourning clothes are burned and the person's portrait moves onto the ancestor altar. The first anniversary is a big occasion, and formal mourning ends around the second, going into the third year.",
            "After that, the dead are remembered every year on their giỗ, the anniversary of the death by the lunar calendar. The extended family gathers for a feast that includes the person's favourite dishes, and a family may hold several each year. They work as reunions much like Tết.",
            "In the north especially, families have traditionally carried out cải táng (reburial) about three years after the first burial, usually before Tết. The grave is opened, the bones are washed in herbal water and placed in a small ceramic box, then reburied in a permanent grave. Many believe the soul stays in limbo until this is done. Each spring, at Thanh Minh in early April, families tend the graves, add fresh earth and offer flowers and incense.",
            "Things are changing fast in the cities. Hanoi now aims for 100% cremation and plans to turn city cemeteries into memorial parks, and Huế offers free cremation until 2030."
          ]
        },
        {
          "h": "Two ways of letting go",
          "p": [
            "Put side by side, the two traditions are almost mirror images. Both see the first years after a death as a fragile in-between time, and both mark its end with a great ceremony around the third year: reburial for the Kinh, pơ thi for the Gia Rai.",
            "But then they go opposite ways. A Kinh family keeps caring for its dead forever, with incense every day and a feast every year, and the bond is meant never to break. A Gia Rai family carves companions for their dead, throws them the biggest party of their life, and then deliberately lets go, so the soul is free and the living can carry on. One says remember always; the other says now you are free, go."
          ]
        },
        {
          "h": "A tradition under pressure",
          "p": [
            "Fewer people now carve the old way. Good hardwood is scarce after years of deforestation, statues have been stolen from cemeteries to sell as 'ethnic art' (dozens were once dug up from a single clan's tomb in one night), and many families now build brick or concrete grave houses or use plaster figures. A 2020 survey still counted about 1,500 wooden statues in 177 villages of Gia Lai, and the province runs carving contests and classes so younger people learn from masters like Ksor Krôh, who has had to stop carving after a stroke.",
            "Statues increasingly appear outside cemeteries too, at rông houses, parks and community tourism sites, which is where most visitors now see them."
          ]
        },
        {
          "h": "Where to see them",
          "p": [
            "You won't find tomb houses in Saigon. The best place is the outdoor garden of the Vietnam Museum of Ethnology in Hanoi, which has both a Gia Rai tomb house, built in 1998 by five Jrai Arap men from Mrông Ngó village in Gia Lai, and a Cơ Tu tomb house, made by Briu Nga of Quảng Nam and brought there in 2005. In the Highlands, Pleiku and nearby villages such as Kép still have statues, and the Đắk Lắk Museum in Buôn Ma Thuột displays some too."
          ],
          "tip": "If you ever visit a real Gia Rai cemetery, go with a local guide. It is a sacred place: ask before taking photos, and never touch, move or take anything from a tomb. Elsewhere, if you pass a funeral in Vietnam, keep a respectful distance and don't photograph mourners without asking. Vietnam's tourism board also advises never to step over offerings or altars set on the ground.",
          "maps": [
            {
              "key": "hn-ethnology",
              "label": "Museum of Ethnology, Hà Nội"
            }
          ]
        }
      ],
      "sources": [
        {
          "title": "VietnamPlus: Grave-abandoning ceremony of Jarai ethnic people",
          "url": "https://en.vietnamplus.vn/grave-abandoning-ceremony-of-jarai-ethnic-people-post207007.vnp"
        },
        {
          "title": "VOV4: Nhà mồ và quan niệm về cái chết của người Gia Rai",
          "url": "https://vov4.vov.vn/bao-ton-vh/nha-mo-va-quan-niem-ve-cai-chet-cua-nguoi-gia-rai-430891.vov4"
        },
        {
          "title": "Nhân Dân: Nghệ thuật tạc tượng nhà mồ ở Tây Nguyên (2026)",
          "url": "https://nhandan.vn/nghe-thuat-tac-tuong-nha-mo-o-tay-nguyen-post948040.html"
        },
        {
          "title": "Viet Nam News: Wooden sculptures play key roles in life and death",
          "url": "https://vietnamnews.vn/life-style/653580/wooden-sculptures-play-key-roles-in-life-and-death.html"
        },
        {
          "title": "Vietnam Heritage: A grave matter",
          "url": "https://vietnamheritage.com.vn/a-grave-matter/"
        },
        {
          "title": "Lam Museum of Anthropology: Jarai sculptures",
          "url": "https://lammuseum.wfu.edu/2025/09/jarai-sculptures/"
        },
        {
          "title": "Authentik Travel: The Gia-rai funerary house",
          "url": "https://authentiktravel.com/gia-rai-funerary-house-beliefs-about-death"
        },
        {
          "title": "Nhân Dân: Dân tộc Gia-rai",
          "url": "https://nhandan.vn/dan-toc-gia-rai-post723906.html"
        },
        {
          "title": "Báo Văn Hóa: Độc đáo lễ hội Pơ thi của đồng bào Jrai (2025)",
          "url": "https://baovanhoa.vn/dan-toc-ton-giao/doc-dao-le-hoi-po-thi-cua-dong-bao-jrai-121728.html"
        },
        {
          "title": "Báo Văn Hóa: Nghệ nhân Ksor Krôh (2025)",
          "url": "https://baovanhoa.vn/dan-toc-ton-giao/noi-niem-luu-truyen-nghe-tac-tuong-cua-nghe-nhan-ksor-kroh-159078.html"
        },
        {
          "title": "Vietnam Museum of Ethnology: Giarai tomb house",
          "url": "https://vme-en.vass.gov.vn/giarai-tomb-house/giarai-tomb-house-559660"
        },
        {
          "title": "Vietnam Museum of Ethnology: Cotu tomb house",
          "url": "https://vme-en.vass.gov.vn/cotu-tomb-house/cotu-tomb-house-559661"
        },
        {
          "title": "VietNamNet: Grave statues of the Co Tu",
          "url": "https://vietnamnet.vn/en/grave-statues-of-the-co-tu-E190625.html"
        },
        {
          "title": "VietNamNet: Tượng nhà mồ ở Tây Nguyên",
          "url": "https://vietnamnet.vn/tuong-nha-mo-o-tay-nguyen-khong-canh-ma-bay-113551.html"
        },
        {
          "title": "UNESCO: Space of Gong Culture",
          "url": "https://ich.unesco.org/en/RL/space-of-gong-culture-00120"
        },
        {
          "title": "Pew Research: Ancestor veneration, funerals and afterlife beliefs (2024)",
          "url": "https://www.pewresearch.org/religion/2024/06/17/ancestor-veneration-funerals-and-afterlife-beliefs/"
        },
        {
          "title": "Wikipedia (vi): Tang lễ người Việt",
          "url": "https://vi.wikipedia.org/wiki/Tang_l%E1%BB%85_ng%C6%B0%E1%BB%9Di_Vi%E1%BB%87t"
        },
        {
          "title": "Tuổi Trẻ: New funeral time limit in Huế (2026)",
          "url": "https://news.tuoitre.vn/new-funeral-time-limit-tests-grip-of-old-customs-in-vietnams-hue-city-103260719171410199.htm"
        },
        {
          "title": "Tuổi Trẻ / AFP: Vietnam's reburials",
          "url": "https://news.tuoitre.vn/goodbye-again-vietnams-reburials-send-souls-on-final-journey-10348802.htm"
        },
        {
          "title": "Tuổi Trẻ: Hanoi to phase out inner-city burials (2026)",
          "url": "https://news.tuoitre.vn/hanoi-plans-to-phase-out-inner-city-burials-at-cemeteries-103260515135811062.htm"
        },
        {
          "title": "Việt Nam News: Burning offerings",
          "url": "https://vietnamnews.vn/sunday/463969/burning-offerings-a-hot-topic.html"
        },
        {
          "title": "VietnamPlus: Thanh Minh festival",
          "url": "https://en.vietnamplus.vn/thanh-minh-festival-in-vietnamese-peoples-mind/251097.vnp"
        },
        {
          "title": "Wikipedia: Death anniversary",
          "url": "https://en.wikipedia.org/wiki/Death_anniversary"
        },
        {
          "title": "Vietnam Tourism: Etiquette for travellers",
          "url": "https://vietnam.travel/things-to-do/vietnamese-etiquette-travellers"
        }
      ]
    },
    {
      "id": "hue-royal-tombs",
      "title": "Huế and the royal tombs",
      "vi": "Cố đô Huế · Lăng tẩm",
      "img": {
        "key": "r-hue-hero",
        "cap": "The Tomb of Minh Mạng: gates, bridges and pavilions laid out along one long axis across the lakes."
      },
      "teaser": "Vietnam's last imperial capital, where emperors designed their own tombs as landscapes for eternity.",
      "minutes": 8,
      "lead": "For 143 years, Huế was the seat of Vietnam's last dynasty. Its emperors left behind a walled Imperial City on the Perfume River and, in the green hills to the south, tombs they designed while they were still alive: part grave, part palace, part garden.",
      "sections": [
        {
          "h": "Vietnam's last imperial capital",
          "p": [
            "In 1802 Nguyễn Phúc Ánh crowned himself Emperor Gia Long and made Huế, then called Phú Xuân, the capital of a newly united Vietnam. His Nguyễn dynasty would rule through 13 emperors until 1945, when the last of them, Bảo Đại, abdicated.",
            "Gia Long had geomancers choose the site. The great walled Citadel faces the Perfume River (sông Hương), with the flat-topped Ngự Bình hill rising beyond the water like a screen. Inside the walls sits the Imperial City (Đại Nội), and at its heart the Purple Forbidden City, where only the emperor's household could go.",
            "War was hard on it. Fighting in 1947 burned the palace core, and in the 1968 Tết Offensive only about 10 of some 160 buildings survived. What stands today is a mix of originals and careful restoration, still ongoing. The whole Complex of Huế Monuments became a UNESCO World Heritage Site in 1993."
          ],
          "img": {
            "key": "r-hue-citadel",
            "cap": "The Ngọ Môn (Noon Gate), the main entrance to the Imperial City."
          },
          "maps": [
            {
              "key": "hue-citadel",
              "label": "Imperial City"
            }
          ],
          "gallery": [
            {
              "key": "r-hue-g01",
              "cap": "A pavilion inside the Imperial City."
            },
            {
              "key": "r-hue-g02",
              "cap": "Inside the Imperial City walls."
            },
            {
              "key": "r-hue-g03",
              "cap": "Palace halls of the Imperial City."
            },
            {
              "key": "r-hue-g04",
              "cap": "An ornate gateway in the Imperial City."
            },
            {
              "key": "r-hue-g05",
              "cap": "One of the Imperial City's painted gates."
            },
            {
              "key": "r-hue-g06",
              "cap": "A gate through the Citadel's outer walls."
            }
          ]
        },
        {
          "h": "Tombs for living as well as dying",
          "p": [
            "Nguyễn emperors chose their burial sites, and often began building, long before they died. The tombs sit among the hills and pine forests along the Perfume River south of the city, and seven of them are imperial tombs.",
            "Each is different, but most share a pattern: a ceremonial courtyard lined with stone mandarins, elephants and horses to guard and guide the emperor's spirit; a stele pavilion carved with his life story; a temple where he was worshipped; and finally the sepulchre itself. Lakes, bridges and gardens tie it all into the landscape."
          ],
          "img": {
            "key": "r-hue-river",
            "cap": "A dragon boat on the Perfume River. Boat trips are a classic way to reach the tombs."
          },
          "gallery": [
            {
              "key": "r-hue-g07",
              "cap": "The Perfume River winds south toward the royal tombs."
            },
            {
              "key": "r-hue-g08",
              "cap": "Dragon boats on the Perfume River."
            }
          ]
        },
        {
          "h": "Minh Mạng: perfect harmony",
          "p": [
            "The tomb of Minh Mạng, the second emperor, is often called the most majestic. Building began in 1840. He died in early 1841 before it was finished, and his son Thiệu Trị completed it in 1843.",
            "Everything follows a single central axis about 700 metres long, from the Đại Hồng Gate to the wall behind the burial mound. Courtyards, halls, gates and bridges are set out in mirrored pairs on either side, and two lakes wrap around them. It sits in hills about 12 to 14 km from the city, and it is peaceful, symmetrical and best seen slowly."
          ],
          "img": {
            "key": "r-hue-mm-horse",
            "cap": "A stone horse in the salutation court, with the stele pavilion behind."
          },
          "maps": [
            {
              "key": "hue-minhmang",
              "label": "Minh Mạng tomb"
            }
          ],
          "gallery": [
            {
              "key": "r-hue-g09",
              "cap": "A bridge across the lake toward a pavilion."
            },
            {
              "key": "r-hue-g10",
              "cap": "A weathered gateway at Minh Mạng's tomb."
            },
            {
              "key": "r-hue-g11",
              "cap": "The long ceremonial courtyard."
            },
            {
              "key": "r-hue-g12",
              "cap": "Minh Mạng's tomb across the lake on a misty day."
            }
          ]
        },
        {
          "h": "Tự Đức: a poet's retreat",
          "p": [
            "Tự Đức had the longest reign of the dynasty, about 36 years. He built his tomb between 1864 and 1867 and then used it as a country retreat for the rest of his life, so it feels more like a pleasure garden than a grave.",
            "On the lake stands the Xung Khiêm pavilion, where he wrote poetry. He even wrote his own epitaph, carved on what is said to be the largest stele of its kind in Vietnam, a stone that took four years to bring from a quarry more than 500 km away.",
            "Paradise had a price. The forced labour and extra taxes behind it fuelled a failed coup against him in 1866. And the grave in the tomb is not where he lies: his real burial place was kept secret and has never been found."
          ],
          "img": {
            "key": "r-hue-tuduc",
            "cap": "Xung Khiêm pavilion on the lake at Tự Đức's tomb, where the emperor wrote poetry."
          },
          "maps": [
            {
              "key": "hue-tuduc",
              "label": "Tự Đức tomb"
            }
          ],
          "gallery": [
            {
              "key": "r-hue-g13",
              "cap": "Pavilions by the lake."
            },
            {
              "key": "r-hue-g14",
              "cap": "A lakeside pavilion on stilts."
            },
            {
              "key": "r-hue-g15",
              "cap": "Inside the tomb enclosure."
            },
            {
              "key": "r-hue-g16",
              "cap": "A hall in the temple area."
            },
            {
              "key": "r-hue-g17",
              "cap": "A stone gate and pillar, softened by moss."
            }
          ]
        },
        {
          "h": "Khải Định: East meets West",
          "p": [
            "The last great tomb is the most surprising. Khải Định began it in 1920 on Châu Chữ mountain, and it was finished in 1931, after his death, under his son Bảo Đại. It is the smallest of the royal tombs, but it took 11 years.",
            "Instead of wood and tile, it is built of concrete, steel and slate, and its style mixes Vietnamese tradition with European touches: Baroque, Gothic and Neoclassical. A grand staircase climbs past dragon balustrades to a courtyard of stone mandarins, elephants and horses, then on to an unusual eight-sided stele pavilion.",
            "The real showpiece is inside the Thiên Định palace. Its walls are covered in a glittering mosaic of glass and porcelain, nine dragons are painted across the ceiling by the royal painter Phan Văn Tánh, and a bronze statue of the emperor, cast in Marseille, sits above his grave. Some accounts say he raised taxes by 30% to pay for it, though historians dispute this."
          ],
          "imgs": [
            {
              "key": "r-hue-kd-stairs",
              "cap": "The dragon staircase and gate at Khải Định's tomb."
            },
            {
              "key": "r-hue-kd-court",
              "cap": "Stone mandarins, an elephant and a horse stand guard in the salutation court."
            },
            {
              "key": "r-hue-kd-hall",
              "cap": "Inside Thiên Định palace: mosaics of glass and porcelain around the emperor's statue."
            }
          ],
          "tip": "For an art lover: get close to the walls of Thiên Định palace. The mosaics are made from glass and porcelain pieces, so the closer you look, the more detail appears.",
          "maps": [
            {
              "key": "hue-khaidinh",
              "label": "Khải Định tomb"
            }
          ],
          "gallery": [
            {
              "key": "r-hue-g18",
              "cap": "The richly decorated façade."
            },
            {
              "key": "r-hue-g19",
              "cap": "Dragon balustrades on the staircase."
            },
            {
              "key": "r-hue-g20",
              "cap": "Ornaments inside the tomb."
            }
          ]
        },
        {
          "h": "Gia Long and the quieter tombs",
          "p": [
            "The founder's tomb lies about 20 km south of Huế. Gia Long first built it for his wife, Empress Thừa Thiên, after she died in 1814, and the two are buried side by side in a double grave set in open, hilly country. It is further out and far less visited, a calm contrast to the busier tombs.",
            "Thiệu Trị, Đồng Khánh and Dục Đức also have tombs nearby, smaller and quieter still, for anyone who falls for the place."
          ],
          "maps": [
            {
              "key": "hue-gialong",
              "label": "Gia Long tomb"
            }
          ],
          "gallery": [
            {
              "key": "r-hue-g21",
              "cap": "The double grave of Gia Long and Empress Thừa Thiên."
            },
            {
              "key": "r-hue-g22",
              "cap": "The stele pavilion at Gia Long's tomb."
            },
            {
              "key": "r-hue-g23",
              "cap": "Gia Long's tomb seen across its lake."
            },
            {
              "key": "r-hue-g24",
              "cap": "Steps up to Gia Long's tomb."
            },
            {
              "key": "r-hue-g25",
              "cap": "Stone elephants and guardians at Gia Long's tomb, photographed in 1898."
            }
          ]
        },
        {
          "h": "Visiting from Saigon",
          "p": [
            "Huế is about an hour and a half's flight from Saigon. Allow one day for the Imperial City and another for the tombs, which are best reached by car, motorbike taxi or a boat trip on the Perfume River.",
            "In 2026, travel sites list the Imperial City at about 200,000 ₫ and each of the main tombs (Minh Mạng, Tự Đức, Khải Định) at about 150,000 ₫. Combined tickets save money: about 420,000 ₫ for the Imperial City plus two tombs, or 530,000 ₫ for the Imperial City plus three, valid for two days. Sites open roughly 7am to 5pm, a little longer in summer. These come from travel sites, not the official ticket office, so check at the counter."
          ],
          "tip": "Late November to early December is central Vietnam's rainy season. Bring a rain jacket and good shoes, check for flood warnings before you go, and visit the tombs early in the day. Cover shoulders and knees at temples and shrines."
        }
      ],
      "sources": [
        {
          "title": "Wikipedia: Tomb of Tự Đức",
          "url": "https://en.wikipedia.org/wiki/Tomb_of_T%E1%BB%B1_%C4%90%E1%BB%A9c"
        },
        {
          "title": "Wikipedia: Tomb of Khải Định",
          "url": "https://en.wikipedia.org/wiki/Tomb_of_Kh%E1%BA%A3i_%C4%90%E1%BB%8Bnh"
        },
        {
          "title": "Wikipedia: Tomb of Gia Long",
          "url": "https://en.wikipedia.org/wiki/Tomb_of_Gia_Long"
        },
        {
          "title": "Wikipedia: Imperial City of Huế",
          "url": "https://en.wikipedia.org/wiki/Imperial_City_of_Hu%E1%BA%BF"
        },
        {
          "title": "Wikipedia: Nguyễn dynasty",
          "url": "https://en.wikipedia.org/wiki/Nguy%E1%BB%85n_dynasty"
        },
        {
          "title": "VietnamPlus: The traditional yet poetic beauty of the Tomb of Minh Mang",
          "url": "https://en.vietnamplus.vn/the-traditional-yet-poetic-beauty-of-the-tomb-of-minh-mang/166964.vnp"
        },
        {
          "title": "Huế city: Minh Mang tomb",
          "url": "https://hue.gov.vn/Home/Festival/Festival-Detail/tid/Minh-Mang-tomb/newsid/400A9EAE-71F9-427A-A295-A99200AA8329/cid/E4530DE2-FB59-4737-8EA1-A854010B166C"
        },
        {
          "title": "Hue Top Tours: Hue entrance fees 2026",
          "url": "https://huetoptours.com/hue-entrance-fees/"
        },
        {
          "title": "Huracars: Hue entrance tickets 2026",
          "url": "https://huracars.com/hue-entrance-tickets-2026/"
        }
      ]
    },
    {
      "id": "graves-of-vietnam",
      "title": "Graves of everyday Vietnam",
      "vi": "Mộ phần · Lăng mộ",
      "img": {
        "key": "r-mo-hero",
        "cap": "An Bằng near Huế, the \"city of ghosts\": a village cemetery of towering, colourful family tombs."
      },
      "teaser": "Graves in the rice fields, dragons and lotus flowers, and a village where the dead live in palaces.",
      "minutes": 11,
      "lead": "Travel through Vietnam and you'll see graves almost everywhere: in the middle of rice paddies, in orchards and front yards, crowded onto hillsides. Most Vietnamese families keep a grave they visit every year, and the shapes, colours and symbols on them say a lot about what people hope for their ancestors, and from them.",
      "sections": [
        {
          "h": "Why graves sit in the fields",
          "p": [
            "The dead are kept close. In a 2023 survey, 84% of Vietnamese said their family has a gravesite, and most visit at least once a year. In the countryside, especially in the south, families have long buried their dead on inherited ancestral land (đất hương hỏa), setting aside a corner away from the house. That's why you'll see graves standing in the middle of rice paddies, orchards and even shrimp ponds.",
            "In the Mekong delta, some families build entire tomb houses in the fields, lacquered red with gold leaf and decorated with dragons, phoenixes, unicorns and tortoises. Some cost over a billion đồng. The belief is simple: a fine resting place for the ancestors helps their descendants prosper."
          ]
        },
        {
          "h": "Shapes that change with the map",
          "p": [
            "Grave shapes follow regional tradition. From the north down to Thanh Hóa, graves are traditionally rectangular, sloping at the corners and highest in the middle. From Nghệ An down to Khánh Hòa they are round and domed. Further south they become long again.",
            "Built graves tend to be either egg-shaped (\"goose egg\") or rectangular brick. Buddhists sometimes shape the egg into a turtle shell or a lotus leaf. Grander forms include house-shaped tombs, palanquin-shaped tombs once reserved for nobility, the lăng of emperors and great men, and the stupas (tháp) where Buddhist monks are laid to rest. Catholic graves carry a cross."
          ],
          "gallery": [
            {
              "key": "r-mo-round",
              "cap": "A round, domed tomb, the classic shape of central Vietnam."
            },
            {
              "key": "r-mo-stele",
              "cap": "A southern grave with its stele and ornate frame."
            }
          ]
        },
        {
          "h": "First grave, second grave",
          "p": [
            "Many graves are not a final resting place. Vietnamese law distinguishes a first burial (hung táng) from a second one (cát táng): in the north especially, families traditionally open the grave after about three years, wash the bones and move them into a small ceramic box (tiểu sành), which is reburied for good. That's why some graves are surprisingly small: the law allows up to 5 m² for a first or permanent grave but only 3 m² for a reburial grave."
          ],
          "img": {
            "key": "r-mo-reburial",
            "cap": "Rows of domed reburial graves in Châu Đốc, where the remains of workers who died digging the Vĩnh Tế canal were reburied."
          }
        },
        {
          "h": "Reading the decorations",
          "p": [
            "Most decoration carries a wish. The dragon and phoenix stand for power, nobility and sacredness, and for the family's protection and prosperity. Together with the unicorn (lân) and the tortoise they form the tứ linh, the four sacred creatures of good fortune. The lotus is the Buddhist flower of purity and rebirth, rising clean from muddy water. Clouds and waves give rhythm to the surfaces and tie the grave to nature.",
            "You'll often see the four noble plants of the seasons too, the tứ quý: apricot blossom (mai) for purity, bamboo (trúc) for uprightness, chrysanthemum (cúc) for faithfulness and pine (tùng) for courage in hard times.",
            "In front of the grave stands the stele (bia mộ) with the person's name and dates, and sometimes a portrait. Before it is an incense table (hương án) where the family lights incense and lays offerings."
          ],
          "img": {
            "key": "r-mo-huongan",
            "cap": "The incense table at a northern clan tomb (Lăng họ Ngọ, Bắc Giang)."
          }
        },
        {
          "h": "Feng shui for the dead",
          "p": [
            "Where and how a grave sits matters, because a well-placed grave is believed to protect the descendants. The classic rule is a hill or wall behind, like a screen (bình phong), and water gathering in front. The head rests on higher ground looking down toward low ground and water. On grand old tombs, the side walls end in a green dragon on the left and a white tiger on the right, the protective guardians of feng shui.",
            "Builders often use the Lỗ Ban ruler, a special folk measuring tape whose sections are marked lucky and unlucky, so that a grave's measurements land on lucky numbers. It is folk belief rather than law, but it is very widely followed."
          ]
        },
        {
          "h": "An Bằng, the \"city of ghosts\"",
          "p": [
            "About 20 km east of Huế, in Vinh An commune on the way to the coast, lies one of the most extraordinary sights in Vietnam: a village cemetery of thousands of tombs that look like temples, palaces and miniature citadels.",
            "Until around 1979 the graves here were simple. Then many villagers emigrated, mostly to the US, Canada and Australia. Today around 90% of villagers have relatives abroad, and those relatives send money home to honour their ancestors. Families began competing to build ever grander tombs, often copying the Nguyễn royal tombs and the Huế Citadel itself, in Buddhist, Taoist, Catholic, Chinese and Western styles. Some stand 10 metres tall; one villager explained that \"a taller tomb gives the ancestors a better view.\"",
            "Many cost from several hundred million to a billion đồng, and the grandest two or three billion. Some tombs are even built for people still alive, with the birth year carved and the death year left blank. The cemetery now holds more than 5,000 tombs, and the commune has started promoting cremation and a new public cemetery."
          ],
          "gallery": [
            {
              "key": "r-mo-ab1",
              "cap": "Family tombs crowd the sandy ground at An Bằng."
            },
            {
              "key": "r-mo-ab2",
              "cap": "Spires, roofs and gates rise above the cemetery."
            },
            {
              "key": "r-mo-ab3",
              "cap": "A stele framed by mosaic dragon pillars."
            },
            {
              "key": "r-mo-ab4",
              "cap": "Tombs styled like miniature palaces."
            },
            {
              "key": "r-mo-ab5",
              "cap": "An ornate gateway into a family tomb."
            },
            {
              "key": "r-mo-ab6",
              "cap": "Tomb after tomb, each grander than the last."
            },
            {
              "key": "r-mo-ab7",
              "cap": "A golden gate glittering with mosaic."
            },
            {
              "key": "r-mo-ab8",
              "cap": "Towers inspired by the royal tombs of Huế."
            }
          ]
        },
        {
          "h": "Mosaics made of broken porcelain",
          "p": [
            "Look closely at An Bằng and you'll see that much of the colour isn't paint at all. It's khảm sành sứ: mosaic made from shards of coloured pottery, porcelain and glass, pressed into cement to form dragons, phoenixes, landscapes and flowers. It continues the decoration of Huế's palaces, pagodas and royal tombs, the same art that covers the walls of Khải Định's tomb.",
            "The craft, part of Huế's traditional decorative trade called nghề kép, has been revived by the tomb boom. One craftsman alone has worked on nearly 300 tombs and clan halls. Some families buy brand-new porcelain just to smash it for the mosaics; one tomb used more than 19 tonnes of ceramics. The main colours each carry a meaning: red for luck and vitality, yellow for nobility and solemnity, blue for peace and permanence."
          ],
          "gallery": [
            {
              "key": "r-mo-mos1",
              "cap": "A mosaic river landscape, pieced together from broken porcelain."
            },
            {
              "key": "r-mo-mos2",
              "cap": "Dragons and clouds in shards of coloured china."
            },
            {
              "key": "r-mo-mos3",
              "cap": "A mosaic panel of boats and waves."
            },
            {
              "key": "r-mo-mos4",
              "cap": "Detail: every colour is a fragment of a plate, bowl or bottle."
            }
          ],
          "tip": "For an art lover: An Bằng is the best place in Vietnam to see broken-porcelain mosaic up close, and it's free. Go in the morning light, and look for panels where you can still spot the pattern of the original plate."
        },
        {
          "h": "Stupas for monks",
          "p": [
            "Buddhist monks are not buried in ordinary graves but in stupas (tháp), small towers built in the grounds of their pagoda, often in a quiet garden of them. In Saigon you can see a beautiful garden of stupas at Giác Lâm Pagoda, one of the city's oldest pagodas, a short ride from the centre."
          ],
          "gallery": [
            {
              "key": "r-mo-stupa1",
              "cap": "Stupas in the grounds of Giác Lâm Pagoda, Saigon."
            },
            {
              "key": "r-mo-stupa2",
              "cap": "A stupa decorated in gold at Giác Lâm Pagoda."
            },
            {
              "key": "r-mo-stupa3",
              "cap": "A monk's stupa at Bửu Thắng Pagoda, Saigon."
            }
          ],
          "maps": [
            {
              "key": "giac-lam",
              "label": "Giác Lâm Pagoda"
            }
          ]
        },
        {
          "h": "A love story in Sa Đéc",
          "p": [
            "In the Mekong delta town of Sa Đéc stands the ornate tomb of Huỳnh Thủy Lê, the wealthy Chinese-Vietnamese man widely identified as the real-life lover in Marguerite Duras's novel The Lover. His family's old house in the town is open to visitors, a romantic detour for anyone exploring the delta."
          ],
          "img": {
            "key": "r-mo-sadec",
            "cap": "The tomb of Huỳnh Thủy Lê in Sa Đéc."
          }
        },
        {
          "h": "Cemeteries are changing",
          "p": [
            "Land is precious in the big cities, and burial customs are shifting. In Saigon, Bình Hưng Hòa, a 53-hectare cemetery with more than 70,000 graves, has been gradually cleared since 2016 to make way for schools and parks. Hanoi now aims for 100% cremation and plans to turn city cemeteries into memorial parks. Even An Bằng now encourages cremation."
          ]
        },
        {
          "h": "Visiting a cemetery",
          "p": [
            "An Bằng has no entrance fee. It is easy to combine with Huế's royal tombs or a trip to the coast."
          ],
          "maps": [
            {
              "key": "hue-anbang",
              "label": "An Bằng cemetery"
            }
          ],
          "tip": "Treat cemeteries as places of remembrance, not photo sets. Don't step or climb on graves or touch offerings, keep your voice down, don't fly drones, dress modestly, and ask before photographing anyone who is praying."
        }
      ],
      "sources": [
        {
          "title": "VnExpress: Những ngôi mộ đẹp ở TP HCM (grave shapes by region)",
          "url": "https://vnexpress.net/nhung-ngoi-mo-dep-o-tp-hcm-2039870.html"
        },
        {
          "title": "VnExpress: Nhà mồ bạc tỷ ở miền Tây",
          "url": "https://vnexpress.net/nha-mo-bac-ty-o-mien-tay-2740970.html"
        },
        {
          "title": "Sài Gòn Giải Phóng: graves on family land",
          "url": "https://www.sggp.org.vn/nghia-trang-tu-phat-tran-lan-87208.html"
        },
        {
          "title": "Pew Research: Ancestor veneration and funerals (2024)",
          "url": "https://www.pewresearch.org/religion/2024/06/17/ancestor-veneration-funerals-and-afterlife-beliefs/"
        },
        {
          "title": "Đỗ Hữu Tú: decoration of tombs at An Bằng (HPU2 journal, 2026)",
          "url": "https://sjsh.hpu2.edu.vn/index.php/journal/article/download/724/333/2477"
        },
        {
          "title": "Phạm Đức Mạnh: Mạc family tombs, Hà Tiên (feng shui layout)",
          "url": "https://hcmussh.edu.vn/static/document/12920.pdf"
        },
        {
          "title": "Decree 23/2016/NĐ-CP on cemeteries (grave sizes)",
          "url": "https://caselaw.vn/van-ban-phap-luat/116642-nghi-dinh-23-2016-nd-cp-ve-xay-dung-quan-ly-su-dung-nghia-trang-va-co-so-hoa-tang"
        },
        {
          "title": "Wikipedia (vi): Cải táng",
          "url": "https://vi.wikipedia.org/wiki/C%E1%BA%A3i_t%C3%A1ng"
        },
        {
          "title": "Wikipedia (vi): Tứ linh",
          "url": "https://vi.wikipedia.org/wiki/T%E1%BB%A9_linh"
        },
        {
          "title": "Znews: Tứ quý symbolism",
          "url": "https://znews.vn/vi-sao-ai-cung-mong-co-tu-quy-post1677711.html"
        },
        {
          "title": "Tuổi Trẻ / AFP: Vietnam's city of ghosts",
          "url": "https://news.tuoitre.vn/news/features/20160223/vietnams-city-of-ghosts-where-the-dead-live-in-style/27840.html"
        },
        {
          "title": "VietNamNet: Where tombs are built for the dead and the living",
          "url": "https://vietnamnet.vn/en/visit-the-village-where-tombs-are-built-for-the-dead-and-the-living-E132647.html"
        },
        {
          "title": "Dân Trí / DTiNews: An Bằng cemetery (2026)",
          "url": "https://dtinews.dantri.com.vn/print/20260727100941433.htm"
        },
        {
          "title": "VnExpress International: HCMC's biggest graveyard to become schools and parks",
          "url": "https://e.vnexpress.net/news/news/schools-and-parks-proposed-to-replace-hcmc-s-biggest-graveyard-4559654.html"
        },
        {
          "title": "Tuổi Trẻ: Hanoi to phase out inner-city burials (2026)",
          "url": "https://news.tuoitre.vn/hanoi-plans-to-phase-out-inner-city-burials-at-cemeteries-103260515135811062.htm"
        },
        {
          "title": "Local Vietnam: An Bằng cemetery visitor tips",
          "url": "https://localvietnam.com/hue/an-bang-cemetery/"
        }
      ]
    },
    {
      "id": "cu-chi-tunnels",
      "title": "The Củ Chi tunnels",
      "vi": "Địa đạo Củ Chi",
      "img": {
        "key": "r-cc-23",
        "cap": "A visitor lifts the lid of a hidden tunnel entrance, invisible under the leaf litter until it opens."
      },
      "teaser": "A hand-dug underground world beneath the farmland north-west of Saigon, and what it was like on both sides of it.",
      "minutes": 15,
      "lead": "About 70 km north-west of Saigon, under quiet rubber plantations and forest, lies a maze of hand-dug tunnels that became one of the most famous places of the Vietnam War. People lived, worked, fought and died down here, and soldiers from the US and Australia went down after them. Today it's one of the most visited sites near the city.",
      "sections": [
        {
          "h": "A network under the farmland",
          "p": [
            "The first tunnels were dug in the late 1940s, around 1948, by the Việt Minh during the war against the French, as small hiding places for documents and weapons. From the early 1960s the National Liberation Front, often called the Viet Cong, expanded them enormously. Vietnamese sources say the network reached about 250 km by 1968, running from the edge of Saigon toward the Cambodian border. Western estimates are lower, around 120 to 200 km.",
            "The tunnels sat in Củ Chi district, next to the area US commanders called the Iron Triangle. Underground there were living quarters, kitchens, weapons workshops, field hospitals, meeting rooms, classrooms and even a small theatre. Babies were born down here. Bến Đình was the base of the local Party committee, and Bến Dược held the regional military command. Planning for parts of the 1968 Tết Offensive is said to have taken place in underground meeting rooms."
          ],
          "gallery": [
            {
              "key": "r-cc-3",
              "cap": "The entrance to one of the tunnels."
            },
            {
              "key": "r-cc-30",
              "cap": "A vertical shaft dropping down to a tunnel."
            }
          ]
        },
        {
          "h": "How they were built",
          "p": [
            "Everything was dug by hand, with hoes and bamboo baskets. The tens of thousands of cubic metres of earth that came out were hidden in bomb craters and ponds or spread thinly over the fields so the digging wouldn't be spotted from the air.",
            "The local soil made it possible: an iron-rich clay that is soft enough to dig in the wet season but dries almost as hard as concrete, so most tunnels needed no lining. The network ran on several levels, roughly 3 m, 5–6 m and 8–10 m down, with the deepest out of reach of most bombs. Passages could be as small as about 80 cm across, so you crawled, bent double, in near darkness.",
            "Air came in through tiny vents disguised as termite mounds. Entrances were small trapdoors hidden under leaves. Wells were dug underground so the water couldn't be poisoned. Cooking was the giveaway risk, so kitchens used the Hoàng Cầm stove, invented by an army cook of that name in 1952: smoke was led through long channels covered with earth and branches until it seeped out far away, thin and pale like morning mist."
          ],
          "gallery": [
            {
              "key": "r-cc-60",
              "cap": "A model of a tunnel cross-section in the on-site exhibition."
            },
            {
              "key": "r-cc-11",
              "cap": "A hidden air vent."
            },
            {
              "key": "r-cc-39",
              "cap": "A camouflaged entrance in the forest floor."
            },
            {
              "key": "r-cc-42",
              "cap": "Another entrance, almost invisible among the leaves."
            },
            {
              "key": "r-cc-46",
              "cap": "A cart once used to carry away the dug earth."
            },
            {
              "key": "r-cc-25",
              "cap": "Inside a tunnel."
            }
          ]
        },
        {
          "h": "Life underground",
          "p": [
            "Daily life was brutally hard. The air was thin and people fainted; light came from candles or torches. It was hot, damp and crowded, with insects, scorpions and snakes, and some people stayed below for months at a time. Disease was as dangerous as fighting: malaria was the second-biggest cause of death after wounds, and a captured report noted that half of one unit had malaria at any one time and every member had intestinal parasites.",
            "Food was simple, and cassava (tapioca root) became the symbol of the time. Visitors are still served boiled cassava dipped in sesame salt at the end of a tour."
          ],
          "gallery": [
            {
              "key": "r-cc-14",
              "cap": "A mannequin of a guerrilla resting in a hammock."
            },
            {
              "key": "r-cc-61",
              "cap": "A mannequin writing in a notebook, part of the on-site displays."
            },
            {
              "key": "r-cc-62",
              "cap": "Mannequins showing how fighters dressed."
            },
            {
              "key": "r-cc-69",
              "cap": "A demonstration of how sandals were made at the site."
            }
          ]
        },
        {
          "h": "Traps and counter-tactics",
          "p": [
            "Around the tunnels were booby traps: concealed pits lined with sharpened bamboo spikes, mines near entrances, even snakes and scorpions. Unexploded US bombs and shells were collected and the explosives reused to make mines.",
            "The US Army used around 3,000 dogs to sniff out entrances. One former tunnel commander, Colonel Châu Lâm, later recalled that fighters left chilli and garlic near the vents to put the dogs off, along with scraps of captured uniform, soap or aftershave so the area smelled familiar to them. That's one veteran's account, but it shows the cat-and-mouse game going on above and below ground."
          ],
          "gallery": [
            {
              "key": "r-cc-10",
              "cap": "Spike traps on display at the site."
            },
            {
              "key": "r-cc-8",
              "cap": "A trap mechanism on display."
            },
            {
              "key": "r-cc-48",
              "cap": "Bombs and shells fired at the area, now on display."
            },
            {
              "key": "r-cc-29",
              "cap": "Visitors at a diorama showing how unexploded bombs were reused."
            }
          ]
        },
        {
          "h": "The other side: Crimp, Cedar Falls and the tunnel rats",
          "p": [
            "In January 1966, Operation Crimp sent about 8,000 troops (the US 1st Infantry Division, the 173rd Airborne Brigade and Australia's 1st Battalion, Royal Australian Regiment) into the area after B-52 bombing. They found far more than expected, including around 1.5 million pages of documents from a regional headquarters. Vietnamese accounts of the same operation give very different figures for troops and losses, a reminder that each side counted differently.",
            "The US 25th Infantry Division then built its base at Củ Chi, close to and in places above the tunnels, and kept it from 1966 to 1970. In January 1967 Operation Cedar Falls sent about 30,000 US and South Vietnamese troops into the wider area. Villages were razed and about 6,000 residents relocated, the land was cleared with heavy Rome ploughs and defoliants, and tunnels were blasted. Within days, fighters had returned. From 1969, B-52s carpet-bombed the district. The authors of a well-known 1986 history, The Tunnels of Cu Chi, called it the most bombed, shelled, gassed, defoliated and generally devastated area in the history of warfare.",
            "Clearing the tunnels themselves fell to volunteers who became known as tunnel rats: usually small men, often under 165 cm, who crawled in with just a torch, a pistol and a knife. Their unofficial motto was mock Latin, Non Gratum Anus Rodentum (\"not worth a rat's arse\"). Other methods included pumping in gas, water or smoke, and sealing entrances with explosives."
          ],
          "imgs": [
            {
              "key": "r-cc-99",
              "cap": "An American tunnel rat about to enter a tunnel."
            }
          ],
          "gallery": [
            {
              "key": "r-cc-101",
              "cap": "US Sergeant Ronald H. Payne, a tunnel rat, in 1967."
            },
            {
              "key": "r-cc-103",
              "cap": "US paratroopers heading into the Iron Triangle during Operation Cedar Falls, 1967."
            },
            {
              "key": "r-cc-96",
              "cap": "A soldier of the US 1st Infantry Division beside a burning camp during Operation Crimp, 1966."
            },
            {
              "key": "r-cc-0",
              "cap": "A wrecked US M41 tank, now kept at the site."
            }
          ]
        },
        {
          "h": "The Australian story",
          "p": [
            "Australians were part of this from the start. During Operation Crimp, the Royal Australian Engineers' 3 Field Troop, the first RAE unit in Vietnam, did something unusual: instead of quickly blowing up the tunnels they found, as was common practice, they went down and explored them, mapping the passages over about four days using telephone wire and compasses. They recovered weapons, tens of thousands of rounds of ammunition, medical supplies and a huge amount of paperwork. Their approach influenced how allied units dealt with tunnels afterwards. Veterans still debate exactly who went in first, so \"among the first\" is fair.",
            "The troop's commander, Captain Alexander \"Sandy\" MacGregor, received the Military Cross. He called his men \"tunnel ferrets\"; an American journalist turned that into \"tunnel rats\", and the name stuck. In 1998 he went back to Củ Chi and met men who had fought on the other side. He wrote about it in No Need for Heroes and, with Jimmy Thomson, Tunnel Rats.",
            "The operation also cost Australian lives. Eight Australians were killed during Crimp. On 11 January 1966, Corporal Bob Bowtell of Katoomba, NSW, aged 33, was searching a tunnel filled with smoke and gas when he became wedged in a narrow trapdoor and died of asphyxiation; a mate, Private Jim Daly, tried to reach him and was ordered out. Bowtell is buried at Terendak in Malaysia, remembered at the Lawson war memorial in the Blue Mountains, and listed on the Roll of Honour at the Australian War Memorial. Former members of 3 Field Troop formed the Vietnam Tunnel Rats Association."
          ],
          "imgs": [
            {
              "key": "r-cc-95",
              "cap": "An Australian soldier looks into a tunnel discovered during Operation Crimp, January 1966."
            },
            {
              "key": "r-cc-98",
              "cap": "An Australian soldier inside a tunnel uncovered during Operation Crimp, 1966."
            }
          ]
        },
        {
          "h": "The human cost",
          "p": [
            "The numbers are painful and disputed. Vietnamese official figures for Củ Chi over 21 years of war count more than 10,000 fighters and 10,101 civilians killed, with some 28,000 homes burned and huge areas of farmland and forest destroyed. Western books give totals from about 12,000 up to the often-repeated 45,000, though that higher figure may come from the names at the regional memorial temple, which covers a much wider area. US, Australian and South Vietnamese troops also lost their lives here.",
            "At Bến Dược, a memorial temple opened in 1995 lists more than 44,000 names of people from the Saigon–Gia Định region who died in the wars against France and the US, under a nine-storey tower."
          ],
          "gallery": [
            {
              "key": "r-cc-72",
              "cap": "The Bến Dược memorial temple."
            },
            {
              "key": "r-cc-75",
              "cap": "The temple grounds at Bến Dược."
            },
            {
              "key": "r-cc-79",
              "cap": "Inside the memorial temple."
            },
            {
              "key": "r-cc-81",
              "cap": "A porcelain painting in the temple."
            }
          ]
        },
        {
          "h": "Remembering today",
          "p": [
            "Bến Dược was declared a national historical relic in 1979 and Bến Đình in 2004, and in 2015 the tunnels became a Special National Relic. In July 2026 Vietnam added them to its tentative list for UNESCO World Heritage. A big Vietnamese feature film set in the tunnels, Địa đạo: Mặt trời trong bóng tối (Tunnels: Sun in the Dark), broke box-office records in 2025.",
            "Be prepared for how the story is told on site. The introductory film shown to visitors is an old wartime-style production with strongly one-sided language, and the displays celebrate the guerrillas' ingenuity. It's worth seeing as a window into how the war is remembered in Vietnam, alongside how it's remembered in Australia."
          ]
        },
        {
          "h": "Visiting the tunnels",
          "p": [
            "There are two sites. Bến Đình, closer to the city, is the most visited and has been renovated, with tunnels enlarged for tourists. Bến Dược, about 13–15 km further on, is quieter and has the memorial temple and a reconstructed base area. Both have widened tunnel sections.",
            "It's about 70 km from the city: around 1.5–2 hours by car (a Grab or taxi is roughly 400,000–600,000 ₫ each way), or about an hour each way by speedboat on the Saigon River with a tour. Sites open about 7am to 5pm. In 2026, foreign visitors pay roughly 100,000–135,000 ₫, cash only; confirm on the day.",
            "The tourist tunnels have lights and reinforced ceilings, and someone up to about 183 cm can get through crouching. At Bến Đình the first stretch has an exit after about 10 m if it gets too much. There's also a shooting range where visitors can fire wartime rifles; it's optional, and you'll hear it across the site."
          ],
          "maps": [
            {
              "key": "cu-chi",
              "label": "Củ Chi tunnels"
            }
          ],
          "gallery": [
            {
              "key": "r-cc-4",
              "cap": "The entrance to a tunnel open to visitors."
            },
            {
              "key": "r-cc-16",
              "cap": "Metal steps down into a visitor tunnel."
            },
            {
              "key": "r-cc-26",
              "cap": "A visitor squeezing into a tunnel."
            },
            {
              "key": "r-cc-28",
              "cap": "Visitors watching the introductory film."
            },
            {
              "key": "r-cc-32",
              "cap": "Boiled cassava, the classic snack at the tunnels."
            },
            {
              "key": "r-cc-34",
              "cap": "Cassava with sesame salt and tea: simple, and vegan."
            }
          ],
          "tip": "Wear clothes you don't mind getting dirty and closed shoes, bring insect repellent and a spare shirt, and leave big bags behind. Go early, before 9am, to beat the heat and the crowds. The cassava snack is plant-based. Treat the memorial temple as a place of mourning, not a photo stop."
        }
      ],
      "sources": [
        {
          "title": "Wikipedia: Củ Chi tunnels",
          "url": "https://en.wikipedia.org/wiki/C%E1%BB%A7_Chi_tunnels"
        },
        {
          "title": "Wikipedia: Operation Crimp",
          "url": "https://en.wikipedia.org/wiki/Operation_Crimp"
        },
        {
          "title": "Wikipedia: Operation Cedar Falls",
          "url": "https://en.wikipedia.org/wiki/Operation_Cedar_Falls"
        },
        {
          "title": "Wikipedia: Tunnel rat",
          "url": "https://en.wikipedia.org/wiki/Tunnel_rat"
        },
        {
          "title": "Wikipedia: Cu Chi Base Camp",
          "url": "https://en.wikipedia.org/wiki/Cu_Chi_Base_Camp"
        },
        {
          "title": "Wikipedia: Sandy MacGregor",
          "url": "https://en.wikipedia.org/wiki/Sandy_MacGregor"
        },
        {
          "title": "AWM Places of Pride: Cpl Robert Bowtell, Lawson",
          "url": "https://placesofpride.awm.gov.au/stories/197211/264428"
        },
        {
          "title": "Vietnam Tunnel Rats Association: Honour roll",
          "url": "https://tunnelrats.com.au/our-honour-roll.php"
        },
        {
          "title": "Anzac Portal: Viet Cong tunnels",
          "url": "https://anzacportal.dva.gov.au/wars-and-missions/vietnam-war-1962-1975/events/combat/vietcong-tunnels"
        },
        {
          "title": "DVIDS (US Army): Operation Crimp nets trove of documents",
          "url": "https://www.dvidshub.net/news/461781/operation-crimp-nets-trove-documents-14-jan-1966"
        },
        {
          "title": "VnExpress: Mạng nhện dưới lòng đất thép Củ Chi",
          "url": "https://vnexpress.net/mang-nhen-duoi-long-dat-thep-cu-chi-2161369.html"
        },
        {
          "title": "VnExpress: 48 giờ ở đất thép Củ Chi (2025)",
          "url": "https://vnexpress.net/48-gio-o-dat-thep-cu-chi-4872613.html"
        },
        {
          "title": "Báo Thế giới & Việt Nam: Về huyền thoại địa đạo Củ Chi (2025)",
          "url": "https://baoquocte.vn/ve-huyen-thoai-dia-dao-cu-chi-310202.html"
        },
        {
          "title": "Việt Nam News: Củ Chi tunnels seek UNESCO recognition",
          "url": "https://vietnamnews.vn/sunday/features/887335/historic-cu-chi-tunnels-site-seeks-unesco-world-heritage-site-recognition.html"
        },
        {
          "title": "Việt Nam News: The Hoàng Cầm stove",
          "url": "https://vietnamnews.vn/sunday/1351508/a-kitchen-god-how-a-stove-helped-save-lives.html"
        },
        {
          "title": "NBC News: The tunnels of Cu Chi (2003)",
          "url": "https://www.nbcnews.com/id/wbna3072170"
        },
        {
          "title": "History.com: Cu Chi tunnels",
          "url": "https://www.history.com/articles/cu-chi-tunnels"
        },
        {
          "title": "Asia Times: US Army veteran studies Vietnam War tunnels (soil)",
          "url": "https://asiatimes.com/2020/01/us-army-veteran-studies-vietnam-war-tunnels/"
        },
        {
          "title": "Wikipedia: Bến Dược Memorial Temple",
          "url": "https://en.wikipedia.org/wiki/B%E1%BA%BFn_D%C6%B0%E1%BB%A3c_Memorial_Temple"
        },
        {
          "title": "UNESCO Tentative List: Củ Chi tunnels (2026)",
          "url": "https://whc.unesco.org/en/tentativelists/7038/"
        },
        {
          "title": "VietnamPlus: The Tunnel sets box-office record",
          "url": "https://en.vietnamplus.vn/vietnamese-war-film-the-tunnel-sets-single-day-box-office-record-post313043.vnp"
        },
        {
          "title": "Jungle Boss: Cu Chi tunnels visitor guide (2026)",
          "url": "https://junglebosstours.com/explorer/tourism-blog/cu-chi-tunnels"
        }
      ]
    },
    {
      "id": "trang-an",
      "title": "Tràng An: rock, river and kings",
      "vi": "Quần thể danh thắng Tràng An",
      "img": {
        "key": "r-ta-6",
        "cap": "Rowing boats glide between limestone towers at Tràng An."
      },
      "teaser": "Limestone towers 5 million years in the making, 30,000 years of people, Vietnam's first imperial capital, and temples hidden in caves.",
      "minutes": 15,
      "lead": "South of Hanoi, in Ninh Bình, steep limestone towers rise straight out of rice fields and rivers, threaded with caves you can row through. Tràng An is a place where geology, prehistory, royal history and religion all sit in the same small valleys, which is why UNESCO made it Vietnam's first site to be recognised for both its nature and its culture.",
      "sections": [
        {
          "h": "A World Heritage first",
          "p": [
            "UNESCO inscribed the Tràng An Landscape Complex in June 2014 as Vietnam's first mixed cultural and natural World Heritage Site, the first in Southeast Asia, and still the region's only one. The protected core covers about 6,226 hectares and brings together four places: the Tràng An scenic area, Tam Cốc–Bích Động, the ancient capital of Hoa Lư and the Hoa Lư primeval forest.",
            "It was recognised for three things at once: its spectacular scenery, its exceptional karst geology, and the long record of how people lived here and adapted as the climate and sea levels changed."
          ]
        },
        {
          "h": "How the towers were made",
          "p": [
            "The rock itself is old: a fairly pure limestone laid down in shallow seas in the Early Triassic, roughly 250 million years ago. The landscape you see is much younger. Over about the last five million years the limestone was lifted up and then dissolved and cut away by rain, rivers and the sea, leaving towers up to about 200 metres high.",
            "Geologists prize Tràng An because it shows the final stages of tower-karst evolution in a humid tropical climate, with every step between fengcong (clusters of cones joined at the base) and fenglin (towers standing alone on flat plains). Its cockpit landscape of enclosed hollows ringed by peaks is considered among the best in the world. There are more than 100 caves, and the water system is fed almost entirely by rain.",
            "The sea has come and gone several times. Along the cliffs, geologists have mapped and dated five former coastlines, marked by notches cut by waves, wave-cut platforms, beach deposits and layers of marine shells. About 8,000 to 4,000 years ago the sea flooded in and turned the area into an archipelago of islands, a little like Hạ Long Bay today. That's why it's often called \"Hạ Long Bay on land\"."
          ],
          "gallery": [
            {
              "key": "r-ta-15",
              "cap": "Karst towers rising straight from the water."
            },
            {
              "key": "r-ta-20",
              "cap": "Towers and still water at Tràng An."
            },
            {
              "key": "r-ta-243",
              "cap": "Peaks in morning mist, seen from Múa mountain."
            },
            {
              "key": "r-ta-246",
              "cap": "A limestone valley with grazing buffalo near Tam Cốc."
            }
          ]
        },
        {
          "h": "30,000 years of people",
          "p": [
            "People have lived among these towers for more than 30,000 years. Archaeologists have found 25 prehistoric sites here and excavated nine, including the caves of Hang Trống, Hang Bói and Hang Mòi. The oldest dated layers go back over 27,000 years.",
            "For most of that time the area was inland forest. Its people hunted buffalo, gaur, deer, monkeys and porcupines, and gathered snails from the hillsides and streams: their discarded shells form layers two to three metres thick. By about 9,000 years ago they were wearing jewellery of perforated shells.",
            "Then the sea rose. Instead of leaving, people adapted: from about 7,000 years ago they lived on oysters, cockles and sea fish, made knives and scrapers from large shells, and made some of the region's earliest pottery, around 9,000 years ago. When the sea fell back after about 5,000 years ago, they moved out of the caves to farm the plains. Researchers from Vietnam, Cambridge and Queen's University Belfast study the area to understand how early people coped with rising seas, a very modern question. They have even reconstructed the face of a person who lived here about 12,000 years ago."
          ]
        },
        {
          "h": "Hoa Lư, the first imperial capital",
          "p": [
            "In the 10th century, after the collapse of Chinese rule, Vietnam fell apart into the territories of twelve rival warlords. A local leader from Hoa Lư, Đinh Bộ Lĩnh, defeated them one by one, and in 968 he declared himself emperor of a united kingdom he called Đại Cồ Việt. He chose Hoa Lư as his capital because the limestone towers made natural walls; his builders only had to fill the gaps with earthen ramparts, some about 10 metres high, enclosing a citadel of around 300 hectares.",
            "Hoa Lư stayed the capital for 42 years, under the Đinh and then the Early Lê dynasties. Đinh Bộ Lĩnh was assassinated in 979; his widow, Empress Dương Vân Nga, then married the general who succeeded him, Lê Hoàn. In 1010 the new Lý king, Lý Thái Tổ, issued his Edict on the Transfer of the Capital, complaining that Hoa Lư was too cramped among the mountains, and moved it to the plains at Đại La. Legend says a dragon rose into the sky as he arrived, so he named the new city Thăng Long, \"ascending dragon\": today's Hanoi.",
            "Two 17th-century temples stand on the old palace grounds: the temple of King Đinh Tiên Hoàng and, about 300 metres away, the temple of King Lê Đại Hành, with statues of the king and of Empress Dương Vân Nga. Later, the Trần kings kept a retreat at Vũ Lâm in these mountains during their wars against the Mongols, and it is said that Emperor Trần Nhân Tông became a monk there."
          ],
          "gallery": [
            {
              "key": "r-ta-122",
              "cap": "Hoa Lư, Vietnam's capital more than a thousand years ago."
            },
            {
              "key": "r-ta-108",
              "cap": "The east gate into the Hoa Lư ancient capital site."
            },
            {
              "key": "r-ta-126",
              "cap": "The main gate at Hoa Lư."
            },
            {
              "key": "r-ta-118",
              "cap": "The temple of King Lê Đại Hành."
            },
            {
              "key": "r-ta-120",
              "cap": "A gate at Hoa Lư."
            },
            {
              "key": "r-ta-104",
              "cap": "Temple buildings at the ancient capital."
            },
            {
              "key": "r-ta-8",
              "cap": "Statues in the Tứ Trụ temple honour four great generals of the Đinh dynasty."
            }
          ],
          "tip": "For an art lover: in the King Đinh temple, look for the two dragon platforms, each carved from a single block of stone in the 17th century and named national treasures in 2017. One art researcher noticed that each dragon has three distinctly feminine hands, and reads them as a coded tribute to Empress Dương Vân Nga, who was married to two kings.",
          "maps": [
            {
              "key": "nb-hoalu",
              "label": "Hoa Lư"
            }
          ]
        },
        {
          "h": "A sacred landscape",
          "p": [
            "Almost every cave and hollow here holds a shrine. The boat routes stop at small temples such as Đền Trình, Đền Trần and the Tứ Trụ temple. In Tam Cốc, Bích Động (\"Jade Grotto\") pagoda, founded in 1428, climbs a mountain in three levels and is known as the second most beautiful cave in the south. Thiên Tôn cave at Hoa Lư has dragons carved into the rock.",
            "Local temples also keep Vietnam's origin story alive. The Cao Sơn temple honours one of the 100 children of Lạc Long Quân, the dragon lord, and Âu Cơ, the fairy, from whom the Vietnamese people are said to descend (50 followed their father to the sea, 50 their mother to the mountains). The Tràng An festival, held in spring around the 18th day of the third lunar month, honours a general of the ancient Hùng kings.",
            "Nearby, Bái Đính has two faces. The old pagoda dates back to 1136. Around it, since 2003, a vast new complex has risen, one of the largest Buddhist sites in Vietnam, with a gilded bronze Buddha of about 100 tonnes, a 36-tonne bell, a 13-storey stupa about 100 metres tall, and 500 stone arhat statues along a corridor more than a kilometre long. It hosted the United Nations Day of Vesak in 2014. Pilgrims crowd it from Tết until about the end of the third lunar month."
          ],
          "gallery": [
            {
              "key": "r-ta-192",
              "cap": "Part of the huge Bái Đính pagoda complex."
            },
            {
              "key": "r-ta-201",
              "cap": "The Tam Thế hall at Bái Đính."
            },
            {
              "key": "r-ta-205",
              "cap": "Bái Đính's stupa tower."
            },
            {
              "key": "r-ta-203",
              "cap": "The ceiling on the stupa's top floor."
            },
            {
              "key": "r-ta-210",
              "cap": "The bell tower at Bái Đính."
            },
            {
              "key": "r-ta-213",
              "cap": "The giant bell at Bái Đính, with a person for scale."
            },
            {
              "key": "r-ta-9",
              "cap": "A shrine at the water's edge on the boat route."
            }
          ],
          "tip": "A little honeymoon lore: at the Thủy Đình water pavilion on the Tràng An route, local legend says that a couple who see two mallard ducks kissing will soon be married. You're one step ahead."
        },
        {
          "h": "On the water",
          "p": [
            "The classic way to see Tràng An is in a small rowing boat, three or four people with a local rower, women and men alike. There are three routes. Route 1 loops through nine caves, including the Dark Cave, the Bright Cave and the Wine-Brewing Cave, and stops at three sacred sites. Route 2 passes four caves and the Vũ Lâm area. Route 3, added in 2018, includes Hang Mây, over a kilometre long. Some caves are so low you lie back in the boat as the rock passes centimetres overhead. Since January 2026 a ticket is 300,000 ₫ per person, boat included. Route 3 was suspended in July 2026 after floods filled its caves, so check which routes are running.",
            "Nearby Tam Cốc (\"three caves\") follows a river through rice fields to the caves Hang Cả, Hang Hai and Hang Ba. Watch the rowers: some row with their feet, leaning back and pushing the oars with their soles."
          ],
          "gallery": [
            {
              "key": "r-ta-7",
              "cap": "Boats on the Tràng An river route."
            },
            {
              "key": "r-ta-11",
              "cap": "Passing under a low cave arch."
            },
            {
              "key": "r-ta-13",
              "cap": "Inside a lit cave on the boat route."
            },
            {
              "key": "r-ta-23",
              "cap": "A boat beneath an overhanging cliff."
            },
            {
              "key": "r-ta-12",
              "cap": "Boats and karst peaks."
            },
            {
              "key": "r-ta-70",
              "cap": "A rower at Tam Cốc."
            },
            {
              "key": "r-ta-69",
              "cap": "A boatman at Tam Cốc."
            },
            {
              "key": "r-ta-67",
              "cap": "A fisherwoman at Tam Cốc."
            },
            {
              "key": "r-ta-56",
              "cap": "Water buffalo cooling off at Tam Cốc."
            },
            {
              "key": "r-ta-60",
              "cap": "Houses and banana trees at Tam Cốc."
            }
          ],
          "maps": [
            {
              "key": "nb-trangan",
              "label": "Tràng An boats"
            }
          ]
        },
        {
          "h": "Climbing Múa mountain",
          "p": [
            "For the famous view, climb the roughly 500 stone steps up Ngọa Long (\"Lying Dragon\") mountain at Hang Múa, a path locals nickname the \"miniature Great Wall\". At the top are a stone dragon and a statue of Quan Âm, the goddess of mercy, and below you the whole valley of rivers and towers. Múa means \"dance\": a local legend says a Trần emperor watched his court dancers perform here."
          ],
          "gallery": [
            {
              "key": "r-ta-237",
              "cap": "The view from the top of Múa mountain."
            },
            {
              "key": "r-ta-242",
              "cap": "The stone dragon on top of Múa mountain."
            }
          ],
          "maps": [
            {
              "key": "nb-hangmua",
              "label": "Hang Múa"
            }
          ]
        },
        {
          "h": "Kong was here",
          "p": [
            "Hollywood came too. In February 2016, parts of Kong: Skull Island were filmed at Tràng An, Vân Long and Tam Cốc. The film set, a village of about 40 rattan huts, opened free to visitors in 2017. In 2019 it was taken down and replaced with a reconstructed prehistoric village, designed with advice from the Cambridge and Belfast archaeologists, a neat swap from movie myth to real history."
          ]
        },
        {
          "h": "Crafts of Ninh Bình",
          "p": [
            "Ninh Vân, the province's stone-carving village, has worked stone for around 400 to 500 years; its craftsmen carved Bái Đính's 500 arhats and built the extraordinary Phát Diệm Cathedral (1875–1899), a church of stone and ironwood that looks like a Vietnamese pagoda with Gothic touches. Next to Tam Cốc, Văn Lâm village has embroidered since the Trần dynasty, more than 700 years by local tradition."
          ],
          "tip": "For an art lover: Phát Diệm Cathedral is about an hour from Tràng An and well worth a detour. East meets West in carved stone, like Khải Định's tomb in Huế but two generations earlier."
        },
        {
          "h": "Getting there and when",
          "p": [
            "Tràng An is about 90–100 km south of Hanoi, around two hours by road. From Huế, some north-south Reunification Express trains stop at Ninh Bình (roughly 10–12 hours); otherwise fly to Hanoi and drive. From Saigon, fly to Hanoi first.",
            "Late November to December is cool and fairly dry, but water levels can be high late in the year and occasionally close the lowest caves. February to March is usually best for the boats, and late May to early June turns Tam Cốc's rice fields gold. It's popular, with about 2.8 million visitors in 2024, so start early. Keep an eye on the cliffs too: critically endangered Delacour's langurs have been reintroduced here and are breeding."
          ],
          "gallery": [
            {
              "key": "r-ta-248",
              "cap": "On a boat in Ninh Bình."
            }
          ]
        }
      ],
      "sources": [
        {
          "title": "Wikipedia: Tràng An Scenic Landscape Complex",
          "url": "https://en.wikipedia.org/wiki/Tr%C3%A0ng_An_Scenic_Landscape_Complex"
        },
        {
          "title": "IUCN World Heritage Outlook: Trang An Landscape Complex",
          "url": "https://worldheritageoutlook.iucn.org/node/1181"
        },
        {
          "title": "UNEP-WCMC: Trang An Landscape Complex datasheet",
          "url": "http://world-heritage-datasheets.unep-wcmc.org/datasheet/output/site/trang-an-landscape-complex/"
        },
        {
          "title": "Vietnam National Authority of Tourism: Tràng An heritage",
          "url": "https://vietnamtourism.vn/disan/en/index.php?catid=21"
        },
        {
          "title": "Nguyen Khac Su (2021): Coastal plain exploration in the Post-Hoabinhian period",
          "url": "https://www.vjol.info.vn/index.php/VSS/article/download/74526/63331"
        },
        {
          "title": "Rabett et al. (2017): Tràng An limestone forest through the last glacial",
          "url": "https://researchonline.ljmu.ac.uk/id/eprint/4615/"
        },
        {
          "title": "Kahlert et al. (2021): Mid-Holocene coastline reconstruction, Tràng An",
          "url": "https://pure.qub.ac.uk/en/publications/mid-holocene-coastline-reconstruction-from-geomorphological-sea-l/"
        },
        {
          "title": "Wikipedia: Hoa Lư Ancient Capital",
          "url": "https://en.wikipedia.org/wiki/Hoa_L%C6%B0_Ancient_Capital"
        },
        {
          "title": "Wikipedia: Đinh Bộ Lĩnh",
          "url": "https://en.wikipedia.org/wiki/%C4%90inh_B%E1%BB%99_L%C4%A9nh"
        },
        {
          "title": "Wikipedia: Edict on the Transfer of the Capital",
          "url": "https://en.wikipedia.org/wiki/Edict_on_the_Transfer_of_the_Capital"
        },
        {
          "title": "Wikipedia: Đinh Tiên Hoàng Temple",
          "url": "https://en.wikipedia.org/wiki/%C4%90inh_Ti%C3%AAn_Ho%C3%A0ng_Temple"
        },
        {
          "title": "Tiền Phong: The dragons with women's hands at King Đinh's temple",
          "url": "https://tienphong.vn/van-nghe/157784/Giai-ma-hinh-rong-co-doi-tay-phu-nu-o-den-vua-Dinh.html"
        },
        {
          "title": "Nhân Dân: Hành cung Vũ Lâm",
          "url": "https://nhandan.vn/hanh-cung-vu-lam-khong-gian-van-hoa-lich-su-dac-biet-post861979.html"
        },
        {
          "title": "Wikipedia (vi): Chùa Bái Đính",
          "url": "https://vi.wikipedia.org/wiki/Ch%C3%B9a_B%C3%A1i_%C4%90%C3%ADnh"
        },
        {
          "title": "Thanh Niên: A day at Tràng An (2022)",
          "url": "https://thanhnien.vn/mot-ngay-rong-choi-o-ky-quan-the-gioi-trang-an-1851507610.htm"
        },
        {
          "title": "Tuổi Trẻ: A two-hour boat ride through Tràng An",
          "url": "https://news.tuoitre.vn/a-two-hour-boat-ride-through-trang-an-landscape-complex-in-northern-vietnam-10369618.htm"
        },
        {
          "title": "VnExpress International: Limestone-rich Tràng An",
          "url": "https://e.vnexpress.net/photo/places/limestone-rich-trang-an-draws-tourists-with-ancient-allure-4207870.html"
        },
        {
          "title": "VnExpress International: Ancient village to replace Kong set",
          "url": "https://e.vnexpress.net/news/life/arts/ancient-village-to-replace-kong-skull-island-film-set-3987970.html"
        },
        {
          "title": "VietNamNet: Kong set removed from Tràng An",
          "url": "https://vietnamnet.vn/en/kong-skull-island-film-set-to-be-removed-out-of-trang-an-tourism-complex-569565.html"
        },
        {
          "title": "Ninh Bình tourism: Hang Múa",
          "url": "https://dulichninhbinh.com.vn/en/item/1781"
        },
        {
          "title": "VTC News: The meaning of the name Hang Múa",
          "url": "https://vtcnews.vn/ten-goi-hang-mua-co-y-nghia-gi-ar1045197.html"
        },
        {
          "title": "VietnamPlus: Ninh Vân stone carving village",
          "url": "https://en.vietnamplus.vn/ninh-van-where-stone-sculptures-become-soulful/239461.vnp"
        },
        {
          "title": "Việt Nam News: Tràng An heritage city vision (2026)",
          "url": "https://vietnamnews.vn/life-style/1784040/trang-an-at-the-heart-of-ninh-binh-s-heritage-city-vision.html"
        }
      ]
    },
    {
      "id": "ho-chi-minh",
      "title": "Hồ Chí Minh: the man and his legacy",
      "vi": "Chủ tịch Hồ Chí Minh",
      "img": {
        "key": "r-hb-01",
        "cap": "Hồ Chí Minh in about 1946."
      },
      "teaser": "Kitchen hand, exile, revolutionary, president, and now a face on every banknote. A balanced look at the most important figure in modern Vietnam.",
      "minutes": 16,
      "lead": "You'll see his face everywhere in Vietnam: on banknotes, in classrooms, on posters, and on altars. To most Vietnamese he is Bác Hồ, 'Uncle Ho', the father of the nation's independence. Historians outside Vietnam see a more complicated figure, and many overseas Vietnamese, including in Australia, see him very differently again. This piece tells his story as it is documented, sets the official account beside outside scholarship, and flags where the facts are disputed. For the mausoleum itself, see the Ba Đình article.",
      "sections": [
        {
          "h": "A scholar's son from Nghệ An",
          "p": [
            "He was born Nguyễn Sinh Cung in Nghệ An province in central Vietnam; the official birth date is 19 May 1890, though records he left behind give several other years between 1886 and 1899. He was born in his mother's village of Hoàng Trù and grew up partly in nearby Kim Liên, where a reconstructed family house is now a much-visited memorial.",
            "His father, Nguyễn Sinh Sắc, was a Confucian scholar who passed the imperial exams and later became a district magistrate before being dismissed. The family lived for years in Huế, where his mother died in 1901, and as a teenager he studied at Huế's élite Quốc Học school from 1908. By then he was called Nguyễn Tất Thành."
          ],
          "gallery": [
            {
              "key": "r-hb-02",
              "cap": "His father, the scholar-official Nguyễn Sinh Sắc."
            },
            {
              "key": "r-hb-03",
              "cap": "The gate of Hoàng Trù, his mother's village."
            },
            {
              "key": "r-hb-04",
              "cap": "The Kim Liên memorial site in Nghệ An."
            },
            {
              "key": "r-hb-05",
              "cap": "A Quốc Học class in Huế, published in 1913."
            },
            {
              "key": "r-hb-06",
              "cap": "Quốc Học school in Huế today."
            }
          ],
          "tip": "In Huế you can see Quốc Học's red buildings from the street (it's still a working school), and the family's rented house at Mai Thúc Loan is a small memorial."
        },
        {
          "h": "Thirty years away",
          "p": [
            "On 5 June 1911 he left Saigon as a kitchen hand on the French steamer Amiral Latouche-Tréville. The wharf he sailed from, the Nhà Rồng ('Dragon House'), is now a museum in his name. For the next 30 years he lived abroad under dozens of names: estimates range from about 50 to over 170.",
            "The early years are hazy. He seems to have spent time in the United States around 1912–13 and in Britain during the First World War. A famous story says he trained as a pastry cook under the chef Escoffier at London's Carlton Hotel; there's a plaque on the site, but historians have found no documents to confirm it.",
            "In Paris he became Nguyễn Ái Quốc, 'Nguyễn the Patriot'. In 1919 a petition under that name asking for rights for the Vietnamese was sent to the leaders at the Versailles peace conference; scholars still debate who actually wrote it. In 1920 he voted at the Congress of Tours to join the Communist International, becoming a founding member of the French Communist Party."
          ],
          "gallery": [
            {
              "key": "r-hb-07",
              "cap": "His Paris identity card as 'Nguyễn Ái Quấc', 1919."
            },
            {
              "key": "r-hb-08",
              "cap": "Nguyễn Ái Quốc in France, about 1920."
            },
            {
              "key": "r-hb-09",
              "cap": "Speaking at the Congress of Tours, December 1920."
            },
            {
              "key": "r-hb-10",
              "cap": "A press photo at the Marseille communist congress, 1921."
            }
          ]
        },
        {
          "h": "Moscow, China and a Hong Kong prison",
          "p": [
            "In 1923 he went to Moscow to work for the Communist International, then to Canton (Guangzhou), where he trained young Vietnamese revolutionaries. In early 1930 he chaired the meeting in Hong Kong that united rival groups into the Indochinese Communist Party.",
            "In June 1931 British police in Hong Kong arrested him. A British lawyer, Frank Loseby, fought his deportation to French territory all the way to the Privy Council in London; accounts differ on whether the case ended in a ruling or a settlement. After about 20 months, ill with tuberculosis, he was smuggled out to China disguised as a scholar."
          ],
          "gallery": [
            {
              "key": "r-hb-11",
              "cap": "In the Soviet Union, 1923."
            },
            {
              "key": "r-hb-12",
              "cap": "Delegates to the Comintern congress in Moscow, 1924."
            },
            {
              "key": "r-hb-13",
              "cap": "The Hong Kong police photo after his arrest as 'Sung Man Cho', 1931."
            },
            {
              "key": "r-hb-14",
              "cap": "A memorial plaque in Moscow recalling his Comintern years."
            }
          ]
        },
        {
          "h": "The cave, the Americans and independence",
          "p": [
            "In January 1941 he crossed back into Vietnam and hid in Cốc Bó cave at Pác Bó, near the Chinese border, naming the stream outside after Lenin. From there he led the Việt Minh, a broad independence front. Jailed again by Chinese Nationalists in 1942–43, he wrote a cycle of classical Chinese poems now known as the Prison Diary; the manuscript is a national treasure. By then he was using the name Hồ Chí Minh.",
            "In 1945 he worked with the Americans. Agents of the US Office of Strategic Services (the 'Deer Team') parachuted in to train Việt Minh fighters against the Japanese, and an American medic treated him when he fell seriously ill.",
            "On 2 September 1945, in Ba Đình Square, he read Vietnam's Declaration of Independence. It begins by quoting the American Declaration: 'All men are created equal.' He wrote to President Truman asking for support; he never received a reply."
          ],
          "gallery": [
            {
              "key": "r-hb-15",
              "cap": "Cốc Bó cave at Pác Bó, his hideout from 1941."
            },
            {
              "key": "r-hb-16",
              "cap": "The 'Lenin Stream' at Pác Bó."
            },
            {
              "key": "r-hb-17",
              "cap": "The handwritten Prison Diary, 1942–43."
            },
            {
              "key": "r-hb-18",
              "cap": "Pages of the Prison Diary on display."
            },
            {
              "key": "r-hb-19",
              "cap": "With Võ Nguyên Giáp and the American OSS team, 1945."
            },
            {
              "key": "r-hb-20",
              "cap": "Members of the OSS Deer Team in Hanoi, September 1945."
            },
            {
              "key": "r-hb-21",
              "cap": "Reading the Declaration of Independence at Ba Đình, 2 September 1945."
            },
            {
              "key": "r-hb-22",
              "cap": "The crowd and rostrum at Ba Đình on Independence Day."
            }
          ]
        },
        {
          "h": "War with France",
          "p": [
            "Independence wasn't accepted by France. In March 1946 Hồ Chí Minh signed an accord making Vietnam a 'free state' within the French Union, then spent months in France negotiating at Fontainebleau without success. War broke out in December 1946.",
            "It lasted eight years and ended at Điện Biên Phủ in May 1954, where General Võ Nguyên Giáp's forces defeated the French garrison. At the Geneva conference that July, Vietnam was divided at the 17th parallel, with the North under Hồ Chí Minh's government. Elections to reunify the country, due in 1956, were never held."
          ],
          "gallery": [
            {
              "key": "r-hb-23",
              "cap": "Signing the March 1946 accord with France."
            },
            {
              "key": "r-hb-24",
              "cap": "With French minister Marius Moutet, September 1946."
            },
            {
              "key": "r-hb-25",
              "cap": "Meeting Vietnamese living in France, 1946."
            },
            {
              "key": "r-hb-26",
              "cap": "Việt Minh soldiers raise their flag at Điện Biên Phủ, May 1954 (possibly re-staged for the camera, as some sources say)."
            },
            {
              "key": "r-hb-27",
              "cap": "French prisoners after Điện Biên Phủ, 1954."
            }
          ]
        },
        {
          "h": "The contested years",
          "p": [
            "Some of the hardest debates about him concern North Vietnam in the 1950s. The land reform of 1953–56 classified villagers as landlords and put many before 'people's tribunals'. How many were executed is disputed: scholarly estimates range from under a thousand to around 15,000 or more. In 1956 Hồ Chí Minh publicly acknowledged 'errors', the party leader Trường Chinh was removed, and thousands of prisoners were released. Historians still argue whether the violence was a deviation or largely planned.",
            "In the same years a group of writers and artists who called for more freedom, the Nhân Văn–Giai Phẩm movement, was suppressed; many were rehabilitated decades later. How much Hồ Chí Minh himself directed these events, and how much real power he held after about 1959, when Lê Duẩn rose to lead the party, is debated. Some historians argue he was increasingly a figurehead during the war against the South and the United States; others say he kept real influence.",
            "Scholars also debate whether he was first a nationalist or a communist. He once wrote that 'at first, patriotism, not yet communism' drew him to Lenin. Official Vietnamese history sees no conflict between the two."
          ]
        },
        {
          "h": "Uncle Ho",
          "p": [
            "The image of 'Uncle Ho' was carefully built, partly by himself: a 1948 admiring biography published under the name Trần Dân Tiên is widely attributed to him. He presented himself as a simple man who loved children, refused to live in the French governor's palace, and lived instead in a small wooden stilt house, wearing sandals cut from old tyres.",
            "Officially, he never married and devoted his life to the nation. Researchers have found evidence that he married a Chinese woman, Tăng Tuyết Minh, in Canton in 1926; Vietnamese officials have dismissed the claim, and the subject remains sensitive."
          ],
          "gallery": [
            {
              "key": "r-hb-28",
              "cap": "With children in the 1950s, the root of the 'Bác Hồ' image."
            },
            {
              "key": "r-hb-29",
              "cap": "Visiting young pioneers near Berlin, 1957."
            },
            {
              "key": "r-hb-30",
              "cap": "With Tito in Belgrade, 1957."
            },
            {
              "key": "r-hb-31",
              "cap": "A portrait from 1967."
            },
            {
              "key": "r-hb-32",
              "cap": "The stilt house where he lived from 1958 to 1969."
            },
            {
              "key": "r-hb-33",
              "cap": "The study inside the stilt house."
            },
            {
              "key": "r-hb-34",
              "cap": "The colonial Presidential Palace he declined to live in."
            },
            {
              "key": "r-hb-35",
              "cap": "His rubber-tyre sandals at the Nhà Rồng museum."
            }
          ]
        },
        {
          "h": "Death, and a will rewritten",
          "p": [
            "Hồ Chí Minh died of heart failure on the morning of 2 September 1969, aged 79. The death was announced as the 3rd so it wouldn't fall on National Day. His handwritten will asked for cremation, with his ashes divided between the North, Centre and South; that request was left out of the version published in 1969. In 1989 the party admitted both changes, saying his body had been preserved 'taking into account the people's sentiments'. The Ba Đình article tells the story of the mausoleum."
          ],
          "gallery": [
            {
              "key": "r-hb-36",
              "cap": "A page of his handwritten will, including the cremation wish."
            }
          ],
          "maps": [
            {
              "key": "hn-mausoleum",
              "label": "Mausoleum"
            }
          ]
        },
        {
          "h": "His place in Vietnam today",
          "p": [
            "In 1976 Saigon was renamed Hồ Chí Minh City; the 50th anniversary was marked in July 2026. His portrait is on every Vietnamese banknote except the 100 đồng note. 'Hồ Chí Minh Thought' has been, with Marxism–Leninism, the Communist Party's official foundation since 1991, and a national campaign urges everyone to 'study and follow his thought, morality and style'. Every child learns 'Uncle Ho's five teachings' at school. His birthday, 19 May, and National Day, 2 September, are big occasions: the 80th anniversary of independence in 2025 drew huge, young crowds to Ba Đình.",
            "For many people he is more than a leader. Altars to Bác Hồ sit in temples and homes, and some folk-religion groups worship him as a deity; a temple in Trà Vinh built to him during the war in 1970 still draws tens of thousands of visitors a year.",
            "In Vietnam, criticising him in public is legally risky: people have been jailed for insulting posts online, which rights groups say chills free speech. Outside Vietnam views are more divided. Many Vietnamese who left after 1975, including much of the community in Australia, see him as the founder of the regime they fled; in 2016 protests led a Brisbane restaurant called 'Uncle Ho' to change its name. Almost 60,000 Australians served in the Vietnam War, and 521 died."
          ],
          "gallery": [
            {
              "key": "r-hb-37",
              "cap": "The 2015 statue in front of Saigon's City Hall."
            },
            {
              "key": "r-hb-38",
              "cap": "Visitors at the Nguyễn Huệ statue."
            },
            {
              "key": "r-hb-39",
              "cap": "Nhà Rồng wharf in Saigon, where he left in 1911, now a museum."
            },
            {
              "key": "r-hb-40",
              "cap": "A poster outside a Hà Nội school."
            },
            {
              "key": "r-hb-41",
              "cap": "Party congress posters featuring him, 2016."
            },
            {
              "key": "r-hb-42",
              "cap": "Long Đức temple to Hồ Chí Minh in Trà Vinh, built in 1970–71."
            },
            {
              "key": "r-hb-43",
              "cap": "An altar to Bác Hồ inside a temple in Saigon."
            },
            {
              "key": "r-hb-44",
              "cap": "A statue of him with children in Hà Giang."
            },
            {
              "key": "r-hb-45",
              "cap": "A statue in Cao Bằng, near Pác Bó."
            },
            {
              "key": "r-hb-46",
              "cap": "Replica 'Hồ Chí Minh sandals' for sale in Hà Nội."
            }
          ]
        },
        {
          "h": "Being a respectful visitor",
          "p": [
            "Treat his statues, portraits and altars the way you'd treat a war memorial or a church: don't climb or sit on them, and skip jokey poses or mock salutes. Photos of statues and buildings from outside are normal; Saigon's statue on Nguyễn Huệ is a popular photo spot. Keep quiet near altars, and ask before taking photos inside temples.",
            "Don't write on or make jokes with banknotes. It's wise not to start political debates; if people raise the subject, listen. Views in Vietnam and among Vietnamese Australians can be very different, and both are deeply felt.",
            "Places linked to him on your trip: in Hà Nội, the mausoleum, the stilt house and the Hồ Chí Minh Museum; in Huế, Quốc Học school and the family's memorial houses on Mai Thúc Loan street and in Dương Nỗ village; in Saigon, the Nhà Rồng museum (check it has reopened after its 2026 renovation) and the statue in front of City Hall."
          ],
          "maps": [
            {
              "key": "hn-mausoleum",
              "label": "Mausoleum, Hà Nội"
            }
          ]
        }
      ],
      "sources": [
        {
          "title": "Wikipedia: Ho Chi Minh",
          "url": "https://en.wikipedia.org/wiki/Ho_Chi_Minh"
        },
        {
          "title": "Thị trường Tài chính Tiền tệ: Nguyễn Ái Quốc's birth years in French archives (2021)",
          "url": "https://thitruongtaichinhtiente.vn/nhung-nam-sinh-cua-nguyen-ai-quoc-trong-ho-so-luu-tru-cua-phap-35665.html"
        },
        {
          "title": "VietNamNet: Relic sites of his childhood in Huế",
          "url": "https://vietnamnet.vn/en/relic-sites-associated-with-uncle-hos-childhood-in-hue-642260.html"
        },
        {
          "title": "Wilson Center: The myth of the 'Wilsonian moment' (Brett Reilly, 2019)",
          "url": "https://wilsoncenter.org/blog-post/the-myth-the-wilsonian-moment"
        },
        {
          "title": "Irish Legal News: Ho Chi Minh v The King (2026)",
          "url": "https://www.irishlegal.com/articles/ronnie-clancy-kc-ho-chi-minh-v-the-king"
        },
        {
          "title": "Wikipedia: Pác Bó",
          "url": "https://en.wikipedia.org/wiki/P%C3%A1c_B%C3%B3"
        },
        {
          "title": "Wikipedia: OSS Deer Team",
          "url": "https://en.wikipedia.org/wiki/OSS_Deer_Team"
        },
        {
          "title": "Fordham Modern History Sourcebook: Declaration of Independence of the DRV (1945)",
          "url": "https://sourcebooks.web.fordham.edu/mod/1945vietnam.asp"
        },
        {
          "title": "Wikipedia: Fontainebleau Conference",
          "url": "https://en.wikipedia.org/wiki/Fontainebleau_Conference"
        },
        {
          "title": "Wikipedia: Battle of Điện Biên Phủ",
          "url": "https://en.wikipedia.org/wiki/Battle_of_Dien_Bien_Phu"
        },
        {
          "title": "Wikipedia: Land reform in North Vietnam",
          "url": "https://en.wikipedia.org/wiki/Land_reform_in_North_Vietnam"
        },
        {
          "title": "Alec Holcombe: Mass Mobilization in the Democratic Republic of Vietnam (2020, open access)",
          "url": "https://manifold.uhpress.hawaii.edu/projects/mass-mobilization-in-the-democratic-republic-of-vietnam-1945-1960"
        },
        {
          "title": "Wikipedia: Nhân Văn–Giai Phẩm affair",
          "url": "https://en.wikipedia.org/wiki/Nh%C3%A2n_V%C4%83n%E2%80%93Giai_Ph%E1%BA%A9m_affair"
        },
        {
          "title": "SHAFR: Ho Chi Minh and the Vietnam War (teaching guide)",
          "url": "http://www.shafr.org/ho-chi-minh-and-vietnam-war"
        },
        {
          "title": "Origins (Ohio State): Review of Brocheux's biography",
          "url": "https://origins.osu.edu/review/ho-chi-minh-biography"
        },
        {
          "title": "Olga Dror: Establishing Hồ Chí Minh's cult (Journal of Asian Studies, 2016)",
          "url": "https://www.cambridge.org/core/journals/journal-of-asian-studies/article/establishing-h-chi-minhs-cult-vietnamese-traditions-and-their-transformations/02FBEC2AD51C5F610AB2872319C7BF9A"
        },
        {
          "title": "Wikipedia: Zeng Xueming (Tăng Tuyết Minh)",
          "url": "https://en.wikipedia.org/wiki/Zeng_Xueming"
        },
        {
          "title": "Vietnam Law Magazine: 45 years of President Hồ Chí Minh's testament",
          "url": "https://vietnamlawmagazine.vn/45-years-of-president-ho-chi-minhs-testament-4550.html"
        },
        {
          "title": "UPI (1989): Vietnam admits cremation request was denied",
          "url": "https://www.upi.com/Archives/1989/08/31/Vietnam-admits-Ho-Chi-Minh-request-for-cremation-denied/1986620539200/"
        },
        {
          "title": "State Bank of Vietnam: Banknotes in circulation",
          "url": "https://sbv.gov.vn/en/money-issuance"
        },
        {
          "title": "Happy Vietnam (VNA): 50 years of the city bearing his name (2026)",
          "url": "https://happyvietnam.vnanet.vn/en/top-leader-attends-ceremony-marking-50-years-of-saigon-gia-dinh-bearing-late-presidents-name/59468.html"
        },
        {
          "title": "UCLA Center for Southeast Asian Studies: Hồ Chí Minh in Vietnamese folk religion",
          "url": "https://www.international.ucla.edu/cisa/article/11811"
        },
        {
          "title": "Nhân Dân: Building and protecting the Long Đức temple during the war",
          "url": "https://nhandan.vn/chuyen-xay-giu-den-tho-bac-ho-trong-khang-chien-post713212.html"
        },
        {
          "title": "Việt Nam News: 80 years of independence parade (2025)",
          "url": "https://vietnamnews.vn/politics-laws/1724422/viet-nam-marks-80-years-of-independence-with-rousing-ceremony-military-parade.html"
        },
        {
          "title": "ISEAS: Online nationalism in Vietnam (2024)",
          "url": "https://www.iseas.edu.sg/articles-commentaries/iseas-perspective/2024-103-understanding-the-rise-and-rise-of-online-nationalism-in-vietnam-by-dien-nguyen-an-luong-and-nguyen-khac-giang/"
        },
        {
          "title": "Human Rights Watch: Vietnam case (2026)",
          "url": "https://www.hrw.org/news/2026/07/29/vietnam-quash-conviction-of-social-media-commentator"
        },
        {
          "title": "SBS: Vietnamese Australians remember the fall of Saigon",
          "url": "https://www.sbs.com.au/language/vietnamese/en/article/wounds-still-healing-vietnamese-australians-gather-to-remember-the-fall-of-saigon/66ftrl3lb"
        },
        {
          "title": "Australian War Memorial: Vietnam War 1962–75",
          "url": "https://www.awm.gov.au/articles/event/vietnam"
        },
        {
          "title": "Việt Nam News: Nhà Rồng museum closes for renovation (2026)",
          "url": "https://vietnamnews.vn/life-style/1781061/ho-chi-minh-museum-at-nha-rong-wharf-temporarily-closes-for-renovation-set-to-reopen-by-national-day.html"
        }
      ]
    },
    {
      "id": "hcm-mausoleum",
      "title": "Ba Đình: the Hồ Chí Minh Mausoleum",
      "vi": "Lăng Chủ tịch Hồ Chí Minh",
      "img": {
        "key": "r-hcm-01",
        "cap": "The Hồ Chí Minh Mausoleum on Ba Đình Square."
      },
      "teaser": "Why a leader who asked to be cremated lies in state, how the granite tomb was built, and what to expect in the silent queue.",
      "minutes": 12,
      "lead": "On a vast lawn in western Hanoi stands a grey granite block where Hồ Chí Minh lies in a glass case, guarded day and night. For Vietnamese visitors it's a pilgrimage; for foreigners it's one of the most unusual experiences in the country, and a window onto how modern Vietnam tells its own story. This piece sticks to what's well documented and points out where accounts differ.",
      "sections": [
        {
          "h": "The man known as Uncle Ho",
          "p": [
            "Hồ Chí Minh was born Nguyễn Sinh Cung on 19 May 1890 in Kim Liên, in Nghệ An province (he gave other birth years at times, but 1890 is the accepted one). He spent some 30 years abroad, in France, the Soviet Union, China and elsewhere, under many names, before returning to lead the Việt Minh independence movement.",
            "On 2 September 1945 he read Vietnam's declaration of independence from a temporary wooden platform on this very square. He led North Vietnam until his death on 2 September 1969, aged 79. At the time, the death was announced as 3 September so it wouldn't fall on National Day; the government corrected the date in 1989.",
            "In Vietnam he is revered as Bác Hồ, Uncle Ho, and his image is everywhere. Historians outside the country still debate how to weigh his nationalism against his communism, and parts of his record, such as the land reform of the 1950s, remain contested. Inside the mausoleum, though, there is only one story told, and visitors are expected to be respectful."
          ]
        },
        {
          "h": "A wish that wasn't followed",
          "p": [
            "In his will, Hồ Chí Minh asked to be cremated, with his ashes divided between the north, centre and south of the country. The Politburo decided instead to preserve his body, so that people from across Vietnam, especially the then-divided South, and visitors from abroad could pay their respects.",
            "Soviet specialists from the institute that cared for Lenin's body, led by Professor Yuri Lopukhin, were invited to Hanoi just before he died, and the embalming was done at Military Hospital 108. During the war, the body was hidden at a secret site in the hills at Đá Chông, about 60 km west of Hanoi, while the mausoleum was planned. Between 1969 and 2014, 82 Soviet and later Russian experts helped care for it.",
            "You may hear that the body is flown to Russia every year for upkeep. We couldn't find a reliable source for that; what is documented is that the mausoleum closes for about two months most years for maintenance. In 2026 that closure ran from 4 September to 2 November."
          ]
        },
        {
          "h": "Building the mausoleum",
          "p": [
            "Construction began on 2 September 1973, during the war, and the mausoleum was inaugurated on 29 August 1975. The design, by Soviet architect Garol Isakovich, draws on Lenin's tomb in Moscow but adds Vietnamese touches, such as the sloping, roof-like top. It is 21.6 metres high and 41.2 metres wide, built in three tiers of grey granite, and was engineered to withstand bombs and earthquakes.",
            "Materials came from all over the country and beyond: stone and timber from different regions, 20,000 pieces of granite and marble from the Soviet Union, and sand and pebbles carried from as far as Hòa Bình. Across the front is the inscription 'Chủ tịch Hồ-Chí-Minh' (President Hồ Chí Minh). Inside, in gold, is his best-known line, 'Không có gì quý hơn độc lập, tự do': nothing is more precious than independence and freedom.",
            "The gardens are part of the symbolism. More than 250 plant species were brought from every region, and 79 cycads were planted, one for each year of his life."
          ],
          "maps": [
            {
              "key": "hn-mausoleum",
              "label": "Mausoleum"
            }
          ],
          "gallery": [
            {
              "key": "r-hcm-02",
              "cap": "The mausoleum from across Ba Đình Square."
            },
            {
              "key": "r-hcm-03",
              "cap": "The granite façade and its inscription."
            },
            {
              "key": "r-hcm-04",
              "cap": "The three tiers of grey granite."
            },
            {
              "key": "r-hcm-05",
              "cap": "Gardeners tending the grounds."
            }
          ]
        },
        {
          "h": "Ba Đình Square",
          "p": [
            "The square, about 320 by 100 metres, is the country's main ceremonial space. In French times this was the Puginier garden; it was renamed after the Ba Đình uprising of 1886–87. The lawn is divided into 210 grass squares, and military parades pass along the road in front of the mausoleum.",
            "Honour guards in white stand at the entrance and are changed every hour. Each morning the flag is raised at 6:30am from November to March (6am in summer), and it's lowered at 9pm every evening, a short, quiet ceremony that's free to watch."
          ],
          "gallery": [
            {
              "key": "r-hcm-06",
              "cap": "Honour guards at the entrance."
            },
            {
              "key": "r-hcm-07",
              "cap": "The guard at the main door."
            },
            {
              "key": "r-hcm-08",
              "cap": "The flagpole on Ba Đình Square."
            },
            {
              "key": "r-hcm-09",
              "cap": "A panorama of the square and its grass squares."
            }
          ],
          "tip": "If you'd rather not join the morning queue, the 9pm flag-lowering is a calm way to see the square and the guards together."
        },
        {
          "h": "Visiting: what to expect",
          "p": [
            "Entry is free, with no tickets: you simply queue. From November to March it's open about 8 to 11am (Saturdays possibly to 11:30), and it's closed every Monday and Friday. It also closes for a couple of months most years for maintenance, so check before you go. Individual visitors gather near 17 Ngọc Hà street, go through a security check, and leave large bags and big cameras at the storage counter.",
            "Dress modestly: shoulders and knees covered, nothing see-through. Inside, you walk slowly in single file past the glass case, with hats and sunglasses off, hands by your sides and no talking. Photos are allowed outside but not in the chamber. Rules on phones vary between sources: some say they're now allowed if switched off, others that they're collected, so just switch yours off. Expect to queue for 30 to 90 minutes, and the visit inside lasts only a few minutes."
          ],
          "tip": "Arrive close to 8am on a weekday that isn't a Monday or Friday. Then walk on to the stilt house, the One Pillar Pagoda and the museum, which all close for lunch."
        },
        {
          "h": "The palace and the stilt house",
          "p": [
            "Behind the mausoleum is the bright yellow Presidential Palace, built between 1900 and 1906 for the Governor-General of French Indochina. It's often credited to the architect Auguste Henri Vildieu, though some sources name Charles Lichtenfelder; the attribution isn't settled. Hồ Chí Minh is said to have declined to live in it. The palace is still used for state occasions, so visitors only see it from the gardens.",
            "Instead he lived in a modest house in the grounds, then from 1958 until 1969 in a two-storey wooden stilt house built in the style of the ethnic minority houses of the Việt Bắc hills, beside a carp pond and a path of mango trees. A garage nearby holds his cars. The grounds cost about 25,000–40,000 ₫ (sources differ) and close for lunch."
          ],
          "gallery": [
            {
              "key": "r-hcm-10",
              "cap": "The Presidential Palace, built for the French Governor-General."
            },
            {
              "key": "r-hcm-11",
              "cap": "The palace's yellow façade."
            },
            {
              "key": "r-hcm-12",
              "cap": "The Governor-General's palace in the early 20th century."
            },
            {
              "key": "r-hcm-13",
              "cap": "The stilt house by the carp pond."
            },
            {
              "key": "r-hcm-14",
              "cap": "The stilt house among the trees."
            },
            {
              "key": "r-hcm-15",
              "cap": "The simple study inside."
            },
            {
              "key": "r-hcm-16",
              "cap": "One of his cars in the garage."
            }
          ]
        },
        {
          "h": "The One Pillar Pagoda",
          "p": [
            "A few steps away is one of Hanoi's oldest and most loved temples. The One Pillar Pagoda (Chùa Một Cột, formally Diên Hựu) was built in 1049 under the Lý emperor Lý Thái Tông. The story goes that the childless king dreamed of Quan Âm, the goddess of mercy, seated on a lotus and handing him a son. A monk advised him to build a shrine on a single pillar rising from a pond, like a lotus flower growing from the water.",
            "The pagoda was blown up in September 1954 as French forces withdrew from Hanoi, and it was rebuilt in 1955. The little wooden shrine sits on a stone pillar about 4 metres tall. It's free to visit."
          ],
          "gallery": [
            {
              "key": "r-hcm-17",
              "cap": "The One Pillar Pagoda rising from its pond."
            },
            {
              "key": "r-hcm-18",
              "cap": "The single stone pillar."
            },
            {
              "key": "r-hcm-19",
              "cap": "Offerings at the shrine."
            }
          ],
          "tip": "Couples and families hoping for children still come to pray here, in honour of the king's dream."
        },
        {
          "h": "The museum, for the art lover",
          "p": [
            "The Hồ Chí Minh Museum opened on 19 May 1990, the 100th anniversary of his birth, and was also designed by Garol Isakovich. It holds more than 170,000 documents, objects and films. Its upper galleries are surprising: rather than glass cases alone, they use large, symbolic, almost surreal installations to tell his life and the 20th century.",
            "It's open Tuesday to Thursday and at weekends, about 8am to noon and 2 to 4:30pm, and costs about 40,000 ₫ for international visitors."
          ],
          "gallery": [
            {
              "key": "r-hcm-20",
              "cap": "The museum building."
            },
            {
              "key": "r-hcm-21",
              "cap": "One of the symbolic installations inside."
            },
            {
              "key": "r-hcm-22",
              "cap": "Abstract art in the upper galleries."
            },
            {
              "key": "r-hcm-23",
              "cap": "Inside the museum."
            }
          ],
          "tip": "Even if politics isn't your thing, go upstairs for the installations; they're some of the oddest museum design in Asia."
        },
        {
          "h": "Plan the morning",
          "p": [
            "Ba Đình is about 2 km west of Hoàn Kiếm Lake, a short Grab ride. The Imperial Citadel of Thăng Long is just across the road, and the Temple of Literature about a kilometre south, so the whole area makes an easy day: mausoleum, stilt house and pagoda in the morning, then lunch, then the citadel or the Temple of Literature in the afternoon. The flag-lowering at 9pm is a fitting end if you're nearby."
          ],
          "maps": [
            {
              "key": "hn-mausoleum",
              "label": "Mausoleum"
            },
            {
              "key": "hn-citadel",
              "label": "Imperial Citadel"
            },
            {
              "key": "hn-templeoflit",
              "label": "Temple of Literature"
            }
          ]
        }
      ],
      "sources": [
        {
          "title": "Wikipedia: Ho Chi Minh",
          "url": "https://en.wikipedia.org/wiki/Ho_Chi_Minh"
        },
        {
          "title": "Wikipedia: Ho Chi Minh Mausoleum",
          "url": "https://en.wikipedia.org/wiki/Ho_Chi_Minh_Mausoleum"
        },
        {
          "title": "Wikipedia (vi): Lăng Chủ tịch Hồ Chí Minh",
          "url": "https://vi.wikipedia.org/wiki/L%C4%83ng_Ch%E1%BB%A7_t%E1%BB%8Bch_H%E1%BB%93_Ch%C3%AD_Minh"
        },
        {
          "title": "Wikipedia (vi): Quảng trường Ba Đình",
          "url": "https://vi.wikipedia.org/wiki/Qu%E1%BA%A3ng_tr%C6%B0%E1%BB%9Dng_Ba_%C4%90%C3%ACnh"
        },
        {
          "title": "Wikipedia (vi): Đá Chông",
          "url": "https://vi.wikipedia.org/wiki/%C4%90%C3%A1_Ch%C3%B4ng"
        },
        {
          "title": "Tuổi Trẻ News: Mausoleum to close for maintenance from 4 September (2026)",
          "url": "https://news.tuoitre.vn/president-ho-chi-minh-mausoleum-to-close-for-periodic-maintenance-from-september-4-10326080923215558.htm"
        },
        {
          "title": "VietnamPlus: Mausoleum reopens to visitors (Nov 2026)",
          "url": "https://www.vietnamplus.vn/lang-chu-tich-ho-chi-minh-mo-cua-tro-lai-de-don-nhan-dan-khach-quoc-te-post1146009.vnp"
        },
        {
          "title": "Wikipedia: One Pillar Pagoda",
          "url": "https://en.wikipedia.org/wiki/One_Pillar_Pagoda"
        },
        {
          "title": "Wikipedia (vi): Chùa Một Cột",
          "url": "https://vi.wikipedia.org/wiki/Ch%C3%B9a_M%E1%BB%99t_C%E1%BB%99t"
        },
        {
          "title": "Wikipedia: Presidential Palace, Hanoi",
          "url": "https://en.wikipedia.org/wiki/Presidential_Palace,_Hanoi"
        },
        {
          "title": "Wikipedia (vi): Khu di tích Chủ tịch Hồ Chí Minh tại Phủ Chủ tịch",
          "url": "https://vi.wikipedia.org/wiki/Khu_di_t%C3%ADch_Ch%E1%BB%A7_t%E1%BB%8Bch_H%E1%BB%93_Ch%C3%AD_Minh_t%E1%BA%A1i_Ph%E1%BB%A7_Ch%E1%BB%A7_t%E1%BB%8Bch"
        },
        {
          "title": "Hồ Chí Minh Museum: visiting information",
          "url": "https://baotanghochiminh.vn/thong-tin-ve-tham-quan.htm"
        },
        {
          "title": "Wikipedia: Ho Chi Minh Museum",
          "url": "https://en.wikipedia.org/wiki/Ho_Chi_Minh_Museum"
        },
        {
          "title": "VinWonders: What you can't bring into the mausoleum (2025)",
          "url": "https://vinwonders.com/vi/bai-viet-du-lich/nhung-do-khong-duoc-mang-vao-lang-bac/"
        }
      ]
    },
    {
      "id": "thang-long-citadel",
      "title": "Thăng Long: the ascending dragon",
      "vi": "Hoàng thành Thăng Long",
      "img": {
        "key": "r-tl-01",
        "cap": "Đoan Môn, the main southern gate of the Imperial Citadel."
      },
      "teaser": "Thirteen centuries of palaces stacked in the ground, the dragons of four dynasties, a hidden war bunker, and a palace being rebuilt right now.",
      "minutes": 13,
      "lead": "Across the road from the mausoleum, behind an old gate in a quiet park, is the place where Hanoi began. Kings ruled from here for most of a thousand years; the French tore most of it down; the army turned it into a secret headquarters; and in 2002 archaeologists found palace after palace buried underneath. UNESCO listed it in 2010, the year Hanoi turned 1,000.",
      "sections": [
        {
          "h": "From Đại La to Thăng Long",
          "p": [
            "The site was a seat of power long before Hanoi had its name. UNESCO dates the earliest layer to a Chinese fortress of the 7th century, and in 866 the Tang general Gao Pian built a large walled citadel here called Đại La.",
            "In 1010 the first Lý king, Lý Thái Tổ, issued his Edict on the Transfer of the Capital from Hoa Lư, the old capital among the limestone towers of Ninh Bình (see the Tràng An article). Tradition says that when he arrived, he saw a dragon rising into the sky, so he called the city Thăng Long, 'ascending dragon'. The new citadel was built between 1010 and early 1011.",
            "Over the centuries the city was renamed Đông Đô, Đông Quan and Đông Kinh, which Europeans turned into 'Tonkin'. In 1802 the Nguyễn emperors moved the capital to Huế, and the characters for Thăng Long were swapped for others that sound the same, so the 'long' no longer meant dragon. In 1831 Emperor Minh Mạng renamed the city Hà Nội."
          ]
        },
        {
          "h": "Demolished, occupied, and given back",
          "p": [
            "The Nguyễn rebuilt Hanoi's citadel from 1805, but it didn't last. French forces attacked it in 1873 and again in 1882, when the governor Hoàng Diệu took his own life rather than surrender. Hanoi was ceded to France in 1888, and the French pulled down most of the citadel for offices and barracks; the great Kính Thiên Palace was destroyed in 1886.",
            "From 1954 to 1975 the Vietnamese army made its headquarters here, which kept the area closed for decades. The Ministry of Defence handed over the central sector in 2004, and in 2010 UNESCO inscribed it as a World Heritage Site for its almost 13 centuries as a centre of power and for the way it blends influences from China to the north and the Champa kingdom to the south. UNESCO also notes honestly that most of the buildings standing today date from the late 19th and 20th centuries."
          ]
        },
        {
          "h": "Đoan Môn and the Kính Thiên dragons",
          "p": [
            "You enter through Đoan Môn, the main southern gate: a U-shaped stone gatehouse 46.5 metres wide with five arches. The central arch was for the king alone. It dates from the early Lê dynasty in the 15th century, on the site of an older Lý gate. Just inside, a glass panel in the ground shows a Trần-era road, paved with reused Lý bricks, found here in 2002.",
            "Walk north to the raised platform of Kính Thiên Palace, built in 1428 on the site of the Lý dynasty's main palace and rebuilt in 1465. The palace itself is gone, but its stone steps survive, with carved stone dragons running down the balustrades. Their dates differ between sources: the southern balustrade is dated to 1467, while the large dragons on the northern steps, each about 3.4 metres long, are often attributed to the later Lê period."
          ],
          "maps": [
            {
              "key": "hn-citadel",
              "label": "Imperial Citadel"
            }
          ],
          "gallery": [
            {
              "key": "r-tl-02",
              "cap": "Đoan Môn's five arches."
            },
            {
              "key": "r-tl-03",
              "cap": "Looking up at Đoan Môn."
            },
            {
              "key": "r-tl-04",
              "cap": "Đoan Môn from the south-west."
            },
            {
              "key": "r-tl-05",
              "cap": "The southern gate in the French era."
            },
            {
              "key": "r-tl-06",
              "cap": "The Kính Thiên platform and steps."
            },
            {
              "key": "r-tl-07",
              "cap": "A Lê-dynasty stone dragon on the Kính Thiên steps."
            },
            {
              "key": "r-tl-08",
              "cap": "The dragon balustrades of the Kính Thiên steps."
            },
            {
              "key": "r-tl-09",
              "cap": "Kính Thiên in the 1880s, photographed shortly before it was destroyed."
            },
            {
              "key": "r-tl-10",
              "cap": "Another 1880s view of Kính Thiên."
            }
          ]
        },
        {
          "h": "A palace being rebuilt",
          "p": [
            "You'll be visiting at an unusual moment. On 29 September 2026, work began to rebuild Kính Thiên Palace, with UNESCO's World Heritage Centre represented at the ceremony. The project covers about 10,700 square metres, from the palace platform and its courtyard to the D67 area, and is due to finish in 2029.",
            "It's a debated project. UNESCO and its advisers ICOMOS asked for clearer evidence of what the palace actually looked like, and plans for one gate were put on hold for lack of it. Supporters see a chance to restore the symbolic heart of the capital; critics worry about rebuilding without enough proof. Either way, expect fences and building work around the centre of the site."
          ],
          "tip": "Ask at the gate which areas are open, as the works may close parts of the Kính Thiên platform and the D67 area during your visit."
        },
        {
          "h": "Palaces under the ground",
          "p": [
            "In December 2002, archaeologists began digging at 18 Hoàng Diệu, just west of the citadel, where a new National Assembly building was planned. What they found changed the project. Across some 19,000 square metres, the layers went down through 13 centuries: Đại La foundations, wells and drains at the bottom, then the 10th century, then the Lý and Trần dynasties, then the Lê. They found the foundations of more than 50 Lý palaces and millions of artefacts.",
            "There was a long national debate about what to do. In 2003 the Politburo halted the project, and the building was later redesigned on a smaller footprint. The new National Assembly opened in 2014, with the remains under it protected in sand, while the main dig across the road was preserved under shelters you can walk among today."
          ],
          "gallery": [
            {
              "key": "r-tl-11",
              "cap": "The excavation at 18 Hoàng Diệu."
            },
            {
              "key": "r-tl-12",
              "cap": "Foundations under the shelters."
            },
            {
              "key": "r-tl-13",
              "cap": "A panorama of the archaeological site."
            },
            {
              "key": "r-tl-14",
              "cap": "An ancient well uncovered in 2003."
            }
          ]
        },
        {
          "h": "Art in clay: dragons and phoenixes",
          "p": [
            "For an art lover, the treasures are the roof ornaments. The finest is an 11th–12th-century terracotta 'bodhi leaf' about 77 centimetres tall, shaped and engraved by hand with a pair of phoenixes on a lotus ground inside a flame-shaped border. It probably sat on a palace roof ridge, and it is now a National Treasure, displayed in the exhibition house on site. Other National Treasures from the citadel include a Trần sword inlaid with gold and silver, and an early Lê glazed model of a roof.",
            "You can also read the dynasties in their dragons. Lý dragons are slender and flowing, without horns. Trần dragons are more muscular and grow horns. Lê dragons have a lion-like head and sharp five-claw feet, like the ones on the Kính Thiên steps. By the Nguyễn they have stag horns and spiral tails, like those you'll see in Huế."
          ],
          "gallery": [
            {
              "key": "r-tl-15",
              "cap": "The Lý-dynasty phoenix 'bodhi leaf', a National Treasure."
            },
            {
              "key": "r-tl-16",
              "cap": "A Lý-dynasty terracotta phoenix head."
            },
            {
              "key": "r-tl-17",
              "cap": "Glazed roof tiles excavated at the citadel."
            }
          ],
          "tip": "Compare the Lê dragons on the Kính Thiên steps with the Nguyễn dragons at the Huế tombs later in your trip; you'll see 300 years of style change."
        },
        {
          "h": "Hậu Lâu, Bắc Môn and the Flag Tower",
          "p": [
            "At the back of the site stands Hậu Lâu, nicknamed the Princess's Pavilion because palace women were said to have lived there. The heritage centre dates it to 1821 under Minh Mạng and describes it as a Daoist pavilion whose upper floor held statues of deities. The French later altered it, adding an annex with iron columns made in Paris.",
            "To the north, Bắc Môn (the North Gate) is the last of the Nguyễn citadel's five gates still standing. Look for the two dents in its wall, believed to be made by French cannon fire from the Red River in 1882. Inside is a memorial to Hoàng Diệu and Nguyễn Tri Phương, who defended the citadel, and you can climb up to its little watchtower.",
            "To the south, the Flag Tower, built in 1812, is about 33 metres tall, with 54 spiral steps inside an octagonal shaft. It was a lookout and signal tower, and became a symbol of the city when the national flag was raised on it in October 1954."
          ],
          "gallery": [
            {
              "key": "r-tl-18",
              "cap": "Hậu Lâu, the 'Princess's Pavilion'."
            },
            {
              "key": "r-tl-19",
              "cap": "Bắc Môn, the North Gate."
            },
            {
              "key": "r-tl-20",
              "cap": "Cannon damage on the North Gate wall."
            },
            {
              "key": "r-tl-21",
              "cap": "The North Gate from the street."
            },
            {
              "key": "r-tl-22",
              "cap": "A citadel gate photographed by Émile Gsell in the 1870s."
            },
            {
              "key": "r-tl-23",
              "cap": "The Flag Tower, built in 1812."
            },
            {
              "key": "r-tl-24",
              "cap": "The tower's octagonal shaft."
            },
            {
              "key": "r-tl-25",
              "cap": "The Flag Tower today."
            },
            {
              "key": "r-tl-26",
              "cap": "The tower in the early 20th century."
            }
          ]
        },
        {
          "h": "D67: the house with a bunker",
          "p": [
            "Among the trees is a plain single-storey building called D67. It was built in 1967 to look ordinary, but its walls are 60 centimetres thick for soundproofing, and stairs lead about 10 metres down to a bunker behind steel doors. It was the headquarters of the Central Military Commission and the General Staff, where General Võ Nguyên Giáp worked from 1968.",
            "The meetings that decided the final offensive of 1975 were held around its long table. The rooms are kept as they were, with maps, telephones and the original furniture. A small cipher bunker nearby opened to the public for the first time in 2025."
          ],
          "gallery": [
            {
              "key": "r-tl-27",
              "cap": "The D67 building."
            },
            {
              "key": "r-tl-28",
              "cap": "The meeting room inside D67."
            },
            {
              "key": "r-tl-29",
              "cap": "Inside the bunker beneath D67."
            },
            {
              "key": "r-tl-30",
              "cap": "A bunker corridor."
            }
          ]
        },
        {
          "h": "Visiting",
          "p": [
            "The main entrance is at 19C Hoàng Diệu. The official site says it's open daily from 8am to 5pm (some guides say closed on Mondays). Tickets are 100,000 ₫ for adults, and children under 16 go free. Allow a morning or an afternoon; it pairs naturally with the mausoleum across the road and the Temple of Literature a kilometre away.",
            "On Friday and Saturday evenings at 7pm, a 'Decoding the Imperial Citadel' night tour (about 1.5 hours, 300,000 ₫) takes you through by lantern light, with court dance and the excavation site. Check it's running during the rebuilding works."
          ],
          "maps": [
            {
              "key": "hn-citadel",
              "label": "Imperial Citadel"
            },
            {
              "key": "hn-mausoleum",
              "label": "Mausoleum"
            }
          ]
        }
      ],
      "sources": [
        {
          "title": "UNESCO World Heritage Centre: Central Sector of the Imperial Citadel of Thang Long (archived)",
          "url": "https://webarchive.unesco.org/web/20170129165040/http://whc.unesco.org/en/list/1328"
        },
        {
          "title": "Wikipedia: Imperial Citadel of Thăng Long",
          "url": "https://en.wikipedia.org/wiki/Imperial_Citadel_of_Th%C4%83ng_Long"
        },
        {
          "title": "Wikipedia (vi): Hoàng thành Thăng Long",
          "url": "https://vi.wikipedia.org/wiki/Ho%C3%A0ng_th%C3%A0nh_Th%C4%83ng_Long"
        },
        {
          "title": "Wikipedia: Thăng Long",
          "url": "https://en.wikipedia.org/wiki/Th%C4%83ng_Long"
        },
        {
          "title": "Wikipedia (vi): Điện Kính Thiên",
          "url": "https://vi.wikipedia.org/wiki/%C4%90i%E1%BB%87n_K%C3%ADnh_Thi%C3%AAn"
        },
        {
          "title": "Wikipedia (vi): Đoan Môn",
          "url": "https://vi.wikipedia.org/wiki/%C4%90oan_M%C3%B4n"
        },
        {
          "title": "Thăng Long Heritage Centre: 18 Hoàng Diệu archaeological site",
          "url": "https://hoangthanhthanglong.vn/en/?p=1376"
        },
        {
          "title": "Thăng Long Heritage Centre: The phoenix bodhi leaf",
          "url": "https://hoangthanhthanglong.vn/en/the-bodhi-leaf-with-carved-phoenix-a-national-treasure-of-the-imperial-citadel-of-thang-long/"
        },
        {
          "title": "Thăng Long Heritage Centre: New National Treasures",
          "url": "https://hoangthanhthanglong.vn/en/new-national-treasures-of-the-imperial-citadel-of-thang-long/"
        },
        {
          "title": "Thăng Long Heritage Centre: Hậu Lâu (Tĩnh Bắc Pavilion)",
          "url": "https://hoangthanhthanglong.vn/en/the-tinh-bac-pavilion-hau-lau-a-significant-daoist-architecture-of-the-nguyen-dynasty-19th-20th-century-within-the-thang-long-imperial-citadel-heritage-site-hanoi/"
        },
        {
          "title": "Thăng Long Heritage Centre: Bắc Môn",
          "url": "https://hoangthanhthanglong.vn/en/bac-mon-a-witness-to-the-history-of-thang-long/"
        },
        {
          "title": "Thăng Long Heritage Centre: The Flag Tower",
          "url": "https://hoangthanhthanglong.vn/cot-co-ha-noi-bieu-tuong-lich-su-cua-thu-do/"
        },
        {
          "title": "Thăng Long Heritage Centre: Memories of Võ Nguyên Giáp at D67",
          "url": "https://hoangthanhthanglong.vn/en/memories-of-vo-nguyen-giap-at-d67-building-and-bunker/"
        },
        {
          "title": "Thăng Long Heritage Centre: Reconstruction of Kính Thiên Palace begins (2026)",
          "url": "https://hoangthanhthanglong.vn/en/reconstruction-of-kinh-thien-palace-begins-at-the-heart-of-the-thang-long-imperial-citadel/"
        },
        {
          "title": "Thăng Long Heritage Centre: Authenticity and the Kính Thiên reconstruction",
          "url": "https://hoangthanhthanglong.vn/en/reconstructing-kinh-thien-palace-authenticity-in-the-world-heritage-context/"
        },
        {
          "title": "Thăng Long Heritage Centre: Ticket prices",
          "url": "https://hoangthanhthanglong.vn/gia-ve-tham-quan-hoang-thanh-thang-long/"
        },
        {
          "title": "VietNamNet: Thăng Long citadel secrets after 15 years of research (2025)",
          "url": "https://vietnamnet.vn/en/thang-long-citadel-secrets-revealed-after-15-years-of-research-2459593.html"
        },
        {
          "title": "Wikipedia: National Assembly Building of Vietnam",
          "url": "https://en.wikipedia.org/wiki/National_Assembly_Building_of_Vietnam"
        },
        {
          "title": "Wikipedia: Flag Tower of Hanoi",
          "url": "https://en.wikipedia.org/wiki/Flag_Tower_of_Hanoi"
        },
        {
          "title": "Wikipedia: Vietnamese dragon",
          "url": "https://en.wikipedia.org/wiki/Vietnamese_dragon"
        },
        {
          "title": "VietnamPlus: The citadel night tour",
          "url": "https://www.vietnamplus.vn/tour-dem-giai-ma-hoang-thanh-thang-long--hanh-trinh-trai-nghiem-dac-sac-post935874.vnp"
        }
      ]
    },
    {
      "id": "hanoi-lakes",
      "title": "Why Hà Nội has so many lakes",
      "vi": "Hồ Hà Nội",
      "img": {
        "key": "r-lk-01",
        "cap": "Sunset over West Lake (Hồ Tây), Hà Nội's largest lake."
      },
      "teaser": "A wandering river, thousand-year-old dikes, a returned sword, a giant turtle and a city that filled in hundreds of ponds.",
      "minutes": 12,
      "lead": "Look at a map of Hà Nội and it's freckled with water: a big lake in the north, a small one at its heart, and dozens more tucked between the streets. The reason is a restless river, and the people who spent a thousand years living with it, taming it, filling it in and telling stories about it.",
      "sections": [
        {
          "h": "A city inside the rivers",
          "p": [
            "Hà Nội sits on the floodplain of the Red River (sông Hồng), which carries so much red-brown silt from the mountains that it has built the whole delta. Rivers on flat, soft ground don't run straight: they swing in loops, cut new channels in big floods, and leave old bends behind as lakes and marshes. Geologists have traced nine major ancient meanders across today's city.",
            "The name itself is about water. In 1831 Emperor Minh Mạng named the city Hà Nội, 河內, usually translated as 'inside the rivers'. Before the French arrived, the city was laced with lakes, ponds and creeks, and the old Tô Lịch river and the Red River together formed a moat around the royal citadel."
          ],
          "gallery": [
            {
              "key": "r-lk-02",
              "cap": "Hà Nội in 1873, dotted with lakes and ponds."
            },
            {
              "key": "r-lk-03",
              "cap": "Sampans on the Red River at sunset, 1915 (autochrome by Léon Busy)."
            },
            {
              "key": "r-lk-04",
              "cap": "The Red River at sunset from Long Biên Bridge."
            },
            {
              "key": "r-lk-05",
              "cap": "Long Biên Bridge over the Red River."
            }
          ]
        },
        {
          "h": "West Lake: a river bend left behind",
          "p": [
            "West Lake (Hồ Tây), about 500 hectares with a shoreline of some 17 km, is the clearest example. A 2002 study by Vietnamese geologists drilled into its bed and found river sand and silt at the bottom, a mixed river-and-lake layer above, and organic lake mud on top. Their conclusion: West Lake is an oxbow, a bend of the ancient Red River that the river abandoned as it shifted north-east.",
            "Floodwater kept pouring into the old bend until people built dikes along the Red River, which the authors date to roughly a thousand years ago. The sandbank beside it later became the Yên Phụ dike. Other accounts date the lake differently, so treat the exact age as an estimate.",
            "Legends tell it differently. In one, the dragon lord Lạc Long Quân killed a nine-tailed fox and its lair flooded into the lake. In another, a golden buffalo calf followed the sound of a bronze bell and the hollow it left filled with water. The lake has had many names, including Dâm Đàm ('misty lake'), and became Tây Hồ in 1573."
          ],
          "maps": [
            {
              "key": "hn-tranquoc",
              "label": "West Lake & Trấn Quốc"
            }
          ],
          "gallery": [
            {
              "key": "r-lk-06",
              "cap": "West Lake on a December afternoon."
            },
            {
              "key": "r-lk-07",
              "cap": "Evening light on West Lake."
            },
            {
              "key": "r-lk-08",
              "cap": "Lotus stalks after the season on West Lake, as you'll see them in late autumn."
            }
          ]
        },
        {
          "h": "Dikes, floods and a water network",
          "p": [
            "Living on a floodplain meant fighting the river. In 1108 the Lý king ordered the Cơ Xá dike to protect Thăng Long, and in 1248 the Trần dynasty built dikes along both banks all the way to the sea. The dikes kept floods out, but they also sealed off old channels, leaving still lakes behind them.",
            "The danger never quite went away. In August 1971 the Red River at Hà Nội peaked at 14.13 metres, far above the top alarm level. Today the city treats its lakes as flood storage: plans call for thousands of hectares of 'regulating lakes' to soak up monsoon rain, though only a fraction exist so far."
          ]
        },
        {
          "h": "The lakes that disappeared",
          "p": [
            "Hà Nội used to have far more water. One Vietnamese conservationist estimates the city had 600 to 750 ponds and lakes in the early 20th century; today the old city has roughly 100 to 120 named lakes. The figures cover different areas and definitions, so take them as an order of magnitude.",
            "Much of the loss came under the French. Hoàn Kiếm was once twice its size, split by a causeway into a northern and a southern lake; the French filled the southern lake completely. They also filled the lake's swampy north-east edge, once crossed by wooden bridges, which is why a street there is still called Cầu Gỗ, 'wooden bridge'. Elephant Lake was filled in the 1890s to make a park, and the Tô Lịch river was culverted and filled along much of its length. Later, the 20th-century city kept building over ponds as it grew.",
            "Since then the tide has turned. Hà Nội now protects about 3,500 lakes, ponds and other water bodies across the wider city from being filled."
          ],
          "gallery": [
            {
              "key": "r-lk-09",
              "cap": "The French 'Petit Lac' quarter around Hoàn Kiếm, 1886."
            },
            {
              "key": "r-lk-10",
              "cap": "Hà Nội in 1890."
            },
            {
              "key": "r-lk-11",
              "cap": "The 1936 plan, with many of the old lakes already filled."
            },
            {
              "key": "r-lk-12",
              "cap": "Hoàn Kiếm, the 'Petit Lac', around 1900."
            },
            {
              "key": "r-lk-13",
              "cap": "An aerial view of Hoàn Kiếm in 1930."
            }
          ],
          "tip": "For an art lover: compare the 1873 map with the 1936 plan side by side. You can watch the water vanish as the French grid spreads."
        },
        {
          "h": "Hoàn Kiếm: the lake of the returned sword",
          "p": [
            "The little lake at the heart of the city carries Vietnam's best-loved legend. After Lê Lợi drove out the Ming invaders in the 1420s, he was boating on the lake when a golden turtle rose from the water and asked for the magic sword that had won the war. He gave it back, and the lake became Hồ Hoàn Kiếm, 'Lake of the Returned Sword'. It's a legend, but every Hanoian knows it.",
            "The red Thê Húc bridge (1865) leads to Ngọc Sơn temple on Jade Islet. At its entrance stand the Pen Tower, inscribed 'write on the blue sky', and a stone inkslab carried by three toads, a scholar's monument by Nguyễn Văn Siêu. On a tiny islet in the middle sits the Turtle Tower, started in 1886 and mixing French and Vietnamese styles; folk stories say its builder hoped to bury his father there."
          ],
          "maps": [
            {
              "key": "hn-hoankiem",
              "label": "Hoàn Kiếm Lake"
            }
          ],
          "gallery": [
            {
              "key": "r-lk-14",
              "cap": "The Turtle Tower on its islet."
            },
            {
              "key": "r-lk-15",
              "cap": "The Turtle Tower, with the colonial-era Post Office behind."
            },
            {
              "key": "r-lk-16",
              "cap": "The tower in late-afternoon light."
            },
            {
              "key": "r-lk-17",
              "cap": "The red Thê Húc bridge to Ngọc Sơn temple."
            },
            {
              "key": "r-lk-18",
              "cap": "Thê Húc bridge lit up on a December night."
            },
            {
              "key": "r-lk-19",
              "cap": "Thê Húc bridge in 1884."
            },
            {
              "key": "r-lk-20",
              "cap": "The Pen Tower: 'write on the blue sky'."
            },
            {
              "key": "r-lk-21",
              "cap": "Ngọc Sơn temple on Jade Islet."
            },
            {
              "key": "r-lk-22",
              "cap": "A ceramic mural of Lê Lợi returning the sword to the golden turtle."
            },
            {
              "key": "r-lk-23",
              "cap": "Musicians playing on Thê Húc bridge."
            }
          ]
        },
        {
          "h": "The turtle in the lake",
          "p": [
            "For decades the legend had a living echo: a giant softshell turtle, Cụ Rùa ('great-grandfather turtle'), surfaced now and then to crowds and headlines. Measured in 2011 at 185 cm long and 169 kg, it was found dead in January 2016. Its preserved body is on display in Ngọc Sơn temple, alongside another that died in 1967.",
            "It belonged to the Yangtze giant softshell turtle species (Rafetus swinhoei), one of the rarest animals on Earth. As of 2025 only two individuals are known: an old male in a Chinese zoo and one wild turtle in Xuân Khanh lake on Hà Nội's western edge."
          ],
          "gallery": [
            {
              "key": "r-lk-24",
              "cap": "The Hoàn Kiếm turtle surfacing in 2008."
            },
            {
              "key": "r-lk-25",
              "cap": "The giant turtle photographed in March 2008."
            },
            {
              "key": "r-lk-26",
              "cap": "A preserved Hoàn Kiếm turtle in Ngọc Sơn temple."
            }
          ]
        },
        {
          "h": "Trúc Bạch and the silk palace",
          "p": [
            "Trúc Bạch was once part of West Lake until a causeway, now Thanh Niên road, cut it off. Its name goes back to a Trịnh lord's palace beside it, where palace women who had fallen from favour were sent to raise silkworms and weave a fine silk called 'Trúc' silk (sources differ on which lord). Today it's a quiet lake with a 1.5 km path and swan pedal boats.",
            "It's also where US Navy pilot John McCain was shot down and captured in October 1967; a small memorial stele stands on the west shore."
          ],
          "gallery": [
            {
              "key": "r-lk-27",
              "cap": "The lakeside path around Trúc Bạch."
            },
            {
              "key": "r-lk-28",
              "cap": "Trúc Bạch lake."
            },
            {
              "key": "r-lk-29",
              "cap": "A colonial-era aerial photo: Trúc Bạch (left) and West Lake, divided by the causeway."
            },
            {
              "key": "r-lk-30",
              "cap": "The memorial stele on Trúc Bạch's west shore."
            }
          ]
        },
        {
          "h": "Temples on the water, and lotus tea",
          "p": [
            "The lakes drew temples. Trấn Quốc pagoda, founded by tradition in the 6th century on the Red River bank, was moved to a little island in West Lake in 1615 when the river ate away its old site. Nearby, Quán Thánh temple guards the city's north with a 3.96-metre bronze statue cast in 1677.",
            "West Lake is also famous for lotus tea. In summer, families in Quảng An pack green tea into the flowers of the hundred-petal lotus to scent it, a craft now recognised as national intangible heritage. The lotus season is over by late November, but the tea is sold all year."
          ],
          "gallery": [
            {
              "key": "r-lk-31",
              "cap": "Trấn Quốc pagoda on its island."
            },
            {
              "key": "r-lk-32",
              "cap": "Trấn Quốc's stupa tower."
            },
            {
              "key": "r-lk-33",
              "cap": "Quán Thánh temple, home of the 1677 bronze statue."
            },
            {
              "key": "r-lk-34",
              "cap": "Lotus-scented tea."
            }
          ]
        },
        {
          "h": "Parks, and a river being brought back",
          "p": [
            "South of the Old Quarter, Thiền Quang and Bảy Mẫu lakes are remnants of an old marsh, reshaped when Thống Nhất Park was built by volunteers from 1958. 'Bảy Mẫu' means 'seven mẫu', an old land measure.",
            "The Tô Lịch river, once part of the royal moat, became a concrete-lined drain for the city's wastewater. A Japanese clean-up trial in 2019 ended without official results, but in 2025 the city intercepted every sewer outlet into the river and opened a treatment plant, and parts of the river ran clear for the first time in decades."
          ],
          "gallery": [
            {
              "key": "r-lk-35",
              "cap": "Thiền Quang lake."
            },
            {
              "key": "r-lk-36",
              "cap": "Bảy Mẫu lake in Thống Nhất Park."
            },
            {
              "key": "r-lk-37",
              "cap": "The canalised Tô Lịch River, 2022."
            }
          ]
        },
        {
          "h": "Walking the lakes",
          "p": [
            "In late November the sun sets around 5:15pm, the earliest of the year. For sunset, head to West Lake's western and southern shores or the causeway by Trấn Quốc, looking out across the water; Hoàn Kiếm is best a little later, when the lights come on. From Friday evening to Sunday night the streets around Hoàn Kiếm become a walking street, full of families, music and games.",
            "West Lake's loop is about 17 km, an easy 1.5–2 hour bike ride. Trúc Bạch's 1.5 km path is a gentle stroll with swan boats for hire. In 2026 the east side of Hoàn Kiếm is being redeveloped into a public square, so expect hoardings there. Don't swim in the lakes: there are sudden drop-offs and the water isn't clean."
          ],
          "maps": [
            {
              "key": "hn-hoankiem",
              "label": "Hoàn Kiếm"
            },
            {
              "key": "hn-tranquoc",
              "label": "Trấn Quốc"
            },
            {
              "key": "hn-longbien",
              "label": "Long Biên Bridge"
            }
          ]
        }
      ],
      "sources": [
        {
          "title": "Trần Nghi et al. (2002): Origin and geological evolution of West Lake and the Red River, Vietnam Journal of Earth Sciences",
          "url": "https://vjs.ac.vn/index.php/jse/article/view/11411"
        },
        {
          "title": "Báo Pháp Luật: The ancient Red River (Tiền Nhị Hà)",
          "url": "https://baophapluat.vn/tien-nhi-ha-bi-an-tu-long-song-co-post514311.html"
        },
        {
          "title": "Báo Pháp Luật: 2,000 years of Red River dikes",
          "url": "https://baophapluat.vn/lich-su-2000-nam-he-thong-de-tri-thuy-song-hong-post283434.html"
        },
        {
          "title": "Znews: The 1971 flood",
          "url": "https://znews.vn/dai-hong-thuy-1971-va-viec-giai-quyet-kho-khan-cho-dong-bao-bi-lu-lut-post1497540.html"
        },
        {
          "title": "VietNamNet: Hanoi's lakes getting narrowed (2012)",
          "url": "https://vietnamnet.vn/en/hanois-lakes-getting-narrowed-environmentalists-raise-alarm-E17941.html"
        },
        {
          "title": "VnEconomy: Over 3,500 water bodies in Hanoi may not be filled",
          "url": "https://vneconomy.vn/ha-noi-hon-3-500-ho-ao-dam-khong-duoc-san-lap.htm"
        },
        {
          "title": "VnExpress: The slow death of the Tô Lịch river (2019)",
          "url": "https://vnexpress.net/song-to-lich-chet-dan-4000298.html"
        },
        {
          "title": "SGGP: Using Red River water to restore the Tô Lịch (2025)",
          "url": "https://www.sggp.org.vn/ha-noi-no-luc-hoan-thanh-du-an-dung-nuoc-song-hong-cai-tao-song-to-lich-post771087.html"
        },
        {
          "title": "Znews: Little-known names of Hoàn Kiếm Lake",
          "url": "https://znews.vn/ten-goi-it-nguoi-biet-cua-ho-guom-post1452131.html"
        },
        {
          "title": "Wikipedia: Hoàn Kiếm Lake",
          "url": "https://en.wikipedia.org/wiki/Ho%C3%A0n_Ki%E1%BA%BFm_Lake"
        },
        {
          "title": "Hanoi government: Giant turtle in Hoàn Kiếm Lake dies (2016)",
          "url": "https://hanoicapital.chinhphu.vn/giant-turtle-in-hoan-kiem-lake-dies-1101517.htm"
        },
        {
          "title": "WCS Vietnam: First portable eDNA test for Rafetus (2025)",
          "url": "https://programs.wcs.org/vietnam/en-us/News/Media-Releases/ID/24090/First-Portable-eDNA-Test.aspx"
        },
        {
          "title": "Wikipedia: West Lake (Hanoi)",
          "url": "https://en.wikipedia.org/wiki/West_Lake_(Hanoi)"
        },
        {
          "title": "Znews: Legends around West Lake's names (2026)",
          "url": "https://znews.vn/nhieu-huyen-thoai-quanh-ten-goi-ho-tay-mot-thoi-post1692132.html"
        },
        {
          "title": "Nhân Dân: Trúc Bạch lake",
          "url": "https://nhandan.vn/ho-truc-bach-post556367.html"
        },
        {
          "title": "Việt Nam News: Hanoi to renovate the McCain memorial (2024)",
          "url": "https://vietnamnews.vn/society/1659397/ha-noi-to-renovate-and-expand-john-mccain-s-memorial.html"
        },
        {
          "title": "Wikipedia: Turtle Tower",
          "url": "https://en.wikipedia.org/wiki/Turtle_Tower"
        },
        {
          "title": "Báo Lào Cai: The Pen Tower and Inkslab",
          "url": "https://baolaocai.vn/thap-but-dai-nghien-cong-trinh-kien-truc-van-hoa-doc-dao-tai-ho-guom-post380700.html"
        },
        {
          "title": "Wikipedia: Trấn Quốc Pagoda",
          "url": "https://en.wikipedia.org/wiki/Tr%E1%BA%A5n_Qu%E1%BB%91c_Pagoda"
        },
        {
          "title": "Wikipedia: Quán Thánh Temple",
          "url": "https://en.wikipedia.org/wiki/Qu%C3%A1n_Th%C3%A1nh_Temple"
        },
        {
          "title": "Tạp chí Công Thương: Quảng An lotus tea recognised as national heritage",
          "url": "https://tapchicongthuong.vn/ghi-danh-pho-ha-noi-va-nghe-uop-tra-sen-quang-an-la-di-san-van-hoa-phi-vat-the-quoc-gia-125034.htm"
        },
        {
          "title": "Wikipedia: Thống Nhất Park (Lenin Park)",
          "url": "https://en.wikipedia.org/wiki/Lenin_Park_(Hanoi)"
        },
        {
          "title": "Tuổi Trẻ News: Work begins on a square east of Hoàn Kiếm Lake (2026)",
          "url": "https://news.tuoitre.vn/hanoi-residents-move-out-as-work-begins-on-public-square-east-of-hoan-kiem-lake-103260106174649628.htm"
        }
      ]
    }
  ],

  /* ---------- DRINKS ---------- */
  drinkTypes: [
    { id: "rooftop", label: "Rooftops",   icon: "i-city" },
    { id: "cocktail", label: "Cocktails", icon: "i-glass" },
    { id: "beer",    label: "Craft beer", icon: "i-beer" },
    { id: "coffee",  label: "Coffee",     icon: "i-coffee" }
  ],

  drinks: [
    /* Rooftops */
    { type: "rooftop", name: "Saigon Saigon Rooftop Bar", tag: "Walk 7 min", where: "Caravelle Hotel, Lam Sơn Square",
      desc: "The historic Caravelle rooftop above the Opera House square, freshly reopened after a full makeover.",
      q: "Saigon Saigon Rooftop Bar Caravelle" },
    { type: "rooftop", name: "Chill Skybar", tag: "Dress code", where: "AB Tower, Lê Lai · car 5 min",
      desc: "Saigon's best-known open-air rooftop: loud and glamorous, with DJs later in the night.",
      q: "Chill Skybar AB Tower" },

    /* Cocktails */
    { type: "cocktail", name: "Snuffbox", tag: "Walk 3 min", where: "14 Tôn Thất Đạm · hidden entrance",
      desc: "Often named the city's best cocktail bar: a 1920s-style speakeasy tucked into an office building.",
      q: "Snuffbox 14 Tôn Thất Đạm" },
    { type: "cocktail", name: "Firkin Bar", tag: "Walk 5 min", where: "20 Mạc Thị Bưởi",
      desc: "A small bar for cocktails and whisky, named one of Vietnam's best 20 bars in 2026.",
      q: "Firkin Bar 20 Mạc Thị Bưởi" },

    /* Craft beer */
    { type: "beer", name: "Pasteur Street Brewing", tag: "Walk 3 min", where: "Đồng Khởi flagship, 8 Ngô Đức Kế",
      desc: "Saigon's best-known craft brewery, using local ingredients like jasmine, passion fruit and coffee. The original taproom is at 144/3 Pasteur.",
      q: "Pasteur Street Brewing 8 Ngô Đức Kế" },
    { type: "beer", name: "Heart of Darkness", tag: "Walk 12 min", where: "31D Lý Tự Trọng · 11am–midnight",
      desc: "Bold, hoppy beers in a dark, cosy taproom.",
      q: "Heart of Darkness Brewery Saigon" },

    /* Coffee */
    { type: "coffee", name: "The Workshop", tag: "Walk 3 min", where: "27 Ngô Đức Kế, 3rd floor",
      desc: "A loft-style specialty roastery up a staircase, with filter coffee brewed at the bar.",
      q: "The Workshop Coffee Ngô Đức Kế" },
    { type: "coffee", name: "Café Apartment", tag: "Walk 3 min", where: "42 Nguyễn Huệ",
      desc: "An old apartment block filled with tiny cafés on every floor.",
      q: "42 Nguyễn Huệ Café Apartment" },
    { type: "coffee", name: "Cộng Cà Phê", tag: "Coffee", where: "Branches across D1",
      desc: "A retro café chain with about 20 branches in the city. The coconut coffee has condensed milk, so ask for it without.",
      q: "Cộng Cà Phê Quận 1" },

    /* Hà Nội */
    { id: "d-hn-hudson", city: "hanoi", type: "cocktail", name: "The Hudson Rooms", tag: "Asia's 50 Best", where: "Capella Hanoi, 11 Lê Phụng Hiểu",
      desc: "An Art Deco hotel bar with spirit-forward cocktails, ranked in Asia's 50 Best Bars 2026.",
      q: "The Hudson Rooms Capella Hanoi" },
    { id: "d-hn-workshop14", city: "hanoi", type: "cocktail", name: "Workshop14", tag: "Asia's 50 Best", where: "West Lake · 6 alley 5 Từ Hoa",
      desc: "Cocktails with Vietnamese ingredients in a former architect's studio.",
      q: "Workshop14 Tu Hoa Hanoi" },
    { id: "d-hn-pressclub", city: "hanoi", type: "cocktail", name: "Press Club", tag: "Near the Metropole", where: "Lý Thái Tổ",
      desc: "A classic, long-established bar for a quiet cocktail. Closes at midnight.",
      q: "Press Club Hanoi Ly Thai To" },
    { id: "d-hn-tahien", city: "hanoi", type: "beer", name: "Tạ Hiện bia hơi corner", tag: "Cheap draught", where: "Old Quarter · Tạ Hiện",
      desc: "A loud, crowded strip of plastic-stool beer stalls; a glass of fresh bia hơi is about 5–20k ₫.",
      q: "Ta Hien beer street Hanoi" },
    { id: "d-hn-giang", city: "hanoi", type: "coffee", name: "Café Giảng", tag: "Since 1946", where: "39 Nguyễn Hữu Huân",
      desc: "Home of egg coffee, which contains yolk, so order a black phin coffee instead.",
      q: "Cafe Giang 39 Nguyen Huu Huan" },
    { id: "d-hn-cong", city: "hanoi", type: "coffee", name: "Cộng Cà Phê (Nhà Thờ)", tag: "Retro café", where: "By St Joseph's Cathedral",
      desc: "The retro chain's cathedral branch. The coconut coffee has condensed milk, so ask for it without.",
      q: "Cong Caphe Nha Tho Hanoi" },

    /* Ninh Bình */
    { id: "d-nb-theboat", city: "ninhbinh", type: "coffee", name: "The Boat", tag: "Oat-milk coffee", where: "Tam Cốc Rd · 9am–4:30pm",
      desc: "The safest vegan coffee stop in Tam Cốc, with oat-milk and banana coffees.",
      q: "The Boat Healthy and Vegan Eatery Tam Coc" },

    /* Huế */
    { id: "d-hue-phinholic", city: "hue", type: "coffee", name: "PhinHolic", tag: "Oat milk", where: "65 Bến Nghé",
      desc: "A specialty café with an oat-milk menu, including a vegan version of Huế's famous salt coffee.",
      q: "PhinHolic 65 Bến Nghé Huế" },

    /* Ninh Bình — more */
    { id: "d-nb-xanh", city: "ninhbinh", type: "coffee", name: "Xanh Coffee", tag: "Garden café", where: "Văn Lâm, Tam Cốc · closed Sun",
      desc: "A quiet garden off the main strip, known for its coconut coffee and smoothie bowls. Ask about the milk.",
      q: "Xanh Coffee Tam Coc" },
    { id: "d-nb-brick", city: "ninhbinh", type: "coffee", name: "Brick Coffee Shop", tag: "Karst view", where: "Tam Cốc · 7am–9pm",
      desc: "A family café with upstairs seats looking out to the karsts.",
      q: "Brick Coffee Shop Tam Coc" },
    { id: "d-nb-starbucks", city: "ninhbinh", type: "coffee", name: "Starbucks Tràng An", tag: "Plant milk", where: "At the Tràng An boat wharf",
      desc: "Opened in 2026 and designed to blend into the landscape; reliable oat, soy and almond milk around the boat trip.",
      q: "Starbucks Tràng An Ninh Bình" },
    { id: "d-nb-linhchi", city: "ninhbinh", type: "beer", name: "Linh Chi Craft Beer", tag: "Relaxed pub", where: "Tam Cốc main strip",
      desc: "A friendly, easygoing pub with local craft beer; quiet early, livelier later.",
      q: "Linh Chi Craft Beer Pub Tam Coc" },

    /* Huế — more */
    { id: "d-hue-tagallery", city: "hue", type: "coffee", name: "Ta Gallery", tag: "Art café", where: "44 Phạm Ngũ Lão, upstairs",
      desc: "A café that doubles as a gallery, with paintings on every floor; free oat milk, including in salt coffee.",
      q: "Ta Gallery Ta Cafe Bakery Huế" },
    { id: "d-hue-ncafe", city: "hue", type: "coffee", name: "N. Café", tag: "Citadel view", where: "8 Trần Huy Liệu",
      desc: "A family café facing the Citadel moat; ask for drinks without milk.",
      q: "N. Cafe & Food 08 Trần Huy Liệu Huế" },
    { id: "d-hue-trons", city: "hue", type: "cocktail", name: "trons.studio", tag: "Hidden garden bar", where: "Kiệt 21 Lê Quý Đôn",
      desc: "A vintage café-bar in a leafy lane: coffee by day, cocktails by night, and staff happy to help with vegan drinks.",
      q: "trons.studio Huế" },
    { id: "d-hue-matbiec", city: "hue", type: "coffee", name: "Cà Phê Mắt Biếc", tag: "Riverside", where: "66 Bao Vinh",
      desc: "The old house from the film Mắt Biếc, with colourful stools on the riverbank.",
      q: "Cà Phê Mắt Biếc 66 Bao Vinh" },

    /* Hà Nội — more */
    { id: "d-hn-summit", city: "hanoi", type: "rooftop", name: "Summit Rooftop Bar", tag: "West Lake sunset", where: "20th floor, Pan Pacific, 1 Thanh Niên",
      desc: "Hà Nội's classic sunset rooftop, with West Lake on one side and Trúc Bạch on the other.",
      q: "Summit Rooftop Bar Pan Pacific Hanoi" },
    { id: "d-hn-ne", city: "hanoi", type: "cocktail", name: "Nê Cocktailbar", tag: "Vietnamese flavours", where: "3B Tống Duy Tân",
      desc: "A pioneer of Vietnamese craft cocktails; try the flaming 'Phở' cocktail. Live music at weekends.",
      q: "Nê Cocktailbar 3B Tống Duy Tân" },
    { id: "d-hn-haflington", city: "hanoi", type: "cocktail", name: "The Haflington", tag: "Speakeasy", where: "94 Hàng Mã, upstairs",
      desc: "A speakeasy styled like a natural-history museum, complete with a dinosaur skeleton.",
      q: "The Haflington 94 Hàng Mã" },
    { id: "d-hn-dreambeans", city: "hanoi", type: "coffee", name: "Dream Beans", tag: "Oat milk", where: "79 Lý Nam Đế",
      desc: "A three-floor specialty roastery with phin, pour-over and oat milk; quiet upstairs.",
      q: "Dream Beans Coffee Roastery 79 Lý Nam Đế" },
    { id: "d-hn-hiddengem", city: "hanoi", type: "coffee", name: "Hidden Gem Café", tag: "Upcycled art", where: "1 Hàng Mắm",
      desc: "A café built from recycled materials, with oat or coconut-milk coffee.",
      q: "Hidden Gem Cafe Hanoi 1 Hàng Mắm" }
  ],

  dishes: [
    { name: "Phở chay", en: "Vegetarian rice-noodle soup", img: "d-hn-01", cities: ["hanoi"],
      desc: "Hà Nội's signature noodle soup with a vegetable-and-mushroom broth, tofu and herbs.",
      watch: "Ordinary phở stalls use beef-bone broth even if you ask for no meat, so stick to chay places." },
    { name: "Bún chả chay", en: "Grilled 'pork' with noodles", img: "d-hn-02", cities: ["hanoi"],
      desc: "Hà Nội's charcoal-grilled bún chả remade with grilled tofu or mock meat, rice noodles, herbs and a sweet-sour dip.",
      watch: "Ask for nước chấm chay: the usual dip is fish sauce, and some mock meats contain egg white. Photo shows the usual version." },
    { name: "Bánh cuốn chay", en: "Steamed rice rolls", img: "d-hn-03", cities: ["hanoi"],
      desc: "Silky steamed rice sheets, plain or filled with wood-ear mushroom and jicama, dipped in soy sauce.",
      watch: "Usually filled with pork and dipped in fish sauce, so order it chay. Photo shows the usual version." },
    { name: "Bún riêu chay", en: "Tomato noodle soup", img: "d-hn-04", cities: ["hanoi"],
      desc: "A tangy tomato broth with rice noodles, fried tofu and a tofu 'crab' curd. A staple at chay stalls.",
      watch: "The usual version has crab, shrimp paste and pork bones. Say \"không mắm tôm\". Photo shows the usual version." },
    { name: "Nem rán chay", en: "Crispy fried spring rolls", img: "d-hn-05", cities: ["hanoi"],
      desc: "Fried rolls filled with glass noodles, wood-ear, taro and carrot.",
      watch: "The filling is often bound with egg, so check: \"không trứng\". Photo shows the usual version." },
    { name: "Bún đậu", en: "Noodles with fried tofu", img: "d-hn-06", cities: ["hanoi"],
      desc: "Pressed rice noodles, crisp fried tofu and herbs: a Hà Nội favourite. Dip in soy sauce.",
      watch: "It's traditionally served with pungent shrimp paste and pork sides. Ask for nước tương. Photo shows the usual version." },
    { name: "Bánh gối chay", en: "Fried pillow pastries", img: "d-hn-07", cities: ["hanoi"],
      desc: "Crisp half-moon pastries filled with glass noodles, wood-ear and vegetables, an afternoon snack.",
      watch: "Street versions contain pork and sometimes egg, so look for them at chay restaurants. Photo shows the usual version." },
    { name: "Xôi xéo", en: "Turmeric sticky rice", img: "d-hn-08", cities: ["hanoi"],
      desc: "Yellow sticky rice topped with shaved mung-bean paste and crispy shallots, a breakfast favourite.",
      watch: "Usually drizzled with pork fat and topped with pork floss. Say \"không mỡ, không ruốc\". Photo shows the usual version." },
    { name: "Cốm", en: "Green young-rice flakes", img: "d-hn-09", cities: ["hanoi"],
      desc: "Hà Nội's autumn delicacy of flattened young sticky rice; xôi cốm and bánh cốm are sold all year on Hàng Than.",
      watch: "Usually vegan, but check bánh cốm fillings for lard or honey." },
    { name: "Bánh đúc lạc", en: "Rice cake with peanuts", img: "d-hn-10", cities: ["hanoi"],
      desc: "A soft, plain rice-flour cake studded with peanuts and eaten with soy sauce. Cheap and simple.",
      watch: "Usually vegan; bánh đúc nóng has a pork topping." },
    { name: "Chè trôi tàu", en: "Rice balls in ginger syrup", img: "d-hn-11", cities: ["hanoi"],
      desc: "A winter sweet: sticky rice balls filled with mung bean in hot ginger syrup, topped with peanuts.",
      watch: "Black-sesame fillings are often mixed with pork fat, so choose mung bean." },
    { name: "Ô mai", en: "Preserved fruit sweets", img: "d-hn-12", cities: ["hanoi"],
      desc: "Salty-sweet-sour candied apricot, plum, ginger and kumquat, sold by weight on Hàng Đường. A good gift.",
      watch: "A few lines use honey (mật ong), so check labels." },
    { name: "Trà sen", en: "Lotus-scented green tea", img: "d-hn-13", cities: ["hanoi"],
      desc: "Green tea scented with West Lake lotus flowers, a refined Hà Nội speciality to drink or take home." },
    { name: "Bia hơi", en: "Fresh draught beer", img: "d-hn-14", cities: ["hanoi"],
      desc: "Cheap, light lager brewed daily and drunk on tiny plastic stools on street corners.",
      watch: "Its vegan status isn't confirmed, and bar snacks are mostly meat or seafood." },
    { name: "Cơm cháy chay", en: "Crispy rice crackers", img: "d-nb-01", cities: ["ninhbinh"],
      desc: "Ninh Bình's signature: sheets of rice fried until golden. Ask for them with a mushroom or tomato sauce.",
      watch: "The classic topping is pork floss or goat gravy. Say \"không chà bông, không sốt dê\"." },
    { name: "Cơm chay", en: "Vegetarian rice set", img: "d-nb-02", cities: ["ninhbinh"],
      desc: "Rice with tofu, mock meat and stir-fried greens at the vegan restaurants: the easiest meal in a goat-loving province.",
      watch: "Elsewhere ask \"không nước mắm, không dầu hào\"." },
    { name: "Lẩu nấm chay", en: "Mushroom hotpot", img: "d-nb-03", cities: ["ninhbinh"],
      desc: "A bubbling pot of mixed mushrooms, tofu and greens cooked at the table, made for sharing.",
      watch: "Non-chay places make the broth from bones; ask for nước lẩu chay." },
    { name: "Đậu sốt cà chua", en: "Tofu in tomato sauce", img: "d-nb-04", cities: ["ninhbinh"],
      desc: "Fried tofu simmered in fresh tomato sauce with spring onion, northern home cooking.",
      watch: "Ordinary eateries season it with fish sauce or stuff the tofu with pork. Photo shows the usual version." },
    { name: "Rau muống xào tỏi", en: "Morning glory with garlic", img: "d-nb-05", cities: ["ninhbinh"],
      desc: "Water spinach stir-fried hard with garlic, on every northern table.",
      watch: "Usually seasoned with fish or oyster sauce. Say \"không nước mắm, không dầu hào\"." },
    { name: "Nộm hoa chuối chay", en: "Banana-flower salad", img: "d-nb-06", cities: ["ninhbinh"],
      desc: "Shredded banana blossom with herbs, peanuts and a lime dressing.",
      watch: "The usual version uses fish sauce and often meat or dried shrimp. Photo shows the usual version." },
    { name: "Nem rán chay", en: "Fried spring rolls", img: "d-nb-07", cities: ["ninhbinh"],
      desc: "Crisp rolls of taro, glass noodles, mushroom and carrot, a staple at Tam Cốc's vegan restaurants.",
      watch: "Check the filling isn't bound with egg: \"không trứng\". Photo shows the usual version." },
    { name: "Dứa Đồng Giao", en: "Đồng Giao pineapple", img: "d-nb-08", cities: ["ninhbinh"],
      desc: "Sweet pineapples from the Đồng Giao farms near Tam Điệp, eaten fresh, as juice or dried." },
    { name: "Rượu sim & trà kim cúc", en: "Myrtle wine, chrysanthemum tea", img: "d-nb-09", cities: ["ninhbinh"],
      desc: "Rose-myrtle berry wine and golden mountain-chrysanthemum tea, sold as Thung Nham specialities.",
      watch: "Gift sets sometimes include honey." },
    { name: "Rượu Kim Sơn", en: "Kim Sơn rice spirit", img: "d-nb-10", cities: ["ninhbinh"],
      desc: "A strong spirit distilled from sticky rice in Kim Sơn, Ninh Bình's best-known liquor. Sip slowly.",
      watch: "Avoid rượu ngâm, spirits steeped with animals or insects." },
    { name: "Rượu cần", en: "Jar wine through straws", img: "d-nb-11", cities: ["ninhbinh"],
      desc: "Fermented rice wine shared from a jar through long bamboo straws, a Mường custom around Cúc Phương." },
    { name: "Bún bò Huế chay", en: "Spicy lemongrass noodle soup", img: "d-hue-01", cities: ["hue"],
      desc: "Huế's fiery lemongrass-and-chilli soup with thick round noodles, made at chay shops with mock meat and tofu.",
      watch: "The original has beef, pork, blood cake and shrimp paste, so order it chay. Photo shows the usual version." },
    { name: "Bánh bèo chay", en: "Steamed rice-cake saucers", img: "d-hue-02", cities: ["hue"],
      desc: "Tiny rice cakes steamed in little dishes, Huế's best-known snack, topped with mushroom and fried shallots.",
      watch: "The usual topping is dried shrimp and pork crackling, with fish sauce. Photo shows the usual version." },
    { name: "Bánh nậm chay", en: "Flat banana-leaf rice cakes", img: "d-hue-03", cities: ["hue"],
      desc: "Paper-thin rice cakes steamed flat in banana leaf, with a mushroom filling.",
      watch: "Usually filled with shrimp and pork; ask for nước chấm chay. Photo shows the usual version." },
    { name: "Bánh lọc chay", en: "Chewy tapioca dumplings", img: "d-hue-04", cities: ["hue"],
      desc: "Translucent tapioca dumplings in leaf, filled with mushroom, tofu or mung bean.",
      watch: "The classic filling is a whole shrimp with pork belly. Photo shows the usual version." },
    { name: "Bánh ít trần chay", en: "Sticky rice dumplings", img: "d-hue-05", cities: ["hue"],
      desc: "Soft unwrapped dumplings with mung bean, served on Huế's mixed cake platters.",
      watch: "Savoury versions usually contain shrimp and pork. Photo shows the usual version." },
    { name: "Bánh khoái chay", en: "Huế crispy pancake", img: "d-hue-06", cities: ["hue"],
      desc: "A small, crunchy cousin of bánh xèo with bean sprouts and mushroom, eaten with herbs and a peanut-sesame sauce.",
      watch: "The batter often has egg and the dip uses pork liver. Say \"không trứng\". Photo shows the usual version." },
    { name: "Cơm hến chay", en: "Huế 'clam' rice", img: "d-hue-07", cities: ["hue"],
      desc: "Cold rice with starfruit, banana flower, peanuts and herbs; chay shops swap the clams for mushroom.",
      watch: "The original has baby clams, shrimp paste and pork crackling. Photo shows the usual version." },
    { name: "Nem lụi chay", en: "Lemongrass skewers", img: "d-hue-08", cities: ["hue"],
      desc: "Tofu or mushroom paste grilled on lemongrass sticks and rolled in rice paper with herbs.",
      watch: "The peanut dip is usually thickened with pork liver; ask for tương chay. Photo shows the usual version." },
    { name: "Ram chay", en: "Huế fried rolls", img: "d-hue-09", cities: ["hue"],
      desc: "Huế's crisp fried rolls, filled with taro, mushroom and glass noodles.",
      watch: "Ordinary ram contain shrimp and pork. Photo shows the usual version." },
    { name: "Cơm chay Huế", en: "Buddhist vegetarian feast", img: "d-hue-10", cities: ["hue"],
      desc: "Huế is Vietnam's vegetarian capital, with pagoda and royal traditions and dozens of quán chay. Busiest on the lunar 1st and 15th.",
      watch: "Almost always vegan; to be sure, say \"thuần chay, không trứng, không sữa\"." },
    { name: "Chè hạt sen", en: "Lotus-seed sweet soup", img: "d-hue-11", cities: ["hue"],
      desc: "Huế lotus seeds in light syrup, sometimes wrapped in longan. One of dozens of chè Huế.",
      watch: "Avoid chè bột lọc heo quay, which contains roast pork." },
    { name: "Chè bắp", en: "Sweet corn pudding", img: "d-hue-12", cities: ["hue"],
      desc: "Sweet corn cooked with tapioca and topped with coconut cream, a classic Huế dessert.",
      watch: "Say \"không sữa\" in case condensed milk is added." },
    { name: "Mè xửng", en: "Sesame-peanut candy", img: "d-hue-13", cities: ["hue"],
      desc: "Huế's famous chewy candy of malt syrup, peanuts and sesame, sold in boxes everywhere. A classic souvenir.",
      watch: "Check the label for honey, milk or butter." },
    { name: "Cà phê muối", en: "Salt coffee", img: "d-hue-14", cities: ["hue"],
      desc: "Huế's signature coffee under a salty, creamy foam. Ask for it with oat or soy milk; Ta Gallery and PhinHolic make vegan versions.",
      watch: "The usual foam is cream and condensed milk. Photo shows the usual version." },
    { name: "Hủ tiếu chay", en: "Clear rice-noodle soup", img: "d-sg-01", cities: ["saigon"],
      desc: "Saigon's noodle soup made at chay stalls with a radish-and-mushroom broth, tofu and greens, as soup or dry.",
      watch: "The regular version uses pork bones, shrimp and squid. Photo shows the usual version." },
    { name: "Bánh xèo chay", en: "Sizzling turmeric crêpe", img: "d-sg-02", cities: ["saigon"],
      desc: "A huge crisp crêpe with mushrooms, tofu and bean sprouts, wrapped in mustard leaf and herbs.",
      watch: "Usually pork and shrimp with fish sauce; some batters include egg. Photo shows the usual version." },
    { name: "Cơm tấm chay", en: "Broken rice plate", img: "d-sg-03", cities: ["saigon"],
      desc: "Broken rice with a grilled mock 'pork chop', shredded tofu skin and pickles.",
      watch: "The steamed loaf (chả chay) often contains egg. Say \"không trứng\". Photo shows the usual version." },
    { name: "Bánh mì chay", en: "Vegetarian baguette", img: "d-sg-04", cities: ["saigon"],
      desc: "A crisp baguette with tofu or mock meat, pickles, cucumber, chilli and coriander.",
      watch: "Say \"không bơ, không pa-tê, không mayonnaise\": the usual spreads are butter, pâté and egg mayo." },
    { name: "Gỏi cuốn chay", en: "Fresh summer rolls", img: "d-sg-05", cities: ["saigon"],
      desc: "Rice-paper rolls of tofu, noodles, lettuce and herbs with a hoisin-peanut dip. Refreshing in the heat.",
      watch: "Check the dip isn't fish-sauce based." },
    { name: "Bò bía chay", en: "Jicama-tofu soft rolls", img: "d-sg-06", cities: ["saigon"],
      desc: "A street-cart roll of steamed jicama, carrot, tofu and basil with peanut-hoisin sauce.",
      watch: "Standard bò bía has dried shrimp, egg and Chinese sausage. Photo shows the usual version." },
    { name: "Bánh tráng trộn chay", en: "Rice-paper salad", img: "d-sg-07", cities: ["saigon"],
      desc: "Shredded rice paper tossed with mango, herbs, peanuts, chilli and kumquat: Saigon's favourite student snack.",
      watch: "Normally has dried shrimp, quail eggs and beef jerky. Say \"chay\". Photo shows the usual version." },
    { name: "Chè", en: "Sweet bean desserts", img: "d-sg-08", cities: ["saigon"],
      desc: "Beans, tapioca, jelly and fruit in coconut cream, eaten from glasses at street shops.",
      watch: "Some toppings use condensed milk. Say \"không sữa đặc\"." },
    { name: "Bánh da lợn", en: "Steamed pandan layer cake", img: "d-sg-09", cities: ["saigon"],
      desc: "A bouncy layer cake of tapioca, coconut milk, pandan and mung bean, sold at markets and bakeries.",
      watch: "Usually vegan; check packaged ones for milk." },
    { name: "Tàu hũ nước đường", en: "Tofu pudding, ginger syrup", img: "d-sg-10", cities: ["saigon"],
      desc: "Silky warm tofu pudding in ginger syrup, sold by street vendors." },
    { name: "Nước mía", en: "Fresh sugarcane juice", img: "d-sg-11", cities: ["saigon"],
      desc: "Sugarcane pressed to order with a squeeze of kumquat, over ice. Very cheap and everywhere." },
    { name: "Sinh tố", en: "Fruit smoothie", img: "d-sg-12", cities: ["saigon"],
      desc: "Blended avocado, mango, soursop or dragon fruit; ask for coconut milk instead.",
      watch: "Almost always made with condensed milk unless you say \"không sữa\". Photo shows the usual version." },
    { name: "Trái cây", en: "Tropical fruit", img: "d-sg-13", cities: ["saigon"],
      desc: "In Nov–Dec look for dragon fruit, mango, pomelo, sapodilla, custard apple and star apple at local markets.",
      watch: "Skip the shrimp-salt dip (muối tôm)." },
    { name: "Cà phê đen đá", en: "Iced black coffee", img: "d-sg-14", cities: ["saigon"],
      desc: "Strong phin-dripped robusta over ice. Modern cafés offer soy or oat milk.",
      watch: "Cà phê sữa đá uses condensed milk, and coconut coffee usually does too." }
  ],

  /* ---------- PREP: packing list ---------- */
  packing: [
    { group: "Documents & money", icon: "i-passport", items: [
      "Passport (valid 6+ months)",
      "Vietnam e-visa, if needed (PDF + printout)",
      "Travel insurance details",
      "Flight & accommodation confirmations, saved offline",
      "Two bank cards, with your bank told about the trip",
      "Some AUD/USD cash to exchange"
    ]},
    { group: "Clothes", icon: "i-shirt", items: [
      "Light, breathable tops & shorts",
      "Something covering shoulders & knees (temples)",
      "Warm layer or light jacket for Hà Nội & Ninh Bình evenings",
      "Proper rain jacket for Huế (its rainy season)",
      "Sandals that can get wet",
      "Comfy walking shoes",
      "Thin layer for icy air-con & sleeper trains",
      "Hat & sunglasses",
      "Work outfits for RMIT"
    ]},
    { group: "Health & toiletries", icon: "i-drop", items: [
      "Sunscreen",
      "Insect repellent",
      "Personal meds + prescriptions",
      "Rehydration salts",
      "Blister plasters & basic first aid",
      "Tissues & hand sanitiser"
    ]},
    { group: "Tech", icon: "i-plug", items: [
      "Travel adapter (AU plugs won't fit)",
      "Power bank",
      "eSIM bought, or unlocked phone for a local SIM",
      "Offline Google Map of Saigon",
      "Vietnamese downloaded in Google Translate",
      "Grab installed with a card linked"
    ]},
    { group: "Vegan kit", icon: "i-leaf", items: [
      "Screenshot of the vegan card (Eat tab)",
      "Snacks for travel days",
      "B12 / usual supplements",
      "Reusable water bottle"
    ]},
    { group: "Work", icon: "i-grad", items: [
      "Laptop & charger",
      "RMIT staff ID / lanyard",
      "Campus address saved in Grab"
    ]}
  ]
};
