import React, { useState } from "react";

function CreateArea() {

  const [note,setNote]=useState({
   title:"",
    content:""
  })

  function handleChange(event){
    const {name,value}=event.target

    setNote((preValue)=>{
      return({
      ...preValue,
      [name]: name})
    })

  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange} 
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
