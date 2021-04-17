import React, { useState, useEffect } from 'react'
import { useStateValue } from '../store/StateProvider'
import actionTypes from '../store/reducer/actionTypes'
import EditContact from './EditContact'
import Contact from './Contact'
import '../App.css'

const Contacts = ({ toggleState }) => {
  const [{ users }, dispatch] = useStateValue()
  const [updateComponent, setUpdateComponent] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openEmail, setOpenEmail] = useState('')

  const handleDelete = email => {
    dispatch({
      type: actionTypes.DELETE,
      email: email
    })
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

  return (
    toggleState === 0 
    ?
    <div>
      <h2>Contact List</h2>
      {
        users.map( user => (
          openEdit && user.email === openEmail
        ?
        <EditContact 
          key={ user.id }  
          user={ user }
          toggleEdit={ toggleEdit }
          openEdit={ openEdit }
          setOpenEdit={ setOpenEdit }
          parentComponent='Contacts'
        />
        :
        <Contact 
          key={ user.id }
          user={ user }
          toggleEdit={ toggleEdit }
          handleDelete={ handleDelete }
          parentComponent='Contacts'
        />
      
      ))
      }
    </div> : <div></div>
  )
}

export default Contacts
 