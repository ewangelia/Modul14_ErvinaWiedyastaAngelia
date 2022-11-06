import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookList from './components/BookList/BookList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
        <Route index element = {<BookList />} />
          <Route path = "about" element = {<About />} />
          <Route path = "contact" element = {<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>

);