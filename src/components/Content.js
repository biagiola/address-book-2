import React, { useState, useEffect } from 'react'
import Contacts from './Contacts'
import SearchContact from './SearchContact'
import Add from './AddContact'

const Contents = ({toggleState}) => {
  useEffect(() => {
  }, [toggleState])

  return (
    <div className="content-tabs">
      <Contacts toggleState={toggleState} />
      <SearchContact toggleState={toggleState} />
      <Add toggleState={toggleState}/>
    </div>
  )
}

export default Contents
