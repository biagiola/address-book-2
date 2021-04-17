import React, { useState, useEffect } from 'react'
import { useStateValue } from '../store/StateProvider'
import actionTypes from '../store/reducer/actionTypes'
import {validate} from 'react-email-validator'
import '../App.css'

const AddContact = ({ toggleState }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [{userAddedSuccessfully, wrongInputs}, dispatch] = useStateValue()
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log('data', name, phone, email)

    if(validate(email)) {
      dispatch({
        type: actionTypes.CREATE,
        id: Math.random(),
        name: name,
        phone: phone,
        email: email
      })
    } else {
      alert('Email format is wrong')
    }
  }

  useEffect(() => {
    if (userAddedSuccessfully) {
      setName('')
      setPhone('')
      setEmail('')
    }
  }, [userAddedSuccessfully])

  return (
    toggleState === 2 
    ?
    <form id="contact" onSubmit={ handleSubmit }>
      <h2>Add a new contact</h2>
      <div className="contact-inputs">
        <input
          style={ wrongInputs.name ? { borderColor: 'red' } : {} }
          type="text" 
          name="person" 
          id="name"
          value={ name }
          onChange={e => setName(e.target.value)} 
          placeholder="David Biagiola" 
        />
        <input
          style={ wrongInputs.phone ? { borderColor: 'red' } : {} }
          type="number" 
          name="phone" 
          id="name"
          value={ phone }
          onChange={ e => setPhone(e.target.value) }  
          placeholder="0972194552" 
        />
        <input
          style={ wrongInputs.email ? { borderColor: 'red' } : {} }
          type="text" 
          name="email" 
          id="name" 
          value={ email }
          onChange={ e => setEmail(e.target.value) }
          placeholder="davidbiagiola5@gmail.com" 
        />
      </div>
      <button 
        className="contact-button"
        type="submit" 
      >Send</button>
    </form> 
    : 
    <div></div>
  )
}

export default AddContact
