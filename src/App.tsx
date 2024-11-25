import React from 'react';
import LoginForm from './components/LoginForm';
import SideActionPanel from './components/SideActionPanel';

function App() {
  return (
    <div className="h-screen flex flex-col lg:flex-row w-full  ">
      <div className="flex-1">
        <LoginForm />
      </div>
      <div className="bg-sign-up-bg px-20 ">
        <SideActionPanel />
      </div>
    </div>
  );
}

export default App;
