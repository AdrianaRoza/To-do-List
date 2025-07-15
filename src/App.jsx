import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import ListaTarefas from "./components/ListaTarefas"

export default function App() {
  const [tarefa, setTarefa] = useState("")
  const [lista, setLista] = useState(() => {
    const dadosSalvos = localStorage.getItem("minhaLista")
    return dadosSalvos ? JSON.parse(dadosSalvos) : []
  })

  useEffect(() => {
    localStorage.setItem("minhaLista", JSON.stringify(lista))
  }, [lista])

  const adicionarTarefa = () => {
    if (tarefa.trim() === "") return
    setLista([...lista, { texto: tarefa, feito: false }])
    setTarefa("")
  }

  const alternarFeito = (index) => {
    const novaLista = [...lista]
    novaLista[index].feito = !novaLista[index].feito
    setLista(novaLista)
  }

  const removerTarefa = (index) => {
    const novaLista = lista.filter((_, i) => i !== index)
    setLista(novaLista)
  }

  return (
    <div 
      className="min-h-screen bg-pink-200 p-4 flex items-center 
        justify-center">
      <div 
        className="bg-neutral-600 shadow-xl rounded-2xl p-6 w-full max-w-md 
          transition-all">
        <h1 
          className="text-3xl font-bold text-pink-400 mb-6 text-center">
           Minha Lista de Tarefas
        </h1>

        <Formulario
          tarefa={tarefa}
          setTarefa={setTarefa}
          adicionarTarefa={adicionarTarefa}
        />

        <ListaTarefas
          lista={lista}
          alternarFeito={alternarFeito}
          removerTarefa={removerTarefa}
        />
      </div>
    </div>
  )
}
