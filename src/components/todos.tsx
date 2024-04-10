import { useSelector } from 'react-redux'
import {
  Table,
  TableBody,
  TableCaption,
} from "@/components/ui/table"
import Todo from './todo'
import { TypeTodo } from '@/type/todo'

export default function Todos() {
    const todos = useSelector((state: any) => state.todos)

    return (
        <>
         <Table>
          <TableCaption>A list of your todos.</TableCaption>
          <TableBody>
            {todos.map((todo: TypeTodo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </TableBody>
         </Table>
        </>
    )
}