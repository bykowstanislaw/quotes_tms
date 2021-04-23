import React, {useState,useEffect} from 'react'
import axios from 'axios'



const App = () =>{

const [quote,setQuote]=useState()
const [click, setClick] = useState(false)
const [author,setAuthor]=useState()

const handleClick= () =>{
  setClick(!click)
}

useEffect(() => {
  axios.get('https://api.quotable.io/random')
  .then((data)=>{
    setQuote(data.data.content)
    setAuthor(data.data.author)
  })
},[click] )

  return (
    <>
    <div>Start your day w/ a motivation quote</div>
    <button onClick={handleClick}>Let's go dude</button>
    <div>{quote}</div>
    <div><b>{author}</b></div>
    </>
  )
}

export default App