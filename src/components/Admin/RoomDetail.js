import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button, Table, Form } from 'react-bootstrap';
import './RoomDetail.css';  // Nhập file CSS

let roomsData = [
  {
    id: 1,
    name: 'Phòng 1',
    totalMachines: 5,
    machines: [true, false, true, true, false],
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
  const { roomId } = useParams();
  const navigate = useNavigate();
  const roomIndex = roomsData.findIndex((r) => r.id === parseInt(roomId));
  const [room, setRoom] = useState(roomsData[roomIndex]);
  const [isEditing, setIsEditing] = useState(false);

  // Điều hướng nếu không tìm thấy phòng
  if (roomIndex === -1) {
    navigate('/admin/rooms');
    return null;
  }

  const handleSave = () => {
    roomsData[roomIndex] = room;  // Cập nhật lại roomsData
    setIsEditing(false);  // Tắt chế độ chỉnh sửa
  };

  const handleDelete = () => {
    roomsData = roomsData.filter((r) => r.id !== room.id);
    navigate('/admin/rooms');  // Điều hướng về trang danh sách phòng
  };

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
            <Form.Label>Số Máy Hoạt Động</Form.Label>
            {room.machines.map((machine, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                label={`Máy ${index + 1}`}
                checked={machine}
                onChange={(e) => {
                  const updatedMachines = [...room.machines];
                  updatedMachines[index] = e.target.checked;
                  setRoom({ ...room, machines: updatedMachines });
                }}
              />
            ))}
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

      <Link to="/admin/rooms">
        <Button variant="secondary" className="mt-3">Quay Lại</Button>
      </Link>
    </div>
  );
}

export default RoomDetail;
