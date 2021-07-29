import { ADDTASK, DONE, DELETE,EDIT } from "../actionTypes/toDotype";

const initState={
   tasks: [{
    id:1,
    isDone:false,
    text:"learn html"

   } ,
   {
    id:2,
    isDone:false,
    text:"learn CSS"

   } 
]
}

const toDoReducer =(state=initState,action)=>{
    switch (action.type) {
        case ADDTASK:
            return {...state,tasks:[...state.tasks,action.payload]  }

        case DONE :
            return {...state,tasks:state.tasks.map(el=>el.id===action.payload? {...el,isDone:!el.isDone}:el)} 
            
        case DELETE : 
            return {...state,tasks:state.tasks.filter(el=>el.id!==action.payload)}

        case EDIT :
            return {...state,tasks:state.tasks.map(el=>el.id===action.payload.id ?{...el, text:action.payload.text} :el)}

    
        default: return state
    }
}

export default toDoReducer