import React from 'react';
import Sidebar from './components/Sidebar';
import AutomateDesign from './pages/AutomateDesign';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <AutomateDesign />
    </div>
  );
}

export default App;
