import React, { useState, useEffect } from 'react';
import "bootstrap-css-only/css/bootstrap.min.css";
import axios from 'axios';
import EmployeeHeader from './emp-header'

const Employee = () => {
	
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
	  const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
	  setUsers(response.data);
  };
  
  const styles = {
	layout : {padding: '20px'}
  }
  
  useEffect( () => { 
	document.title = 'Employees Page'
	fetchUsers(users) 
  }, [ users ] );
  return (
    <div style={styles.layout}>
      <table className="table" style={{width: '40%'}}>
		<tbody>
			<EmployeeHeader />
			{users.map( user => {
				return(<tr key={user.id}>
					<td>{user.name}</td>
					<td>{user.username}</td>
					<td>{user.email}</td>
				</tr>)
			})}
		</tbody>
	  </table>
    </div>
  );
};

export default Employee;
