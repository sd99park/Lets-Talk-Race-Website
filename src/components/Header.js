import styled from "styled-components";
const Header = () => {
  return (
    <Container>
      <h1>This is the header</h1>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 72px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 999;
  position: fixed;
  align-items: center;
`;

export default Header;
