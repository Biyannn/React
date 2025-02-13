import { useState, useEffect, useRef } from "react"
import Container from "./Container"
import { useForm } from "./useForm"

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

  const [count, setCount] = useState(1)
  const formDOM = useRef(null)

  const {text, setText, reset} = useForm()

  useEffect(() => {
    console.log('useEffect')
  }, [])

  const handleClick = () => {
    setCount(count + 1)
  } 

  const handleSubmit = () => {
    e.preventDefault()
        console.log('submit')
        console.log(e.target.username.value)
  }
  
  return (
    <>
      {list.map((item, index) => (
            <Container key={index}title={item.title} desc={item.desc} />
      ))}

      {console.log('render')}

      <h1>count: {count}</h1>
      <button onClick={handleClick}>klik</button>

      <form ref={formDOM} style={{marginTop: 24}} onSubmit={handleSubmit}>

        <input type="text"  name="username"/>
        <button type="submit"> Submit</button>
      </form>
      <button onClick={reset}>reset form</button>


      <br />
      <br />
      <br />
      <br />
      <input type="text" placeholder="text" value={text} onChange={(e) => {
        console.log('change', e.target.value )
        setText(e.target.value)
      }}/>

      <button onClick={() => {
        setText('')
      }}>reset</button>

      <p>{text}</p>
    </>
  )
}
export default App;