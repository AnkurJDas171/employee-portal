import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom"

import './App.css';
import Dashboard from './pages/Dahsboard';
import Expense from './pages/Expense';
// import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import Home from './pages/Home';
import LeaveTracker from './pages/LeaveTracker';
import Menu from './components/ui/Menu';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import TimeTracker from './pages/TimeTracker';
import Task from './pages/Task';

function App() {
  const [tempMenuVisibleState, setTempMenuVisibleState] = useState<boolean>(false)


  return (
    <main className='h-screen'>
      <div className='main-container h-full bg-slate-100'>
        {/* <React.Suspense fallback={<Home />}> */}
        <Header changeMenuState={setTempMenuVisibleState} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expense" element={<Expense />} />
          <Route path="/leave-tracker" element={<LeaveTracker />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/task" element={<Task />} />
          <Route path="/time-tracker" element={<TimeTracker />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Menu isMenuVisible={tempMenuVisibleState} changeMenuState={setTempMenuVisibleState} />
        {/* </React.Suspense> */}
      </div>
    </main>
  );
}

export default App;
