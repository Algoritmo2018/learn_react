import {useState} from 'react'

// useState é um hook
const UseStateComponent = () => {
    // variavel de consulta, e uma de alteração, inicio o hook
    const [count,setCount]= useState(0);
   
    const increment=()=>{
        setCount(count+1);
        console.log(count);
    }
  return (
    <div>
        <h2>contador</h2>
        <p>Você clicou {count} vezes</p>
        <button onClick={increment}>Incrementar</button>
    </div>
  )
}

export default UseStateComponent