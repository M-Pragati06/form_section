import MultiStepForm from './pages/MultiStepForm';
import bgImage from './assets/bg.avif';
import React from 'react';

function App() {
  return (
    <div 
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" 
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover'
      }}
    >
      <MultiStepForm />
    </div>
  );
}

export default App;
