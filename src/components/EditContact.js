import React, { useState, useEffect } from 'react'
import { useStateValue } from '../store/StateProvider'
import actionTypes from '../store/reducer/actionTypes'
import { Delete, Edit } from '@material-ui/icons'

const EditContact = ({ toggleEdit, openEdit, user, setOpenEdit, parentComponent }) => {
  const [{ foundUser }, dispatch] = useStateValue()
  const [currentUser, setcurrentUser] = useState('')
  const [name, setName] = useState(user.name)
  const [phone, setPhone] = useState(user.phone)
  const [email, setEmail] = useState(user.email)

  const handleEdit = e => {
    e.preventDefault()
    setOpenEdit(!openEdit)
    
    dispatch({
      type: actionTypes.EDIT,
      name,
      phone,
      email
    })
  }

  /* useEffect(() => {
    if(parentComponent === 'SearchContact') {
      setcurrentUser(foundUser)
    } else {
      setcurrentUser(user)
    }
  }, []) */

  return (
    <div key={user.email} className='card'>
      <div className='card-content-edit'>
        <form onSubmit={e => handleEdit(e)}>
          <input 
            onChange={e => setName(e.target.value)}
            value={name}></input>
          
          <input 
            onChange={e => setPhone(e.target.value)}
            value={phone}></input>
          
          <input 
            onChange={e => setEmail(e.target.value)}
            value={email}></input>
          
          <div className='card-options-btns'>
            <button className='card-option-btn-update'>Update</button>
            <div 
              className='card-option-btn-cancel'
              onClick={() => setOpenEdit(false)}
            >Cancel</div>
          </div>
        </form>
      </div>
      
      <div className='card-options'>
        <div className='card-edit'>
          <Edit
            onClick={ () => toggleEdit(user.email)}
          />
        </div>
        <div className='card-delete'>
          <Delete/>
        </div>
      </div>  
    </div>
  )
}

export default EditContact
