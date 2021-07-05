import React from 'react'
import PropTypes from 'prop-types'
import  "./ToDos.css"


function ToDos({todoList}) {
    return (
        <div data-test="component-toDos">
            <h1 data-test="toDos-title">Your To Do List</h1>
            <div data-test="toDos">
                {todoList && todoList.map(({todo,completed},index)=>{
                    return(
                        <div key={index} id={index} className="todo" data-test="todo">
                            <span data-test="title" className={!completed?'incomplete':'complete'}>{todo}</span>
                            <span data-test="individualToDoCompleteStatus" id={`todo-${index}`}
                                  >
                                  {completed == false && '✔' }
                            </span>
                            <span data-test="delete" id={`todo-delete-${index}`}
                                  >
                                  {completed ==false && '🧩' }
                                  
                            </span>
                        </div>
                       
                    )                   
                })}
            </div>
        </div>
    )
}

ToDos.propTypes={
    todoList: PropTypes.arrayOf(
        PropTypes.shape({
            todo:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        })
    ).isRequired
}

export default ToDos
