import React from 'react'
import Memes from '../assets/memesData'

const Meme = () => {
  
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: ''
  })

  console.log(meme.topText, meme.bottomText)

  function getMeme() {    
    setMeme((prevState) => ({
      ...prevState,
      randomImage: getRandomElement(Memes.data.memes).url}))
  }

  function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  function handleChange(event){
    const {name, value} = event.target
    setMeme(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }
  
  return (
    <main className='meme-container'>
      <div>
        <div className='meme-input-fields'>
          <div className='top-text-block'>
            <label className='topText' htmlFor="topText">Top Text</label>
            <input className='topField' type="text" id="topText" name="topText" placeholder="text" onChange={handleChange} />
          </div>
          <div className='bottom-text-block'>
            <label className='bottomText' htmlFor="bottomText">Bottom Text</label>
            <input className='bottomField' type="text" id="bottomText" name="bottomText" placeholder="text" onChange={handleChange} />
          </div>
        </div>
        <input className='meme-button' type="submit" placeholder="Get a new meme image 🖼️" onClick={getMeme} />
    </div>
    <div className='meme'>
      <div className='img-container'><img className='meme-img' src={meme.randomImage} alt="" /></div>
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </div>
    </main>
  )
}

export default Meme