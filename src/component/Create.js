import React, { useState } from 'react'
import { useAlert } from 'react-alert';
import  Css  from "./Create.module.css";
import { Fragment } from 'react';



const Create = (props) => {
    const alert = useAlert()

const{tasks,settasks}= props;
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")

    const submithandler = (e)=>{
        e.preventDefault()
        console.log({title,desc})
        settitle('')
        setdesc('')
    
        const task= {title,desc};
  if(!title.trim() || !desc.trim()>0){
  alert.error("no input field can't be empty")
  return;
  }

        settasks([...tasks,task])
        alert.success("Task created")
      }


  return (
    <Fragment >
      <div className={Css.Fragment}>
        <div className={Css.formmain}>
    <form className={Css.form} onSubmit={submithandler} >
      <input className={Css.input} onChange={(e)=>settitle(e.target.value)} type="text" placeholder="Title" value={title} />
      <input className={Css.input} onChange={(e)=>setdesc(e.target.value)} type="text" placeholder="Description" value={desc}/>
      <button className={Css.submitbutton}>Submit</button>
    </form>
    </div>
    </div>
    </Fragment>

  );
}

export default Create