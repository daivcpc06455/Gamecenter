// src/components/RoomDetail.js

import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button, Table, Form } from 'react-bootstrap';

let roomsData = [
  {
    id: 1,
    name: 'Phòng 1',
    totalMachines: 5,
    machines: [true, false, true, true, false], // true: máy đang hoạt động, false: máy trống
    isClosed: false,
    description: 'Phòng 1 là phòng chơi game với cấu hình mạnh.'
  },
  {
    id: 2,
    name: 'Phòng 2',
    totalMachines: 4,
    machines: [false, false, false, false],
    isClosed: false,
    description: 'Phòng 2 là phòng học tập với máy tính văn phòng.'
  },
  {
    id: 3,
    name: 'Phòng 3',
    totalMachines: 3,
    machines: [true, true, true],
    isClosed: false,
    description: 'Phòng 3 là phòng VIP với đầy đủ tiện nghi.'
  }
];

function RoomDetail() {
  const { roomId } = useParams(); // Lấy roomId từ URL
  const navigate = useNavigate();  // Sử dụng để điều hướng sau khi xóa phòng
  const roomIndex = roomsData.findIndex((r) => r.id === parseInt(roomId));
  const [room, setRoom] = useState(roomsData[roomIndex]);
  const [isEditing, setIsEditing] = useState(false);

  if (!room) {
    return <div>Phòng không tồn tại!</div>;
  }

  // Hàm xử lý khi nhấn nút "Lưu" sau khi chỉnh sửa
  const handleSave = () => {
    roomsData[roomIndex] = room; // Cập nhật dữ liệu phòng trong danh sách
    setIsEditing(false);
  };

  // Hàm xử lý khi nhấn nút "Xóa Phòng"
  const handleDelete = () => {
    roomsData = roomsData.filter((r) => r.id !== room.id); // Xóa phòng khỏi danh sách
    navigate('/'); // Điều hướng về trang Dashboard sau khi xóa
  };

  // Hàm cập nhật dữ liệu khi người dùng chỉnh sửa
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoom({
      ...room,
      [name]: name === 'machines' ? value.split(',').map((v) => v === 'true') : value
    });
  };

  return (
    <div className="content-area">
      <h2>Chi Tiết Phòng: {room.name}</h2>

      {isEditing ? (
        <Form>
          <Form.Group>
            <Form.Label>Tên Phòng</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={room.name}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Số Máy Hoạt Động (Nhập giá trị 'true' hoặc 'false')</Form.Label>
            <Form.Control
              type="text"
              name="machines"
              value={room.machines.map((machine) => (machine ? 'true' : 'false')).join(',')}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Mô Tả</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={room.description}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSave} className="mt-3">
            Lưu
          </Button>
        </Form>
      ) : (
        <>
          <p>{room.description}</p>
          <Table bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Trạng Thái Máy</th>
              </tr>
            </thead>
            <tbody>
              {room.machines.map((machine, index) => (
                <tr key={index}>
                  <td>Máy {index + 1}</td>
                  <td>{machine ? 'Đang hoạt động' : 'Trống'}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Button variant="warning" onClick={() => setIsEditing(true)} className="mt-3">
            Sửa Thông Tin
          </Button>{' '}
          <Button variant="danger" onClick={handleDelete} className="mt-3">
            Xóa Phòng
          </Button>{' '}
        </>
      )}

      <Link to="/">
        <Button variant="secondary" className="mt-3">Quay Lại</Button>
      </Link>
    </div>
  );
}

export default RoomDetail;
