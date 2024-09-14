// src/components/Sidebar.js

import React from 'react';
import { Nav, Accordion, Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaCog, FaWrench, FaDesktop, FaGamepad } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar bg-light vh-100 p-3">
      <h4 className="text-center">Quản Lý Phòng Net</h4>
      <hr />

      <Accordion defaultActiveKey="0" flush>
        {/* Mục Dashboard */}
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <FaTachometerAlt className="me-2" /> Bảng Điều Khiển
          </Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/" className="nav-link">
                Tổng Quan
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>

        {/* Mục Quản lý Phòng */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <FaDesktop className="me-2" /> Quản Lý Phòng
          </Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/rooms" className="nav-link">
                Danh Sách Phòng
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>

        {/* Mục Dịch Vụ */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <FaWrench className="me-2" /> Dịch Vụ
          </Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/services" className="nav-link">
                Danh Sách Dịch Vụ
              </Nav.Link>
              <Nav.Link as={Link} to="/services/new" className="nav-link">
                Thêm Dịch Vụ Mới
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>

        {/* Mục Cài Đặt */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <FaCog className="me-2" /> Cài Đặt
          </Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/settings" className="nav-link">
                Cấu Hình Hệ Thống
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Dropdown Menu Ví Dụ */}
      <Dropdown className="mt-4">
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          <FaGamepad className="me-2" /> Tùy Chọn Khác
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/option1">Tùy Chọn 1</Dropdown.Item>
          <Dropdown.Item as={Link} to="/option2">Tùy Chọn 2</Dropdown.Item>
          <Dropdown.Item as={Link} to="/option3">Tùy Chọn 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Sidebar;
