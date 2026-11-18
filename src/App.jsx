import React, { useState } from 'react';
import {
  Recycle, Camera, Upload, History,
  LayoutDashboard, Leaf, Menu, X,
  LogIn, UserPlus, Trash2, ScanSearch
} from 'lucide-react';

import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [image, setImage] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn một file hình ảnh!');
      return;
    }

    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">
            <Recycle size={27} />
          </div>
          <span>Waste<span className="brand-blue">AI</span></span>
        </div>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <button onClick={() => setActivePage('home')}>
            Trang chủ
          </button>
          <button onClick={() => setActivePage('classify')}>
            Phân loại rác
          </button>
          <button onClick={() => setActivePage('history')}>
            Lịch sử
          </button>
          <button onClick={() => setActivePage('stats')}>
            Thống kê
          </button>
        </nav>

        <div className="auth-buttons">
          <button className="login-btn"
            onClick={() => setActivePage('login')}>
            Đăng nhập
          </button>
          <button className="register-btn"
            onClick={() => setActivePage('register')}>
            Đăng ký
          </button>
        </div>
      </header>

      <main>
        {activePage === 'home' && (
          <section className="hero">
            <div className="hero-content">
              <span className="eyebrow">
                <Leaf size={16} /> AI FOR A GREENER PLANET
              </span>

              <h1>
                Phân loại rác thông minh
                <span> cùng trí tuệ nhân tạo</span>
              </h1>

              <p>
                Chỉ cần chụp ảnh hoặc tải hình ảnh lên,
                WasteAI sẽ hỗ trợ nhận diện và hướng dẫn
                bạn phân loại rác đúng cách.
              </p>

              <button
                className="primary-btn"
                onClick={() => setActivePage('classify')}
              >
                <ScanSearch size={20} />
                Bắt đầu phân loại
              </button>

              <div className="hero-features">
                <span>✓ Nhận diện bằng AI</span>
                <span>✓ Lưu lịch sử</span>
                <span>✓ Dễ sử dụng</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-circle">
                <Recycle size={110} />
                <div className="floating-leaf">
                  <Leaf size={35} />
                </div>
              </div>
              <div className="visual-label">
                <span>♻</span> Hành động xanh, tương lai sạch
              </div>
            </div>
          </section>
        )}

        {activePage === 'classify' && (
          <section className="workspace">
            <div className="section-heading">
              <span className="eyebrow">WASTE RECOGNITION</span>
              <h1>Phân loại rác bằng AI</h1>
              <p>Tải ảnh lên để bắt đầu nhận diện.</p>
            </div>

            <div className="upload-panel">
              <div className="upload-icon">
                <Upload size={35} />
              </div>

              <h2>Tải hình ảnh rác lên</h2>
              <p>Chọn hình ảnh từ thiết bị của bạn.</p>

              <label className="primary-btn upload-button">
                <Upload size={19} />
                Chọn hình ảnh
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  hidden
                />
              </label>

              {image && (
                <div className="preview">
                  <img src={image} alt="Ảnh rác được tải lên" />
                  <p>Ảnh đã sẵn sàng để phân tích.</p>
                </div>
              )}

              <p className="upload-note">
                Hỗ trợ JPG, PNG, WEBP
              </p>
            </div>
          </section>
        )}

        {activePage === 'history' && (
          <section className="workspace">
            <div className="section-heading">
              <h1>Lịch sử phân loại</h1>
              <p>Các lần phân loại sẽ được hiển thị tại đây.</p>
            </div>
            <div className="empty-state">
              <History size={55} />
              <h2>Chưa có dữ liệu</h2>
              <p>Hãy thực hiện phân loại rác để lưu lịch sử.</p>
            </div>
          </section>
        )}

        {activePage === 'stats' && (
          <section className="workspace">
            <div className="section-heading">
              <h1>Thống kê phân loại</h1>
              <p>Tổng quan hoạt động phân loại rác của bạn.</p>
            </div>
            <div className="empty-state">
              <LayoutDashboard size={55} />
              <h2>Chưa có dữ liệu thống kê</h2>
            </div>
          </section>
        )}

        {(activePage === 'login' || activePage === 'register') && (
          <section className="workspace">
            <div className="auth-panel">
              <Recycle size={45} />
              <h1>
                {activePage === 'login'
                  ? 'Chào mừng trở lại!'
                  : 'Tạo tài khoản WasteAI'}
              </h1>
              <p>Hệ thống tài khoản sẽ được kết nối ở bước tiếp theo.</p>
              <button className="primary-btn"
                onClick={() => setActivePage(
                  activePage === 'login' ? 'register' : 'login'
                )}>
                {activePage === 'login'
                  ? 'Chưa có tài khoản? Đăng ký'
                  : 'Đã có tài khoản? Đăng nhập'}
              </button>
            </div>
          </section>
        )}
      </main>

      <footer>
        <div className="brand">
          <Recycle size={23} />
          <span>Waste<span className="brand-blue">AI</span></span>
        </div>
        <p>© 2026 WasteAI. Technology for a greener future.</p>
      </footer>
    </div>
  );
}

export default App;
