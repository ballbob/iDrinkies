use idrinkies

db.dropDatabase()

use idrinkies

db.pubs.insert([
  {
    name: "Shakespeare",
    phone: "0131 228 8400",
    address: "65 Lothian Rd, Edinburgh EH1 2DJ",
    latlng: [55.9463536,-3.2063671],
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
    img: "https://lh4.googleusercontent.com/-xmxzqjCDIJY/WLLYa5a8BzI/AAAAAAAAAPE/OOnnz2zDSh0EgI5kJV7uVPQn8T0TIYwWACLIB/w408-h229-k-no/"
  },

  {
    name: "Beer Kitchen",
    address: "81-83 Lothian Rd, Edinburgh EH3 9AW",
    latlng: [55.9467485,-3.2069545],
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
    img: "https://lh3.googleusercontent.com/-tJ6DCj89oV4/V8UnwQdnktI/AAAAAAAAaPQ/XYt3BXMYg3suasn-iadwawPIUBArxkjiQCJkC/w408-h229-k-no/"
  },

  {
    name: "The Caley",
    phone: "0131 656 0752",
    address: "31 Lothian Road, Edinburgh EH1 2DJ",
    latlng: [55.9467485,-3.2069545],
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
    img: "https://lh6.googleusercontent.com/-Ydw621RpCFw/WIkoaoXvVVI/AAAAAAAABM0/iEH7ZqaMkV8GfrqVSpw46SMymsY5nFJ7wCLIB/w408-h229-k-no/"
  },

  {
    name: "The Red Squirrel",
    phone: "0131 229 9933",
    address: "21 Lothian Road, Old Town, Edinburgh EH1 2DJ",
    latlng: [55.947121,-3.2060694],
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
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Squirrel_posing.jpg"
  },

  {
    name: "The Hanging Bat",
    address: "133 Lothian RD, Edinburgh EH3 9AB",
    latlng: [55.9463476,-3.2063564],
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
    img: "https://goo.gl/maps/zapacbfpkd22",
  },

  {
    name: "Blue Blazer",
    address: "2 Spittal St, Edinburgh EH3 9DX",
    latlng: [55.946089,-3.2030417],
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
    img: "https://goo.gl/maps/SpPGJedGqwG2",
  },

  {
    name: "The Chanter",
    address: "30-32 Bread St, Edinburgh EH3 9AF",
    latlng: [55.946089,-3.2030417],
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
    img: "https://goo.gl/maps/zvBC4pJmPc82",
  },

  {
    name: "All Bar One",
    phone_number: "0131 221 7951",
    address: "50 Lothian Rd, Edinburgh EH3 9BY",
    latlng: [55.9465957,-3.2070256],
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
    img: "http://img.static-bookatable.com/498/332/e584b865dee0353198f2752735fab8a4.jpg?404=bat2/404-restaurant.jpgmode=crop"
  },

  {
    name: "Lebowskis",
    phone_number: "0131 446 1779",
    address: "18 Morrison St, Edinburgh EH3 8BJ",
    latlng: [55.9476308,-3.2061632],
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
    img: "http://farm7.static.flickr.com/6209/6128315560_f2fd0abf4a.jpg"
  },

  {
    name: "Henry's Cellar Bar",
    phone_number: "0131 629 2992",
    address: "16A Morrison Street, Edinburgh EH3 8BJ",
    latlng: [55.9476308,-3.2061632],
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
    img: "https://files.list.co.uk/images/h/henrys-cellar-bar-lst185453.jpg"
},

{
  name: "Camps Bar",
  phone: "01955 603273",
  address: "128-132 High St, Wick KW1 4LR",
  latlng: [58.4427301, -3.0911491],
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
  img: "http://s0.geograph.org.uk/geophotos/04/22/66/4226610_ef8f9ef7.jpg"
},

{
  name: "The Strathaven",
  phone: "01357 523817",
  address: "6 Waterside St, Strathaven ML10 6AW",
  latlng: [55.6820455, -4.0898807],
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
  img: "http://thestrathaven.co.uk/wp-content/uploads/2016/12/IMG_0896-min-1024x683.jpg"
},

{
  name: "Southside Social",
  phone: "0131 662 0974",
  address: "Meadow Bar, 42-44 Buccleuch St, Edinburgh EH8 9LP",
  latlng: [55.9427703, -3.1868229],
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
  img: "http://thisisgoodwork.org/wp-content/uploads/2015/08/goodwork-southside-social6.jpg"
},

{
  name: "The Old Brewery",
  phone: "01259 722722",
  address: "20 E Vennel, Alloa FK10 1ED",
  latlng: [56.1148523, -3.7950386],
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
  img: "http://jda-design.com.s77306.gridserver.com/wp-content/uploads/2015/03/Old-Brewery-8.jpg"
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
  img: "http://www.pubsgalore.co.uk/images/display/69001_69500/69016_9dd14b55.jpg?w=2"
},

{
  name: "The Espy",
  phone: "0131 669 0082",
  address: "62-64 Bath St, Edinburgh EH15 1HF",
  latlng: [55.9545965,-3.1108181],
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
  img: "https://media-cdn.tripadvisor.com/media/photo-s/02/81/c6/59/filename-05-16-schottland.jpg"
},

{
  name: "Skylark",
  phone: "0131 629 3037",
  address: "243 Portobello High St, Edinburgh EH15 2AW",
  latlng: [55.9524196, -3.1136766],
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
  img: "http://www.icosis.co.uk/wp-content/uploads/2013/10/4_The_Skylark_Bar_Portobello_Icosis-Architects-e1400075451962.jpg"
}])
