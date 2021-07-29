import { useSelector } from "react-redux";
import Task from "./Task";


const TaskList=()=>{
    const tasks=useSelector(state=>state.toDoReducer.tasks)
    console.log(tasks)
    return (
        <div style={{display:"flex", flexDirection:"column" , justifyContent:"center" }}>
            {
                tasks.map(el=><Task task={el} key={el.id} />)
            }
        </div>
    )
}

export default TaskList