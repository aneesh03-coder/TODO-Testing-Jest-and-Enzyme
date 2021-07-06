import React from 'react';
import './App.css';
import ToDos from './ToDos'
import Input from "./Input"
import Congrats from "./Congrats"
import {useEffect} from "react";
import {getQuotations,getQuotation} from "./actions/index"


function App() {
  //TODO:get props from the shared state
    const listComplete=false;
    const todoList=[];
    const [quotation,setQuotation]=React.useState("");
  
    useEffect(async ()=>{
      const allQuotations= await getQuotations();
        setQuotation(getQuotation(allQuotations))
        
    },[])


  return (
    <div className="App" data-test="component-app">  
    <h1 style={{fontSize:80}}>To Do App</h1> 
      <h3>{quotation}</h3>   
      <Input />
      <Congrats listComplete={listComplete}/>
      <ToDos todoList={todoList} />
    </div>
  );
}

export default App;

// todoList={[
//   {todo:"Hello World",completed:false},
//   {todo:"New World",completed:false},
//   {todo:"Sad World",completed:true},
// ]}
