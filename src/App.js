import React from 'react';
import HomeSection from './Components/Section/HomeSection';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "./Components/Assects/assect_styles.css";
import "./Components/Helpers/helper_style.css"

const App = () => {
  return (
    <div className='container-fluid container-lg'>
      <HomeSection />
    </div>
  )
}

export default App
