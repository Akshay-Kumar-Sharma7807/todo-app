import React, { useState, useEffect } from 'react'

export default function Settigs() {
  const [retro, setRetro] = useState(JSON.parse(localStorage.getItem("retro")) || false);

  const toggleTheme = () => {
    setRetro((p) => !p);
    document.querySelector(".App").classList.toggle("modern");
  }

  useEffect(() => {
    localStorage.setItem("retro", retro);
  }, [retro])

  return (
    <div className="container">
      <ul className="list">
        <li><span>Retro Theme</span>
          <label className="switch">
            <input type="checkbox" onChange={toggleTheme} checked={retro} />
            <span className="slider round"></span>
          </label></li>
      </ul>
    </div>
  )
}
