// src/components/Rooms.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const userData = [
 
];

function user() {
  return (
    <div className="content-area">
      <h2>Danh Sách Khách Hàng</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Khách Hàng</th>
            <th>Email</th>
            <th>Mật Khẩu</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((room, index) => (
            <tr key={room.id}>
              <td>{index + 1}</td>
              <td>{room.name}</td>
              <td>{room.computers}</td>
              <td>{room.hours}</td>
              <td>
                <Link to={`/users/${user.id}`} className="btn btn-info">
                  Xem Chi Tiết
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default user;
