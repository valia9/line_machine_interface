import React from 'react';

import './style.css';
import data from '../../machinesData.json'
import logo from '../../img/logo.png'

import Navigation from '../Navigation';
import Overview from '../Overview';

import runningIcon from '../../img/running.svg'
import alarmIcon from '../../img/alarm.svg'
import warningIcon from '../../img/warning.svg'

import timeIcon from '../../img/time.svg'
import userIcon from '../../img/user.svg'

const Interface = () => {
    let today = new Date();

    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();

    let hh = today.getHours();
    let mt = today.getMinutes();

    today = dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + mt;

    return (
        <div className='container'>
            <section className="header-section">
                <ul className='header'>
                    <li className='header-half'>
                        <img src={logo} alt="Buhler_logo"/>
                    </li>
                <div className='header-half'>
                    <li className='header-item'>
                        <img src={timeIcon} alt='clock-icon' className='header-icon'/>
                        <p className='header-text'> {today}</p>
                        </li>
                    <li className='header-item'>
                    <img src={userIcon} alt='user-icon'className='header-icon'/>
                        <p className='header-text'> Operator</p>
                        </li>
                </div>
                </ul>
            </section>

            <section className="nav-section">
                <ul className='nav'>
                {
                data.map(item => 
                <Navigation 
                key={item.id}
                name={item.name}
                state={item.state}
                running={runningIcon}
                warning={warningIcon}
                alarm={alarmIcon}
                />
                )
                    }
                </ul> 
            </section>

            <section className='overview-section'>
            <hr />
                <ul className='overview'>
                {
                data.map(item => 
                <Overview 
                key={item.id}
                name={item.name}
                icon={item.icon}
                state={item.state}
                running={runningIcon}
                warning={warningIcon}
                alarm={alarmIcon}
                />
                )
                    }
                </ul> 
            </section>
        </div>
    )

}

export default Interface;