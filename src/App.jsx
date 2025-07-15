
import { useState, useEffect } from "react"


const App = () => {

  const [tarefa, setTarefa] = useState("")
  const [lista, setLista] = useState(() => {
    const dadosSalvos = localStorage.getItem("minhaLista")
    return dadosSalvos ? JSON.parse(dadosSalvos) : []
  })

  useEffect(() => {
  localStorage.setItem("minhaLista", JSON.stringify(lista))
}, [lista])


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

  const removerTarefa = (index) => {
    const novaLista = lista.filter((_,i) => i !== index)
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
            className="flex justify-between items-center mb-2 bg-orange-100 
              p-2 rounded-lg shadow-sm transition-all duration-300 
              hover:scale-105 hover:bg-orange-200"
          >
            
            <span
              onClick={() => alternarFeito(index)}
              className={`cursor-pointer text-lg ${
                item.feito ? "line-through text-gray-500" : "text-black"
              }`}
            >
              {item.texto}
            </span>

            <button 
              onClick={() => removerTarefa(index)}
              className="text-red-500 hover:text-red-700 text-xl font-bold 
                ml-4 transition">
              Excluir
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  )
}
export default App
