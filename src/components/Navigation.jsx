import styled from 'styled-components';

const Navigation = () => {
  return (
    <div>
      <Title>코멘토 쇼핑</Title>
    </div>
  );
};

export default Navigation;

const Title = styled.div`
  width: 95px;
  height: 26px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 26.06px;
  text-align: center;
  padding: 20px 151px 17px;
`;
