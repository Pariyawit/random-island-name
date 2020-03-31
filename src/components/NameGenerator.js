import React, { useState } from 'react';
import { names } from '../name.js';

export default function NameGenerator() {
  const [name, setName] = useState(
    names[Math.floor(Math.random() * names.length)]
  );

  const formatName = name =>
    name
      .toLowerCase()
      .split(' ')
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

  const handleClick = e => {
    setName(names[Math.floor(Math.random() * names.length)]);
  };

  return (
    <div className='nameGenerator'>
      <img src='/assets/background-cloud.svg' alt='bg' />
      <div className='nameGenerator__container'>
        <span className='nameGenerator__output'>{formatName(name)}</span>
      </div>
      <div className='nameGenerator__button-container'>
        <button
          className='nameGenerator__button'
          onClick={handleClick}
        ></button>
      </div>
    </div>
  );
}
