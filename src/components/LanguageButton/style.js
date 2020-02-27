import styled from "styled-components";

export const StyledLanguageButton = styled.button`
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 2.29px;
  text-transform: uppercase;
  ${props => (props.selected ? "opacity: 1" : "opacity: 0.5")};
`;
