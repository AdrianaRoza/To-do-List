export default function Formulario({ tarefa, setTarefa, adicionarTarefa }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite uma tarefa..."
        className="flex-1 px-3 py-2 text-pink-300 border border-pink-300 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />
      <button
        onClick={adicionarTarefa}
        className="bg-pink-500 text-gray-300 px-4 py-2 rounded-lg hover:bg-pink-600 transition"
      >
        Adicionar
      </button>
    </div>
  )
}
