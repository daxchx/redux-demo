import { TableCell, TableRow } from "@/components/ui/table"
import { TypeTodo } from "@/type/todo"
import { Button } from "./ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { Input } from "./ui/input"
import { useDispatch } from "react-redux"
import { deleteTodo, updateTodo } from "@/app/todoSlice"


export default function Todo({todo}: {todo: TypeTodo}) {
    const dispatch = useDispatch()

    const [editing, setEditing] = useState(false)

    return (
        <>
            <TableRow>
                <TableCell className="flex justify-between items-center gap-x-2">
                  <div className="flex items-center gap-x-4">
                    <Checkbox 
                      checked={todo.completed} 
                      onCheckedChange={
                        (checked: boolean) => dispatch(updateTodo({
                          ...todo, completed: checked
                        }))
                      } 
                    />
                    {!editing ? (
                      <div className="multiline-ellipsis">{todo.title}</div>
                    ) : (
                      <Input
                        className=""
                        value={todo.title} 
                        onChange={(e) => dispatch(updateTodo({...todo, title: e.target.value}))} 
                      />
                    )}
                  </div>
                  <div className="flex gap-x-2">
                    {editing ? (
                      <Button 
                        onClick={() => setEditing(false)}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button 
                        variant="outline" 
                        onClick={() => setEditing(true)}
                      >
                        Edit
                      </Button>
                    )}
                    <Button 
                      variant="ghost" 
                      onClick={() => dispatch(deleteTodo(todo.id))}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
        </>
    )
}