import React from 'react'
import Memes from '../assets/memesData'

const Meme = () => {
  
  function getMeme() {    
    console.log(getRandomElement(Memes.data.memes))
  }

  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  return (
    <main className='meme-container'>
      <div>
        <div className='meme-input-fields'>
          <div className='top-text-block'>
            <label className='top-text' htmlFor="top-text">Top Text</label>
            <input className='top-field' type="text" id="top-text" name="top-text" placeholder="闭嘴 (shut up)" />
          </div>
          <div className='bottom-text-block'>
            <label className='bottom-text' htmlFor="bottom-text">Bottom Text</label>
            <input className='bottom-field' type="text" id="bottom-text" name="bottom-text" placeholder="拿走我的钱 (And take my money)" />
          </div>
        </div>

        <input className='meme-button' type="submit" placeholder="Get a new meme image 🖼️" onClick={getMeme} />
    </div>
    </main>
  )
}

export default Meme