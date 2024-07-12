import React from 'react'

const Header = () => {
  return (
    <header className='header-container'>
      <div className='header-left'>
        <img className='troll-face' src="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png" alt="troll face" />
        <h1 className='header-title'>Meme Generator</h1>
      </div>
      <div className='header-right'>
        <p className='header-info'>React Course - Project 3</p>
      </div>
    </header>  )
}

export default Header