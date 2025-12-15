import {useState} from 'react'

const EventHandlingExamples = () => {
    const handleClick=()=>{
alert("Testando");
    };

    const handleGreet=(name)=>{
        alert(`Olá ${name}`);
    };
    const [name,setName]= useState();

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`enviado! ${name}`);
    };

  return (
    <div>
        <button onClick={()=>alert("oi")}>clique aqui</button>
        <button onClick={handleClick}>clique aqui2</button>
              <br />
                <button onClick={()=>handleGreet("Ana")}>Dizer olá Ana</button>
        <button onClick={()=>handleGreet("Pedro")}>Dizer olá Pedro</button>
<br />
<form onSubmit={handleSubmit}>
    <input type="text" name="" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Digite o seu nome' id="" />
<input type="submit" value="Enviar" />
</form>
    </div>
  );
};

export default EventHandlingExamples