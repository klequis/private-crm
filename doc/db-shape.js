{
  firstName: 'string'
  lastName: 'string'
  company: 'string'
  jobTitle: 'string'
  email: [
    {
      address: 'string',
      label: ['home', 'work', 'other']
    }
  ]
  phone: [
    {
      number: 'string',
      label: ['mobile', 'home', 'office'],
    }
  ]
  address: [
    {
      streetAddress1: 'string',
      streetAddress2: 'string',
      city: 'string',
      state: 'string',
      poBox: 'string',
      label: ['home', 'work', 'other']
    }
  ]
  notes: [
    {
      date: 'date',
      note: 'text',
    }
  ]
  relationshipStrength: 'number' // 1 to 4
  connectionFrom: [
    'TvcMember',
    'Friend',
    'Etc'
  ]
  socialMedia: {
    linkedIn: ''
  }
  haveMet: 'boolean'
  wantToMeet: 'boolean'
  active: 'boolean'
}
