import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import ThemeButton from '../components/ThemeButton';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Navigation />
          <GrayLine height={'1px'} />
          <ThemeSection>
            <ThemeButton themeName={'#겨울방한템'} />
            <ThemeButton themeName={'#따순머그컵'} />
          </ThemeSection>
          <GrayLine height={'8px'} />
        </div>
        <ProductSection>
          <ProductCard
            name={'비숑 블랙 머그잔'}
            description={
              '쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다.'
            }
            thumbnail={
              'https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg'
            }
          />
          <ProductCard
            name={'가열 보온 티코스터 온열 원터치 컵 받침대'}
            description={
              '언제나 따뜻하게 최대 12시간 동안 최대 60도의 온도로 따듯한 차를 즐길 수 있습니다.'
            }
            thumbnail={
              'https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg'
            }
          />
          <ProductCard
            name={'벨루즈까사 솜사탕 파스텔 머그 4종 세트'}
            description={
              '솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그'
            }
            thumbnail={
              'https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg'
            }
          />
        </ProductSection>
      </Container>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: fit-content;
  background-color: #9c9c9c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 390px;
  height: fit-content;
  background-color: white;
`;

const ThemeSection = styled.div`
  display: flex;
  gap: 12px;
  padding: 40px 24px;
`;

const GrayLine = styled.div`
  height: ${(props) => props.height};
  width: 100%;
  background: #eeeeee;
`;

const ProductSection = styled.div`
  padding: 43px 24px 85px;
  display: flex;
  flex-direction: column;
  gap: 43px;
  justify-content: center;
  align-items: center;
`;
