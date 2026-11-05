/* =========================================================
   Content data — edit here to change places, dishes, packing.
   Prices are rough guides (late 2026). `img` keys live in images.js.
   ========================================================= */

window.SGN_DATA = {

  /* Trip window — used only for the weather forecast, not for planning */
  trip: { start: "2026-11-27", end: "2026-12-03" },

  /* ---------- SEE ---------- */
  categories: [
    { id: "art",   label: "Art",          icon: "i-palette" },
    { id: "shop",  label: "Shopping",     icon: "i-bag" },
    { id: "old",   label: "Old Saigon",   icon: "i-landmark" },
    { id: "spirit",label: "Temples",      icon: "i-temple" },
    { id: "out",   label: "Out & about",  icon: "i-sparkle" },
    { id: "trips", label: "Day trips",    icon: "i-van" }
  ],

  places: [
    /* Old Saigon — all walkable from home */
    {
      id: "nguyen-hue", cat: "old", img: "nguyen-hue",
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
      desc: "A grand neoclassical palace (Gia Long Palace) that tells Saigon's story from trading port to megacity. The gardens are a favourite backdrop for wedding photos.",
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
      desc: "A 1900 French Belle Époque theatre at the top of Đồng Khởi street. It's lovely from outside and even better with a show.",
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

    /* Art — Alex's favourite */
    {
      id: "galerie-quynh", cat: "art", img: "a-quynh",
      name: "Galerie Quynh", vi: "Phòng tranh Quỳnh",
      desc: "One of Saigon's longest-running contemporary galleries, showing leading Vietnamese artists in painting, installation and photography. It puts on several shows a year, plus artist talks.",
      time: "45 min", best: "Weekday afternoon", cost: "Free", from: "Car 10 min",
      tip: "Check their website or Instagram for the current show and opening days before you go.",
      q: "Galerie Quynh"
    },
    {
      id: "craig-thomas", cat: "art", img: null,
      name: "Craig Thomas Gallery", vi: "Craig Thomas Gallery",
      desc: "A small gallery known for spotting emerging Vietnamese painters. Every show includes artists having their first exhibition.",
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
      desc: "Vietnam's centuries-old folk art: lacquered wooden puppets glide across a pool to live traditional music. The Golden Dragon theatre runs short evening shows.",
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
      desc: "Prints, notebooks and tote bags featuring work by local Saigon illustrators. Perfect for an art lover.",
      time: "20–30 min", best: "Any time", cost: "Fixed prices", from: "Car 10 min",
      tip: "Prints are flat and light, so they're easy to fly home.",
      q: "Tia To Artbook Saigon"
    },
    {
      id: "tan-dinh-market", cat: "shop", img: "s-tan-dinh",
      name: "Tân Định Market", vi: "Chợ Tân Định",
      desc: "A locals' market famous for fabric. Silk, linen and cotton are sold by the metre, with tailors nearby who can make clothes in a day or two.",
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
      desc: "Saigon's Chinatown. Thiên Hậu Temple has giant incense coils hanging from the ceiling, and Bình Tây is a huge wholesale market nearby.",
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
      desc: "Ride the new metro east to a leafy riverside neighbourhood of cafés, boutiques and brunch spots. It's the most vegan-friendly area in the city.",
      time: "Half day", best: "Late morning", cost: "Metro ~10k ₫", from: "Metro 15 min",
      tip: "Get off at Thảo Điền station. Kashew Cheese & Wine is here for a plant-based cheese board.",
      q: "Thảo Điền"
    },
    {
      id: "landmark", cat: "out", img: "landmark",
      name: "Landmark 81", vi: "Landmark 81 SkyView",
      desc: "Vietnam's tallest tower. Watch the sunset from the observation deck, then walk the riverside park below.",
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
      desc: "A flower market by day that becomes a buzzing street-food alley at night. Very local and very Saigon.",
      time: "1 h", best: "Evening", cost: "Free", from: "Car 10 min",
      tip: "Ask \"chay?\" before ordering. Fruit, chè and sugarcane juice are safe bets.",
      q: "Hồ Thị Kỷ Flower Market"
    },
    {
      id: "bui-vien", cat: "out", img: "bui-vien",
      name: "Bùi Viện Walking Street", vi: "Phố Tây Bùi Viện",
      desc: "A neon backpacker street with loud bars, street performers and plastic stools. It's worth one evening.",
      time: "1 h", best: "After 9pm", cost: "Free", from: "Walk 15 min",
      tip: "Keep your phone zipped away; this is pickpocket territory.",
      q: "Bùi Viện Walking Street"
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
      desc: "A well-liked local chay restaurant one street over from the hotel, with a long menu of Vietnamese vegetarian dishes. Other branches are on Trần Hưng Đạo and Mai Thị Lựu.",
      q: "Nhà hàng chay Tuệ 130 Tôn Thất Đạm" },
    { area: "home", kind: "vegan", name: "Mãn Tự Vegan", where: "D1 · Tôn Thất Đạm, ~3 min walk",
      desc: "A small vegan buffet down an alley near the hotel. You pay what you like, so it's an easy, no-fuss lunch.",
      q: "Mãn Tự Vegan 14/2 Tôn Thất Đạm" },
    { area: "home", kind: "vegan", name: "Bon's Vegan", where: "D1 · Hàm Nghi, ~5 min walk",
      desc: "A fully vegan spot on the boulevard by the hotel, handy for a quick meal without asking any questions.",
      q: "Bon's Vegan 127 Hàm Nghi" },
    { area: "home", kind: "veg", name: "Chay Garden", where: "D3 · Võ Văn Tần · Michelin Bib Gourmand",
      desc: "Vietnamese vegetarian cooking in a garden house, recognised by the Michelin Guide. Book for dinner, and pair it with the War Remnants Museum nearby.",
      q: "Chay Garden 52 Võ Văn Tần" },
    { area: "home", kind: "veg", name: "PI Vegetarian Bistro", where: "D3 · near War Remnants",
      desc: "A relaxed bistro with rice bowls, tempeh salads and Vietnamese dishes. The menu marks anything with egg or dairy.",
      q: "PI Vegetarian Bistro Saigon" },
    { area: "home", kind: "veg", name: "Hum Vegetarian", where: "D3 · next to War Remnants",
      desc: "Calm, leafy and a bit upscale. Most of the menu is vegan, and it's ideal after the museum.",
      q: "Hum Vegetarian Café & Restaurant Võ Văn Tần" },
    { area: "home", kind: "veg", name: "Hoa Đăng", where: "D1 · Đa Kao",
      desc: "Elegant Vietnamese vegetarian food with a big menu. Good for a farewell dinner.",
      q: "Hoa Đăng vegetarian restaurant" },
    { area: "home", kind: "vegan", name: "Filthy Vegan", where: "D1 · Cô Bắc street",
      desc: "Indulgent vegan comfort food: burgers, loaded fries, the works. Go for it after a long day.",
      q: "Filthy Vegan Cô Bắc" },
    { area: "home", kind: "veg", name: "Tib Vegetarian", where: "D1 / D3",
      desc: "Imperial Huế-style vegetarian dishes. Try the bún Huế chay.",
      q: "Tib Vegetarian Saigon" },
    { area: "home", kind: "veg", name: "Phương Mai Chay", where: "D3 · Võ Thị Sáu",
      desc: "A popular local vegetarian spot with a long Vietnamese menu.",
      q: "Phương Mai Chay Võ Thị Sáu" },
    { area: "home", kind: "vegan", name: "Vegan Delight", where: "Buffet",
      desc: "An all-you-can-eat plant-based buffet. A great way to try lots of Vietnamese dishes at once.",
      q: "Vegan Delight buffet chay" },

    /* Thảo Điền — by metro */
    { area: "east", kind: "vegan", name: "Zeroism Vegan Café", where: "Nguyễn Cừ street",
      desc: "A fully vegan café and bakery on a quiet lane, with cakes, brunch and good coffee with plant milks.",
      q: "Zeroism Vegan Cafe Bakery Thảo Điền" },
    { area: "east", kind: "vegan", name: "Kashew Cheese & Wine", where: "Trần Ngọc Diện street",
      desc: "Cashew cheese boards, pasta and salads with a glass of wine.",
      q: "Kashew Cheese Wine Bar Thảo Điền" },
    { area: "east", kind: "veg", name: "Hum Garden", img: "hum-garden", where: "Villa with garden",
      desc: "Hum's sister restaurant in a leafy villa, slower and greener than the city branch.",
      q: "Hum Garden Thảo Điền" },
    { area: "east", kind: "veg", name: "Chay Garden Thảo Điền", where: "Vietnamese buffet",
      desc: "An upscale Vietnamese vegetarian buffet, good for sampling.",
      q: "Chay Garden Thảo Điền" },
    { area: "east", kind: "options", name: "Baba's Kitchen", where: "Nguyễn Văn Hưởng",
      desc: "Indian food with plenty of vegetarian dishes. Ask which curries can be made without ghee or cream.",
      q: "Baba's Kitchen Thảo Điền" },
    { area: "east", kind: "options", name: "Tartine Saigon", where: "Street 66",
      desc: "A sourdough bakery with vegan sandwiches, pizzas and salads. A good lunch stop.",
      q: "Tartine Saigon Thảo Điền" },

    /* Near RMIT — Phú Mỹ Hưng / old District 7 */
    { area: "rmit", kind: "vegan", name: "Veganizta", where: "Tôn Dật Tiên · closed Mon",
      desc: "A fully vegan restaurant near campus, open for lunch and dinner. Good for a work-day lunch.",
      q: "Veganizta Tôn Dật Tiên" },
    { area: "rmit", kind: "vegan", name: "Liên Hoa 2", where: "Trần Xuân Soạn",
      desc: "A clean, open-air, all-vegan Vietnamese canteen. Casual and cheap.",
      q: "Liên Hoa 2 chay Trần Xuân Soạn" },
    { area: "rmit", kind: "vegan", name: "Kashew Phú Mỹ Hưng", where: "Phú Mỹ Hưng",
      desc: "The south-side branch of the plant-based cheese bar. Good for dinner after work.",
      q: "Kashew Cheese Phú Mỹ Hưng" },
    { area: "rmit", kind: "veg", name: "Nhà Hàng Chay An", where: "Several D7 branches",
      desc: "A local vegetarian chain with a few branches around Phú Mỹ Hưng.",
      q: "Nhà hàng chay An Phú Mỹ Hưng" },
    { area: "rmit", kind: "veg", name: "Quán Chay Phát Tâm", where: "Budget",
      desc: "A roomy, inexpensive vegetarian spot for a quick work-day meal.",
      q: "Quán Chay Phát Tâm quận 7" },

    /* Cheap & local */
    { area: "cheap", kind: "vegan", name: "Bánh Mì Xanh", where: "Several D1 branches",
      desc: "Fully vegan bánh mì, so there's no need to worry about pâté or butter. A perfect grab-and-go breakfast.",
      q: "Bánh Mì Xanh vegan" },
    { area: "cheap", kind: "vegan", name: "Hủ Tiếu Chay Chú Quang", where: "Alley off Lãnh Binh Thăng",
      desc: "A tiny, much-loved vegan noodle-soup spot. Very local, and worth the short ride.",
      q: "Hủ Tiếu Chay Chú Quang" },
    { area: "cheap", kind: "vegan", name: "SEN Vegan", where: "D1 · Nguyễn Thái Học",
      desc: "Simple, good-value vegan Vietnamese set meals, around 60–80k ₫ a plate.",
      q: "SEN Vegan Nguyễn Thái Học" },
    { area: "cheap", kind: "vegan", name: "Loving Hut", where: "Branches citywide",
      desc: "A vegan chain with Vietnamese and fusion dishes. Reliable and inexpensive.",
      q: "Loving Hut vegan" },
    { area: "cheap", kind: "veg", name: "Any \"Quán cơm chay\"", where: "Every neighbourhood",
      desc: "Buddhist vegetarian canteens where you point at what you want, about 30–50k ₫ a plate. Busiest on the 1st and 15th of the lunar month.",
      q: "quán cơm chay Quận 1" }
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
      desc: "The highest bar you can get to in Saigon, in the tower next to the hotel. Arrive just before sunset to see the city in daylight and lit up.",
      q: "EON Heli Bar Bitexco" },
    { type: "rooftop", name: "The Summit, Caravelle", tag: "Walk 7 min", where: "Caravelle Hotel, Lam Sơn Square",
      desc: "A relaxed hotel rooftop above the Opera House square, with a classic view down Đồng Khởi. Easy to combine with dinner nearby.",
      q: "The Summit rooftop Caravelle Saigon" },
    { type: "rooftop", name: "Chill Skybar", tag: "Dress code", where: "AB Tower, Lê Lai · car 5 min",
      desc: "Saigon's best-known open-air rooftop: loud and glamorous, with DJs later in the night. Smart-casual, so no shorts or flip-flops.",
      q: "Chill Skybar AB Tower" },

    /* Cocktails */
    { type: "cocktail", name: "Snuffbox", tag: "Speakeasy", where: "D1 · hidden entrance",
      desc: "Often named the city's best cocktail bar: a 1920s-style speakeasy tucked into an office building. Tell the bartender what you like and let them improvise.",
      q: "Snuffbox Saigon" },
    { type: "cocktail", name: "Firkin Bar", tag: "Cocktails", where: "D1",
      desc: "A small, highly rated bar for cocktails and whisky. Seats are limited, so go early.",
      q: "Firkin Bar Saigon" },

    /* Craft beer */
    { type: "beer", name: "7 Bridges", tag: "Walk 5 min", where: "Đông Du street",
      desc: "A taproom close to the hotel with a long list of Vietnamese craft beers on tap. Good for a first drink in town.",
      q: "7 Bridges Saigon Craft Beer Taproom Đông Du" },
    { type: "beer", name: "Pasteur Street Brewing", tag: "Craft beer", where: "Pasteur street · walk 12 min",
      desc: "Saigon's best-known craft brewery, using local ingredients like jasmine, passion fruit and coffee. Order a tasting flight.",
      q: "Pasteur Street Brewing Company Pasteur" },
    { type: "beer", name: "Heart of Darkness", tag: "Craft beer", where: "Lý Tự Trọng · walk 12 min",
      desc: "Bold, hoppy beers in a dark, cosy taproom. A favourite with beer fans.",
      q: "Heart of Darkness Brewery Saigon" },
    { type: "beer", name: "East West Brewing", tag: "Craft beer", where: "Lý Tự Trọng",
      desc: "A big, airy beer hall with its own brewery. Good when you want space to sit.",
      q: "East West Brewing Company Saigon" },

    /* Coffee */
    { type: "coffee", name: "The Workshop", tag: "Walk 3 min", where: "Ngô Đức Kế street",
      desc: "A loft-style specialty roastery up a staircase, with filter coffee brewed at the bar. A calm start to the day.",
      q: "The Workshop Coffee Ngô Đức Kế" },
    { type: "coffee", name: "Café Apartment", tag: "Walk 3 min", where: "42 Nguyễn Huệ",
      desc: "An old apartment block filled with tiny cafés on every floor. Pick one with a balcony over the walking street.",
      q: "42 Nguyễn Huệ Café Apartment" },
    { type: "coffee", name: "Cộng Cà Phê", tag: "Coffee", where: "Branches across D1",
      desc: "A retro café chain famous for coconut coffee. It's made with condensed milk, so ask for it without (không sữa đặc).",
      q: "Cộng Cà Phê Quận 1" }
  ],

  dishes: [
    { name: "Phở chay", img: "d-pho", desc: "Vegetable-broth noodle soup with tofu and mushrooms. Add plenty of herbs and lime." },
    { name: "Gỏi cuốn chay", img: "d-goi-cuon", desc: "Fresh rice-paper rolls with tofu and herbs, dipped in peanut sauce." },
    { name: "Cơm chay", img: "d-com-chay", desc: "Point-and-pick vegetarian rice plates. Cheap, quick and varied." },
    { name: "Hủ tiếu chay", img: "d-hu-tieu", desc: "A clear noodle soup Saigon loves, here made with a vegetable broth." },
    { name: "Rau muống xào tỏi", img: "d-rau-muong", desc: "Morning glory with garlic. Ask for no fish sauce or oyster sauce." },
    { name: "Chè", img: "d-che", desc: "Sweet soups with beans, jelly, fruit and coconut milk. Usually vegan." },
    { name: "Nước mía", img: "d-nuoc-mia", desc: "Fresh-pressed sugarcane juice with a squeeze of kumquat." },
    { name: "Cà phê đen đá", img: "d-coffee", desc: "Strong iced black coffee from a phin filter. Skip the condensed milk." },
    { name: "Bánh mì chay", img: "d-banh-mi", desc: "Baguette with tofu, mock meat and pickles. Say \"không bơ, không pate\"." },
    { name: "Bánh xèo chay", img: "d-banh-xeo", desc: "A crispy turmeric crêpe wrapped in greens. Check the batter has no egg." }
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
