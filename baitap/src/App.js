import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import BaiTap1 from "./bai1/baitap1";
import BaiTap2 from "./bai2/baitap2";
import BaiTap3 from "./bai3/baitap3";
import BaiTap4 from "./bai4/baitap4";
import BaiTap5 from "./bai5/baitap5";

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>Bộ sưu tập 5 bài React</h1>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/bai1" style={{ marginRight: 10 }}>Bài 1</Link>
          <Link to="/bai2" style={{ marginRight: 10 }}>Bài 2</Link>
          <Link to="/bai3" style={{ marginRight: 10 }}>Bài 3</Link>
          <Link to="/bai4" style={{ marginRight: 10 }}>Bài 4</Link>
          <Link to="/bai5">Bài 5</Link>
        </nav>

        <Routes>
          <Route path="/bai1" element={<BaiTap1 />} />
          <Route path="/bai2" element={<BaiTap2 />} />
          <Route path="/bai3" element={<BaiTap3 />} />
          <Route path="/bai4" element={<BaiTap4 />} />
          <Route path="/bai5" element={<BaiTap5 />} />
          <Route path="/" element={<h2>Chọn bài để xem</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
