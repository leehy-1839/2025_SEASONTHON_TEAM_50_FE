import React, { useState, useEffect } from 'react';
import './Home.css'; 

const Login = () => {
  const [dDay, setDDay] = useState('');

  // 결혼 희망 날짜를 기준으로 D-Day를 계산하는 useEffect
  useEffect(() => {
    // 실제로는 로그인한 사용자의 데이터를 백엔드에서 가져와야 합니다.
    const weddingDate = new Date('2026-03-27'); // 예시 결혼 날짜
    const today = new Date();
    const differenceInTime = weddingDate.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    setDDay(differenceInDays);
  }, []);

  return (
    <div className="home-container">
      {/* 상단 헤더 영역 */}
      <header className="home-header">
        <h1 className="logo-text">로망플래너</h1>
        <div className="header-icons">
          <div className="icon-placeholder"></div>
          <div className="icon-placeholder"></div>
          <div className="icon-placeholder"></div>
        </div>
      </header>

      {/* D-Day 및 로망 요소 영역 */}
      <section className="main-info">
        <h2 className="d-day-text">내 웨딩까지 D-{dDay}일</h2>
        <p className="romang-text">오늘은 로망 [요소]를 둘러볼까요?</p>
      </section>

      {/* 메인 콘텐츠 섹션 */}
      <main className="content-sections">
        {/* 로망보드 */}
        <div className="content-box romang-board">
          <h3>로망보드</h3>
          <p>내 로망을 모아보고, <br />다른 사람들의 로망을 둘러보세요!</p>
        </div>
        {/* 로드맵 */}
        <div className="content-box roadmap-section">
          <h3>로드맵</h3>
          <div className="box-placeholder"></div>
        </div>
        {/* 웨딩준비 */}
        <div className="content-box wedding-prep-section">
          <h3>웨딩준비</h3>
          <div className="box-placeholder"></div>
        </div>
      </main>

      {/* 하단 내비게이션 바 */}
      <nav className="bottom-nav">
        <a href="#" className="nav-item active">
          {/* 홈 아이콘 SVG */}
          <span className="nav-text">홈</span>
        </a>
        <a href="#" className="nav-item">
          {/* 로망보드 아이콘 SVG */}
          <span className="nav-text">로망보드</span>
        </a>
        <a href="#" className="nav-item">
          {/* 로드맵 아이콘 SVG */}
          <span className="nav-text">로드맵</span>
        </a>
        <a href="#" className="nav-item">
          {/* 웨딩준비 아이콘 SVG */}
          <span className="nav-text">웨딩준비</span>
        </a>
        <a href="#" className="nav-item">
          {/* MY 아이콘 SVG */}
          <span className="nav-text">MY</span>
        </a>
      </nav>
    </div>
  );
};

export default Home;