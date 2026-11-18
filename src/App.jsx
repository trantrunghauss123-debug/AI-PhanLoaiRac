import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImage = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="app-container">

      <header className="header">
        <div className="logo">♻️ AI Waste</div>
        <div>AI PHÂN LOẠI RÁC</div>
      </header>

      <main className="main-content">

        <h1 className="section-title">
          Phân loại rác thông minh
        </h1>

        <p className="section-description">
          Sử dụng trí tuệ nhân tạo để nhận diện và phân loại rác
        </p>

        <section className="card">
          <h2>Tải ảnh rác lên</h2>

          <p style={{ margin: '15px 0' }}>
            Chọn hình ảnh rác bạn muốn phân loại
          </p>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />

          {preview && (
            <div style={{ marginTop: 20 }}>
              <img
                src={preview}
                alt="Ảnh rác đã tải lên"
                style={{
                  width: '100%',
                  maxWidth: 350,
                  borderRadius: 12
                }}
              />
            </div>
          )}

          <div style={{ marginTop: 20 }}>
            <button
              className="btn-primary"
              disabled={!image}
              onClick={() =>
                alert('Bước tiếp theo sẽ kết nối Gemini AI!')
              }
            >
              Phân loại bằng AI
            </button>
          </div>
        </section>

        <section className="card">
          <h2>Kết quả phân loại</h2>
          <p style={{ marginTop: 15 }}>
            Kết quả nhận diện sẽ hiển thị tại đây.
          </p>
        </section>

      </main>
    </div>
  );
}

export default App;
