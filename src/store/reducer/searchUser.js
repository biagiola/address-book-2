function searchUser(state, action) {
  let foundUser = {};

  for (let i = 0; i < state.users.length; i++) {
    if (state.users[i].name === action.user) {
      foundUser = {
        id: state.users[i].id,
        name: state.users[i].name,
        phone: state.users[i].phone,
        email: state.users[i].email
      }
      break
    }
  }

  return foundUser
}
  
export default searchUser