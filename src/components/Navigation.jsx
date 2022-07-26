import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ isPreBtn }) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      {isPreBtn && (
        <PreBtn onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </PreBtn>
      )}
      <Title>코멘토 쇼핑</Title>
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled.div`
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const PreBtn = styled.div`
  position: absolute;
  left: 33px;
  font-size: 24px;
  cursor: pointer;
`;
const Title = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 26.06px;
`;
