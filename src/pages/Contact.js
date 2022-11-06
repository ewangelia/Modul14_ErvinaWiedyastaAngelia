import React from 'react';
import "./Contact.css";
import contactImg from "../images/contact-img.jpg";

const Contact = () => {
  return (
    <section className='contact'>
      <div className='container'>
        <div className='section-title'>
          <h2>Contact</h2>
        </div>

        <div className='contact-content grid'>
          <div className='contact-img'>
            <img src = {contactImg} alt = "" />
          </div>
          <div className='contact-text'>
            <h2 className='contact-title fs-26 ls-1'>Contact</h2>
            <p className='fs-17'>Nama: Ervina Wiedyasta Angelia</p>
            <p className='fs-17'>Umur: 21 Tahun </p>
            <p className='fs-17'>Instagram: @ewangelia_ </p>
            <p className='fs-17'>No. Telp: 6281234567890 (Text Only) </p>
            <p className='fs-17'>email: angeeliaw@gmail.com</p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact