
const Tarefa = ({item, index, alternarFeito, removerTarefa}) => {
  return(
    <li 
      className="flex justify-between items-center mb-2 bg-pink-100 p-2 
        rounded-lg shadow-sm transition-all duration-300 hover:scale-105
        hover:bg-pink-200"
    >
      <button 
        onClick={() => alternarFeito(index)}
        className={`text-left flex-1 text-lg transition ${
          item.feito ? "line-through text-pink-900" : "text-pink-500"
        }`}
      >
        {item.texto}
      </button>

       <button
        onClick={() => removerTarefa(index)}
        className="text-pink-500 hover:text-pink-700 text-xl font-bold 
          ml-4 transition"
      >
        ❌
      </button>

    </li>
  )
}
export default Tarefa
