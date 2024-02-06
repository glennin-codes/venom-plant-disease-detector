import React from 'react'
interface Props{
  text:string
}
function SmallCard({ text }: Props) {
  return (
    <div className='rounded-md  text-gray-500 md:p-4  p-2 border-l border-b border-green-500'>
      {text}
    </div>
  );
}
export default SmallCard;
 

export const image = () => {
  return (
    <div>index</div>
  )
}

