//componente pai
import { useState } from 'react' 

//importando componente filho
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import PropsExample from './components/PropsExample'
import './App.css'

function App() { 
  return (
    <>
      <h1>Hello world</h1>
      {/** uiliazando o componente importado no JSX */}
      <FunctionalComponent/> 
      <ClassComponent/>
      <PropsExample nome="Mateus" idade={22}/> 
    </>
  )
}

export default App
