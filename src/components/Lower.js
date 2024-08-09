import React from 'react'

function Lower () {
  return (
   
      <div className='last'>
    <div>
        <p className='filter'>Filter</p>
    </div>
    <div>
        <p className='line1'></p>
    </div>
    <div className='type1'>
        <p>Created by</p>
        <input type="text " placeholder='All' className='input1' />
    </div>
    <div className='type2'>
        <p>Published date</p>
        <input type="text" placeholder='Select date' className='input2'/>
    </div>
    <div className='type3'>
        <p>Search</p>
        <input type="Search" placeholder='Type here' className='input3' />
    </div>
    
    </div>
  )
}

export default Lower;
