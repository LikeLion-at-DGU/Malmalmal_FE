import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Image = styled.img`
  max-width: 150px;
  max-height: 150px;
`;

export default function Hello({ showAge }) {
  const handleButtonClick = () => {
    console.log("버튼 확인");
    // 여기에 버튼을 클릭했을 때 수행할 동작을 추가할 수 있습니다.
  };

  return (
    <div>
      <h1>안녕하세요</h1>
      <h2>오늘 기분은 어떠신가요?</h2>
      <StyledButton onClick={handleButtonClick}>
        <Image src="/라이언.jpg" alt="버튼 이미지" />
      </StyledButton>
    </div>
  );
}
