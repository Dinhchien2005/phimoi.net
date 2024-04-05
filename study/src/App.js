import React from "react";
import Nav from "./Component1/Nav";
import Comment from "./Component1/Comment";
import Title from "./Component1/Header/Index";
import Trending from "./Component1/Trending/Index";
import Content2 from "./Component1/SignIn/Signin";
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <div className="grid md:grid-cols-5">
      <Nav></Nav>
      <main className="md:col-span-4 bg-cyan-50 px-12 py-6">
        <Routes>
          {/* Chuyển hướng đến trang đăng nhập khi có đường dẫn "/login" */}
          <Route
            path="/login"
            element={
              <>
                <Content2 />
                {/* Nếu đang ở trang đăng nhập, không hiển thị các thành phần khác */}
              </>
            }
          />
          {/* Hiển thị trang chủ khi không có đường dẫn hoặc đường dẫn không khớp */}
          <Route
            path="/"
            element={
              <>
                <Comment />
                <Title />
                <Trending />
              </>
            }
          />
          {/* Chuyển hướng mặc định về trang chủ nếu có đường dẫn không khớp */}
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </main>
    </div>
  );
}
