import styled from "styled-components";
type ButtonProps = {
  BgColor: string;
  Color: string;
};

export const ButtonPage = styled.button<ButtonProps>`
  width: 9.3rem;
  height: 3.1rem;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 2.2rem;
  background: ${(props) => props.BgColor};
  border-radius: 0.6rem;
  text-align: center;
  margin-left: 3.1rem;
  margin-top: 2rem;
  color: ${(props) => props.Color};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
  :hover {
    background-color: #f5ca9c;
    color: #423b32;
    border: none;
  }

  @media (max-width: 1000px) {
    margin: 1rem auto;
    background-color: #fff;
    color: #423b32;
  }
`;
