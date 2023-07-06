import React from "react";
import "./style.css"
import { AiFillAlert } from "react-icons/ai";
const Introduction = () =>{
    return(
       <div>
         <h1 className="heading">What i learnt in React</h1>
        <p>React is a javascript library</p>
        <AiFillAlert/>
        <img className="image" src="https://res.cloudinary.com/djgzcohvp/image/upload/v1685637075/cld-sample-5.jpg"/>
       </div>
    )
}
export default Introduction