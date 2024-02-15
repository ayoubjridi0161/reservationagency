import React from 'react'

const BoxConatainer = (props) => {
  return (
    <div className='flex flex-col  items-center justify-center'>
        <img src={props.image} alt='box1' width={props.width} className='w-24 h-full object-cover'/>
        <h2 className='font-lalezar text-2xl'>{props.title}</h2>
        <p className=' font-halant text-lg text-gray-500'>{props.description}</p>

    </div>
  )
}

export default BoxConatainer