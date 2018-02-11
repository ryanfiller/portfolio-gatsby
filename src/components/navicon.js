import React from 'react'

function toggleMobileNav() {
    document.getElementById("navicon").classList.toggle("open")
    document.getElementById("site").classList.toggle("open")
}

const Navicon = () => (
    <div className="navicon" id="navicon" 
    onClick={toggleMobileNav}>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
    </div>
)

export default Navicon
