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
    { id: "hue",   label: "Huế",          icon: "i-plane" },
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
      "teaser": "Carved wooden mourners, painted roofs, and a final ceremony that sets the dead free.",
      "minutes": 7,
      "lead": "In the Central Highlands, the Gia Rai honour their dead with a tomb house ringed by carved wooden figures. Then, after one last great ceremony, they walk away from it for good, and let the forest take it back.",
      "sections": [
        {
          "h": "Who the Gia Rai are",
          "p": [
            "The Gia Rai (also written Jrai or Jarai) are one of the largest peoples of Vietnam's Central Highlands, living mainly in Gia Lai province and in parts of Kon Tum and Đắk Lắk. Their language belongs to the Austronesian family and is related to Cham, so it sounds nothing like Vietnamese.",
            "Society is matrilineal. Children take their mother's family name, and a husband moves in with his wife's family. Villages (plơi) are built of stilt houses around a tall communal house, the rông, where the village meets."
          ]
        },
        {
          "h": "The soul that stays behind",
          "p": [
            "For the Gia Rai, everything has a soul. When a person dies, their soul becomes a spirit (ma) that does not leave straight away. It lingers by the grave, visits home, and still needs to eat. So the family brings it food, often every day.",
            "This in-between time lasts from one to three years: about a year for a poorer family, longer for a wealthier one. While it lasts, the family is in mourning. Traditionally they don't wear new clothes, use new things, or go travelling. The dead and the living are still tied together, and only one ceremony can untie them."
          ]
        },
        {
          "h": "The tomb house",
          "p": [
            "After a simple first burial, the family and village build a proper tomb house, the nhà mồ. Men gather timber, bamboo, rattan and grass and do the building, women cook for them, and neighbours lend a hand. It can take anything from a week to a month. Sources differ on whether it is finished before the farewell ceremony or as part of it.",
            "The roof is the showpiece: wooden planks covered in woven bamboo, painted with a homemade red pigment. The patterns show the ceremony itself, with gong players, drummers and xoang dancers, alongside elephants and birds. One tomb can hold many members of the same family over the years.",
            "Inside go the things the dead will need, and gifts from those left behind: gongs, jars, baskets, bowls, tools and bead bracelets. Today you may also find modern things, because the idea is simply to send loved ones off with what they valued.",
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
            "Around the tomb stands a fence of wooden figures, the tượng nhà mồ. Each is carved from a single piece of hardwood using only an axe, chisel and knife, with no sketches. The rough, chunky cuts are part of the style: faces are bold and simple, and the carver's marks stay visible.",
            "The figures are a portrait of life itself. There are mourners crouching with hands on their faces or propping up their chins, the image of a grieving husband or wife. There are mothers holding babies, pregnant women, embracing couples and infants. Together they tell the full circle of life, from love and birth to death and rebirth, and they keep the dead company. Animals sometimes join them for the same reason.",
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
          "tip": "For an art lover: this is some of Vietnam's most striking folk sculpture. Look at how much feeling comes from a few deep cuts: the slump of a grieving body, a hand pressed to a cheek.",
          "gallery": [
            {
              "key": "r-gr-g2",
              "cap": "Figures carved from single tree trunks."
            },
            {
              "key": "r-gr-g3",
              "cap": "Weathered figures at the corner of the fence."
            }
          ]
        },
        {
          "h": "Pơ thi: the farewell ceremony",
          "p": [
            "Between one and three years after a death comes pơ thi, the grave-abandonment ceremony (lễ bỏ mả). The Gia Rai consider it the most important rite of the whole life cycle. It often lasts about three days, and the whole village turns out, led by a respected elder.",
            "There are prayers to the gods and to the dead, and rice wine poured onto the ground. Relatives keep vigil by the tomb at night. Gongs and drums play, and young men smeared with mud and wearing masks dance as spirits. There may be puppets, and a big night-time performance circles the tomb. Guests share rượu cần, rice wine sipped through long bamboo straws from a shared jar.",
            "At the end comes a final farewell. From then on the family stops bringing food, the mourning rules are lifted, and the dead person's soul is free to join the ancestors. The tomb is left to the weather, and nobody tends it again. It's a costly event, and families may save or borrow for years to give a loved one a proper send-off."
          ]
        },
        {
          "h": "A tradition under pressure",
          "p": [
            "Fewer people now carve the old way. Good hardwood is scarce after years of deforestation, statues have been stolen from cemeteries to sell as 'ethnic art', and some families have switched to plaster figures. A 2020 survey still counted about 1,500 wooden statues in 177 villages of Gia Lai, and the province now runs carving contests and classes so younger people learn from master artisans such as Ksor Krôh.",
            "Statues increasingly appear outside cemeteries too, at rông houses, parks and community tourism sites, which is where most visitors now see them."
          ]
        },
        {
          "h": "Where to see them",
          "p": [
            "You won't find tomb houses in Saigon. The best place is the Vietnam Museum of Ethnology in Hanoi, whose Gia Rai tomb house was built in 1998 by five Jrai Arap men from Mrông Ngọ village in Gia Lai, the traditional way. In the Highlands, Pleiku and the villages around it (such as Kép village) still have statues, and the Đắk Lắk Museum in Buôn Ma Thuột displays some too."
          ],
          "tip": "If you ever visit a real Gia Rai cemetery, go with a local guide. It is a sacred place: ask before taking photos, and never touch, move or take anything from a tomb."
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
