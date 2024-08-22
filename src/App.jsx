import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'
import { useContext } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // if you want to use the context :
  // wrap anyone that wants to use the teleported value inside a provider.

  return (
    <div>
      <CountContext.Provider value={count}>
          <Count cout={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}
// I dont want count to be given as a prop here
//  we successfully got rid of prop drilling
function Count( {setCount}){
  return <div>
    <CountRenderer />
    <Buttons setCount={setCount} />
  </div>
}

// count should be directly reaching here
function CountRenderer(){
  const count=useContext(CountContext);
  return <div>
    {count}
  </div>
}

// count should be directly reaching here
function Buttons({setCount}){
  const count =useContext(CountContext);
  return <div>
    <button onClick={()=>
      setCount(count +1)
    } >Increase</button>
    <button onClick={()=>
      setCount(count -1)
    } >Decrease</button>
  </div>
}
export default App
