import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import Login from './Components/Assects/Login';
import Register from './Components/Assects/Register';
import './Components/Assects/assect_styles.css';
import InstructionModal from './Components/Helpers/InstructionModal'; // Import the InstructionModal component
import './Components/Helpers/helper_style.css';
import FileSection from './Components/Section/FileSection';
import HomeSection from './Components/Section/HomeSection';
import PricingSection from './Components/Section/PriceSection';

const App = () => {
  const [showInstructionModal, setShowInstructionModal] = useState(true);

  useEffect(() => {
    // You can add any necessary logic here to control when to show or hide the instruction modal
    // For example, you can use local storage to remember if the user has already seen the modal
    const hasSeenInstruction = localStorage.getItem('hasSeenInstruction');
    if (hasSeenInstruction) {
      setShowInstructionModal(false);
    }
  }, []);

  const handleInstructionModalClose = () => {
    setShowInstructionModal(false);
    // Save in local storage to remember that the user has seen the modal
    localStorage.setItem('hasSeenInstruction', true);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/get_started" element={<Register />} index />
          <Route path="/get_started" element={<Login />} />
          <Route path="/" element={<HomeSection />} />
          <Route path="/price" element={<PricingSection />} />
          <Route path="/files" element={<FileSection />} />
        </Routes>
        {!showInstructionModal && (
          <InstructionModal onClose={handleInstructionModalClose} />
        )}
      </div>
    </Router>
  );
}

export default App;
