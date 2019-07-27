import styled from "styled-components";
import styles from "../App.scss";

export default styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid ${styles.lightBlue};
  border-color: ${props => (props.cart ? styles.mainYellow : styles.lightBlue)};
  color: ${props => (props.cart ? styles.mainYellow : styles.lightBlue)};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: ${props =>
      props.cart ? styles.mainYellow : styles.lightBlue};
    color: ${styles.mainBlue};
  }
  &:focus {
    outline: none;
  }
`;
