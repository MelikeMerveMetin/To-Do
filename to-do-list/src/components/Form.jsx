import React from 'react'

function Form({inputText,setInputText ,todos,setTodos }) {

    const submitTodoHandler=(e)=>{
        e.preventDefault();
        setTodos([
            ...todos,//todosun içerisindekileri al alttakileri ekle
            {   text:inputText,
                 id:Math.random()}
        ]);

setInputText("");
    }
  return (
    <div>
        <h1 className='mt-4'>YAPILACAKLAR LİSTEM</h1>
      <div className="container cont" style={{backgroundColor:'black'}}>
       <div className="row">
        <div className="col-md-12">
        <form>
           <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">To Do List</span>
              </div>
                 <textarea class="form-control" aria-label="With textarea" value={inputText} onChange={e=>setInputText(e.target.value)}></textarea>
                 <button type="button" class="btn btn-success ml-3" onClick={submitTodoHandler}>KAYDET</button>
            </div>
        </form> 
        
      </div>
      </div>
      </div>
    </div>
    
  );
 
}

export default Form
