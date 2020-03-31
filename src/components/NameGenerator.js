import React from 'react';
import { names } from '../name.js';

export default function NameGenerator() {
  let name = names[Math.floor(Math.random() * names.length)];

  name = name
    .toLowerCase()
    .split(' ')
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  return (
    <div className='nameGenerator'>
      <img src='/assets/background-cloud.svg' alt='bg' />
      <div className='nameGenerator__container'>
        <span className='nameGenerator__output'>{name}</span>
      </div>
      <div className='nameGenerator__button-container'>
        <button className='nameGenerator__button'></button>
      </div>
    </div>
  );
}
