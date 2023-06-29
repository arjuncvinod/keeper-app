import React from "react";

const date = new Date();
let year=date.getFullYear()

 function Footer(){
    return <p>{year}</p>;
 }
 export default Footer;