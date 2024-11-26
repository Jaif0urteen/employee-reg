import React, { useState } from 'react';

const EmployeeForm = ({ addEmployee }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    joinDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.contact && formData.joinDate) {
      addEmployee(formData);
      setFormData({ name: '', email: '', contact: '', joinDate: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-5 rounded shadow-md mb-5">
      <h2 className="text-lg font-bold mb-4">Add New Employee</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="p-2 border rounded "
          style={{padding:"10px", marginRight:"10px"}}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border rounded"
          style={{padding:"10px", marginRight:"10px"}}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          className="p-2 border rounded"
          style={{padding:"10px", marginRight:"10px"}}
        />
        <input
          type="date"
          name="joinDate"
          value={formData.joinDate}
          onChange={handleChange}
          className="p-2 border rounded"
          style={{padding:"10px", marginRight:"10px"}}
        />
      <button type="submit" className="bg-blue-500 ms-3 text-white px-4 py-2 rounded mt-4">
        Add Employee
      </button>
      </div>
    </form>
  );
};

export default EmployeeForm;
