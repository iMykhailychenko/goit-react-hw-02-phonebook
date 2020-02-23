import styled from "styled-components";

const PhoneWrapper = styled.div`
  position: relative;
  height: 610px;
  width: 300px;
  padding: 14px;
  padding-top: 40px;
  border: 14px solid #333536;
  border-radius: 38px;
  background: #232526;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 24px;
    width: 160px;
    background: #333536;
    border-radius: 0 0 16px 16px;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 138px;
    background: #aaa;
    border-radius: 20px;
  }
`;

export default PhoneWrapper;
