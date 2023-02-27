import React from 'react';

function ToDo({text,todos,setTodos,todo}) {
    const deleteHandler=()=>{
        setTodos(todos.filter((el)=>el.id !== todo.id))
    }

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
            <div className="col-md-6">    
                <h3>{text}</h3>
            </div>
            <div className="col-md-6">
                 <button type="button" class="btn btn-danger " onClick={deleteHandler}>Sil</button>
            </div>
        </div>
        <hr style={{with:'250'}}></hr>
      </div>
    </div>
  )
}

export default ToDo
