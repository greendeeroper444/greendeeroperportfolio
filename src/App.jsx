import './App.css'
import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import { useState } from 'react';
import './helpers/HoverTree'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Sidebar, Sidelink } from './components';

function App() {
  const [showAbout, setShowAbout] = useState(false);

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };


  const handleAboutClick = () => {
    setShowAbout(!showAbout);
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='container-fluid p-0'>
      {/* <canvas id='canvas'></canvas> */}
      
      {/* only render sidebar when visible */}
      {
        sidebarVisible && (
          <div>
            <Sidebar closeSidebar={closeSidebar} />
          </div>
        )
      }
        
      
      <Navbar onAboutClick={handleAboutClick}  toggleSidebar={toggleSidebar} /> 
      <Sidelink />
      
      <Routes>
        <Route path='/' element={<HomePage showAbout={showAbout} />} />
      </Routes>

    </div>
  )
}

export default App
