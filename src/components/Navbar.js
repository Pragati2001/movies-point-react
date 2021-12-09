import React from 'react'
import '../styles/Navbar.css';
import m1 from './m2.png';
export default function NavBar({setMovie,search}) {
    return (
        <div className="navbar">
            <img src={ m1 } alt="img" />
            <span className="title">Movie Point</span>
            <input type="text" placeholder="Enter movie name"
                onChange={
                    (e) => {
                        setMovie(e.target.value);
                    }
                }
                onKeyPress={search} />
            
        </div>
    )
}
