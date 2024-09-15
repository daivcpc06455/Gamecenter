import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Form, Button, InputGroup } from 'react-bootstrap';

const roomData = [
  { id: 1, name: 'Phòng 1', computers: 5, hours: '8 AM - 10 PM' },
  { id: 2, name: 'Phòng 2', computers: 5, hours: '9 AM - 9 PM' },
  { id: 3, name: 'Phòng 3', computers: 5, hours: '8 AM - 11 PM' },
  { id: 4, name: 'Phòng 4', computers: 5, hours: '7 AM - 10 PM' },
  { id: 5, name: 'Phòng 5', computers: 5, hours: '10 AM - 10 PM' },
  { id: 6, name: 'Phòng 6', computers: 5, hours: '9 AM - 9 PM' },
  { id: 7, name: 'Phòng 7', computers: 5, hours: '8 AM - 11 PM' },
  { id: 8, name: 'Phòng 8', computers: 5, hours: '7 AM - 10 PM' },
  { id: 9, name: 'Phòng 9', computers: 5, hours: '10 AM - 10 PM' }
];

function Rooms() {
  const [searchTerm, setSearchTerm] = useState(''); // State cho thanh tìm kiếm
  const [filteredRooms, setFilteredRooms] = useState(roomData); // State cho danh sách phòng sau khi lọc

  // Hàm xử lý tìm kiếm theo số phòng
  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearchTerm(keyword);

    if (keyword === '') {
      setFilteredRooms(roomData); // Nếu thanh tìm kiếm trống, hiển thị toàn bộ danh sách
    } else {
      // Lọc danh sách phòng dựa trên số phòng (id)
      const filtered = roomData.filter((room) =>
        room.id.toString().includes(keyword)
      );
      setFilteredRooms(filtered);
    }
  };

  return (
    <div className="content-area">
      <h2>Danh Sách Phòng</h2>

      {/* Thanh tìm kiếm */}
      <Form className="mb-4">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Tìm kiếm phòng..."
            value={searchTerm}
            onChange={handleSearch}
            className="border-primary shadow-sm"
          />
          <Button variant="primary" className="shadow-sm">
            Tìm kiếm
          </Button>
        </InputGroup>
      </Form>

      {/* Bảng danh sách phòng */}
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
          {filteredRooms.map((room, index) => (
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
