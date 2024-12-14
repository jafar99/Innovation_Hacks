import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-darkBg text-white p-5">
      <h1 className="text-2xl font-bold mb-6">Innovation Hacks</h1>
      <ul className="space-y-4">
        <li className="hover:text-primary cursor-pointer">Dashboard</li>
        <li className="hover:text-primary cursor-pointer">Playground</li>
        <li className="hover:text-primary cursor-pointer">Ingest</li>
        <li className="hover:text-primary cursor-pointer">Automations</li>
        <li className="hover:text-primary cursor-pointer">Integrations</li>
        <li className="hover:text-primary cursor-pointer">Messages</li>
      </ul>
      <div className="absolute bottom-10 left-5">
        <p className="text-textGray">Alex Johns</p>
        <p className="text-sm text-gray-500">alexjohns@gmail.com</p>
      </div>
    </div>
  );
};

export default Sidebar;
