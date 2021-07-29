import React, { useState } from 'react';
import { Navbar,Form,Button,FormControl,InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Addtask } from '../js/actions/toDoActions';



const AddTask=()=>{
    const [input,setInput]=useState('')
    const dispatch=useDispatch()
    return(
     <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',marginTop:"2rem"}} >
      
            <InputGroup className="mb-3"style={{width:"60%",alignSelf:"center",boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px"}}  >
                <FormControl
                placeholder="add a new task"
                aria-label="add a new task"
                aria-describedby="basic-addon2"
                onChange={(e)=>setInput(e.target.value)}
                
                />
                <Button variant="outline-secondary" id="button-addon2" onClick={()=>dispatch(Addtask({id:Math.random(), isDone:false,text:input})) }   >
                    ADD
                </Button>
            </InputGroup>



            
        </div>
    )

}

export default AddTask