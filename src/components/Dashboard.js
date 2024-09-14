// src/components/Dashboard.js

import React, { useState } from 'react';
import { Card, Col, Row, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Dữ liệu phòng và thông tin giờ chơi, tiền
const initialRoomsData = [
  {
    id: 1,
    name: 'Phòng 1',
    totalMachines: 5,
    machines: [true, false, true, true, false], // true: máy đang hoạt động, false: máy trống
    isClosed: false,
    playTime: "3 giờ", // Giờ chơi
    totalMoney: "1.500.000 VNĐ" // Số tiền thu được
  },
  {
    id: 2,
    name: 'Phòng 2',
    totalMachines: 4,
    machines: [false, false, false, false],
    isClosed: false,
    playTime: "5 giờ",
    totalMoney: "2.000.000 VNĐ"
  },
  {
    id: 3,
    name: 'Phòng 3',
    totalMachines: 3,
    machines: [true, true, true],
    isClosed: false,
    playTime: "2 giờ",
    totalMoney: "1.200.000 VNĐ"
  },
  {
    id: 1,
    name: 'Phòng 4',
    totalMachines: 5,
    machines: [true, false, true, true, false], // true: máy đang hoạt động, false: máy trống
    isClosed: false,
    playTime: "3 giờ", // Giờ chơi
    totalMoney: "1.500.000 VNĐ" // Số tiền thu được
  },
  {
    id: 2,
    name: 'Phòng 5',
    totalMachines: 4,
    machines: [false, false, false, false],
    isClosed: false,
    playTime: "5 giờ",
    totalMoney: "2.000.000 VNĐ"
  },
  {
    id: 3,
    name: 'Phòng 6',
    totalMachines: 3,
    machines: [true, true, true],
    isClosed: false,
    playTime: "2 giờ",
    totalMoney: "1.200.000 VNĐ"
  }
];

function Dashboard() {
  const [roomsData] = useState(initialRoomsData);

  return (
    <div className="content-area">
      <h2>Bảng Điều Khiển</h2>
      <Row>
        {roomsData.map((room) => (
          <Col md={6} lg={4} key={room.id}>
            <Card className="mb-4">
              <Card.Header as="h5">
                {room.name} {room.isClosed && "(Đã đóng)"}
              </Card.Header>
              <Card.Body>
                {/* Thông tin về giờ chơi và số tiền */}
                <p><strong>Giờ chơi:</strong> {room.playTime}</p>
                <p><strong>Số tiền thu được:</strong> {room.totalMoney}</p>

                {/* Bảng trạng thái của các máy trong phòng */}
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
                        <td>{machine ? "Đang hoạt động" : "Trống"}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                {/* Nút xem chi tiết phòng, điều hướng đến trang RoomSummary */}
                <Link to={`/rooms/summary/${room.id}`}>
                  <Button variant="info" className="mt-3">Xem Chi Tiết</Button>
                </Link>

                {/* Nút đóng phòng */}
                {!room.isClosed && (
                  <Button
                    variant="danger"
                    className="mt-3"
                  >
                    Đóng Phòng
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Dashboard;
