// src/components/Rooms.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const roomData = [
  { id: 1, name: 'Phòng 1', computers: 5, hours: '8 AM - 10 PM' },
  { id: 2, name: 'Phòng 2', computers: 5, hours: '9 AM - 9 PM' },
  { id: 3, name: 'Phòng 3', computers: 5, hours: '8 AM - 11 PM' },
  { id: 4, name: 'Phòng 4', computers: 5, hours: '7 AM - 10 PM' },
  { id: 5, name: 'Phòng 5', computers: 5, hours: '10 AM - 10 PM' },
  { id: 1, name: 'Phòng 1', computers: 5, hours: '8 AM - 10 PM' },
  { id: 2, name: 'Phòng 2', computers: 5, hours: '9 AM - 9 PM' },
  { id: 3, name: 'Phòng 3', computers: 5, hours: '8 AM - 11 PM' },
  { id: 4, name: 'Phòng 4', computers: 5, hours: '7 AM - 10 PM' },
  { id: 5, name: 'Phòng 5', computers: 5, hours: '10 AM - 10 PM' }
];

function Rooms() {
  return (
    <div className="content-area">
      <h2>Danh Sách Phòng</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên Phòng</th>
            <th>Số Máy Tính</th>
            <th>Giờ Hoạt Động</th>
            <th>Chi Tiết</th>
          </tr>
        </thead>
        <tbody>
          {roomData.map((room, index) => (
            <tr key={room.id}>
              <td>{index + 1}</td>
              <td>{room.name}</td>
              <td>{room.computers}</td>
              <td>{room.hours}</td>
              <td>
                <Link to={`/rooms/${room.id}`} className="btn btn-info">
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

export default Rooms;
