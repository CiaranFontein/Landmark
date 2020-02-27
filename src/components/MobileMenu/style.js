import styled from "styled-components";
import heroBanner from "../../images/heroBannerSmall.jpg";
import theme from "../../styles";
const {
  colours: { secondary, primary },
  layout: { flexBetween }
} = theme;

export const StyledMobileMenu = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  z-index: 4;
`;

export const Background = styled.div`
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20%;
  z-index: 3;
  height: 100vh;
  width: 100vw;
  top: 0px;
  left: 0px;
  background-image: url(${heroBanner});
`;

export const MenuItems = styled.ul`
  display: list-item;
  list-style: none;
  padding-left: 20px;
  font-family: HelveticaNeue-UL, Helvetica-Neue, Helvetica, Arial, sans-serif;
  padding-top: 70px;
`;

export const ListItem = styled.li`
  color: ${primary};
  margin-bottom: 10px;
  font-family: HelveticaNeue-UL, HelveticaNeue-Light, Helvetica, Arial,
    sans-serif;
  font-size: 1.5rem;
  letter-spacing: 2.5px;
  text-transform: none;
`;

export const ContactInfo = styled.div`
  padding-left: 20px;
  color: ${secondary};
`;

export const Address = styled.div`
  font-family: Helvetica-Neue, Helvetica, Arial, sans-serif;
  font-size: 0.7rem;
  letter-spacing: 3px;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const Underline = styled.div`
  position: absolute;
  top: 110px;
  left: 20px;
  height: 1px;
  width: 66px;
  opacity: 0.7;
  border-bottom: 1px solid ${primary};
`;

export const Email = styled.div`
  font-family: HelveticaNeue-Light, Helvetica, Arial, sans-serif;
  font-size: 0.7rem;
  letter-spacing: 2px;
  color: ${secondary};
  margin-bottom: 5px;
`;

export const Phone = styled.div`
  font-family: HelveticaNeue-Light, Helvetica, Arial, sans-serif;
  font-size: 0.7rem;
  letter-spacing: 1px;
  color: ${secondary};
  margin-bottom: 5px;
`;

export const Sponsors = styled.div`
  padding: 12px 20px;
  bottom: 0px;
  height: 80px;
  width: 70vw;
  ${flexBetween}
`;

export const SponsorImage = styled.img`
  height: 40px;
  width: 80px;
  object-fit: contain;
`;
