import { Button,Card } from "react-bootstrap"
import {Done,Delete} from "../js/actions/toDoActions"
import {useDispatch} from 'react-redux'
import EditTask from "./EditTask"

const Task=({task})=>{
    const dispatch=useDispatch()
    return (
        <div>
            
            <Card body style={{width:"50%",marginBottom:"1rem",marginLeft:"25%",marginTop:"2rem",boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px'}}>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between" }} >
                    <span style={{ textDecoration:task.isDone ? "line-through":null  ,marginLeft:'0%'}} >{task.text} </span>
                    <div >
                        <Button size="sm"  variant="outline-secondary" style={{marginLeft:"0.5em"}} onClick={()=>dispatch(Done(task.id))} >{task.isDone ?"❌":" ✔️"}</Button>
                
                        <EditTask  id={task.id}   />

                        <Button size="sm" variant="outline-secondary" style={{marginLeft:"0.5em",}} onClick={()=>dispatch(Delete(task.id))} >🗑️</Button>
                    </div>
                </div>
            </Card>


        </div>
    )
}

export default Task