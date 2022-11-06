import React from 'react';
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Welcome to Netlab Bookstore</h2><br />
                <p className='header-text fs-18 fw-3'>Netlab Bookstore merupakan toko buku yang memiliki berbagai macam buku yang dapat kamu cari!</p>
                <p className='header-text fs-18 fw-3'>Dapatkan buku Anda sekarang di Netlab Bookstore!</p>
            </div>
        </header>
    </div>
  )
}

export default Header