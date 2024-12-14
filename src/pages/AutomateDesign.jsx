import React, { useState } from 'react';
import AutomationStep from '../components/AutomationStep';

const AutomateDesign = () => {
  const steps = [
    { number: 1, title: "Customer Information Collection", description: "User enters personal details (eg: name, email, phone number) and submits it" },
    { number: 2, title: "Account Setup", description: "User sets up credentials, output is account creation triggered after submission" },
    { number: 3, title: "Email Verification", description: "System sends a verification email to the user" },
    { number: 4, title: "Document Upload and Verification", description: "Documents are verified after user uploads and submits" },
    { number: 5, title: "Account Creation", description: "Account is created successfully and message is sent via email" }
  ];

  const [activeStep, setActiveStep] = useState(null); 

  const handleAssistClick = (stepNumber) => {
    setActiveStep(activeStep === stepNumber ? null : stepNumber); 
  };

  return (
    <div className="flex-1 bg-darkBg text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Customer Registration</h2>
      <div className="bg-cardBg rounded-lg overflow-hidden">
        {steps.map((step) => (
          <AutomationStep
            key={step.number}
            {...step}
            showDetails={activeStep === step.number}
            onAssistClick={handleAssistClick}
          />
        ))}
      </div>
    </div>
  );
};

export default AutomateDesign;
