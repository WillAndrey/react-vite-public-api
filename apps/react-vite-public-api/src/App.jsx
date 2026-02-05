import React from "react";
import Produto from "./Produto";

function App() {

  const [dados, setDados] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  async function handleClick(event){
    try {
        setLoading(true)
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
      
        if (!response.ok) {
          throw new Error(`Http error! status: ${response.status}`)
        }
          const json = await response.json()
          setDados(json)
          setLoading(false)
        } catch  (error) {
            console.log(`Um erro ocorreu enquanto  o fetch estava capturando os dados:${error.message}`)
        }
  }

  return (
    <div style={{margin: '15px'}}>
        <button style={{backgroundColor: '#302EA3', color: 'white', margin: '5px'}} onClick={handleClick}>notebook</button>
        <button style={{backgroundColor: '#302EA3', color: 'white', margin: '5px'}} onClick={handleClick}>smartphone</button>
        <button style={{backgroundColor: '#302EA3', color: 'white', margin: '5px'}} onClick={handleClick}>tablet</button>
        {loading && <p>Carregando...</p>}
        {!loading && dados && <Produto dados={dados}/>}
    </div>
  )
}

export default App