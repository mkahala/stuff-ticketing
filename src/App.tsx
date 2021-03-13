import React from 'react';
import './App.scss';
import TicketList from './components/TicketList/TicketList';
import ClassifyTicket from './components/ClassifyTicket/ClassifyTicket';
import NewTask from './components/NewTask/NewTask';

function App() {
  return (
    <div className="Page-container">
        <TicketList />
        <ClassifyTicket />
        <NewTask />
    </div>
  );
}

export default App;
