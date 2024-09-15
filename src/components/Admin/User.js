import React, { useState } from 'react';
import './CustomerManager.css'; // Kết nối file CSS

const CustomerManager = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', password: '' });
  const [editIndex, setEditIndex] = useState(-1);
  const [showForm, setShowForm] = useState(false); // State quản lý việc ẩn/hiện form

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const addOrUpdateCustomer = () => {
    if (!newCustomer.name || !newCustomer.email || !newCustomer.password) {
      alert('Vui lòng nhập đầy đủ thông tin.');
      return;
    }

    if (editIndex === -1) {
      // Thêm khách hàng mới
      setCustomers([...customers, { ...newCustomer, id: customers.length + 1 }]);
    } else {
      // Cập nhật thông tin khách hàng
      const updatedCustomers = customers.map((customer, index) =>
        index === editIndex ? { ...newCustomer, id: customer.id } : customer
      );
      setCustomers(updatedCustomers);
      setEditIndex(-1);
    }

    // Reset form và ẩn form sau khi thêm/cập nhật
    setNewCustomer({ name: '', email: '', password: '' });
    setShowForm(false);
  };

  const editCustomer = (index) => {
    setNewCustomer(customers[index]);
    setEditIndex(index);
    setShowForm(true); // Hiển thị form khi nhấn sửa
  };

  const deleteCustomer = (index) => {
    const filteredCustomers = customers.filter((_, i) => i !== index);
    setCustomers(filteredCustomers);
  };

  // Hàm để hiển thị mật khẩu dưới dạng ký tự *
  const maskPassword = (password) => {
    return '●'.repeat(password.length);
  };

  return (
    <div className="customer-manager-container">
      <h1>Quản lý khách hàng</h1>
      
      {/* Nút để hiện form thêm khách hàng */}
      {!showForm && (
        <button className="show-form-btn" onClick={() => setShowForm(true)}>
          Thêm khách hàng
        </button>
      )}

      {/* Form nhập liệu, chỉ hiển thị khi showForm = true */}
      {showForm && (
        <div className="input-form">
          <input
            type="text"
            name="name"
            value={newCustomer.name}
            onChange={handleInputChange}
            placeholder="Tên khách hàng"
          />
          <input
            type="email"
            name="email"
            value={newCustomer.email}
            onChange={handleInputChange}
            placeholder="Email khách hàng"
          />
          <input
            type="password"
            name="password"
            value={newCustomer.password}
            onChange={handleInputChange}
            placeholder="Mật khẩu"
          />
          <button onClick={addOrUpdateCustomer}>
            {editIndex === -1 ? 'Thêm khách hàng' : 'Cập nhật khách hàng'}
          </button>
        </div>
      )}

      {/* Bảng hiển thị danh sách khách hàng */}
      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Mật khẩu</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{maskPassword(customer.password)}</td>
              <td>
                <button className="edit-btn" onClick={() => editCustomer(index)}>Sửa</button>
                <button className="delete-btn" onClick={() => deleteCustomer(index)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerManager;
