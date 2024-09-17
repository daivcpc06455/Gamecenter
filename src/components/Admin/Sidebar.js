import React from 'react';
import { Nav, Accordion, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaCog, FaWrench, FaDesktop, FaGamepad } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
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
              <Nav.Link as={Link} to="/admin" className="nav-link">
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
              <Nav.Link as={Link} to="/admin/rooms" className="nav-link">
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
              <Nav.Link as={Link} to="/admin/services" className="nav-link">
                Danh Sách Dịch Vụ
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/services/new" className="nav-link">
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
              <Nav.Link as={Link} to="/admin/settings" className="nav-link">
                Cấu Hình Hệ Thống
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>

        {/* Mục Thống Kê Doanh Thu */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <FaCog className="me-2" /> Thống Kê Doanh Thu
          </Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/admin/revenue" className="nav-link">
                Doanh Số Thống Kê
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>

        {/* Mục Quản lý khách hàng */}
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <FaCog className="me-2" /> Quản Lý Khách Hàng
          </Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/admin/user" className="nav-link">
                Thông Tin Tài Khoản
              </Nav.Link>
              <Nav.Link as={Link} to="/admin/users-table" className="nav-link">
                Danh Sách Khách Hàng
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
          <Dropdown.Item as={Link} to="/admin/option1">Tùy Chọn 1</Dropdown.Item>
          <Dropdown.Item as={Link} to="/admin/option2">Tùy Chọn 2</Dropdown.Item>
          <Dropdown.Item as={Link} to="/admin/option3">Tùy Chọn 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Sidebar;
