function editUser(state, action) {
  
  let editedUser = state.users
  
  for (let i = 0; i < state.users.length; i++) {
    if (state.users[i].email === action.email) {
      editedUser[i].name = action.name
      editedUser[i].phone = action.phone
      editedUser[i].email = action.email

      return editedUser

    } else {
      return false
    }
  }

  
}

export default editUser