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
      
      <p>Tarefa Digitada: {tarefa}</p>
    </div>
  )
}
export default App
