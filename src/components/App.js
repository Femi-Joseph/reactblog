import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddBlog from './AddBlog';
import BlogManagement from './BlogManagement';
import Header from './Header';
import Login from './Login';
import ViewIndividualData from './ViewIndividualData';
import '../css/styles.css';
import ContactUs from './ContactUs';
import Home from './Home';
import PrivateRouting from './PrivateRouting';
import Blogs from './Blogs';
import ViewBlog from './ViewBlog';

const App = () => {
  //setting initial value to session storage
  useEffect(() => {
    let auth = JSON.parse(sessionStorage.getItem('auth'));
    if (!auth) {
      auth = false;
      sessionStorage.setItem('auth', auth);
    }
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/view-blog/:blogId" element={<ViewBlog />} />
        <Route element={<PrivateRouting />}>
          <Route path="/blog-management" element={<BlogManagement />} />
        </Route>
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/edit/:id" element={<AddBlog />} />
        <Route path="/view/:viewId" element={<ViewIndividualData />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
