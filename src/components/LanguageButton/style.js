import styled from "styled-components";
import theme from "../../styles";
const {
  colours: { primary }
} = theme;

export const StyledLanguageButton = styled.button`
  color: ${primary};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 2.29px;
  ${props => (props.selected ? "opacity: 1" : "opacity: 0.5")};
  @media (min-width: 768px) {
    border: none;
    text-decoration: none;
    display: flex;
    background: none;
  }
`;
