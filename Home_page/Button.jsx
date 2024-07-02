import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text }) => {
  return (
    <div className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-xl'>
      <Link to='/about-us'>{text}</Link>
    </div>
  );
};

export default Button;