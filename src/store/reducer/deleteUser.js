function deleteUser(state, action) {

  let newUsers = state.users.filter( user => {
    return (user.email !== action.email)
  })

  return newUsers

}

export default deleteUser