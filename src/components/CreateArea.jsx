import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [isExpanded,setExpanded]= useState(false)

  const [note,setNote]=useState({
   title:"",
    content:""
  })

  function handleChange(event){
    const {name,value}=event.target

    setNote((preValue)=>{
      return({
      ...preValue,
      [name]: value})
      
    })
  }

  function noteSubmit(event){

    props.onAdd(note);
    event.preventDefault()
    setNote({
      title:"",
      content:""
    });
  }

  function expand(){
    setExpanded(true)
  }
  return (
    <div>
      <form>
      {
        isExpanded ?
      <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>:null
      }
        
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange} value={note.content}
          onClick={expand}
        />
        {isExpanded && <button onClick={noteSubmit}><AddIcon /></button>}
      </form>
    </div>
  );
}

export default CreateArea;
