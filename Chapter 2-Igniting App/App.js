//  const heading=document.createElement("h1");
//  heading.textContent="hello javascript";
  
//  const root=document.getElementById("root");
//  root.appendChild(heading);

import React from "react"
import ReactDOM from 'react-dom';


const element=React.createElement("h1",{id:"title"},"hello react")
const element2=React.createElement("h2",{id:"title2"},"hello react+JS")

const div=React.createElement("div",{id:"container"},element,element2)
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(div);