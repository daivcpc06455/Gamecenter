import React, { useState } from 'react';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '' });
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const addOrUpdateCustomer = () => {
    if (!newCustomer.name || !newCustomer.email || !newCustomer.phone) {
      alert('Vui lòng nhập đầy đủ thông tin.');
      return;
    }

    if (editIndex === -1) {
      // Thêm khách hàng mới
      setCustomers([...customers, { ...newCustomer, id: customers.length + 1 }]);
    } else {
      // Cập nhật khách hàng
      const updatedCustomers = customers.map((customer, index) =>
        index === editIndex ? { ...newCustomer, id: customer.id } : customer
      );
      setCustomers(updatedCustomers);
      setEditIndex(-1);
    }

    // Reset form
    setNewCustomer({ name: '', email: '', phone: '' });
  };

  const editCustomer = (index) => {
    setNewCustomer(customers[index]);
    setEditIndex(index);
  };

  const deleteCustomer = (index) => {
    const filteredCustomers = customers.filter((_, i) => i !== index);
    setCustomers(filteredCustomers);
  };

  return (
    <div className="container">
      <h1>Quản lý khách hàng</h1>
      <div>
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
          type="text"
          name="phone"
          value={newCustomer.phone}
          onChange={handleInputChange}
          placeholder="Số điện thoại"
        />
        <button onClick={addOrUpdateCustomer}>
          {editIndex === -1 ? 'Thêm khách hàng' : 'Cập nhật khách hàng'}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <button onClick={() => editCustomer(index)}>Sửa</button>
                <button onClick={() => deleteCustomer(index)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
