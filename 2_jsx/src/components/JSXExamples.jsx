import React from 'react'

const JSXExamples = () => {
    const userName = "Carlos";
    const user = {
        name: "Ana",
        lastName: "Sousa"
    }

    function getGreeting(name) {
        return `Olá ${name}`;
    }

const userIsLoggedIn=false;

const userRole="admin";

const users=[
    {id:1, name:"Helder"},
    {id:2, name:"João"},
    {id:3, name:"Rita"},

]

    return (
        <div>
            {/**Básicos*/}
            <h2>Coloca aqui o Conteúdo que o usuario vai ver</h2>
            {/** Listando dados do usuario */}
            <p>O nome do usuario é {userName}</p>
            <p>Usuario: {user.name} {user.lastName}</p>
            <p>{2 + 2}</p>
            <p>{getGreeting(userName)}</p>
            <p>{getGreeting("Luis")}</p>
            {/**Diferença no HTML*/}
            <div className="alguma-coisa">Este cara</div>
            <div className="teste">ok</div>
            <button onClick={() => alert("Teste")}>clique aqui</button>
            <input type="text" name="" id="" placeholder='Digite Algo' />

            {/** Renderização condicional */}
            {userIsLoggedIn? (
                <div><p>Caso:Está logado</p></div>
            ) : (
                <div><p>Caso:Não Está logado</p></div>
            ) }
           
            <p>{userRole ==="admin" &&  "Você é admin" }</p>

            {/**Renderização de listas */}
            <div>
                <ul>
                    {users.map((user)=>(
                        <li key={user.id}>
                            {user.id} - {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default JSXExamples