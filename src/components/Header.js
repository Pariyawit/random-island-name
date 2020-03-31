import React from 'react';

export default function Header() {
  return (
    <header className='header'>
      <h1>Island Name Generator</h1>
      &nbsp;
      <a
        className='header__link'
        href='https://www.linkedin.com/in/pariyawit/'
        target='_blank'
        rel='noopener noreferrer'
      >
        by TimJ
      </a>
      <img
        src='/assets/button-random-active.svg'
        style={{ display: 'none' }}
        alt='button'
      />
    </header>
  );
}
