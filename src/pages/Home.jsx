import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { mockTheme1Products, mockTheme2Products } from '../data/mockData';

import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import ThemeButton from '../components/ThemeButton';
import styled from 'styled-components';

const Home = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Products);
    } else if (themeId === 2) {
      setProducts(mockTheme2Products);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockTheme1Products);
    }, 1000);
  }, []);

  return (
    <Wrapper>
      <Container>
        <div>
          <Navigation />
          <GrayLine height={'1px'} />
          <ThemeSection>
            <ThemeButton
              themeName={'#겨울방한템'}
              onClick={() => onClickThemeButton(1)}
            />
            <ThemeButton
              themeName={'#여름더워요'}
              onClick={() => onClickThemeButton(2)}
            />
          </ThemeSection>
          <GrayLine height={'8px'} />
        </div>
        <ProductSection>
          {products ? (
            products.map((product) => (
              <ProductCard
                onClick={() => navigate(`product/${product.id}`)}
                key={product.id}
                name={product.name}
                description={product.description}
                thumbnail={product.thumbnail}
              />
            ))
          ) : (
            <div>테마를 선택해주세요.</div>
          )}
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
