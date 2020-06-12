import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
