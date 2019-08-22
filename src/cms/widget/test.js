import React from 'react'

const TestControl = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  }

  return(
    <input 
      style={{background: 'blue', color: 'white'}}
      type="text" 
      onChange={handleChange}
      value={props.value}
    />
  )
}

const TestPreview = (props) => {
  return(
    <div style={{background: 'red', color: 'white'}}>
      this is the preview: {props.value}
    </div>
  )
}

export { TestControl, TestPreview }