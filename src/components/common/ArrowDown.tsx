'use client';

// components/ScrollToPositionButton.js
import React, { useState, useEffect } from "react";

const ScrollToPositionButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const maxVisiblePosition = 350; // 버튼이 사라질 위치 (픽셀 단위)
    if (window.scrollY > maxVisiblePosition) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  const scrollToPosition = () => {
    const desiredPosition = 1000; // 이동할 위치
    window.scrollTo({ top: desiredPosition, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToPosition}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          padding: "15px 15px",
          backgroundColor: "#FF3333",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          opacity: isVisible ? 1 : 0, // 투명도 조정
          transform: isVisible ? "scale(1)" : "scale(0.1)", // 크기 변화
          transition: "transform 1.5s ease, opacity 1.5s ease", // 트랜지션 효과 추가 (1.5초로 설정)
          pointerEvents: isVisible ? "auto" : "none", // 클릭 방지
        }}
      >
        ↓ 3D Modeling
      </button>
    )
  );
};

export default ScrollToPositionButton;