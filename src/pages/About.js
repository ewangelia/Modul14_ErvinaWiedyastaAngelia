import React from 'react';
import "./About.css";
import aboutImg from "../images/about-img.jpg";
import {useState} from "react";

const About = () => {
  const [me, setMe] = useState({
    name:"Netlab Bookstore",
    obj:"online bookstore",
    adv:"Koleksi lengkap - 15 juta judul buku impor berkualitas yang selalu di-update dengan judul buku baru setiap bulannya, Dalam waktu 8-14 hari kerja buku yang dipesan akan tiba di alamat customer, Kurir lokal dengan nomor lacak sehingga customer tidak perlu khawatir akan buku hilang → zero missing books guarantee."
     
})
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Us</h2>
            <p className='fs-17'>{me.name} adalah {me.obj} yang melayani pecinta buku di Indonesia, Singapura dan Malaysia.</p>
            <p className='fs-17'>Sejak Juni 2222, {me.name} telah melayani puluhan ribu pesanan dan mengirim ke berbagai lokasi di Indonesia. Sebagai perusahaan berbasis lokal kelebihan kami adalah: </p>
            <p className='fs-17'>{me.adv}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About