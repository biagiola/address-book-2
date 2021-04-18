import React, { useState, useEffect } from 'react'
import { useStateValue } from '../store/StateProvider'
import actionTypes from '../store/reducer/actionTypes'
import Contact from './Contact'
import EditContact from './EditContact'
import '../App.css'

const Search = ({ toggleState }) => {
  const [{ foundUser, userUpdatedSuccessfully }, dispatch] = useStateValue()
  const [notFoundMessage, setNotFoundMessage] = useState(false)
  const [searchPressed, setSearchPressed] = useState(false)
  const [searchUser, setSearchUser] = useState('')
  const [openEdit, setOpenEdit] = useState(false)
  const [openEmail, setOpenEmail] = useState('')

  const handleDelete = email => {
    console.log('handleDelete, email', email)
    dispatch({
      type: actionTypes.DELETE,
      email: email
    })

    setSearchUser('')
  }

  const toggleEdit = email => {
    console.log('toggleEdit')
    setOpenEdit(!openEdit)
    if(!openEdit) {
      setOpenEmail(email)
    } else {
      setOpenEmail(false)
    }
  }

  const handleSearch = e => {
    e.preventDefault()
    
    setSearchPressed(true)

    dispatch({
      type: actionTypes.SEARCH,
      user: searchUser
    })
  }

  /* handle not found contact error */
  useEffect(() => {
    console.log('********')
    console.log('useEffect')
    console.log('foundUser',foundUser )
    console.log('foundUser.name',foundUser.name )

    /* hide error */
    if(foundUser.id && searchPressed) {
      console.log('CASO 1**')
      setNotFoundMessage(false)
    } 
    
    /* show error after an editing */
    if(!foundUser && searchPressed ) {
      console.log('CASO 2**')
      setNotFoundMessage(true)
    }

    /* show error after an editing */
    if(foundUser.name === undefined &&  searchPressed ) {
      console.log('CASO 3**')
      setNotFoundMessage(true)
    }

    console.log('********')

  }, [foundUser])

 /*  useEffect(() => {
    console.log('foundUser', foundUser)
  }, [foundUser]) */


  return (
    toggleState === 1 
    ?
    <div className='search-container'>
      
      <h2>Enter a contact name</h2>
      
      <form onSubmit={ handleSearch }>
        <input 
          value={ searchUser }
          onChange={ e => setSearchUser(e.target.value) }
          autoFocus={true}
          className='search-input'
          placerholder='Enter name'
        />
        <button className='search-btn'>Search</button>
      </form>

      {/* Render User found */}
      {
        foundUser.name && !openEdit
        ? <Contact 
            key={ foundUser.id }
            user={ foundUser }
            toggleEdit={ toggleEdit }
            handleDelete={ handleDelete }
            parentComponent='SearchContact'
          /> 
        : <div></div>
      }

      {/* Edit User found */}
      {
        foundUser.name && openEdit 
        ? 
        <EditContact 
          key={ foundUser.id }  
          user={ foundUser }
          toggleEdit={ toggleEdit }
          openEdit={ openEdit }
          setOpenEdit={ setOpenEdit }
          parentComponent='SearchContact'
        /> : ''
      }

      {/* not user found */}
      {
        notFoundMessage && searchPressed /* && !foundUser.id */
        ? <div className='notFound'>User not found :'(</div> 
        : <div></div>
      }

    </div> 
    : 
    <div></div>
  )
}

export default Search
