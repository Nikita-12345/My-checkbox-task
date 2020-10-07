import React from 'react'

function Header() {
    return (
        <div className="bg-success">
            <span className="alignLeft">LOGO</span>
            <span className="alignRight">
            <button className="btn">Home</button>
            <button className="btn">My Portfolio</button>
            <button className="btn">Clients</button>
            <button className="btn">Get in touch</button>
            </span>
        </div>
    )
}

export default Header;
