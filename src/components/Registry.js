import React, { useState } from "react";
import data from "./constants/data";

const Registry = () => {
  const [employees, setEmployees] = useState(data);
  const [directReport, setDirectReport] = useState({
    name: "",
    department: "",
    role: "",
    manager: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !directReport.name ||
      !directReport.role ||
      !directReport.manager ||
      !directReport.department
    ) {
      alert("Please fill in all fields before adding an employee.");
      return;
    }

    const managingEmployee = employees.find(
      (employee) => employee.name === directReport.manager,
    );

    const newEmployee = {
      ...directReport,
      id: `ID${employees.length + 1}`,
    };

    if (managingEmployee) {
      const updatedEmployees = employees.map((employee) => {
        if (employee.id === managingEmployee.id) {
          return {
            ...employee,
            directReports: [...employee.directReports, newEmployee],
          };
        }
        return employee;
      });
      setEmployees(updatedEmployees);
    } else {
      setEmployees([...employees, newEmployee]);
    }

    setDirectReport({ name: "", department: "", role: "", manager: "" });
  };

  const deleteEmployee = (id) => {
    const filteredTopLevelEmployees = employees.filter(
      (employee) => employee.id !== id,
    );

    const updatedEmployees = filteredTopLevelEmployees.map((employee) => {
      return {
        ...employee,
        directReports: employee.directReports.filter(
          (report) => report.id !== id,
        ),
      };
    });

    setEmployees(updatedEmployees);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8">Employee Registry</h1>
      <form onSubmit={handleSubmit} className="p-6 mt-8">
        <h2 className="text-lg font-semibold mb-4">Add New Employee</h2>
        <div className="mb-4">
          <input
            type="text"
            id="name"
            value={directReport.name}
            onChange={(e) =>
              setDirectReport({ ...directReport, name: e.target.value })
            }
            placeholder="Enter name"
            className="w-1/4 px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="role"
            value={directReport.role}
            placeholder="Enter Employee Role"
            onChange={(e) =>
              setDirectReport({ ...directReport, role: e.target.value })
            }
            className="w-1/4 px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <select
            id="manager"
            value={directReport.manager}
            onChange={(e) =>
              setDirectReport({ ...directReport, manager: e.target.value })
            }
            className="w-1/4 px-3 py-2 border border-gray-300 rounded"
          >
            <option value="">Select Manager</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.name}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <select
            id="department"
            value={directReport.department}
            onChange={(e) =>
              setDirectReport({ ...directReport, department: e.target.value })
            }
            className="w-1/4 px-3 py-2 border border-gray-300 rounded"
          >
            <option value="">Select Department</option>
            <option value="Accounts">Accounts</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <button type="submit" className="w-1/4 py-2 bg-green-600 font-semibold">
          Add Employee
        </button>
      </form>
      {employees.map((employee) => (
        <div key={employee.id} className="p-4 mb-6">
          <p>Name: {employee.name}</p>
          <p>Role: {employee.role}</p>
          <p>Department: {employee.department}</p>
          <button
            onClick={() => deleteEmployee(employee.id)}
            className="mt-2 px-3 py-1 bg-red-500"
          >
            Delete
          </button>
          {employee.directReports && employee.directReports.length > 0 && (
            <div className="ml-6 mt-4">
              <h4 className="font-semibold">Direct Reports:</h4>
              {employee.directReports.map((report) => (
                <div key={report.id} className="p-3 mt-2">
                  <p>Name: {report.name}</p>
                  <p>Role: {report.role}</p>
                  <p>Department: {report.department}</p>
                  <p>Manager: {report.manager}</p>
                  <button
                    onClick={() => deleteEmployee(report.id)}
                    className="mt-2 px-3 py-1 bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Registry;
