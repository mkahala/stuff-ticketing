import React from 'react';
import './ClassifyTicket.scss';
import DropDown from '../../assets/images/dropdown.png';

const ClassifyTicket = () => {
    return (
        <div className="Classify-container">
            <span className="Classify-title">Classify</span>
            <p>What's the user asking for?</p>
            <span className="Select-dropdown">
                Select
                <img src={DropDown} alt="dropdown" className="Dropdown-icon" />
            </span>
            <p>Task name (as shown to the user)</p>
            <input className="Classify-input" placeholder="Buy what?" />
            <p>(Characters left: 25)</p>
            <div className="Proceed-button">Proceed</div>
        </div>
    )
};

export default ClassifyTicket;

