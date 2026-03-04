import "./styles/Menu.css";
import { useState } from "react";
import { NavLink } from 'react-router-dom';

export default function Menu() {

    const [toggle, setToggle] = useState(false);
    const handleToggleChange = () => {
        setToggle(!toggle);

    };
    if (toggle) {
        return (
            <div className="menu-open" >
                <div className="menu-list" onClick={handleToggleChange}>
                    <div className="menu">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <ul>
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink to='/events'><li>Events</li></NavLink>
                        <NavLink to='/team'><li>Team</li></NavLink>
                        <NavLink to='/contact'><li>Contact</li></NavLink>
                        <a href="/Rulebook.pdf">RuleBook</a>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="menu-bg">
                <div className="menu" onClick={handleToggleChange}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

        );
    }
}