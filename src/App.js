
import './App.css';
import Employee from './Employee.js';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? 
      <>
      <input type="text" onChange={(e) => {
        setRole(e.target.value);
      }}
      />
        {console.log('welcome')}
        <Employee name="Caleb" role="Intern" />
        <Employee name="Abby" role={role}/>
        <Employee name="John" />
      </>
      :
      <p>You cannot see the employees.</p>}
      
    </div>
  );
}

export default App;
