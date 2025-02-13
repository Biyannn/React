import { useState } from "react"
import Container from "./Container"

const App = () => {
  const list = [
    {
      title: 'Hello', 
      desc: 'World'
    }, 

    {
      title: 'Hello2', 
      desc: 'World2'
    }, 

    {
      title: 'Hello3', 
      desc: 'World3'
    }
  ]

  const [, setCount] = useState(1)
  const handleClick = () => {
    setCount(count + 1)
  }
  
  return (
    <>
      {list.map((item, index) => (
            <Container key={index}title={item.title} desc={item.desc} />
      ))}
      <h1>count: {count}</h1>
      <button onClick={handleClick}>klik</button>
    </>
  )
}
export default App;