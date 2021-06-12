import styled from "styled-components/macro";

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const ProductsContainer2 = styled.div`
  vertical-align: middle;
  justify: center;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: black;
`;

export const ProductsContainer3 = styled.div`
  vertical-align: middle;
  justify: center;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: black;
  color: white;
`;

export const TextWrapper = styled.div`
  color: white;
`;

export const TextWrapper2 = styled.div`
  color: black;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard2 = styled.div`
  justify: center;
  justify-content: center;
  align-items: center;
  background: #ffd100;
  margin: 1rem 2rem;
  line-height: 2;
  width: 300px; ;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #e31837;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductsHeading2 = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: white;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductInfo2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const FormContainer = styled.div`
  color: black;
`;

export const ProductPrice3 = styled.p`
  justify: left;
  justify-content: left;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: bold;
`;

export const ProductPrice2 = styled.p`
  justify: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
