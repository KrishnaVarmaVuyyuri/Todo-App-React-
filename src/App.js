import React from 'react';
import {useState} from 'react'
import './App.css';
function App() {
  let [data,setData]= useState([
    {
      no:0,
      task:'*** List of TODOs ***'
    }
  ])
  let idd = 1
  let [todo,updateTodo] = useState()

  let addTodo = ()=>{
    if(todo==='')
      {
        alert('Please write some task')
      }
    else{
      
        setData(
          [...data,{no:++idd,task:todo}]
        )
        updateTodo('')
        console.log(data)
    }
    
    
  }

  let deleteTodo = (no)=> {
    let upd = data.filter((n)=>{return no!==n.no})
    setData(upd)
  }

  return (
    
<div className="container mt-5 w-50" >
      <div className="input-group">
          <input type = 'text'  onChange={(e)=>{todo=e.target.value;updateTodo(todo);console.log(todo)}} value={todo} className='form-control' />
          <button className="btn btn-primary" onClick={()=>{
            addTodo() 
            
          }}>Push</button>



      </div>



      <div className='container mt-4 w-40' style={{background:'red'}}>
        <ul className='list-group '>
          
          {
            data.map((t)=>{return(
              <li style={{fontFamily:'cursive'}} key={t.no} className='list-group-item'><p>{t.task}</p><button className='btn btn-danger' onClick={()=>{deleteTodo(t.no)}}>Delete</button></li>
            )})
          }
              
          
        </ul>
      </div>
      
    </div>




    
  );
}

export default App;
