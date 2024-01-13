import Table from 'react-bootstrap/Table';
import {listType}  from './index.type';
import './style.css'
import { useNavigate } from 'react-router-dom';
function ListUserComponentHelper({list}: listType) {
  const navigate = useNavigate()
  return (
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
        {list && list.map((item:any) => <tr key={item._id}>
          <td >{item.firstName}</td>
          <td >{item.lastName}</td>
          <td >{item.email}</td>
          <td >{item.phone}</td>
          <td >{item.role}</td>
          <td  className="edit" onClick={()=>navigate(`/user/edit/${item._id}`)}>Edit</td>

        </tr>)}


      </tbody>
    </Table>
  );
}

export default ListUserComponentHelper;