import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {

    const [show, handleShow] = useState(false); //all variables are assigned like this

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar); //cleaning

    }, [])

    return (
        //trick for appending classname using conditional statements here it is {if show is true append nav_black}
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">
                <img className="nav_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>


















        </div>
    )
}

export default Nav
