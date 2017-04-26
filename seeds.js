use idrinkies

db.dropDatabase()

use idrinkies

db.pubs.insert([
  {
    name: "Shakespeare",
    phone: "0131 228 8400",
    address: "65 Lothian Rd, Edinburgh EH1 2DJ",
    latlng: [55.947564,-3.205851],
    opening_hours: {
      monday: "11am – 11pm",
      tuesday: "11am – 11pm",
      wednesday: "11am – 11pm",
      thursday: "11am – 11pm",
      friday: "11am – 1am",
      saturday: "11am – 1am",
      sunday: "11am – 11pm"
    },
    food_serving_times: "11:00-23:00",
    cc_ranking: "7/10",
    review: "One of the staff punched me",
    special_events: [],
    img: "/img/shakespeare.jpg"
  },

  {
    name: "Beer Kitchen",
    address: "81-83 Lothian Rd, Edinburgh EH3 9AW",
    latlng: [55.946624,-3.205518],
    opening_hours: {
      monday: "9am - 1am",
      tuesday: "9am - 1am",
      wednesday: "9am - 1am",
      thursday: "9am - 1am",
      friday: "9am - 1am",
      saturday: "10am - 1am",
      sunday: "10am - 1am"
    },
    food_serving_hours: "09:00-22:00",
    cc_ranking: "10/10",
    review: "Nice cocktails, though there's beer too. - Adam",
    special_events: ["Fierce Beer Tap Takeover - 26th April 2017, 18:30-20:30."],
    img: "/img/beerkitchen.jpg"
  },

  {
    name: "The Caley",
    phone: "0131 656 0752",
    address: "31 Lothian Road, Edinburgh EH1 2DJ",
    latlng: [55.949588,-3.207273],
    opening_hours: {
      monday: "4pm - 1am",
      tuesday: "4pm - 1am",
      wednesday: "4pm - 1am",
      thursday: "4pm - 1am",
      friday: "4pm - 1am",
      saturday: "12pm - 1am",
      sunday: "12pm - 1am"
    },
    food_serving_hours: "08:00-23:00",
    cc_ranking: "2/10",
    review: "I'll never, ever go here and never have. - Ewen",
    special_events: [],
    img: "/img/thecaley.jpg"
  },

  {
    name: "The Red Squirrel",
    phone: "0131 229 9933",
    address: "21 Lothian Road, Old Town, Edinburgh EH1 2DJ",
    latlng: [55.948398,-3.206243],
    opening_hours: {
      monday: "9am - 12am",
      tuesday: "9am - 12am",
      wednesday: "9am - 12am",
      thursday: "9am - 12am",
      friday: "9am - 1am",
      saturday: "9am - 1am",
      sunday: "9am - 12am"
    },
    food_serving_hours: "09:00-00:00",
    cc_ranking: "5000",
    review: "It's extinct. - Bob",
    special_events: [],
    img: "/img/redsquirrel.jpg"
  },

  {
    name: "The Hanging Bat",
    address: "133 Lothian RD, Edinburgh EH3 9AB",
    latlng: [55.945517,-3.205159],
    opening_hours: {
      monday: "12pm – 12am",
      tuesday: "12pm – 12am",
      wednesday: "12pm – 12am",
      thursday: "12pm – 12am",
      friday: "12pm – 1am",
      saturday: "12pm – 1am",
      sunday: "12pm – 12am"
    },
    cc_ranking: 8,
    review: "Great selection of beers, really unique flavours not found elsewhere, no full pints though, expensive",
    special_events: ["From IPA days, blind beer boards and many more. some planned, some very last minute - and not forgetting our monthy meet the brewer."],
    img: "/img/hangingbat.jpg",
  },

  {
    name: "Blue Blazer",
    address: "2 Spittal St, Edinburgh EH3 9DX",
    latlng: [55.945944,-3.203153],
    opening_hours: {
      monday: "12pm – 12am",
      tuesday: "12pm – 12am",
      wednesday: "12pm – 12am",
      thursday: "12pm – 12am",
      friday: "12pm – 1am",
      saturday: "12pm – 1am",
      sunday: "12pm – 12am"
    },
    cc_ranking: 6,
    review: "Traditional independent bar with a good selection of real ales, not alot of space if you are with a larger group, but cozy",
    special_events: ["Home of the Edinburgh Rum Club"],
    img: "/img/blueblazer.jpg",
  },

  {
    name: "The Chanter",
    address: "30-32 Bread St, Edinburgh EH3 9AF",
    latlng: [55.945748,-3.203829],
    opening_hours: {
      monday: "11am – 1am",
      tuesday: "11am – 1am",
      wednesday: "11am – 1am",
      thursday: "11am – 1am",
      friday: "11am – 1am",
      saturday: "11am – 1am",
      sunday: "12:30pm – 1am"
    },
    cc_ranking: 7,
    review: "Traditional sports bar serving a sizeable menu of pub grub.",
    special_events: ["Can be booked for functions and reserve a table for groups"],
    img: "/img/chanter.jpg",
  },

  {
    name: "All Bar One",
    phone_number: "0131 221 7951",
    address: "50 Lothian Rd, Edinburgh EH3 9BY",
    latlng: [55.947470,-3.207080],
    opening_hours: {
      monday: "8am - 11pm",
      tuesday: "8am - 11pm",
      wednesday: "8am - 11pm",
      thursday: "8am – 12am",
      friday: "8am – 1am",
      saturday: "9am – 1am",
      sunday: "9am – 10.30pm"
    },
    food_serving_times: "All day",
    cc_ranking: 3,
    review: "It's pretty much what you would expect - fine.",
    special_events: ["Sunday to Thursday: 5 o'clock-tails - limited range of cocktails for £4.95 from 5pm."],
    img: "/img/allbarone.jpg"
  },

  {
    name: "Lebowskis",
    phone_number: "0131 446 1779",
    address: "18 Morrison St, Edinburgh EH3 8BJ",
    latlng: [55.945980,-3.206511],
    opening_hours: {
      monday: "11am – 1am",
      tuesday: "11am – 1am",
      wednesday: "11am – 1am",
      thursday: "11am – 1am",
      friday: "11am – 1am",
      saturday: "11am – 1am",
      sunday: "11am – 1am"
    },
    cc_ranking: 6,
    review: "Nice burgers!",
    img: "/img/lebowskis.png"
  },

  {
    name: "Henry's Cellar Bar",
    phone_number: "0131 629 2992",
    address: "16A Morrison Street, Edinburgh EH3 8BJ",
    latlng: [55.945933,-3.206166],
    opening_hours: {
      monday: "5pm – 1am",
      tuesday: "5pm– 1am",
      wednesday: "5pm – 1am",
      thursday: "5pm – 1am",
      friday: "5pm - 3am",
      saturday: "5pm - 3am",
      sunday: "5pm – 1am"
    },
    cc_ranking: 5,
    review: "Good for live music, less for general drinkies - proceed with caution.",
    special_events: ["Live music every night"],
    img: "/img/henryscellarbar.jpg"
},

{
  name: "Camps Bar",
  phone: "01955 603273",
  address: "128-132 High St, Wick KW1 4LR",
  latlng: [58.442730, -3.088960],
  opening_hours: {
    monday: "12pm - 11pm",
    tuesday: "12pm - 11pm",
    wednesday: "12pm - 11pm",
    thursday: "12pm - 12am",
    friday: "12pm - 12am",
    saturday: "12pm - 12am",
    sunday: "12pm - 10pm"
  },
  food_serving_times: "12pm - 9pm",
  cc_ranking: 2,
  review: "It's our most dreaded drinkies spot - Bob",
  img: "/img/thecamps.jpg"
},

{
  name: "The Strathaven",
  phone: "01357 523817",
  address: "6 Waterside St, Strathaven ML10 6AW",
  latlng: [55.677181, -4.064795],
  opening_hours: {
    monday: "12pm - 11pm",
    tuesday: "12pm - 11pm",
    wednesday: "12pm - 11pm",
    thursday: "12pm - 12am",
    friday: "12pm - 12am",
    saturday: "12pm - 12am",
    sunday: "12pm - 10pm"
  },
  food_serving_times: "12pm - 10pm",
  cc_ranking: 6,
  review: "If you have to be in Strathaven, you might as well be here - Leon",
  special_events: ["Tuesday is bingo night"],
  img: "/img/strathaven.jpg"
},

{
  name: "Southside Social",
  phone: "0131 662 0974",
  address: "Meadow Bar, 42-44 Buccleuch St, Edinburgh EH8 9LP",
  latlng: [55.942770, -3.184634],
  opening_hours: {
    monday: "12pm - 11pm",
    tuesday: "12pm - 11pm",
    wednesday: "12pm - 12am",
    thursday: "12pm - 1am",
    friday: "12pm - 1am",
    saturday: "12pm - 1am",
    sunday: "closed"
  },
  food_serving_times: "12pm - 9pm",
  cc_ranking: 10,
  review: "You better like it - Bob",
  special_events: ["Cohort 10 drinks and games - Thursday night"],
  img: "/img/southsidesocial.jpg"
},

{
  name: "The Old Brewery",
  phone: "01259 722722",
  address: "20 E Vennel, Alloa FK10 1ED",
  latlng: [56.114706, -3.789763],
  opening_hours: {
    monday: "11am - 11pm",
    tuesday: "11am - 11pm",
    wednesday: "11am - 11pm",
    thursday: "11am - 11pm",
    friday: "11am - 2am",
    saturday: "11am - 2am",
    sunday: "11am - 11pm"
  },
  food_serving_times: "12pm - 9pm",
  cc_ranking: 5,
  review: "It's in Alloa, but it's safe, I promise - Suzanne",
  img: "/img/oldbrewery.jpg"
},

{
  name: "Peppe's Lounge",
  phone: "01259 210706",
  address: "12 Mar Pl, Alloa FK10 2AB",
  latlng: [56.1170976, -3.7969627],
  opening_hours: {
    monday: "12pm - 11pm",
    tuesday: "12pm - 11pm",
    wednesday: "12pm - 11pm",
    thursday: "12pm - 11pm",
    friday: "12pm - 12am",
    saturday: "12pm - 12am",
    sunday: "closed"
  },
  cc_ranking: 1,
  review: "A local place, for local people. Do not attempt to enter - Suzanne",
  img: "/img/peppes.jpg"
},

{
  name: "The Espy",
  phone: "0131 669 0082",
  address: "62-64 Bath St, Edinburgh EH15 1HF",
  latlng: [55.954897,-3.110716],
  opening_hours: {
    monday: "9am - 1am",
    tuesday: "9am - 1am",
    wednesday: "9am - 1am",
    thursday: "9am - 1am",
    friday: "9am - 1am",
    saturday: "9am - 1am",
    sunday: "9am - 1am"
  },
  food_serving_times: "10am - 10pm",
  cc_ranking: 8,
  review: "Nice place for a burger and a pint, also a good vantage point for watching doggos run around the beach",
  img: "/img/espy.jpg"
},

{
  name: "The Weavers",
  phone: "01357 522648",
  address: "1 Green St, Strathaven ML10 6LT",
  latlng: [55.677011,-4.066775],
  opening_hours: {
    monday: "9am - 1am",
    tuesday: "9am - 1am",
    wednesday: "9am - 1am",
    thursday: "9am - 1am",
    friday: "9am - 1am",
    saturday: "9am - 1am",
    sunday: "9am - 1am"
  },
  cc_ranking: 7,
  review: "The only CAMRA pub in Strathaven! Where all the old folk drink!",
  img: "/img/theweavers.jpg"
},

{
  name: "Skylark",
  phone: "0131 629 3037",
  address: "243 Portobello High St, Edinburgh EH15 2AW",
  latlng: [55.951901, -3.111180],
  opening_hours: {
    monday: "10am - 5pm",
    tuesday: "10am - 5pm",
    wednesday: "10am - 5pm",
    thursday: "10am - 12am",
    friday: "10am - 12am",
    saturday: "10am - 12am",
    sunday: "10am - 10pm"
  },
  cc_ranking: 4,
  review: "Nice, but pretty posh",
  img: "/img/skylark.jpg"
},
{
  name: "Rockstone's Office",
  phone: "233 24 467 6742",
  address: "Osu Ave Ext, Accra, Ghana",
  latlng: [5.5745509,-0.1865906],
  opening_hours: {
    monday: "6am - 12am",
    tuesday: "6am - 12am",
    wednesday: "6am - 12am",
    thursday: "6am - 12am",
    friday: "6am - 12am",
    saturday: "6am - 12am",
    sunday: "6am - 12am"
  },
  cc_ranking: 6,
  review: "This was literally the third result when I googled 'best bar in Accra'. I'm certain it's amazing - Bob",
  img: "/img/rokstone.jpg"
}])
