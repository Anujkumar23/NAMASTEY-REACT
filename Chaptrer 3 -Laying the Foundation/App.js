// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
import React from "react";
import  ReactDOM  from "react-dom/client";
import logo from "./logo.png";
import "./App.css"


// const heading1 =React.createElement("h1",{id:"heading1",},"h1")
// const heading2= React.createElement("h1",{id:"heading2",},"h1")
// const heading3= React.createElement("h1",{id:"heading3",},"h1")

// const header=React.createElement("div",{className:"title"},[heading1,heading2,heading3])



//create the same Element using Jsx
// const header= (
//     <div className="title">
//         <h1 key="heading1">h1</h1> 
//         <h1 key="heading2">h1</h1>
//         <h1 key="heading3">h1</h1>
//     </div>
// )


// Create a functional component of the same with JSX

// const Header=()=>{
//     return (
//         <div className="title">
//             <h1 key="h1" >h1</h1> 
//             <h1 key="h2">h1</h1>
//           <h1 key="h3">h1</h1>
//         </div>
//     )

// }

// Pass attribute into the tag in JSX

// const Header=()=>{
//     return (
//         <div className="title">
//             <h1 style={{color:"blue"}} key="h1" >h1</h1> 
//             <h1 style={{color:"yellow"}} key="h2">h1</h1>
//             <h1 style={{color:"green"}}   key="h3">h1</h1>
//             {AnotherComonent()} 
  
//         </div>
//     )

// }

//composition Of a Component(add component to another component)
// const  AnotherComonent=()=>{
//     return (
//         <h1 style={{color:"paleturquoise"}} key='h4' >Hi,i am another Component</h1>
//     )
// }


// {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.


// const TitleElementComponent=(
//     <h1>I am a TitleElementComponent </h1>
// )
// const  TitleFunctionalComponent=()=>{
//     return (
//         <h1>I am a TitleFunctionalComponent</h1>
//     )
// }
// const TitleComponentWithChildren=({children})=>{
//     return (
//         <>
//          <h1>Hello I am a TitleFunctionalComponentWithChildren</h1>
//         {children}
//         </>
//     )
       
// }

// const Header=()=>{
//     return(
//         <>
//         {TitleElementComponent}
//         <TitleFunctionalComponent/>
//         <TitleComponentWithChildren>
//         <AnotherComonent/>
//         </TitleComponentWithChildren>
//         </>
        

//     )
// }

// const Title=()=>{
//     return(
//         <a href="/">
//             <img src="logo.png" alt="logo" />
//         </a>
//     )
// }

// const SearchBar=()=>{
//     return(
//         <>
//         <input type="text" placeholder="search" />
//         <button >Search</button>
//         </>
  
//     )
// }
// const userIcon=()=>{
//     return 
// }

const Header=()=>{
    return (
        <>
        <header className="header">
        <div className="left">
            <img src={logo} width="20px" height="20px" alt="" />
        </div>
        <div className="center">
            <input type="text" placeholder="search" />
            <button>Search</button>
        </div>
        <div className="right">
        <span class="material-symbols-outlined">account_circle</span>
        </div>
        </header>
        
        </>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<Header/>);
