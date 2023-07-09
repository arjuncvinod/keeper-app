import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {

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

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title}/>
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange} value={note.content}
        />
        <button onClick={noteSubmit}><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
