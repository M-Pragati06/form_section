import MultiStepForm from './pages/MultiStepForm';
import bgImage from './assets/bg.avif';
import React from 'react';

function App() {
  return (
    // This is the main App component that renders the MultiStepForm component.
    <div 
      className="py-12 px-4 sm:px-6 lg:px-8" 
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <MultiStepForm />
    </div>
  );
}

export default App;