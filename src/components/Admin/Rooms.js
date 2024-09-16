import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Form, InputGroup } from 'react-bootstrap'; 

const roomData = [
  { id: 1, name: 'Phòng 1', computers: 5, hours: '8 AM - 10 PM' },
  { id: 2, name: 'Phòng 2', computers: 5, hours: '9 AM - 9 PM' },
  { id: 3, name: 'Phòng 3', computers: 5, hours: '8 AM - 11 PM' },
  // Các phòng khác...
];

function Rooms() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRooms, setFilteredRooms] = useState(roomData);

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearchTerm(keyword);

    if (keyword === '') {
      setFilteredRooms(roomData);
    } else {
      const filtered = roomData.filter(
        (room) =>
          room.id.toString().includes(keyword) ||
          room.name.toLowerCase().includes(keyword) ||
          room.hours.toLowerCase().includes(keyword)
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
            placeholder="Tìm kiếm phòng theo số, tên, hoặc giờ hoạt động..."
            value={searchTerm}
            onChange={handleSearch}
            className="border-primary shadow-sm"
          />
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
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room, index) => (
              <tr key={room.id}>
                <td>{index + 1}</td>
                <td>{room.name}</td>
                <td>{room.computers}</td>
                <td>{room.hours}</td>
                <td>
                <Link to={`/admin/rooms/summary/${room.id}`} className="btn btn-info">
  Xem Chi Tiết
</Link>

                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                Không tìm thấy phòng nào
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Rooms;
