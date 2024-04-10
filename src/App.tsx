import TodoInput from './components/todo-input'
import Todos from './components/todos'

export default function App() {
  return (
      <div className='max-w-2xl mx-auto my-10 flex flex-col gap-y-4 px-4'>
        <TodoInput />
        <Todos />
      </div>
  )
}
