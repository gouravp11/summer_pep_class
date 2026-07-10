import React from 'react'
import Parent from './Parent'

const GrandParent = () => {
  return (
    <div>
        This is Grand parent.
        <Parent/>
    </div>
  )
}

export default GrandParent