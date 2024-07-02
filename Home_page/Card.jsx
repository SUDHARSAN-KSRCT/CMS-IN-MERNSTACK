import React, { useState } from 'react';

const Card = ({ element }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`flex flex-col gap-2 justify-center items-center w-[230px] p-6 rounded-lg ${show ? 'shadow-green-300' : 'shadow-lg'} bg-gray-800 text-white`}
      onClick={() => setShow(!show)}
    >
      <div className='text-2xl rounded-full bg-gray-700 p-4'>{element.img}</div>
      <h1 className='text-xl font-bold'>{element.heading}</h1>
      <p className='text-gray-400 text-center'>{element.description}</p>
    </div>
  );
};

export default Card;