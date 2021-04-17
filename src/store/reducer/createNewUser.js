function createNewUser(state, action) {
  console.log('hola', state, action)

  let newUser = {
    id: action.id,
    name: action.name,
    phone: action.phone,
    email: action.email
  }

  for (let x = 0; x < state.users.length; x++) {
    if(state.users[x].name == newUser.name) {
      alert('Name user already exists')
      state.wrongInputs.name = true
    } else {
      state.wrongInputs.name = false
    }

    if(state.users[x].phone == newUser.phone) {
      alert('Phone user already exists')
      state.wrongInputs.phone = true
    } else {
      state.wrongInputs.phone = false
    }

    if(state.users[x].email == newUser.email) {
      alert('Email user already exists')
      state.wrongInputs.email = true
    } else {
      state.wrongInputs.email = false
    }

    if(state.wrongInputs.name ||
       state.wrongInputs.phone ||
       state.wrongInputs.email
      ) {
        return {
          ...state,
          userAddedSuccessfully: false
        }
      }
  }
  
  state.users.push(newUser)
  alert('Success!! Contact was added')
}


export default createNewUser