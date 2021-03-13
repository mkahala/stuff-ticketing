import React from 'react';
import './NewTask.scss';
import ClockIcon from '../../assets/images/clock-icon.png';
import ArchiveIcon from '../../assets/images/archive.png';
import BlockedIcon from '../../assets/images/blocked.png';

const NewTask = () => {
    return (
        <div className="New-task-container">
            <div className="New-task-header">
                <span className="Header-title">New task</span>
                <span className="Header-timer">00:00</span>
                <img className="Header-icon" src={ClockIcon} alt="clock" />
                <img className="Header-icon" src={ArchiveIcon} alt="archive" />
            </div>
            <div className="New-message">{"I'd like to do something {first msg in a task}"}</div>
            <div className="Message-info">
                <div className="Message-dot" />
                User Name, 11:42 am [Via email]
            </div>
            <div className="Type-message">
                <img src={BlockedIcon} alt="blocked" className="Blocked-icon"/>
                Type a message
            </div>
        </div>
    )
};

export default NewTask;
