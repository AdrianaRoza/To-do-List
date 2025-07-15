import { useState } from "react"

const App = () => {

  const [tarefa, setTarefa] = useState("")
  const [lista, setLista] = useState([])

  const adicionarTarefa = () =>{
    if(tarefa.trim() === "") return // evita tarefa vazia
    setLista([...lista, {texto: tarefa, feito: false}])
    setTarefa("")
  }

  const alternarFeito = (index) => {
    const novaLista = [...lista]
    novaLista[index].feito = !novaLista[index.feito]
    setLista(novaLista)
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
          <li 
            key={index}
            onClick={() => alternarFeito(index)}
            className={`cursor-pointer text-lg ${
              item.feito ? "line-through text-gray-500" : "text-black"
            }`}
          >
              {item.texto}
          </li>
        ))}
      </ul>
      
    </div>
  )
}
export default App
