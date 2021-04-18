import actionTypes from './actionTypes'
import createNewUser from './createNewUser'
import editUser from './editUser'
import deleteUser from './deleteUser'
import searchUser from './searchUser'

const reducer = (state, action) => {

  switch(action.type) {

    case actionTypes.CREATE:
      createNewUser(state, action)
      return {
        ...state,
        userAddedSuccessfully: true
      }

    case actionTypes.EDIT:
      let editedUsers = editUser(state, action)
      return {
        ...state,
        users: editedUsers,
        foundUser: {
          name: action.name,
          phone: action.phone,
          email: action.email
        }
      }

    case actionTypes.DELETE:
      return {
        ...state,
        users: deleteUser(state, action),
        foundUser: {
          id: null,
          name: '',
          phone: '',
          email: ''
        }
      }

    case actionTypes.SEARCH:
      return {
        ...state,
        foundUser: searchUser(state, action)
      }
    
    default:
      return state
  }
}

export default reducer;
