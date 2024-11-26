import React, { useState } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList'; // Assuming EmployeeTable is used here
import './App.css';

const App = () => {
  const [employees, setEmployees] = useState([]);

  // Add Employee
  const addEmployee = (employee) => {
    setEmployees([...employees, { id: Date.now(), ...employee }]);
  };

  // Delete Employee
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  // View Employee Details
  const viewEmployeeDetails = (id) => {
    const employee = employees.find((emp) => emp.id === id); // Find the employee by id
    if (employee) {
      alert(`Details:\n\nName: ${employee.name}\nEmail: ${employee.email}\nContact: ${employee.contact}\nJoin Date: ${employee.joinDate}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2">
      <h1 className="text-2xl font-bold text-center mb-1">Employee Management</h1>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList
        employees={employees}
        deleteEmployee={deleteEmployee}
        viewEmployeeDetails={viewEmployeeDetails}
      />
    </div>
  );
};

export default App;
