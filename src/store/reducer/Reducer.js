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
      return {
        ...state,
        users: editUser(state, action),
        foundUser: { 
          name: action.name,
          phone: action.phone,
          email: action.email
        },
        userUpdatedSuccessfully: true
      }

    case actionTypes.DELETE:
      return {
        ...state,
        users: deleteUser(state, action),
        foundUser: {
          id: '',
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
