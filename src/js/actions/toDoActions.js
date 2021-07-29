import { ADDTASK,DELETE,DONE, EDIT } from "../actionTypes/toDotype"

export const Addtask=(newTask)=>{
    return {
        type : ADDTASK,
        payload : newTask
    }
}

export const Done=(id)=>{
    return{
        type : DONE,
        payload : id
    }
}

export const Delete=(id)=>{
    return {
        type: DELETE,
        payload : id
    }
}

export const Edit=(id,text)=>{
    return {
        type : EDIT,
        payload : {id,text}
    }
}