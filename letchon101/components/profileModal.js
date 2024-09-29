import React from 'react';

const ProfileModal = ({ showModal, closeModal, handleAddAccount }) => {
  const initialFormData = {
    name: '',
    phone: '',
    address: '',
    streetName: '',       
    houseNumber: '',      
    postalCode: '8000',   
    city: 'Davao City',   
  };

  const [formData, setFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddAccount(formData);
    closeModal();
  };

  // Function to clear the form data
  const handleClear = () => {
    setFormData(initialFormData); // Reset the form data back to the initial state
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white p-5 rounded-lg shadow-2xl w-[90%] md:w-[800px] md:h-auto transition-transform transform">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Add Account</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700 text-lg font-medium" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700 text-lg font-medium" htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700 text-lg font-medium" htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                placeholder="Enter your address"
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700 text-lg font-medium" htmlFor="streetName">Street Name House Number</label>
              <input
                type="text"
                id="streetName"
                name="streetName"
                value={formData.streetName}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                placeholder="Enter your street name and house number"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700 text-lg font-medium" htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                placeholder="Enter your postal code"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-700 text-lg font-medium" htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 w-full bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200"
                placeholder="Enter your city"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="md:col-span-2 flex justify-between mt-4">
            <button
              type="button"
              onClick={handleClear}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition duration-200"
            >
              Clear
            </button>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="mr-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded transition duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};    

export default ProfileModal;


/*

Lumpiang Shanghai
Fried Chicken"
Sweet & Sour Fish
Chicken Curry
Pork Adobo
Buttered Shrimp
Pork Afritada
Pancit Guisado
Pork Humba

TRIO SET
Viand Set - VIANDS Package
Set A - Lechon Belly Package
Set B - Lechon Belly Package
Set C - Lechon Belly Package
10 Viand Tray
8 Viand Tray





*/