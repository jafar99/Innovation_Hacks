import React, { useState } from 'react';

const AutomationStep = ({ number, title, description, showDetails, onAssistClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    verificationCode: '',
    document: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      document: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className="step-container p-4 border-b border-gray-700">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
        <button
          className="text-blue-500"
          onClick={() => onAssistClick(number)}
        >
          {showDetails ? 'Hide Details' : 'Assist'}
        </button>
      </div>

      {showDetails && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {number === 1 && (
            <>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </>
          )}

          {number === 2 && (
            <>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </>
          )}

          {number === 3 && (
            <>
              <input
                type="text"
                name="verificationCode"
                value={formData.verificationCode}
                onChange={handleInputChange}
                placeholder="Verification Code"
                className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </>
          )}

          {number === 4 && (
            <>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </>
          )}

          {number === 5 && (
            <div className="text-center">
              <p className="text-green-500">Account created successfully!</p>
            </div>
          )}

          {number !== 5 && (
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default AutomationStep;
