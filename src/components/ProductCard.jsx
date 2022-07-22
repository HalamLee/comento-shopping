import styled from 'styled-components';

const ProductCard = ({ name, description, thumbnail, onClick }) => {
  return (
    <div onClick={onClick}>
      <ProductImage src={thumbnail} />
      <Name>{name}</Name>
      <Desc>{description}</Desc>
    </div>
  );
};

export default ProductCard;

const ProductImage = styled.div`
  width: 341px;
  height: 204px;
  background: url(${(props) => props.src}) center/cover no-repeat;
`;

const Name = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -1%;
  margin: 12px 0;
`;

const Desc = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -1%;
`;
