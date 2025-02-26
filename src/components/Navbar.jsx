import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Link } from "react-router-dom";

const Navbar = () => {

    const [bgColor, setBgColor] = useState(false);

    function darkMode(e) {
        if (!(bgColor === true)) {
            document.querySelector('body').style.backgroundColor = 'black';
            document.querySelector('body').style.color = 'white';
            document.querySelector('#bg-Blue').style.transform = 'translateX(100%)';
            e.target.style.borderColor = 'white'
        } else {
            document.querySelector('body').style.backgroundColor = 'white';
            document.querySelector('body').style.color = 'black';
            document.querySelector('#bg-Blue').style.transform = 'translateX(0%)';
            e.target.style.borderColor = 'black'
        }
        setBgColor(!bgColor);
    }

    return (
        <>
            <div className={styles.navbar}>
                <nav>
                    <ul>
                        <li style={{ fontSize: "18px" }}>TextUtils</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                    <ul>
                        <div onClick={darkMode}>
                            <p id='bg-Blue'></p>
                        </div>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
