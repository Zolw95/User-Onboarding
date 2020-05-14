import React from 'react';
import UserrList from '../UserList.css';


const UsersList = (props) => {
    return (
        <div className="user-list">
            <table>
                <tbody></tbody>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                <React.Fragment>
                <tr>
                    {props.users.map(user => <td>{user.name}</td>)}
                    {props.users.map(user => <td>{user.email}</td>)}
                    {props.users.map(user => <td>{user.password}</td>)}
                </tr>
                </React.Fragment>
            </table>
        </div>
    )
}

export default UsersList;