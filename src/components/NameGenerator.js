import React from 'react';

export default function NameGenerator() {
  return (
    <div className='nameGenerator'>
      <img src='/assets/background-cloud.svg' alt='bg' />
      <div className='nameGenerator__container'>
        <span className='nameGenerator__output'>NAME Here</span>
      </div>
      <div className='nameGenerator__button-container'>
        <button className='nameGenerator__button'>random</button>
      </div>
    </div>
  );
}
