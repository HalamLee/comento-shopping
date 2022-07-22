import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import ThemeButton from '../components/ThemeButton';
import styled from 'styled-components';
import { mockTheme1Produdcts, mockTheme2Produdcts } from '../data/mockData';

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
          {mockTheme1Produdcts.map((product) => (
            <ProductCard
              name={product.name}
              description={product.description}
              thumbnail={product.thumbnail}
            />
          ))}
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
