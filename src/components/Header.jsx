import React from 'react'

export default function Header() {
  const openSide=()=>{
    document.getElementById("side-bar").className="sidebar open"
  }
  const closeSide=()=>{
    document.getElementById("side-bar").className="sidebar"
  }
  return (
    <>
    <nav className="navbar">
      <button onClick={openSide} className="button2"><i className="bi bi-three-dots-vertical"></i>
      <aside className="sidebar " id="side-bar">
       <button onClick={closeSide} className="sidebar-close">x</button>
       <h2>Todo App</h2>
       </aside>
      </button>
      <h2>Todo App</h2>
    </nav>
   
 </>
  )
}
