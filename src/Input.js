import React from 'react'

function Input({listComplete=false}) {
    const [toDo,setToDo]=React.useState("");

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
