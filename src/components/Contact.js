import React, { useEffect, useState } from 'react'
import { useStateValue } from '../store/StateProvider'
import { Delete, Edit } from '@material-ui/icons'

const Contact = ({ user, toggleEdit, handleDelete, parentComponent }) => {
  const [{ foundUser }] = useStateValue()
  const [currentUser, setcurrentUser] = useState('')

  /* useEffect(() => {
    if(parentComponent === 'SearchContact') {
      setcurrentUser(foundUser)
    } else {
      setcurrentUser(user)
    }
  }, []) */

  useEffect(() => {}, [foundUser])
  return (
    <div key={user.id} className='card'>
      <div className='card-content'>
        <div>{ user.name }</div>
        <div>{ user.email }</div>
        <div>{ user.phone }</div>
      </div>
      <div className='card-options'>
        <div
          onClick={ () => toggleEdit(user.email)}
          className='card-edit'
        >
          <Edit/>
        </div>
        <div 
          onClick={ () => handleDelete(user.email)} 
          className='card-delete'
        >
          <Delete/>
        </div>
      </div>  
    </div>
  )
}

export default Contact
