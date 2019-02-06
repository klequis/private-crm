// this is shape out from EventForm
export const eventToPost = {
  category: 'startup',
  cityName: 'San Ramon',
  endDateTime: '2018-06-12T17:00:00.000Z',
  imageUrl: 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/briia.jpg',
  linkToUrl: 'http://briia.io',
  organization: 'BRIIA',
  postalCode_id: 'blank',
  price: 75,
  stateCode: 'CA',
  startDateTime: '2018-06-12T16:00:00.000Z',
  tags: [ 'health' ],
  title: 'BRIIA Investor Demo Day',
  venueName: 'Dublin Concert Hall',
}

// This is how the post route will put it in the database
export const eventAfter = {
  // _id: '5b673573d63a2d4c54bb7351',
  category: 'startup',
  cityName: 'San Ramon',
  endDateTime: '2018-06-12T17:00:00.000Z',
  imageUrl: 'https://s3-us-west-2.amazonaws.com/photo-app-tvc/briia.jpg',
  linkToUrl: 'http://briia.io',
  organization: 'BRIIA',
  postalCode: '94582',
  price: 75,
  stateCode: 'CA',
  startDateTime: '2018-06-12T16:00:00.000Z',
  tags: [ 'health' ],
  title: 'BRIIA Investor Demo Day',
  venueName: 'Dublin Concert Hall',
}

export const postalCodes = [
  {
      // _id: '5b5f6f52222be42bb919bfb3',
      postalCode: '94507',
      cityName: 'Alamo',
      stateName: 'California',
      stateCode: 'CA',
      countyName: 'Contra Costa',
      countyCode: '013',
      latitude: 37.8537,
      longitude: -122.0229,
      accuracy: 4
  },
  {
      // _id: '5b5f6f52222be42bb919bfb4',
      postalCode: '94506',
      cityName: 'Danville',
      stateName: 'California',
      stateCode: 'CA',
      countyName: 'Contra Costa',
      countyCode: '013',
      latitude: 37.8321,
      longitude: -121.9167,
      accuracy: 4
  },
  {
      // _id: '5b5f6f52222be42bb919bfb5',
      postalCode: '94509',
      cityName: 'Antioch',
      stateName: 'California',
      stateCode: 'CA',
      countyName: 'Contra Costa',
      countyCode: '013',
      latitude: 37.9939,
      longitude: -121.8089,
      accuracy: 4
  },
  {
      // _id: '5b5f6f52222be42bb919bfbc',
      postalCode: '94511',
      cityName: 'Bethel Island',
      stateName: 'California',
      stateCode: 'CA',
      countyName: 'Contra Costa',
      countyCode: '013',
      latitude: 38.0266,
      longitude: -121.6425,
      accuracy: 4
  },
  {
    // _id: '5b5f6f52222be42bb919c008',
    postalCode: '94582',
    cityName: 'San Ramon',
    stateName: 'California',
    stateCode: 'CA',
    countyName: 'Contra Costa',
    countyCode: '013',
    latitude: 37.7636,
    longitude: -121.9155,
    accuracy: 4
  }
]