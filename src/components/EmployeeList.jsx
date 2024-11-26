import React from 'react';

const EmployeeTable = ({ employees, deleteEmployee, viewEmployeeDetails }) => {
  return (
    <div className="container mt-1">
      <h2 className="text-center mb-4">Employee List</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Join Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.contact}</td>
              <td>{employee.joinDate}</td>
              <td>
                <button
                  onClick={() => viewEmployeeDetails(employee.id)} // Pass employee id
                  className="btn btn-success btn-sm mr-2"
                >
                  View
                </button>
                <button
                  onClick={() => deleteEmployee(employee.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
