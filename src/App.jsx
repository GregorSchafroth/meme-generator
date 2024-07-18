import { useState } from 'react'
import Header from './components/Header'
import Meme from './components/Meme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Meme />
      </div>
    </>
  )
}

export default App
