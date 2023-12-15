import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 300px;
  border: 2px solid black;
  padding: 0.75rem;
  gap: 0.5rem;

  &,
  & > img {
    border-radius: 8px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

const Description = styled.p`
  text-align: center;
`;

const Price = styled.p``;

function ProductCard({ product }) {
  const { id, name, description, price } = product;
  return (
    <Card>
      <img src="https://picsum.photos/280/280" />
      <StyledLink to={`${id}`}>
        <p>{name}</p>
      </StyledLink>
      <Description>{description}</Description>
      <Price>{price}$</Price>
    </Card>
  );
}

export default ProductCard;
