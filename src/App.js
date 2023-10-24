import "./index.css";
import Employee from "./Employee.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddEmployees from "./AddEmployees";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Employee 1",
      role: "CEO",
      img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Employee 2",
      role: "Accountant",
      img: "https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Employee 3",
      role: "Web Developer",
      img: "https://images.pexels.com/photos/4045762/pexels-photo-4045762.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Employee 4",
      role: "Data Analyst",
      img: "https://images.pexels.com/photos/14541178/pexels-photo-14541178.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      name: "Employee 5",
      role: "DevOps Engineer",
      img: "https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      name: "Employee 6",
      role: "Assistant",
      img: "https://images.pexels.com/photos/6205772/pexels-photo-6205772.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  }
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              setRole(e.target.value);
            }}
          />
          {console.log("welcome")}
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
          <AddEmployees newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees.</p>
      )}
    </div>
  );
}

export default App;
