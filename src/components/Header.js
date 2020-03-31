import React from 'react';

export default function Header() {
  return (
    <header className='header'>
      <h1>Island Name Generator</h1>
      &nbsp;
      <a
        className='header__link'
        href='https://github.com/pariyawit'
        target='_blank'
        rel='noopener noreferrer'
      >
        by TimmyJ
      </a>
    </header>
  );
}
