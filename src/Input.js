import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addToDo} from "./actions/index"

function Input() {
    const [toDo,setToDo]=React.useState("");
    const listComplete=useSelector(state=>state.listComplete)
    const dispatch=useDispatch();
    return (
        <div data-test="component-input">
    {!listComplete&&           
               ( <form>
                    <input type="text"
                    data-test="input-box"
                    placeholder="Enter To Do"
                    value={toDo}
                    onChange={(event)=>setToDo(event.target.value)}
                     />
                    <button 
                    data-test="submit-button"
                    onClick={(evt)=>{                        
                        evt.preventDefault()
                        dispatch(addToDo(toDo))
                        setToDo("")
                            }
                       }>
                        Submit
                    </button>
                </form>)}
            </div>
        )
    
    
}

export default Input
