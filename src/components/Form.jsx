import React from 'react'

const Form = (props) => {
  return (
    <div>

      <form action="" className='form'>
        <span >{props.label}</span>
        <input type={props.type} />
        
      </form>
    </div>
  )
}

export default Form