import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function Header() {
  return (
    <header className="bg-primary text-white p-3 shadow-lg">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="mb-0">Five Star Gaming</h1>
        <div>
          <DropdownButton
            id="dropdown-basic-button"
            title="Tài khoản"
            variant="outline-light"
          >
            <Dropdown.Item as={Link} to="/login">
              Đăng Nhập
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/register">
              Đăng Ký
            </Dropdown.Item>
            <Dropdown.Divider /> {/* Dòng kẻ chia cách các mục */}
            <Dropdown.Item as={Link} to="/edit-profile">
              Chỉnh Sửa Thông Tin
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
