import { useState } from "react"

const App = () => {

  const [tarefa, setTarefas] = useState("")

  return(
    <div>

      <h1>Minha Lista de Tarefas</h1>

      <input 
        type="text"
        value={tarefa}
        onChange={(e) => setTarefas(e.target.value)}
        placeholder="Digite uma Tarefa..." 
      />

      <p>Tarefa Digitada: {tarefa}</p>
    </div>
  )
}
export default App
