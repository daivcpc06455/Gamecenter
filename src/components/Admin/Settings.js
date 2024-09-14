// src/components/Settings.js

import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Settings() {
  return (
    <div className="content-area">
      <h2>Cài Đặt</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Nhập email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control type="password" placeholder="Mật khẩu" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Nhớ tôi" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Lưu thay đổi
        </Button>
      </Form>
    </div>
  );
}

export default Settings;
