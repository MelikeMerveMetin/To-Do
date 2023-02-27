import React from 'react'
import ToDo from './ToDo'

function ToDoList({todos, setTodos}) {
  return (
    <div>
      <ul>
{todos.map((todo=>(

<ToDo
text={todo.text}
key={todo.id}
todos={todos}
setTodos={setTodos}
todo={todo}
/>

)))}


      </ul>
    </div>
  )
}

export default ToDoList
