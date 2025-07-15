import Tarefa from "./Tarefa"

 const ListaTarefas = ({ lista, alternarFeito, removerTarefa }) => {
  return (
    <ul>
      {lista.map((item, index) => (
        <Tarefa
          key={index}
          item={item}
          index={index}
          alternarFeito={alternarFeito}
          removerTarefa={removerTarefa}
        />
      ))}
    </ul>
  )
}
export default ListaTarefas
