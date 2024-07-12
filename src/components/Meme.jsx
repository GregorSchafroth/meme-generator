import React from 'react'

const Meme = () => {
  return (
    <main className='meme-container'>
      <form>
        <div className='meme-input-fields'>
          <div className='top-text-block'>
            <label className='top-text' for="top-text">Top Text</label>
            <input className='top-field' type="text" id="top-text" name="top-text" value="闭嘴 (shut up)" />
          </div>
          <div className='bottom-text-block'>
            <label className='bottom-text' for="bottom-text">Bottom Text</label>
            <input className='bottom-field' type="text" id="bottom-text" name="bottom-text" value="拿走我的钱 (And take my money)" />
          </div>
        </div>

        <input className='meme-button' type="submit" value="Get a new meme image 🖼️" />
    </form>
    </main>
  )
}

export default Meme