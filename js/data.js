/* =========================================================
   Content data — edit here to change places, dishes, packing.
   Prices are rough guides (late 2026). `img` keys live in images.js.
   ========================================================= */

window.SGN_DATA = {

  /* Trip window — used only for the weather forecast, not for planning */
  trip: { start: "2026-11-27", end: "2026-12-03" },

  /* ---------- SEE ---------- */
  categories: [
    { id: "two",   label: "For two",      icon: "i-heart" },
    { id: "art",   label: "Art",          icon: "i-palette" },
    { id: "shop",  label: "Shopping",     icon: "i-bag" },
    { id: "old",   label: "History",      icon: "i-landmark" },
    { id: "spirit",label: "Temples",      icon: "i-temple" },
    { id: "out",   label: "Out & about",  icon: "i-sparkle" },
    { id: "hue",   label: "Huế",          icon: "i-pavilion" },
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
      name: "Miu Miu Spa", vi: "Miu Miu 4 · Ngô Đức Kế",
      desc: "A popular, good-value spa chain with couples' rooms. Branch 4 is round the corner from the hotel.",
      time: "1–2 h", best: "After a long walk", cost: "~350k–1m ₫", from: "Walk 2 min",
      tip: "Message a day ahead to book the couples' room.",
      q: "Miu Miu Spa 4 Ngô Đức Kế"
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
      tip: "The cathedral is under a long restoration, so expect scaffolding. Book Street is good for postcards and a coffee.",
      q: "Saigon Central Post Office"
    },
    {
      id: "palace", cat: "old", img: "palace",
      name: "Independence Palace", vi: "Dinh Độc Lập",
      desc: "A 1960s modernist presidential palace preserved as it was in 1975, with reception halls, a rooftop helipad and the tanks that broke through the gates.",
      time: "1.5 h", best: "Morning", cost: "~65k ₫", from: "Walk 18 min",
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
      tip: "Look up the AO Show or Teh Dar, contemporary Vietnamese bamboo-circus performances. Book a day ahead.",
      q: "Saigon Opera House"
    },
    {
      id: "war-remnants", cat: "old", img: "war-remnants",
      name: "War Remnants Museum", vi: "Bảo tàng Chứng tích Chiến tranh",
      desc: "A powerful, confronting record of the American War, told through photojournalism, with aircraft and tanks in the yard.",
      time: "1.5–2 h", best: "Morning", cost: "~40k ₫", from: "Car 10 min",
      tip: "Some galleries are very graphic. Hum Vegetarian is a few doors away for a calm lunch afterwards.",
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
      id: "craig-thomas", cat: "art", img: null,
      name: "Craig Thomas Gallery", vi: "Craig Thomas Gallery",
      desc: "A small gallery known for spotting emerging Vietnamese painters.",
      time: "30 min", best: "Afternoon", cost: "Free", from: "Car 10 min",
      tip: "Good for buying an original piece at a fair price. Ask about shipping it home.",
      q: "Craig Thomas Gallery Saigon"
    },
    {
      id: "green-palm", cat: "art", img: null,
      name: "Green Palm Gallery", vi: "Green Palm Gallery",
      desc: "Traditional and modern Vietnamese painting, including lacquer, silk and oils, with a branch in District 1.",
      time: "30 min", best: "Any day", cost: "Free", from: "Car 5–10 min",
      tip: "A great place to see lacquer painting up close, and staff are happy to explain how it's made.",
      q: "Green Palm Gallery District 1"
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
      time: "45 min show", best: "Evening", cost: "Paid ticket", from: "Car 10 min",
      tip: "Book a day ahead and sit near the front. The live musicians are half the show.",
      q: "Golden Dragon Water Puppet Theatre"
    },

    /* Shopping — local design, fair prices */
    {
      id: "ohquao", cat: "shop", img: null,
      name: "OHQUAO The Local Edit", vi: "Hẻm 58 Phạm Ngọc Thạch",
      desc: "A concept store in an alley, stocked entirely with things designed and made in Saigon: stationery, homeware, prints and a room of local fashion labels.",
      time: "45 min", best: "Afternoon", cost: "Fixed prices", from: "Car 10 min",
      tip: "Their own paper goods and notebooks make light, packable gifts.",
      q: "OHQUAO The Local Edit Phạm Ngọc Thạch"
    },
    {
      id: "craft-house", cat: "shop", img: null,
      name: "The Craft House", vi: "The Craft House",
      desc: "Work from dozens of Vietnamese artisans and small brands under one roof, including ceramics, textiles, lacquer and woven goods.",
      time: "30–45 min", best: "Any time", cost: "Fixed prices", from: "Car 5–10 min",
      tip: "Ask staff which makers each piece comes from. Many have a story.",
      q: "The Craft House Saigon"
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
      desc: "Fun Saigon-themed T-shirts, bags and souvenirs from a long-running local brand, a big step up from market tat.",
      time: "20–30 min", best: "Any time", cost: "Fixed prices", from: "Walk / car, D1",
      tip: "Good for gifts that still look good once you're home.",
      q: "Ginkgo Concept Store Saigon"
    },
    {
      id: "tia-to", cat: "shop", img: null,
      name: "Tia To Artbook", vi: "Tía Tô Artbook",
      desc: "Prints, notebooks and tote bags featuring work by local Saigon illustrators.",
      time: "20–30 min", best: "Any time", cost: "Fixed prices", from: "Car 10 min",
      tip: "Prints are flat and light, so they're easy to fly home.",
      q: "Tia To Artbook Saigon"
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
      tip: "Look for dried fruit, tea and spices at Bình Tây. Grab a car between the two if it's hot.",
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
      tip: "Go early. By 9am it's hot and quiet, and the best people-watching is over.",
      q: "Tao Đàn Park"
    },
    {
      id: "skydeck", cat: "out", img: "skydeck",
      name: "Saigon Skydeck", vi: "Tháp Bitexco",
      desc: "An observation deck high in the lotus-bud Bitexco tower, right in the centre, with 360° views over the river and old town.",
      time: "45 min", best: "Sunset", cost: "Paid deck", from: "Walk 2 min",
      tip: "Alternatively, have a drink at the tower's bar a few floors higher for a similar view.",
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
      time: "1–1.5 h", best: "Sunset", cost: "Under 50k ₫", from: "Walk 5 min",
      tip: "Timetables change, so check at the pier earlier in the day.",
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
      id: "hue-citadel", cat: "hue", img: "r-hue-citadel",
      name: "Imperial City", vi: "Hoàng thành Huế · Đại Nội",
      desc: "The walled palace of the Nguyễn emperors on the Perfume River, entered through the Noon Gate.",
      time: "2–3 h", best: "Morning", cost: "~200k ₫", from: "Central Huế",
      tip: "Buy a combined ticket if you're also visiting the tombs; it's valid for two days.",
      q: "Imperial City Hue Ngọ Môn"
    },
    {
      id: "hue-minhmang", cat: "hue", img: "r-hue-hero",
      name: "Tomb of Minh Mạng", vi: "Lăng Minh Mạng",
      desc: "Gates, bridges and pavilions laid out in perfect symmetry along a 700 m axis across two lakes.",
      time: "1.5 h", best: "Early morning", cost: "~150k ₫", from: "Car ~12 km south of Huế",
      tip: "The most peaceful of the tombs. Walk the full axis to the burial mound at the back.",
      q: "Tomb of Minh Mang Hue"
    },
    {
      id: "hue-tuduc", cat: "hue", img: "r-hue-tuduc",
      name: "Tomb of Tự Đức", vi: "Lăng Tự Đức",
      desc: "A poet-emperor's lakeside retreat, built as a pleasure garden he lived in for years.",
      time: "1–1.5 h", best: "Morning", cost: "~150k ₫", from: "Car ~6 km south of Huế",
      tip: "Find the Xung Khiêm pavilion on the lake, where he wrote poetry.",
      q: "Tomb of Tu Duc Hue"
    },
    {
      id: "hue-khaidinh", cat: "hue", img: "r-hue-kd-stairs",
      name: "Tomb of Khải Định", vi: "Lăng Khải Định",
      desc: "Concrete, dragons and glittering glass-and-porcelain mosaics climbing a hillside. East meets West.",
      time: "1 h", best: "Morning", cost: "~150k ₫", from: "Car ~10 km south of Huế",
      tip: "Lots of steps. The mosaic interior of Thiên Định palace is the highlight for an art lover.",
      q: "Tomb of Khai Dinh Hue"
    },
    {
      id: "hue-gialong", cat: "hue", img: null,
      name: "Tomb of Gia Long", vi: "Lăng Gia Long",
      desc: "The dynasty founder's double grave with his empress, in quiet open hills far from the crowds.",
      time: "1 h", best: "Morning", cost: "Ticket at the gate", from: "Car ~20 km south of Huế",
      tip: "Furthest out and least visited. Combine it with Minh Mạng on the same side of the river.",
      q: "Tomb of Gia Long Hue"
    },

    {
      id: "hue-anbang", cat: "hue", img: "r-mo-hero",
      name: "An Bằng cemetery", vi: "Nghĩa trang An Bằng · \"city of ghosts\"",
      desc: "A village cemetery of towering, colourful family tombs covered in broken-porcelain mosaics.",
      time: "1 h", best: "Morning light", cost: "Free", from: "Car, east of Huế toward the coast",
      tip: "Treat it as a place of remembrance: don't climb or step on graves, and no drones. See the \"Graves of everyday Vietnam\" read.",
      q: "An Bang cemetery Vinh An Phu Vang Hue"
    },

    /* Day trips — realistically pick one */
    {
      id: "cu-chi", cat: "trips", img: "cu-chi",
      name: "Củ Chi Tunnels", vi: "Địa đạo Củ Chi",
      desc: "A wartime tunnel network you can crawl through, with traps and field kitchens.",
      time: "Half day", best: "Early start", cost: "~125k ₫ + transport", from: "Car 1.5–2 h",
      tip: "Bến Đình is less crowded than Bến Dược. Wear clothes you don't mind getting dusty.",
      q: "Cu Chi Tunnels Ben Dinh"
    },
    {
      id: "mekong", cat: "trips", img: "mekong",
      name: "Mekong Delta", vi: "Mỹ Tho · Bến Tre",
      desc: "Sampans through coconut-palm canals, fruit orchards, coconut-candy workshops and river islands.",
      time: "Full day", best: "Early start", cost: "Tour", from: "Car ~2 h",
      tip: "Tour lunches are often fish, so book a vegan meal in writing when you reserve.",
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
    { id: "cheap", label: "Cheap & local", icon: "i-cash" }
  ],

  restaurants: [
    /* Near home — District 1 / 3 */
    { area: "home", kind: "veg", name: "Chay Tuệ", where: "D1 · Tôn Thất Đạm, ~3 min walk",
      desc: "A well-liked local chay restaurant one street over from the hotel, with a long menu of Vietnamese vegetarian dishes.",
      q: "Nhà hàng chay Tuệ 130 Tôn Thất Đạm" },
    { area: "home", kind: "vegan", name: "Mãn Tự Vegan", where: "D1 · Tôn Thất Đạm, ~3 min walk",
      desc: "A small pay-what-you-like vegan buffet near the hotel.",
      q: "Mãn Tự Vegan 14/2 Tôn Thất Đạm" },
    { area: "home", kind: "vegan", name: "Bon's Vegan", where: "D1 · Hàm Nghi, ~5 min walk",
      desc: "A fully vegan spot on the boulevard by the hotel, handy for a quick meal without asking any questions.",
      q: "Bon's Vegan 127 Hàm Nghi" },
    { area: "home", kind: "veg", name: "Chay Garden", where: "D3 · Võ Văn Tần · Michelin Bib Gourmand",
      desc: "Vietnamese vegetarian cooking in a garden house, recognised by the Michelin Guide.",
      q: "Chay Garden 52 Võ Văn Tần" },
    { area: "home", kind: "veg", name: "PI Vegetarian Bistro", where: "D3 · near War Remnants",
      desc: "A relaxed bistro with rice bowls, tempeh salads and Vietnamese dishes.",
      q: "PI Vegetarian Bistro Saigon" },
    { area: "home", kind: "veg", name: "Hum Vegetarian", where: "D3 · next to War Remnants",
      desc: "Calm, leafy and a bit upscale, with a mostly vegan menu.",
      q: "Hum Vegetarian Café & Restaurant Võ Văn Tần" },
    { area: "home", kind: "veg", name: "Hoa Đăng", where: "D1 · Đa Kao",
      desc: "Elegant Vietnamese vegetarian food with a big menu.",
      q: "Hoa Đăng vegetarian restaurant" },
    { area: "home", kind: "vegan", name: "Filthy Vegan", where: "D1 · Cô Bắc street",
      desc: "Indulgent vegan comfort food: burgers, loaded fries, the works.",
      q: "Filthy Vegan Cô Bắc" },
    { area: "home", kind: "veg", name: "Tib Vegetarian", where: "D1 / D3",
      desc: "Imperial Huế-style vegetarian dishes.",
      q: "Tib Vegetarian Saigon" },
    { area: "home", kind: "veg", name: "Phương Mai Chay", where: "D3 · Võ Thị Sáu",
      desc: "A popular local vegetarian spot with a long Vietnamese menu.",
      q: "Phương Mai Chay Võ Thị Sáu" },
    { area: "home", kind: "vegan", name: "Vegan Delight", where: "Buffet",
      desc: "An all-you-can-eat plant-based buffet.",
      q: "Vegan Delight buffet chay" },

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
    { area: "east", kind: "veg", name: "Chay Garden Thảo Điền", where: "Nguyễn Cơ Thạch · buffet",
      desc: "An upscale Vietnamese vegetarian buffet, good for sampling.",
      q: "Chay Garden Thảo Điền" },
    { area: "east", kind: "options", name: "Baba's Kitchen", where: "Nguyễn Văn Hưởng",
      desc: "Indian food with plenty of vegetarian dishes.",
      q: "Baba's Kitchen Thảo Điền" },
    { area: "east", kind: "options", name: "Tartine Saigon", where: "Ngô Tất Tố, Bình Thạnh",
      desc: "A sourdough bakery with vegan sandwiches, pizzas and salads.",
      q: "Tartine Saigon Thảo Điền" },

    /* Near RMIT — Phú Mỹ Hưng / old District 7 */
    { area: "rmit", kind: "vegan", name: "Veganizta", where: "Tôn Dật Tiên · closed Mon",
      desc: "A fully vegan restaurant near campus, open for lunch and dinner.",
      q: "Veganizta Tôn Dật Tiên" },
    { area: "rmit", kind: "vegan", name: "Liên Hoa 2", where: "Trần Xuân Soạn",
      desc: "A clean, open-air, all-vegan Vietnamese canteen.",
      q: "Liên Hoa 2 chay Trần Xuân Soạn" },
    { area: "rmit", kind: "vegan", name: "Kashew Phú Mỹ Hưng", where: "Phú Mỹ Hưng",
      desc: "The south-side branch of the plant-based cheese bar.",
      q: "Kashew Cheese Phú Mỹ Hưng" },
    { area: "rmit", kind: "veg", name: "Nhà Hàng Chay An", where: "Several D7 branches",
      desc: "A local vegetarian chain with a few branches around Phú Mỹ Hưng.",
      q: "Nhà hàng chay An Phú Mỹ Hưng" },
    { area: "rmit", kind: "veg", name: "Quán Chay Phát Tâm", where: "Budget",
      desc: "A roomy, inexpensive vegetarian spot for a quick work-day meal.",
      q: "Quán Chay Phát Tâm quận 7" },

    /* Cheap & local */
    { area: "cheap", kind: "vegan", name: "Bánh Mì Xanh", where: "Several D1 branches",
      desc: "Fully vegan bánh mì. No pâté or butter to worry about.",
      q: "Bánh Mì Xanh vegan" },
    { area: "cheap", kind: "vegan", name: "Hủ Tiếu Chay Chú Quang", where: "Alley off Lãnh Binh Thăng",
      desc: "A tiny, much-loved vegan noodle-soup spot.",
      q: "Hủ Tiếu Chay Chú Quang" },
    { area: "cheap", kind: "vegan", name: "SEN Vegan", where: "D1 · Phó Đức Chính",
      desc: "Simple, good-value vegan Vietnamese set meals, around 60–80k ₫ a plate.",
      q: "Sen Vegan House Phó Đức Chính" },
    { area: "cheap", kind: "vegan", name: "Loving Hut", where: "Branches citywide",
      desc: "A vegan chain with Vietnamese and fusion dishes.",
      q: "Loving Hut vegan" },
    { area: "cheap", kind: "veg", name: "Any \"Quán cơm chay\"", where: "Every neighbourhood",
      desc: "Buddhist vegetarian canteens where you point at what you want, about 30–50k ₫ a plate.",
      q: "quán cơm chay Quận 1" }
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
      { name: "Museum ticket", lo: 30000, hi: 65000 },
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
          "tip": "If you ever visit a real Gia Rai cemetery, go with a local guide. It is a sacred place: ask before taking photos, and never touch, move or take anything from a tomb. Elsewhere, if you pass a funeral in Vietnam, keep a respectful distance and don't photograph mourners without asking. Vietnam's tourism board also advises never to step over offerings or altars set on the ground."
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
          "tip": "For an art lover: in the King Đinh temple, look for the two dragon platforms, each carved from a single block of stone in the 17th century and named national treasures in 2017. One art researcher noticed that each dragon has three distinctly feminine hands, and reads them as a coded tribute to Empress Dương Vân Nga, who was married to two kings."
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
            "The classic way to see Tràng An is in a small rowing boat, three or four people with a local rower, women and men alike. There are three routes. Route 1 loops through nine caves, including the Dark Cave, the Bright Cave and the Wine-Brewing Cave, and stops at three sacred sites. Route 2 passes four caves and the Vũ Lâm area. Route 3, added in 2018, includes Hang Mây, over a kilometre long. Some caves are so low you lie back in the boat as the rock passes centimetres overhead. A ticket was about 250,000 ₫ per person.",
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
    { type: "rooftop", name: "EON Heli Bar", tag: "Walk 2 min", where: "Bitexco tower, top floors",
      desc: "The highest bar you can get to in Saigon, in the tower next to the hotel.",
      q: "EON Heli Bar Bitexco" },
    { type: "rooftop", name: "The Summit, Caravelle", tag: "Walk 7 min", where: "Caravelle Hotel, Lam Sơn Square",
      desc: "A relaxed hotel rooftop above the Opera House square, with a classic view down Đồng Khởi.",
      q: "The Summit rooftop Caravelle Saigon" },
    { type: "rooftop", name: "Chill Skybar", tag: "Dress code", where: "AB Tower, Lê Lai · car 5 min",
      desc: "Saigon's best-known open-air rooftop: loud and glamorous, with DJs later in the night.",
      q: "Chill Skybar AB Tower" },

    /* Cocktails */
    { type: "cocktail", name: "Snuffbox", tag: "Speakeasy", where: "D1 · hidden entrance",
      desc: "Often named the city's best cocktail bar: a 1920s-style speakeasy tucked into an office building.",
      q: "Snuffbox Saigon" },
    { type: "cocktail", name: "Firkin Bar", tag: "Cocktails", where: "D1",
      desc: "A small, highly rated bar for cocktails and whisky.",
      q: "Firkin Bar Saigon" },

    /* Craft beer */
    { type: "beer", name: "7 Bridges", tag: "Walk 5 min", where: "Đông Du street",
      desc: "A taproom close to the hotel with a long list of Vietnamese craft beers on tap.",
      q: "7 Bridges Saigon Craft Beer Taproom Đông Du" },
    { type: "beer", name: "Pasteur Street Brewing", tag: "Craft beer", where: "Pasteur street · walk 12 min",
      desc: "Saigon's best-known craft brewery, using local ingredients like jasmine, passion fruit and coffee.",
      q: "Pasteur Street Brewing Company Pasteur" },
    { type: "beer", name: "Heart of Darkness", tag: "Craft beer", where: "Lý Tự Trọng · walk 12 min",
      desc: "Bold, hoppy beers in a dark, cosy taproom.",
      q: "Heart of Darkness Brewery Saigon" },
    { type: "beer", name: "East West Brewing", tag: "Craft beer", where: "Lý Tự Trọng",
      desc: "A big, airy beer hall with its own brewery.",
      q: "East West Brewing Company Saigon" },

    /* Coffee */
    { type: "coffee", name: "The Workshop", tag: "Walk 3 min", where: "Ngô Đức Kế street",
      desc: "A loft-style specialty roastery up a staircase, with filter coffee brewed at the bar.",
      q: "The Workshop Coffee Ngô Đức Kế" },
    { type: "coffee", name: "Café Apartment", tag: "Walk 3 min", where: "42 Nguyễn Huệ",
      desc: "An old apartment block filled with tiny cafés on every floor.",
      q: "42 Nguyễn Huệ Café Apartment" },
    { type: "coffee", name: "Cộng Cà Phê", tag: "Coffee", where: "Branches across D1",
      desc: "Retro café chain. The coconut coffee has condensed milk, so ask for it without.",
      q: "Cộng Cà Phê Quận 1" }
  ],

  dishes: [
    { name: "Phở chay", img: "d-pho", desc: "Vegetable-broth noodle soup with tofu and mushrooms." },
    { name: "Gỏi cuốn chay", img: "d-goi-cuon", desc: "Fresh rice-paper rolls with tofu and herbs, dipped in peanut sauce." },
    { name: "Cơm chay", img: "d-com-chay", desc: "Point-and-pick vegetarian rice plates." },
    { name: "Hủ tiếu chay", img: "d-hu-tieu", desc: "A clear noodle soup Saigon loves, here made with a vegetable broth." },
    { name: "Rau muống xào tỏi", img: "d-rau-muong", desc: "Morning glory with garlic." },
    { name: "Chè", img: "d-che", desc: "Sweet soups with beans, jelly, fruit and coconut milk." },
    { name: "Nước mía", img: "d-nuoc-mia", desc: "Fresh-pressed sugarcane juice with a squeeze of kumquat." },
    { name: "Cà phê đen đá", img: "d-coffee", desc: "Strong iced black coffee from a phin filter." },
    { name: "Bánh mì chay", img: "d-banh-mi", desc: "Baguette with tofu, mock meat and pickles." },
    { name: "Bánh xèo chay", img: "d-banh-xeo", desc: "A crispy turmeric crêpe wrapped in greens." }
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
      "Light rain jacket or poncho, just in case",
      "Sandals that can get wet",
      "Comfy walking shoes",
      "Thin layer for icy air-con",
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
