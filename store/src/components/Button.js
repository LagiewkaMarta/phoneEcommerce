import styled from "styled-components";
import styles from '../App.scss';

export default styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: .05rem solid ${styles.lightBlue};
  color: ${styles.lightBlue};
  border-radius: .5rem;
  padding: .2rem .5rem;
  cursor: pointer;
  margin: .2rem .5rem 0;
  transition: all .5s ease-in-out;
  &:hover {
    background-color: ${styles.lightBlue};
    color: ${styles.mainBlue}
  }
  &:focus {
    outline: none;
  }
`;