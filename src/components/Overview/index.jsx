import React from 'react';

import './style.css';

const Overview = ({name, icon, state, warning, alarm, running}) => {
    return (
        <>
        <li className=
        {`overview-item 
            && ${state === "warning" ? "item-warning"
                : state === "alarm" ? "item-alarm"
                : 'item-running' }`}
                >
            <div className='overview-item-content'>
                <img src={`
                ${state === "warning" ? warning
                : state === "alarm" ? alarm
                : running }`}
                alt={`
                ${state === "warning" ? 'warning-icon'
                : state === "alarm" ? 'alarm-icon'
                : 'running' }`}
                className='overview-state-icon'
                />
                <img 
                src={require(`../../img/${icon}`)} 
                alt='overview-item-icon' 
                className='overview-icon'
                style={{
                    filter: state === "running" ? 'invert(0)' : 'invert(1)'
                  }}/>
                <p className='overview-name'> {name}</p>
            </div>
        </li>
        </>
    )

}

export default Overview;