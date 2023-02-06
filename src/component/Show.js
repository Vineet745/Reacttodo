import React from 'react'
import { useAlert } from 'react-alert';
import  Showcss  from "./Show.module.css";

const Show = (props) => {
    const alert = useAlert()

    const {tasks,settasks}= props;
    const deletetask =(i)=>{
        const copytask = [...tasks]
        copytask.splice(i,1);
        settasks(copytask)
        alert.show("Task deleted") 
      }
  

    let titlelist = <h1  >No task found</h1>
    if(tasks.length>0){
      titlelist = tasks.map((task,index)=>{
        return <div className={Showcss.boxdiv}>
          <div className={Showcss.flexbox}>
            <h5>{task.title}</h5>
            <p>{task.desc}</p>
          </div>
          <span className={Showcss.delete} onClick={(e)=>deletetask(index)} >❌</span>
        </div>
        
        
        
        // <li className={Showcss.lists} key={index}> </li>
      })

    }





  return (
    <div className={Showcss.headtitle}>
    <ol >{titlelist}</ol>
    </div>
  )
}

export default Show