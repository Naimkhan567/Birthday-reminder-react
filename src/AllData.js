import React from 'react'

const AllData = ({ img, title, age }) => {
  return (
    <div className='main'>
      <img src={img} alt='' />
      <div className='text'>
        <h1>{title}</h1>
        <h3>{age}</h3>
      </div>
    </div>
  )
}

export default AllData
