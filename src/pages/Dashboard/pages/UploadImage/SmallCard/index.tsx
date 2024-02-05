import React from 'react'
interface Props{
  text:string
}
function SmallCard({text}:Props) {
  return (
    <div
    className='rounded-sm shadow-md  text-gray-500 p-4  '
    >{text} </div>
  )
}

export default SmallCard;
 

export const image = () => {
  return (
    <div>index</div>
  )
}

