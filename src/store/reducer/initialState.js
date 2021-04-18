const initialState = {
  users: [
    {
      id: 1,
      name: 'david',
      phone: '0972194552',
      email: 'davidbiagiola5@gmail.com'
    }, 
    {
      id: 2,
      name: 'Agustin Brammantti',
      phone: '0971194552',
      email: 'agustinbramma5@gmail.com'
    },
    {
      id: 3,
      name: 'Leo Schmidt',
      phone: '0971194552',
      email: 'leoschmidt@gmail.com'
    }
  ],
  foundUser: {
    id: null,
    name: '',
    phone: '',
    email: ''
  },
  userAddedSuccessfully: null,
  userUpdatedSuccessfully: null,
  userFoundSuccessfully: null,

  wrongInputs: {
    name: null,
    phone: null,
    email: null
  }
}

export default initialState