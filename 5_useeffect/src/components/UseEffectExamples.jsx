import {useState, useEffect} from 'react';

const UseEffectExamples = () => { 
// sem dependencias
useEffect(()=>{
    console.log("Rodou UE1");
});



// com dependencias vazias / array dep. vazio
useEffect(()=>{
     console.log("Rodou UE2");
},[]);

// useState ativa a re-renderização
const [count,setCount]=useState(0);
const [count2,setCount2]=useState(0);

// com dependencias
useEffect(()=>{
     console.log("Rodou E3");
},[count,count2]);
 
  return <div>
    <p>{count}</p>
     <button onClick={()=> setCount(count+1)}>Aumentar contagem</button>
     <button onClick={()=> setCount2(count+1)}>Aumentar contagem</button>
   UseEffectExamples</div> 
  
};

export default UseEffectExamples;