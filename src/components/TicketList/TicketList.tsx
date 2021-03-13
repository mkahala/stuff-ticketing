import React from 'react';
import './TicketList.scss';
import ProfilePic from '../../assets/images/profile-pic.jpg';

interface TicketProps {
    content?: string;
    imagePath?: string;
    isSnoozed?: boolean;
    isSelected?: boolean;
}

const SnoozedStatus = () => (
    <div className="Status-snoozed">
        {/*<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">*/}
        {/*    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z"/>*/}
        {/*</svg>*/}
    </div>
);

const Ticket = ({ content, imagePath, isSnoozed, isSelected }: TicketProps) => {
    const StatusIcon = () => {
        if (isSelected) {
            return null;
        }

        if (isSnoozed) {
            return <SnoozedStatus />;
        } else {
            return <div className={content ? "Ticket-status" : "Status-profile-pic" } />
        }
    };

    return (
        <div
            className="Ticket"
            style={{
                ...(imagePath && { marginBottom: '40px' } ),
                ...(isSelected && { backgroundColor: 'black' } )
            }}
        >
            {content ? content : <img src={imagePath} alt="profile-pic" className="Profile-pic" />}
            {<StatusIcon />}
        </div>
    );
};

const TicketList = () => {
    return (
        <div className="Tickets-container">
            <Ticket imagePath={ProfilePic} />
            <Ticket content="RM" isSelected />
            <Ticket content="SM" />
            <Ticket content="UR" />
            <div className="Ticket-sep" />
            <Ticket content="UR" isSnoozed />
        </div>
    );
};

export default TicketList;
