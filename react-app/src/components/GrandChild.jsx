import React, { useContext } from 'react'
import { UserContext } from '../context/userContext'

const GrandChild = () => {
    const {name} = useContext(UserContext);
  return (
    <div>
        This is Grand Child.
        <p>name is {name}</p>
    </div>
  )
}

export default GrandChild