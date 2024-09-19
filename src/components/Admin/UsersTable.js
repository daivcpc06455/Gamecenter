import React, { useState, useEffect } from 'react';
import './CustomerUser.css';

const CustomerTable = () => {
  // Dữ liệu mẫu khách hàng với trạng thái hoạt động
  const initialCustomers = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@example.com', points: 100, isActive: true },
    { id: 2, name: 'Trần Thị B', email: 'tranthib@example.com', points: 250, isActive: false },
    { id: 3, name: 'Lê Văn C', email: 'levanc@example.com', points: 320, isActive: true },
  ];

  const [customers, setCustomers] = useState([]);

  // Khi trang được tải, dữ liệu khách hàng sẽ được thêm vào
  useEffect(() => {
    setCustomers(initialCustomers);
  }, []);

  return (
    <div className="customer-manager-container">
      <h1>Danh sách khách hàng</h1>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Tên khách hàng</th>
            <th>Email</th>
            <th>Điểm tích lũy</th>
            <th>Trạng thái hoạt động</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.points}</td>
              <td className={customer.isActive ? 'active' : 'inactive'}>
                {customer.isActive ? 'Hoạt động' : 'Không hoạt động'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
