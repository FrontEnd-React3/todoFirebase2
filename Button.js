import styled, { css } from "styled-components";

const Button = styled.button`
  color: white;
  padding: 8px;
  border-radius: 4px;
  display: block;
  white-space: none;
  background: ${p => (p.secondary ? "black" : "pink")};
  ${p =>
    p.large
      ? css`
          background: orange;
          font-size: 20px;
        `
      : css`
          background: purple;
          font-size: 12px;
        `};
  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export default Button;
