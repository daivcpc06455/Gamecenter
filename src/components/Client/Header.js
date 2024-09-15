import React from 'react';
import { Link } from 'react-router-dom';  // Sử dụng Link từ react-router-dom

function Header() {
  return (
    <header>
      <div className="header-top">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm..." />
        </div>
        <div className="user-info">
          <Link to="/account">Tài khoản</Link> {/* Dùng Link thay vì a */}
          <Link to="/cart">Giỏ hàng</Link>    {/* Dùng Link thay vì a */}
        </div>
      </div>
    </header>
  );
}

export default Header;
