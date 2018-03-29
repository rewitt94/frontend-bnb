const json = [
  {
    id: 1,
    hostId: 1,
    hostName: "theRealSlimRicky",
    house: "Lavenders",
    street: "Nice Street",
    city: "Southend",
    description: "great place",
    bedrooms: 5,
    bathrooms: 2,
    reviews: [
      {
        rating: 4,
        text: 'I liked it'
      },
      {
        rating: 4,
        text: 'I liked it'
      }
    ],
    images: [
      'https://cdn.torontolife.com/wp-content/uploads/2017/08/toronto-house-for-sale-53-burnhamthorpe-crescent-1-803x603.jpg',
      'url'
    ],
    price: 20,
    bookings: [
      {
        start: '10th Feb',
        end: '12th Feb'
      },
      {
        start: '18th Feb',
        end: '21st Feb'
      }
    ]
  },
  {
    id: 2,
    hostId: 1,
    hostName: "bossManAlfie",
    house: "Crib",
    street: "Big Street",
    city: "Manchester",
    description: "lovely place",
    price: 30,
    numberOfRooms: 5,
    bedrooms: 3,
    bathrooms: 2,
    reviews: [
      {
        rating: 2,
        text: 'unclean'
      },
      {
        rating: 2,
        text: 'bad'
      }
    ],
    images: [
      'https://cdn.torontolife.com/wp-content/uploads/2017/08/toronto-house-for-sale-53-burnhamthorpe-crescent-1-803x603.jpg',
      'url'
    ],
    bookings: [
      {
        start: '1st March',
        end: '12th March'
      },
      {
        start: '18th March',
        end: '21st March'
      }
    ]
  }
]

function list(json){
  listings = document.getElementById('listings')
  string = ''
  for (let i = 0;i<json.length;i++) {
    string += `
    <div class="accomodation">
      <div>
        <img class="accomodation_image" src="${json[i].images[0]}">
      </div>
      <div>
        <h1>${json[i].hostName}</h1>
        <h2> £${json[i].price} per night</h2>
        <h2>${json[i].house}</h2>
        <h2>${json[i].street}</h2>
        <h2>${json[i].city}</h2>
        <h2>${json[i].bedrooms} Bedrooms</h2>
        <h2>${json[i].bathrooms}</span> Bathrooms</h2>
        <button class="details_button">View Details</button>
      </div>
    </div>
    `
  }
  listings.innerHTML = string
}

list(json)
