
import React, { useState } from 'react';
import './App.css';
import AboutPage from './components/AboutPage';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import User from "./components/User";

function App() {

  const [mode, setMode] = useState('light');


  const toggleModeHandel = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1c2b3a';
      document.body.style.color = 'white';
      showAlert('Dark mode enabeled', 'success');
      document.title = 'Dark mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode enabeled', 'success');
      document.title = 'Light mode';
    }
  }

  const [notify, setNotify] = useState(null);

  const showAlert = (message, type) => {
    setNotify({
      message: message,
      type: type
    });
    setTimeout(() => {
      setNotify(null);
    }, 1500)
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>
        <Navbar title='textUtils' aboutLink='about us' mode={mode} toggleMode={toggleModeHandel} />
        <Alert alert={notify} />
        <TextForm heading='Enter the text' mode={mode} showAlert={showAlert} />
      </>
    },
    {
      path: "/about",
      element: <>
        <Navbar title='textUtils' aboutLink='about us' mode={mode} toggleMode={toggleModeHandel} />
        <Alert alert={notify} />
        <AboutPage />
      </>
    },
    {
      path: "/user/:username",
      element: <>
        <Navbar title='textUtils' aboutLink='about us' mode={mode} toggleMode={toggleModeHandel} />
        <Alert alert={notify} />
        <User />
      </>
    }])
  return (
    <>
      <RouterProvider router={router} />
      {/* <Navbar title='textUtils' aboutLink='about us' mode={mode} toggleMode={toggleModeHandel} />
        <Alert alert={notify} />
        <TextForm heading='Enter the text' mode={mode} showAlert={showAlert} /> */}
    </>
  );
}

export default App;
