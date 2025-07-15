import { useState } from "react"

const App = () => {

  const [tarefa, setTarefa] = useState("")
  const [lista, setLista] = useState([])

  const adicionarTarefa = () =>{
    if(tarefa.trim() === "") return // evita tarefa vazia
    setLista([...lista, tarefa])
    setTarefa("")
  }

  return(
    <div>

      <h1>Minha Lista de Tarefas</h1>

      <input 
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite uma Tarefa..." 
      />

      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {lista.map((item, index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
      
    </div>
  )
}
export default App
