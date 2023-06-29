import React from "react";

const date = new Date();
let year=date.getFullYear()

 function footer(){
    return <p>Copyright @ {year}</p>;
 }
 export default footer;