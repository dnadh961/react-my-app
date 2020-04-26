import React, { Component } from 'react';
import "bootstrap-css-only/css/bootstrap.min.css";
import EmployeeHeader from './emp-header'

class Employee extends Component {
	
  state = { users: [] }
  
  componentDidMount() {
    document.title = 'Employees Page'
    const myReq = `https://jsonplaceholder.typicode.com/users`
    fetch(myReq)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            users : result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }
  
  render() {
	  return (
		<div style={{padding: '20px'}}>
		  <table className="table" style={{width: '40%'}}>
			<tbody>
				<EmployeeHeader />
				{this.state.users.map( user => {
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
  }
};

export default Employee;
