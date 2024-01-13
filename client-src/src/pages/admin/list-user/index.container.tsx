import Table from 'react-bootstrap/Table';
import { listType } from './index.type';
import './style.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Button = React.lazy(() => import("../../../components/button"));

function ListUserComponentHelper({ list, handleSubmit }: listType) {
  const navigate = useNavigate()
  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-md-8"></div>
          <div className="col-md-4">
            <Button theme="outline-dark" handleSubmit={handleSubmit} title={'Add User'} />
          </div>
        </div>
      </div>
      <Table striped bordered hover className='table'>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {list && list.map((item: any) => <tr key={item._id}>
            <td >{item.firstName}</td>
            <td >{item.lastName}</td>
            <td >{item.email}</td>
            <td >{item.phone}</td>
            <td >{item.role}</td>
            <td className="edit" onClick={() => navigate(`/user/edit/${item._id}`)}>Edit</td>

          </tr>)}


        </tbody>
      </Table>
    </>

  );
}

export default ListUserComponentHelper;