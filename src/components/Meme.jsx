import React from "react"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
  
  return (
    <main className='meme-container'>
      <div>
        <div className='meme-input-fields'>
          <div className='top-text-block'>
            <label className='topText' htmlFor="topText">Top Text</label>
            <input className='topField' type="text" id="topText" name="topText" placeholder="text" value={meme.topText} onChange={handleChange} />
          </div>
          <div className='bottom-text-block'>
            <label className='bottomText' htmlFor="bottomText">Bottom Text</label>
            <input className='bottomField' type="text" id="bottomText" name="bottomText" placeholder="text" value={meme.bottomText} onChange={handleChange} />
          </div>
        </div>
        <input className='meme-button' type="submit" placeholder="Get a new meme image 🖼️" onClick={getMemeImage} />
    </div>
    <div className='meme'>
      <div className='img-container'><img className='meme-img' src={meme.randomImage} alt="" /></div>
      <h1 className="meme--text top">{meme.topText}</h1>
      <h1 className="meme--text bottom">{meme.bottomText}</h1>
    </div>
    </main>
  )
}