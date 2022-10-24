import React from 'react';

import './style.css';


const Navigation = ({name, state, warning, alarm, running}) => {
    return (
        <>
            <li className=
            {`nav-item 
            && ${state === "warning" ? "item-warning"
                : state === "alarm" ? "item-alarm"
                : 'item-running' }`}
            >
                <img 
                src={`
                ${state === "warning" ? warning
                : state === "alarm" ? alarm
                : running }`}
                alt={`
                ${state === "warning" ? 'warning-icon'
                : state === "alarm" ? 'alarm-icon'
                : 'running' }`}
                className='nav-icon'
                />
                <p className='nav-text'>{name}</p>
                </li>
        </>
    )

}

export default Navigation;