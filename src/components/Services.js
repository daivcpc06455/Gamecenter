// src/components/Services.js

import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Services() {
  return (
    <div className="content-area">
      <h2>Dịch Vụ</h2>
      <p>Chúng tôi cung cấp các dịch vụ sau:</p>
      <ListGroup>
        <ListGroup.Item>Sửa chữa máy tính.</ListGroup.Item>
        <ListGroup.Item>Bảo trì và lau dầu cho thiết bị.</ListGroup.Item>
        <ListGroup.Item>Đánh bóng và thay thế linh kiện.</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Services;
