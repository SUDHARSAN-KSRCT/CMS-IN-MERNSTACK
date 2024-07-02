import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
function AdminHeader() {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  const handleLogout =()=>{
    localStorage.removeItem('token');
    navigate('/')
    toast.success("Admin Logout successfully!")
  }
  return (
    <>
    </>
  );
}

export default AdminHeader;
