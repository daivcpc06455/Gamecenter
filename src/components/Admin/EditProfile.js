import React, { useState } from 'react';

function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    // Thực hiện API call để cập nhật thông tin người dùng
    alert('Thông tin đã được cập nhật!');
  };

  return (
    <div className="container mt-5">
      <h2>Chỉnh Sửa Thông Tin</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group mb-3">
          <label>Tên:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Cập Nhật
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
