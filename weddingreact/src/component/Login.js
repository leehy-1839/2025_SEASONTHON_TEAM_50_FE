import React, { useState, useEffect } from 'react';
import './Login.css';
import Home from './component/Home.js';

const Login = () => {
  const [currentPage, setCurrentPage] = useState(0);


  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <LandingPage onGuestLogin={() => handleNext()} />;
      case 1:
        return <AccountInfoPage onNext={() => handleNext()} />;
      case 2:
        return <UserInfoPage onNext={() => handleNext()} />;
      case 3:
        return <AdditionalInfoPage onNext={() => handleNext()} />;
      case 4:
        return <FinalInfoPage onNext={() => handleNext()} />;
      case 5:
        return <div className="page-container">회원가입이 완료되었습니다!</div>;
      default:
        return <Home />;
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="signup-container">
      {currentPage > 0 && currentPage < 5 && (
        <button onClick={handleBack} className="back-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}
      {renderPage()}
    </div>
  );
};

// --- 페이지 컴포넌트 ---

const LandingPage = ({ onGuestLogin }) => {
  return (
    <div className="page-container">
      <div className="main-logo-area">
        <div className="main-image-placeholder"></div>
        <p>로망에서 현실로, 당신의 결혼 동반자</p>
        <h1>로망플래너</h1>
      </div>
      <div className="button-group">
        
        <button className="guest-login-button" onClick={onGuestLogin}>
          게스트로 로그인
        </button>
      </div>
    </div>
  );
};

const AccountInfoPage = ({ onNext }) => {
  return (
    <div className="page-container">
      <h2>회원가입 정보를 입력해주세요 :)</h2>
      <div className="input-group">
        <label>아이디</label>
        <input type="text" placeholder="아이디를 입력해주세요" />
      </div>
      <div className="input-group">
        <label>비밀번호</label>
        <input type="password" placeholder="비밀번호를 입력해주세요" />
      </div>
      <div className="input-group">
        <label>비밀번호 확인</label>
        <input type="password" placeholder="비밀번호를 동일하게 입력해주세요" />
      </div>
      <button className="next-button" onClick={onNext}>
        다음
      </button>
    </div>
  );
};

const UserInfoPage = ({ onNext }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const isFormValid = name && phone;

  return (
    <div className="page-container">
      <h2>추가 정보를 입력해 맞춤형 웨딩 관리를 받아보세요!</h2>
      <div className="role-selection">
        <button className="selected">로망러</button>
        <button>예비신랑</button>
        <button>예비신부</button>
      </div>
      <p className="role-description">
        로망러란? 당장 결혼 준비를 하지 않지만, 나의 결혼 로망을 그리며 인생 계획을 준비하기 위해
        로망플래너를 사용하는 분을 뜻해요
      </p>
      <div className="input-group">
        <label>이름</label>
        <input type="text" placeholder="김구름" />
      </div>
      <div className="input-group">
        <label>전화번호</label>
        <input type="tel" placeholder="01012345678" />
      </div>
      <button className="next-button" onClick={onNext}>
        다음
      </button>
    </div>
  );
};

const AdditionalInfoPage = ({ onNext }) => {
  const [weddingAge, setWeddingAge] = useState('');
  const [budget, setBudget] = useState('');

  const isFormValid = weddingAge !== '' && budget !== '';
  return (
    <div className="page-container">
      <h2>추가 정보를 입력해 맞춤형 웨딩 관리를 받아보세요!</h2>
      <div className="input-group">
        <label>결혼 희망시기</label>
        <select>
          <option>결혼 희망 나이를 선택해주세요</option>
        </select>
      </div>
      <div className="input-group">
        <label>희망 예산</label>
        <select>
          <option>결혼에 사용할 희망 예산을 선택해주세요</option>
        </select>
      </div>
      <button className="next-button" onClick={onNext}>
        다음
      </button>
    </div>
  );
};

const FinalInfoPage = ({ onNext }) => {
  const [weddingAge, setWeddingAge] = useState('');
  const [budget, setBudget] = useState('');


  const isFormValid = weddingAge !== '' && budget !== '';
  return (
    <div className="page-container">
      <h2>추가 정보를 입력해 맞춤형 웨딩 관리를 받아보세요!</h2>
      <div className="input-group">
        <label>예비 배우자 ID</label>
        <p>예비 배우자와 로망보드를 공유할 수 있어요</p>
        <div className="input-with-button">
          <input type="text" placeholder="예비 배우자 ID를 입력해주세요" />
          <button>인증하기</button>
        </div>
      </div>
      <div className="input-group">
        <label>결혼 희망 날짜</label>
        <select>
          <option>결혼 희망 날짜 또는 예정일을 선택해주세요</option>
        </select>
      </div>
      <div className="input-group">
        <label>희망 예산</label>
        <select>
          <option>결혼에 사용할 희망 예산을 선택해주세요</option>
        </select>
      </div>
      <button className="next-button" onClick={onNext}>
        다음
      </button>
    </div>
  );
};

const CompletePage = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // 2초 (2000ms) 후에 onComplete 함수 호출

    return () => clearTimeout(timer); // 컴포넌트가 unmount될 때 타이머 정리
  }, [onComplete]);

  return (
    <div className="page-container">
      회원가입이 완료되었습니다!
    </div>
  );
};

export default Login;