// src/components/RoomSummary.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

// Dữ liệu phòng giả lập
const roomsData = [
  {
    id: 1,
    name: 'Phòng 1',
    playTime: "3 giờ",
    totalMoney: "1.500.000 VNĐ"
  },
  {
    id: 2,
    name: 'Phòng 2',
    playTime: "5 giờ",
    totalMoney: "2.000.000 VNĐ"
  },
  {
    id: 3,
    name: 'Phòng 3',
    playTime: "2 giờ",
    totalMoney: "1.200.000 VNĐ"
  }
];

function RoomSummary() {
  const { roomId } = useParams(); // Lấy roomId từ URL
  const room = roomsData.find((r) => r.id === parseInt(roomId));

  if (!room) {
    return <div>Phòng không tồn tại!</div>;
  }

  return (
    <div className="content-area">
      <h2>Chi Tiết Phòng: {room.name}</h2>
      <p><strong>Giờ chơi:</strong> {room.playTime}</p>
      <p><strong>Số tiền thu được:</strong> {room.totalMoney}</p>

      <Link to="/">
        <Button variant="secondary" className="mt-3">Quay Lại</Button>
      </Link>
    </div>
  );
}

export default RoomSummary;
