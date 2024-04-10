import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { addTodo } from "@/app/todoSlice";

export default function TodoInput() {
    const dispatch = useDispatch()
    const [value, setValue] = useState("")

    return (
        <div className='flex gap-x-2'>
          <Input value={value} placeholder="Add todo name" onChange={(e) => setValue(e.target.value)} />
          <Button onClick={() => {
            setValue("")
            dispatch(addTodo(value))
            }}>Add todo</Button>
        </div>
    )
}